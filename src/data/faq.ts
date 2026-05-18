export type FaqQuestion = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  questions: FaqQuestion[];
};

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "general",
    title: "General Questions",
    questions: [
      {
        id: "what-is-qoves",
        question: "What is Qoves?",
        answer:
          "Qoves is the world's best platform to improve your looks and achieve a real facial transformation without surgery. We provide you, from the comfort of your home, with a personalized facial analysis and transformation plan based on over 2,000 academic studies.",
      },
      {
        id: "who-is-this-for",
        question: "Who is this for?",
        answer:
          "Qoves is for anyone who wants to understand their facial aesthetics and follow a science-backed plan to improve their appearance without surgery.",
      },
      {
        id: "how-does-it-work",
        question: "How does it work?",
        answer:
          "You upload photos, receive a detailed analysis of your facial features, and get a personalized protocol with clear steps to follow over time.",
      },
    ],
  },
  {
    id: "about-analysis",
    title: "About The Analysis",
    questions: [
      {
        id: "what-is-analyzed",
        question: "What does the analysis include?",
        answer:
          "We analyze over 160 aspects of your face, including proportions, symmetry, and feature-specific metrics, to build your personal aesthetic profile.",
      },
      {
        id: "how-long",
        question: "How long does it take?",
        answer:
          "Your analysis is typically delivered within a few days after you submit your photos, depending on current demand.",
      },
    ],
  },
  {
    id: "about-protocol",
    title: "About The Protocol",
    questions: [
      {
        id: "what-is-protocol",
        question: "What is the glow-up protocol?",
        answer:
          "Your protocol is a personalized plan of actionable steps—skincare, lifestyle, and grooming—prioritized for your features and goals.",
      },
      {
        id: "protocol-duration",
        question: "How long should I follow the protocol?",
        answer:
          "Most members follow their protocol for several months, with milestones to track progress and adjust recommendations over time.",
      },
    ],
  },
  {
    id: "experience",
    title: "Experience & Use",
    questions: [
      {
        id: "device-support",
        question: "Can I use Qoves on mobile?",
        answer:
          "Yes. You can upload photos, view your analysis, and follow your protocol from any modern phone, tablet, or desktop browser.",
      },
      {
        id: "support",
        question: "How do I get help if I'm stuck?",
        answer:
          "Use the chat box in the bottom right of the site or email us at hello@qoves.com and our team will assist you.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Subscription",
    questions: [
      {
        id: "pricing-plans",
        question: "What plans are available?",
        answer:
          "We offer flexible subscription options so you can access your analysis, protocol, and ongoing updates at a pace that suits you.",
      },
      {
        id: "cancel",
        question: "Can I cancel anytime?",
        answer:
          "Yes. You can manage or cancel your subscription from your account settings without hidden fees.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    questions: [
      {
        id: "photo-privacy",
        question: "What happens to my photos?",
        answer:
          "Your photos are stored securely and used only to generate your analysis. We never sell your data or share it with third parties for marketing.",
      },
      {
        id: "delete-data",
        question: "Can I delete my data?",
        answer:
          "Yes. You can request deletion of your account and associated data at any time by contacting hello@qoves.com.",
      },
    ],
  },
];
