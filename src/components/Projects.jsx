import arrowPic from "../assets/arrow.png";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";
function Projects() {
  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container projects-flex-basics color-container">
              <div className="article-container">
                <img src={projectOne} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                React - Faraway checkList App
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/Arshwebs/React-faraway")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://monumental-fudge-0677d3.netlify.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container projects-flex-basics color-container">
              <div className="article-container">
                <img src={projectTwo} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                JS - Youtube Clone
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/Arshwebs/Youtube-Clone")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://youtube-clone-arsh.netlify.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container  projects-flex-basics color-container">
              <div className="article-container">
                <img
                  src={projectThree}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                JS - Photo Gallery
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/Arshwebs/Photo-Gallery.git")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://photo-gallery-site.netlify.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container  projects-flex-basics color-container">
              <div className="article-container">
                <img
                  src={projectFour}
                  alt="Project 4"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                React - Admin Dashboard
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/Arshwebs/sb-admin-task1")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://sb-admin-task-1.netlify.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container  projects-flex-basics color-container">
              <div className="article-container">
                <img
                  src={projectFive}
                  alt="Project 5"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                React - Stack overflow clone
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/Arshwebs/stack-overflow-clone",
                    )
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://velvety-bavarois-1065be.netlify.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowPic}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#contact")}
        />
      </section>
    </>
  );
}

export default Projects;
