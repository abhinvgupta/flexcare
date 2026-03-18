import {
  CONVERSATION_FLOWS,
  INFO_RESPONSES,
  ROOT_QUICK_REPLIES,
  SERVICE_AREA_CONFIG,
} from "./conversationConfig";
import { detectIntent } from "./intentDetection";

function createId(prefix = "msg") {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createMessage(sender, text, quickReplies = []) {
  return {
    id: createId(sender),
    sender,
    text,
    quickReplies,
  };
}

export function createInitialChatState() {
  return {
    currentIntent: null,
    currentStep: "welcome",
    collectedFields: {},
    messageHistory: [
      createMessage(
        "bot",
        "Hi, I'm the FlexCare assistant. How can I help you?",
        ROOT_QUICK_REPLIES
      ),
    ],
  };
}

function validateValue(type, value) {
  const normalizedValue = typeof value === "string" ? value.trim() : "";

  if (type === "phone") {
    return /^[0-9+\-\s()]{8,}$/.test(normalizedValue);
  }

  return normalizedValue.length > 0;
}

function getValidationMessage(type) {
  return type === "phone"
    ? "Please share a valid phone number so our team can reach you."
    : "Please add a little more detail so I can continue.";
}

function getFlowStep(flowKey, stepId) {
  return CONVERSATION_FLOWS[flowKey]?.steps.find((step) => step.id === stepId);
}

function getNextStep(flowKey, stepId) {
  const flow = CONVERSATION_FLOWS[flowKey];

  if (!flow) {
    return null;
  }

  const currentIndex = flow.steps.findIndex((step) => step.id === stepId);
  return flow.steps[currentIndex + 1] || null;
}

function normalizeArea(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function classifyServiceAreaInput(input) {
  const normalizedInput = normalizeArea(input);

  if (!normalizedInput) {
    return {
      status: "clarify",
    };
  }

  const isSupported = SERVICE_AREA_CONFIG.supportedRegions.some((region) =>
    normalizedInput.includes(region)
  );
  const isUnsupported = SERVICE_AREA_CONFIG.unsupportedRegions.some((region) =>
    normalizedInput.includes(region)
  );

  if (isSupported) {
    return { status: "supported" };
  }

  if (isUnsupported) {
    return { status: "unsupported" };
  }

  return { status: "clarify" };
}

function getServiceAreaResponse(status) {
  if (status === "supported") {
    return {
      text: SERVICE_AREA_CONFIG.supportedResponse,
      quickReplies: SERVICE_AREA_CONFIG.quickReplies,
    };
  }

  if (status === "unsupported") {
    return {
      text: SERVICE_AREA_CONFIG.unsupportedResponse,
      quickReplies: SERVICE_AREA_CONFIG.quickReplies,
    };
  }

  return {
    text: SERVICE_AREA_CONFIG.clarificationResponse,
    quickReplies: SERVICE_AREA_CONFIG.clarificationReplies,
  };
}

export function startFlow(state, flowKey) {
  const flow = CONVERSATION_FLOWS[flowKey];
  const firstStep = flow?.steps[0];

  if (!flow || !firstStep) {
    return state;
  }

  return {
    ...state,
    currentIntent: flowKey,
    currentStep: firstStep.id,
    collectedFields: {},
    messageHistory: [
      ...state.messageHistory,
      createMessage("bot", flow.intro),
      createMessage("bot", firstStep.prompt),
    ],
  };
}

export function answerInformationalIntent(state, intentKey) {
  const response = INFO_RESPONSES[intentKey] || INFO_RESPONSES.unknown;

  if (intentKey === "service_area") {
    return {
      ...state,
      currentIntent: "service_area",
      currentStep: "awaiting_area",
      messageHistory: [
        ...state.messageHistory,
        createMessage("bot", response.text),
        createMessage("bot", "Which area do you live in?"),
      ],
    };
  }

  return {
    ...state,
    currentIntent: intentKey === "unknown" ? null : intentKey,
    currentStep: intentKey === "unknown" ? "clarify" : "info",
    messageHistory: [
      ...state.messageHistory,
      createMessage("bot", response.text, response.quickReplies),
    ],
  };
}

export function resolveNextState(state, input) {
  const trimmedInput = input.trim();
  const nextHistory = [...state.messageHistory, createMessage("user", trimmedInput)];

  if (!trimmedInput) {
    return answerInformationalIntent({ ...state, messageHistory: nextHistory }, "unknown");
  }

  if (state.currentIntent && CONVERSATION_FLOWS[state.currentIntent]) {
    const currentStepConfig = getFlowStep(state.currentIntent, state.currentStep);

    if (!currentStepConfig) {
      return answerInformationalIntent({ ...state, messageHistory: nextHistory }, "unknown");
    }

    if (!validateValue(currentStepConfig.validate, trimmedInput)) {
      return {
        ...state,
        messageHistory: [
          ...nextHistory,
          createMessage("bot", getValidationMessage(currentStepConfig.validate)),
          createMessage("bot", currentStepConfig.prompt),
        ],
      };
    }

    const updatedFields = {
      ...state.collectedFields,
      [currentStepConfig.field]: trimmedInput,
    };
    const nextStep = getNextStep(state.currentIntent, state.currentStep);

    if (!nextStep) {
      return {
        ...state,
        currentStep: "submit",
        collectedFields: updatedFields,
        messageHistory: nextHistory,
      };
    }

    return {
      ...state,
      currentStep: nextStep.id,
      collectedFields: updatedFields,
      messageHistory: [...nextHistory, createMessage("bot", nextStep.prompt)],
    };
  }

  if (state.currentIntent === "service_area" && state.currentStep === "awaiting_area") {
    const classification = classifyServiceAreaInput(trimmedInput);
    const serviceAreaResponse = getServiceAreaResponse(classification.status);

    if (classification.status === "clarify") {
      return {
        ...state,
        currentIntent: "service_area",
        currentStep: "awaiting_area_city_confirmation",
        collectedFields: {
          ...state.collectedFields,
          serviceAreaInput: trimmedInput,
        },
        messageHistory: [
          ...nextHistory,
          createMessage(
            "bot",
            serviceAreaResponse.text,
            serviceAreaResponse.quickReplies
          ),
        ],
      };
    }

    return {
      currentIntent: null,
      currentStep: "welcome",
      collectedFields: state.collectedFields,
      messageHistory: [
        ...nextHistory,
        createMessage(
          "bot",
          serviceAreaResponse.text,
          serviceAreaResponse.quickReplies
        ),
      ],
    };
  }

  if (
    state.currentIntent === "service_area" &&
    state.currentStep === "awaiting_area_city_confirmation"
  ) {
    const classification = classifyServiceAreaInput(trimmedInput);
    const normalizedInput = normalizeArea(trimmedInput);
    let responseStatus = classification.status;

    if (responseStatus === "clarify") {
      if (normalizedInput === "another city") {
        responseStatus = "unsupported";
      } else {
        responseStatus = "supported";
      }
    }

    const serviceAreaResponse = getServiceAreaResponse(responseStatus);

    return {
      currentIntent: null,
      currentStep: "welcome",
      collectedFields: {},
      messageHistory: [
        ...nextHistory,
        createMessage(
          "bot",
          serviceAreaResponse.text,
          serviceAreaResponse.quickReplies
        ),
      ],
    };
  }

  const detectedIntent = detectIntent(trimmedInput);

  if (
    detectedIntent === "booking" ||
    detectedIntent === "support" ||
    detectedIntent === "grievance"
  ) {
    return startFlow({ ...state, messageHistory: nextHistory }, detectedIntent);
  }

  return answerInformationalIntent({ ...state, messageHistory: nextHistory }, detectedIntent);
}

export function createSubmissionPayload(intent, collectedFields) {
  if (intent === "booking") {
    return {
      name: collectedFields.name,
      phone: collectedFields.phone,
      location: collectedFields.location,
      message: ["Booking request from chatbot.", `Concern: ${collectedFields.concern}`].join(
        "\n"
      ),
    };
  }

  if (intent === "support") {
    return {
      name: collectedFields.name,
      phone: collectedFields.phone,
      location: "Not provided via chatbot",
      message: ["Support request from chatbot.", `Query: ${collectedFields.question}`].join(
        "\n"
      ),
    };
  }

  if (intent === "grievance") {
    return {
      name: collectedFields.name,
      phone: collectedFields.phone,
      location: "Not provided via chatbot",
      message: [
        "High-priority grievance from chatbot. Please review urgently.",
        `Details: ${collectedFields.grievanceDetails}`,
      ].join("\n"),
    };
  }

  return null;
}

export function createCompletionState(state, successMessage) {
  return {
    currentIntent: null,
    currentStep: "welcome",
    collectedFields: {},
    messageHistory: [
      ...state.messageHistory,
      createMessage("bot", successMessage, ROOT_QUICK_REPLIES),
    ],
  };
}

export function createFailureState(state, errorMessage) {
  return {
    ...state,
    messageHistory: [
      ...state.messageHistory,
      createMessage(
        "bot",
        errorMessage || "I could not submit that just now. Please try again or use the contact page.",
        ROOT_QUICK_REPLIES
      ),
    ],
  };
}
