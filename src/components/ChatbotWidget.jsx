import { useEffect, useRef, useState } from "react";
import { CONVERSATION_FLOWS } from "../chatbot/conversationConfig";
import {
  createCompletionState,
  createFailureState,
  createInitialChatState,
  createSubmissionPayload,
  resolveNextState,
} from "../chatbot/stateMachine";
import { submitContactInquiry } from "../lib/api";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="chatbot-icon">
      <path
        d="M12 3.75c4.97 0 9 3.47 9 7.75S16.97 19.25 12 19.25c-.93 0-1.83-.12-2.67-.34l-4.04 1.92a.75.75 0 0 1-1.05-.82l.65-3.37C3.71 15.24 3 13.42 3 11.5c0-4.28 4.03-7.75 9-7.75Zm-3.5 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="chatbot-icon">
      <path
        d="M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 0 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="chatbot-icon">
      <path
        d="M18.94 11a.75.75 0 0 0-.75.75 6.19 6.19 0 1 1-1.81-4.38l-1.52.06a.75.75 0 0 0 .06 1.5l3.34-.14a.75.75 0 0 0 .72-.78l-.14-3.34a.75.75 0 0 0-1.5.06l.07 1.68a7.69 7.69 0 1 0 2.53 5.34.75.75 0 0 0-.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function QuickReplies({ replies, onSelect }) {
  if (!replies?.length) {
    return null;
  }

  return (
    <div className="chatbot-quick-replies">
      {replies.map((reply) => (
        <button
          key={reply.value}
          type="button"
          className="chatbot-quick-reply"
          onClick={() => onSelect(reply.value)}
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState(createInitialChatState);
  const [draftMessage, setDraftMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messageHistory.length, isOpen]);

  async function processInput(input) {
    if (!input.trim() || isSubmitting) {
      return;
    }

    const nextState = resolveNextState(chatState, input);
    setChatState(nextState);
    setDraftMessage("");

    if (
      nextState.currentIntent &&
      CONVERSATION_FLOWS[nextState.currentIntent] &&
      nextState.currentStep === "submit"
    ) {
      const payload = createSubmissionPayload(
        nextState.currentIntent,
        nextState.collectedFields
      );

      if (!payload) {
        setChatState(
          createFailureState(
            nextState,
            "I could not prepare that request. Please try again."
          )
        );
        return;
      }

      try {
        setIsSubmitting(true);
        await submitContactInquiry(payload);
        setChatState(
          createCompletionState(
            nextState,
            CONVERSATION_FLOWS[nextState.currentIntent].completion
          )
        );
      } catch (error) {
        setChatState(createFailureState(nextState, error.message));
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    processInput(draftMessage);
  }

  function handleRefreshChat() {
    setChatState(createInitialChatState());
    setDraftMessage("");
    setIsSubmitting(false);
  }

  const lastQuickReplies = [...chatState.messageHistory]
    .reverse()
    .find(
      (message) => message.sender === "bot" && message.quickReplies?.length
    )?.quickReplies;

  return (
    <div className="chatbot-shell">
      {isOpen ? (
        <section className="chatbot-panel" aria-label="FlexCare assistant">
          <header className="chatbot-header">
            <div>
              <p className="chatbot-eyebrow">FlexCare Assistant</p>
              <strong>Bookings, support and quick answers</strong>
            </div>
            <div className="chatbot-header-actions">
              <button
                type="button"
                className="chatbot-header-button"
                onClick={handleRefreshChat}
                aria-label="Restart chat"
                title="Restart chat"
              >
                <RefreshIcon />
              </button>
              <button
                type="button"
                className="chatbot-header-button chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                title="Close chat"
              >
                <CloseIcon />
              </button>
            </div>
          </header>

          <div className="chatbot-messages" aria-live="polite">
            {chatState.messageHistory.map((message) => (
              <div
                key={message.id}
                className={`chatbot-message chatbot-message--${message.sender}`}
              >
                <p>{message.text}</p>
                {message.sender === "bot" ? (
                  <QuickReplies
                    replies={message.quickReplies}
                    onSelect={processInput}
                  />
                ) : null}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {isSubmitting ? (
            <p className="chatbot-status">Submitting your request...</p>
          ) : (
            <p className="chatbot-hint">
              {lastQuickReplies?.length
                ? "Choose an option or type freely."
                : "Type your message and press send."}
            </p>
          )}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={draftMessage}
              onChange={(event) => setDraftMessage(event.target.value)}
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={isSubmitting}
            >
              Send
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="chatbot-launcher"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        title={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="chatbot-launcher-icon">
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </span>
      </button>
    </div>
  );
}

export default ChatbotWidget;
