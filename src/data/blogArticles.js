export const blogArticles = [
  {
    slug: "why-bed-rest-can-make-back-pain-worse",
    title: "Why Bed Rest Can Make Back Pain Worse",
    category: "Back Pain",
    image: "/blog1.png",
    imageAlt: "Physiotherapy session focused on safe back-pain recovery at home",
    imageFit: "contain",
    imagePosition: "center",
    imageBackground: "#eef6f8",
    intro:
      "For years, people believed that resting in bed was the best way to recover from back pain. However, modern research tells a very different story.",
    sections: [
      {
        paragraphs: [
          "Studies now show that prolonged bed rest can actually delay recovery. When you stay inactive, your muscles weaken, joints become stiff, and blood circulation decreases. All of this can make pain worse and prolong healing time.",
          "Movement, on the other hand, plays a key role in recovery. Gentle activity such as walking, stretching, and guided physiotherapy exercises helps maintain flexibility and improves blood flow to the affected area. This promotes faster healing and reduces stiffness.",
          "Of course, this does not mean pushing through severe pain or ignoring injuries. The goal is to stay active within safe limits and gradually increase movement under proper guidance.",
          "At FlexCare, our physiotherapists design personalized home-based plans that help you move safely and recover faster without risking further injury.",
        ],
      },
    ],
    takeaway:
      "The takeaway: Rest is important, but too much rest can slow you down. Smart movement is the real medicine.",
  },
  {
    slug: "is-there-really-a-perfect-posture",
    title: "Is There Really a “Perfect Posture”?",
    category: "Posture",
    image: "/blog2.png",
    imageAlt: "Physiotherapist guiding posture and movement awareness in a home setting",
    intro:
      "You’ve probably been told to sit straight countless times. But is there really such a thing as perfect posture?",
    sections: [
      {
        paragraphs: [
          "Recent research suggests that the idea of a single correct posture is outdated. There is no one ideal way to sit or stand that prevents pain for everyone.",
          "What actually matters more is how long you stay in one position. Even a perfect posture can cause discomfort if you hold it for hours without moving.",
          "The human body is designed for movement. Small changes in position, stretching, and regular breaks are far more important than maintaining a rigid posture all day.",
          "Instead of worrying about sitting perfectly, focus on habits that help you move more often and stay comfortable through the day.",
        ],
        list: [
          "Changing positions frequently",
          "Taking short movement breaks",
          "Keeping your body relaxed, not stiff",
        ],
      },
      {
        paragraphs: [
          "Physiotherapy can help you develop healthy movement habits that suit your body and lifestyle.",
        ],
      },
    ],
    takeaway:
      "The takeaway: The best posture is your next posture. Keep moving.",
  },
  {
    slug: "why-strength-training-is-essential-for-pain-relief",
    title: "Why Strength Training is Essential for Pain Relief",
    category: "Strength",
    image: "/blog3.png",
    imageAlt: "Patient performing guided strengthening exercises during physiotherapy",
    intro:
      "Many people think physiotherapy is only about stretching. In reality, strength training is one of the most powerful tools for pain relief.",
    sections: [
      {
        paragraphs: [
          "Research shows that strengthening muscles around joints improves stability, reduces strain, and prevents recurring injuries. Whether it’s back pain, knee pain, or shoulder issues, weak muscles are often a hidden cause.",
          "For example, stronger muscles support the body in practical ways across everyday movement.",
        ],
        list: [
          "Strong core muscles support the spine",
          "Strong leg muscles reduce pressure on knees",
          "Shoulder strength improves mobility and prevents stiffness",
        ],
      },
      {
        paragraphs: [
          "The key is doing the right exercises in the right way. Random workouts can sometimes worsen pain if not guided properly.",
          "A physiotherapist identifies weak areas and creates a targeted strengthening plan that gradually builds stability and confidence in movement.",
        ],
      },
    ],
    takeaway:
      "The takeaway: Strong muscles protect your body. Strength is therapy.",
  },
  {
    slug: "can-physiotherapy-help-avoid-surgery",
    title: "Can Physiotherapy Help Avoid Surgery?",
    category: "Rehabilitation",
    image: "/blog4.png",
    imageAlt: "Physiotherapist discussing structured rehabilitation options with a patient",
    intro:
      "One of the most common questions patients ask is: Do I need surgery?",
    sections: [
      {
        paragraphs: [
          "In many cases, the answer is no.",
          "Research shows that conditions like back pain, disc issues, and certain joint problems can often be managed effectively with physiotherapy. Structured exercise programs, manual therapy, and guided rehabilitation can significantly reduce pain and improve function.",
          "Surgery may still be necessary in some cases, especially when there is severe structural damage or nerve compression. However, physiotherapy is often recommended as the first line of treatment before considering surgical options.",
          "In fact, even when surgery is required, physiotherapy plays a critical role in both pre- and post-surgical recovery.",
        ],
      },
    ],
    takeaway:
      "The takeaway: Physiotherapy can often help you recover without surgery, and even when surgery is needed, it improves outcomes.",
  },
  {
    slug: "why-pain-doesnt-always-mean-damage",
    title: "Why Pain Doesn’t Always Mean Damage",
    category: "Pain Science",
    image: "/blog5.png",
    imageAlt: "Patient and physiotherapist working through a calm, guided recovery session",
    intro:
      "Pain can be scary. But here’s something surprising: pain does not always mean that something is seriously damaged.",
    sections: [
      {
        paragraphs: [
          "Modern pain science shows that pain is influenced by multiple factors, including stress, fear, sleep, and past experiences, not just physical injury.",
          "For example, the relationship between pain and damage is not always straightforward.",
        ],
        list: [
          "You can have pain without visible damage",
          "You can have damage like disc changes without pain",
        ],
      },
      {
        paragraphs: [
          "This means that recovery is not just about fixing tissues, but also about retraining how the body and brain respond to movement.",
          "Physiotherapy helps by gradually exposing the body to safe movement, reducing fear of activity, and building strength and confidence.",
          "Understanding pain can be the first step toward overcoming it.",
        ],
      },
    ],
    takeaway:
      "The takeaway: Pain is complex, but with the right approach, it can be managed and reduced effectively.",
  },
];

export function getBlogArticleBySlug(slug) {
  return blogArticles.find((article) => article.slug === slug);
}
