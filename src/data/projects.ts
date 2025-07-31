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

 {
  title: "Weathora",
  description: "A responsive weather dashboard web app with real-time data, location detection, and city search",
  image: "weathora.png", // Make sure this image exists in your assets
  tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "OpenWeatherMap API", ],
  github: "https://github.com/ShivamShende2608/Weathora", // Replace if repo is private or under different name
  live: "https://weathora26.netlify.app/",
  details: {
    problem: "Lack of intuitive, fast, and visually appealing platforms to track live weather and forecasts by location",
    solution: "Built a modern weather app with geolocation, search, charting, and dark/light themes to deliver a seamless weather-check experience",
    features: [
      "Live weather data via OpenWeatherMap API",
      "Auto-location detection and geolocation-based weather display",
      "Hourly and 5-day forecast with interactive charts (Recharts)",
      "Search bar to check weather in any city",
      "Favorite cities list with quick access and removal",
      "Dark/light mode toggle using context and Tailwind CSS",
      "Fully responsive layout with mobile-first UI"
    ],
    impact: "Empowered users with fast, accurate, and visually engaging weather updates, improving usability over traditional weather sites or apps"
  }
},

{
  title: "AesthetIQ",
  description:
    "An AI-based image editor that allows users to enhance, adjust, and beautify their images through intuitive tools and automation.",
  image: "aesthetiq.png",
  tech: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "Convex"],
  github: "https://github.com/ShivamShende2608/AesthetIQ",
  live: "https://aesthet-iq-5yb4.vercel.app/",
  details: {
    problem:
      "Manual image editing can be time-consuming and overwhelming for users without design experience.",
    solution:
      "AesthetIQ simplifies image editing by offering easy-to-use tools like brightness, contrast, saturation, cropping, and filters — all in a clean web interface.",
    features: [
      "Adjust brightness, contrast, saturation, blur, and sharpness",
      "Crop and resize images directly in the browser",
      "Download edited images instantly",
      "Responsive and minimal UI built with Tailwind CSS",
    ],
    impact:
      "Helps casual users, students, and creators make fast and effective visual edits without needing heavy software like Photoshop.",
  },
}

  
];
