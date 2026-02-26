import NexType from '../assets/NexType.png';
import BlogPost from '../assets/BlogPost.png';
import ETL_Project from '../assets/ETL_Project.png';

export const projects = [
  {
    id: 1,
    title: "NexType Frontend",
    category: "WEB / REACT",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: NexType, 
    size: "large",
    liveUrl: "https://nextype-frontend.vercel.app/",     
    githubUrl: "https://github.com/rituraj981/NexType-frontend"
  },
  {
    id: 2,
    title: "ETL Project", 
    category: "AUTOMATION / PYTHON",
    tags: ["Python", "Pandas", "Automation"], 
    image: ETL_Project,
    size: "small",
    liveUrl: "https://github.com/rituraj981/ETL_Anomaly_Detection-using-Python",     
    githubUrl: "https://github.com/rituraj981/ETL_Anomaly_Detection-using-Python" 
  },
  {
    id: 3,
    title: "BlogPost UI",
    category: "PORTFOLIO / UI",
    tags: ["React 19", "Tailwind v4", "Framer Motion"],
    image: BlogPost,
    size: "large",
    liveUrl: "https://blog-post-five-virid.vercel.app/",     
    githubUrl: "https://github.com/rituraj981/portfolio" 
  },
];