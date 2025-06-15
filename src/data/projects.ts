import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
  title: "SplitPalX",
  description:
    "A full-stack group expense splitter app built with Convex and Next.js, designed for real-time collaboration and seamless tracking.",
  image: "splitpal.png",
  tech: ["React.js", "JavaScript", "Tailwind CSS", "Convex", "Next.js"],
  github: "https://github.com/ShivamShende2608/SplitPalX",
  live: "https://splitpalx.vercel.app/",
  details: {
    problem:
      "Splitting group expenses manually often causes confusion and mismanagement.",
    solution:
      "Built a full-stack solution that allows users to split bills, track group activity, and settle balances in real-time.",
    features: [
      "Real-time updates using Convex backend",
      "Expense tracking and balance settlement",
      "Group-based permissions and secure user access",
      "Clean, responsive UI with Tailwind CSS",
    ],
    impact:
      "Simplifies group expense management for roommates, friends, and travel partners, making cost-sharing transparent and stress-free.",
  },
},

  {
  title: "BeastMode",
  description: "A smart workout generation app for all experience levels and environments",
  image: "beastmode.png", // Make sure to add this image in your assets
  tech: ["React.js", "TailwindCSS", "HTML"],
  github: "https://github.com/ShivamShende2608/BeastMode", // Replace with actual repo
  live: "https://beast-mode-six.vercel.app/", // Replace with actual live link
  details: {
    problem: "Lack of personalized, flexible workout plans for home and gym environments",
    solution: "Developed a rule-based smart workout generator that adapts to user experience and available equipment",
    features: [
      "Dynamic workout generation",
      "Reusable and scalable component architecture",
      "Clean UI with TailwindCSS",
      "Responsive across devices"
    ],
    impact: "Improved user consistency and reduced workout planning time significantly"
  }
},
  {
  title: "Clynic",
  description: "A responsive medical chatbot web app for basic health guidance",
  image: "clynic.png", // Make sure this image exists in your assets
  tech: ["Python", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/ShivamShende2608/Clynic", // Replace with actual GitHub repo if available
  live: "https://clynic-1.onrender.com/", // Replace with actual live link if deployed
  details: {
    problem: "Lack of accessible and responsive basic medical guidance for non-emergency cases",
    solution: "Built a conversational chatbot interface to assist users with general health queries",
    features: [
      "Interactive chat-based interface for health guidance",
      "Python backend with intelligent response logic",
      "Responsive front-end built with vanilla JS, HTML, and CSS",
      "Deployed on Render with fast loading and async handling"
    ],
    impact: "Enabled users to get instant basic medical support, reducing unnecessary clinic visits"
  }
},
  
];
