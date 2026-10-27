import { useEffect, useState } from "react";
import "./App.css";
import profilePhoto from "./assets/vijay.png";

const roles = [
  "Python Developer",
  "Web Developer",
  "Full Stack Developer",
];

const skills = [
  {
    icon: "Py",
    name: "Python",
    description: "Core Python, functions, OOP, and problem solving.",
  },
  {
    icon: "SQL",
    name: "SQL",
    description: "Database queries, filtering, joins, and data handling.",
  },
  {
    icon: "Dj",
    name: "Django",
    description: "Backend development, URL routing, views, and models.",
  },
  {
    icon: "</>",
    name: "HTML",
    description: "Semantic markup and accessible page structure.",
  },
  {
    icon: "#",
    name: "CSS",
    description: "Responsive layouts and modern styling.",
  },
  {
    icon: "JS",
    name: "JavaScript",
    description: "Interactive features and application logic.",
  },
  {
    icon: "R",
    name: "React",
    description: "Reusable components and user interfaces.",
  },
  {
    icon: "CV",
    name: "OpenCV",
    description: "Image processing and computer vision basics.",
  },
  {
    icon: "ML",
    name: "TensorFlow",
    description: "Machine learning and object detection projects.",
  },
  {
    icon: "API",
    name: "REST APIs",
    description: "Understanding API requests and data exchange.",
  },
];

const projects = [
  {
    number: "01",
    title: "Object Detection",
    description:
      "A computer vision project developed to identify and detect objects in images using Python and deep learning tools.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    link: "",
  },
  {
    number: "02",
    title: "Traffic Light Detection",
    description:
      "A computer vision project focused on recognizing traffic signals to explore road safety and traffic monitoring applications.",
    tags: ["Python", "Computer Vision", "Machine Learning"],
    link: "",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio built with React and CSS to present my skills, projects, and developer journey.",
    tags: ["React", "JavaScript", "CSS"],
    link: "",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  // Animated developer title
  useEffect(() => {
    const role = roles[roleIndex];
    let characterIndex = 0;
    let deleting = false;
    let timeoutId;

    function animateText() {
      if (!deleting) {
        characterIndex += 1;
        setDisplayedRole(role.slice(0, characterIndex));

        if (characterIndex >= role.length) {
          deleting = true;
          timeoutId = setTimeout(animateText, 1300);
          return;
        }
      } else {
        characterIndex -= 1;
        setDisplayedRole(role.slice(0, characterIndex));

        if (characterIndex <= 0) {
          setRoleIndex(function (currentIndex) {
            return (currentIndex + 1) % roles.length;
          });
          return;
        }
      }

      timeoutId = setTimeout(
        animateText,
        deleting ? 45 : 85
      );
    }

    timeoutId = setTimeout(animateText, 250);

    return function () {
      clearTimeout(timeoutId);
    };
  }, [roleIndex]);

  // Close mobile navigation
  function closeMenu() {
    setMenuOpen(false);
  }

  // Contact form validation
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setFormSuccess(true);
    setFormStatus(
      "Form validated successfully! Email delivery is not configured yet."
    );

    form.reset();
  }

  return (
    <>
      {/* Navigation */}
      <header className="header">
        <nav
          className="navbar container"
          aria-label="Main navigation"
        >
          <a href="#home" className="logo" onClick={closeMenu}>
            V<span>M</span>.
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={function () {
              setMenuOpen(function (open) {
                return !open;
              });
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <ul
            className={
              menuOpen ? "nav-links open" : "nav-links"
            }
            id="nav-links"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              function (item) {
                return (
                  <li key={item}>
                    <a
                      className={
                        item === "Contact" ? "nav-contact" : ""
                      }
                      href={"#" + item.toLowerCase()}
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </header>

      <main>
        {/* Home */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                Hi, I'm <span>Vijay Mishra</span>
              </h1>

              <h2>
                Aspiring{" "}
                <span id="typing-text">{displayedRole}</span>
              </h2>

              <p className="hero-description">
                I'm an IT graduate interested in software
                development, Python, and modern web technologies.
                I enjoy learning by building practical projects
                and solving problems.
              </p>

             <div className="hero-buttons">
  <a href="#projects" className="btn btn-primary">
    Explore My Work
  </a>

  <a href="#contact" className="btn btn-secondary">
    Contact Me
  </a>

  <a
    href="/Vijay_Mishra_Python_Developer_Resume.pdf"
    className="btn btn-secondary"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume ↗
  </a>
</div>

              <div className="hero-meta">
                <span>📍 India</span>
                <span>💻 Learning by Building</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-card">
                <img
                  className="profile-photo"
                  src={profilePhoto}
                  alt="Vijay Mishra"
                />  
                <div className="card-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p className="card-label">
                  DEVELOPER IN PROGRESS
                </p>

                <h3>Learn. Build. Improve.</h3>

                <p className="card-description">
                  Turning concepts into working projects,
                  one step at a time.
                </p>

                <div className="code-line">
                  <span>const</span> goal = "Python Developer";
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>
                About <span>Me</span>
              </h2>
              <p>A little about my background and goals.</p>
            </div>

            <div className="about-card">
              <p>
                I'm Vijay Mishra, an IT graduate interested in
                software development and modern web technologies.
              </p>

              <p>
                My learning journey includes Python, computer
                vision, and project-based development. I'm
                expanding my frontend and React skills through
                practical work.
              </p>

              <p>
                My goal is to develop reliable applications,
                improve my problem-solving abilities, and grow
                as a developer.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHAT I'M LEARNING</p>
              <h2>
                My <span>Skills</span>
              </h2>
              <p>Technologies I'm practising and exploring.</p>
            </div>

            <div className="skills-grid">
              {skills.map(function (skill) {
                return (
                  <article
                    className="skill-card"
                    key={skill.name}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          className="section projects-section"
          id="projects"
        >
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">PRACTICAL EXPERIENCE</p>
              <h2>
                Featured <span>Projects</span>
              </h2>
              <p>
                Projects from my learning and development journey.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map(function (project) {
                return (
                  <article
                    className="project-card"
                    key={project.number}
                  >
                    <div className="project-number">
                      {project.number}
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map(function (tag) {
                        return <span key={tag}>{tag}</span>;
                      })}
                    </div>
                    <div className="project-actions">
  {project.link && (
    <a
      href={project.link}
      className="project-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project ↗
    </a>
  )}
</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          className="section contact-section"
          id="contact"
        >
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>
                Contact <span>Me</span>
              </h2>
              <p>
                Have a question or opportunity? Send a message.
              </p>
            </div>

            <div className="contact-actions">
  <a
    className="btn btn-primary"
    href="https://wa.me/9926428145?text=Hello%20Vijay%2C%20I%20visited%20your%20portfolio."
    target="_blank"
    rel="noopener noreferrer"
  >
    💬 Chat on WhatsApp
  </a>

  <a
    className="btn btn-secondary"
    href="mailto:vm8882420@gmail.com?subject=Portfolio%20Enquiry"
  >
    ✉️ Send an Email
  </a>
</div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  minLength={2}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  minLength={10}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Validate Message
              </button>

              <p
                className={
                  "form-status" +
                  (formStatus
                    ? formSuccess
                      ? " success"
                      : " error"
                    : "")
                }
                role="status"
                aria-live="polite"
              >
                {formStatus}
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            © {new Date().getFullYear()} Vijay Mishra.
            Built with React.
          </p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;