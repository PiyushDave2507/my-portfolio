export interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "To-Do-List",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    description: "Used JavaScript to implement basic data structures and simulate a game using the terminal.",
    image: "./images/to-do-list.png",
    github:" https://github.com/PiyushDave2507/to-do-list", 
  },
  {
    title: "House-price-prediction",
    tags: ["HTML", "Python", "Jupiter Notebook"],
    description: "Built a house price prediction app using machine learning to estimate property values based on key features.",
    image: "/images/house-price-prediction.png",
    github: "https://github.com/PiyushDave2507/House-price-prediction",
    
  },
  {
    title: "Hotel Management System",
    tags: ["Python"],
    description: "Built a hotel management system to streamline room bookings, check-ins, and customer records using an interactive dashboard",
    image: "/images/hotel-management-system.png",
    github: "https://github.com/PiyushDave2507/Hotel-Management-System-In-Python",
    
  },
  {
    title: "MyMusic",
    tags: ["Java"],
    description: "Built a music streaming app that allows users to browse, play, and manage their favorite songs with a sleek user interface.",
    image: "/images/mymusic.png",
    github: "https://github.com/Yash-suthar/MyMusic",
  }
];