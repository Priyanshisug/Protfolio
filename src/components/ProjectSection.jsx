import './ProjectSection.css';
import personalFinanceImg from "../assets/personal-finance-app.png";
import restCountriesImg from "../assets/rest-countries.jpg";
import hrmsImg from "../assets/Hrms.png";

const projects = [
    {
        title: "Personal Finance App",
         image: personalFinanceImg,
         description: "Track income, expenses, transaction details, and pots using React and Node.js.",
         github: "https://github.com/Priyanshisug/Personal-Finance-App"
    },
    {
        title: "Rest Countries Api",
         image: restCountriesImg,
         description: "Making Http request to the Rest Countries API to retrieve information about various countries and presenting details in a user-friendly manner. ",
         github: "https://github.com/Priyanshisug/Rest-Countries-Api"
    },
    {
    title: "Human Resource Management",
    image: hrmsImg,
    description: "Django-based HRMS for employee details tracking like attendence, leave and progress.",
    github: "https://github.com/Priyanshisug/HumanresourcemanagementSystem",
  },
]

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section">
        <div className="projects-container">
            <h2 className="projects-heading">
                 Projects <span className="highlight"> - I worked on</span>
            </h2>
            <div className="projects-grid">
             {projects.map((project) => (
                <div className="project-card" key={project.title}>
                <img src={project.image} alt ={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.github} target = "_blank"  className="project-link">View on Github</a>
                </div>
             ))}
            </div>
        </div>
    </section>
  );
};
export default ProjectSection;