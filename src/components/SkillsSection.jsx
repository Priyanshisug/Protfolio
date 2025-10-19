
import "./SkilsSection.css"
const skills = [

  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Javascript", category: "frontend" },
  { name: "React", category: "frontend" },

  { name: "Java", category: "backend" },
  { name: "Spring Framework", category: "backend" },
  { name: "SpringBoot", category: "backend" },
  { name: "J2EE", category: "backend" },
  { name: "Hibernate", category: "backend" },
  { name: "Microservice", category: "backend" },
  { name: "Sql", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

  { name: "Git/GitHub", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Vs Code", category: "tool" },
  { name: "Intellij", category: "tool" },
  { name: "Camunda", category: "tool" },

]

const SkillsSection = () => {
    const categories = ["frontend" , "backend", "tool"];

    return(
       <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">
          My <span className="highlight">Skills</span>
        </h2>
        <div className="skills-grid">
          {categories.map((category) => (
            <div key={category} className="skills-column">
              <h3 className="category-heading">{category.toUpperCase()}</h3>
              <ul className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li key={skill.name} className="skill-item">
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};
export default SkillsSection;