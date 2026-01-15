import React from "react";
import "./ResumePage.css";
import Fade from "react-reveal/Fade";
import data from "../../data.json";
import git from "../../images/tech/git.svg";
import html5 from "../../images/tech/html5.svg";

const ResumePage = () => {
  return (
    <section className="resume-page">
      <header className="resume-page__header">
        <h1 className="resume-page__heading resume-page__heading--main">Resume</h1>
        <p className="resume-page__subheading">Learn more about my skills, qualifications and experiences.</p>
      </header>
      <div className="resume-page__body">
        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Work Experience</h2>
            <p className="resume-page__subheading--body">PRESENT & PREVIOUS JOBS</p>
          </div>
          <div className="resume-page__content-right">
            <div className="work-wrapper">
              <Fade bottom>
                {data.work.map((work, i) => (
                  <div className="work" key={i}>
                    <p className="work__timeline">
                      {work.timeline.from} - {work.timeline.to}
                    </p>
                    <h3 className="work__role">{work.role}</h3>
                    <p className="work__company">{work.company}</p>
                    <p className="work__summary">{work.summary} </p>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>

        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Education</h2>
            <p className="resume-page__subheading--body">ACADEMIC CAREER</p>
          </div>
          <div className="resume-page__content-right">
            <div className="education-wrapper">
              {data.education.map((edu, i) => (
                <Fade bottom>
                  <div className="education" key={i}>
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__school">{edu.school}</p>
                    <p className="education__timeline">
                      {edu.timeline.from} - {edu.timeline.to}
                    </p>
                    <p className="education__summary">{edu.summary} </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Tech Stack</h2>
            <p className="resume-page__subheading--body">TOOLS & TECHNOLOGIES</p>
          </div>
          <div className="resume-page__content-right">
            <Fade bottom>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                  alt="Typescript"
                  title="Typescript"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  alt="Javascript"
                  title="Javascript"
                  className="tech__logo"
                />
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="NodeJs" title="NodeJs" className="tech__logo" />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                  alt="ExpressJs"
                  title="ExpressJs"
                  className="tech__logo"
                />
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="ReactJs" title="ReactJs" className="tech__logo" />
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" alt="Redux" title="Redux" className="tech__logo" />
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png" alt="AWS" title="AWS" className="tech__logo" />
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" alt="MongoDb" title="MongoDb" className="tech__logo" />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                  alt="PostgreSQL"
                  title="PostgreSQL"
                  className="tech__logo"
                />
                <img src={html5} alt="HTML5" title="HTML5" className="tech__logo" />
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" alt="SASS" title="SASS" className="tech__logo" />
                <img src={git} alt="Git" title="Git" className="tech__logo" />
              </div>
            </Fade>
          </div>
        </div>

        {data.skills && (
          <div className="resume-page__content">
            <div className="resume-page__content-left">
              <h2 className="resume-page__heading">Skills</h2>
              <p className="resume-page__subheading--body">TECHNICAL EXPERTISE</p>
            </div>
            <div className="resume-page__content-right">
              <Fade bottom>
                <div className="skills-wrapper">
                  {data.skills.languages && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Languages</h4>
                      <div className="skills-section__items">
                        {data.skills.languages.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.frameworks_libraries && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Frameworks & Libraries</h4>
                      <div className="skills-section__items">
                        {data.skills.frameworks_libraries.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.databases_orms && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Databases & ORMs</h4>
                      <div className="skills-section__items">
                        {data.skills.databases_orms.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.cloud_infrastructure && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Cloud & Infrastructure</h4>
                      <div className="skills-section__items">
                        {data.skills.cloud_infrastructure.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.monitoring_observability && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Monitoring & Observability</h4>
                      <div className="skills-section__items">
                        {data.skills.monitoring_observability.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.devops_cicd && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">DevOps & CI/CD</h4>
                      <div className="skills-section__items">
                        {data.skills.devops_cicd.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.testing && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Testing</h4>
                      <div className="skills-section__items">
                        {data.skills.testing.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.blockchain_web3 && (
                    <div className="skills-section">
                      <h4 className="skills-section__title">Blockchain & Web3</h4>
                      <div className="skills-section__items">
                        {data.skills.blockchain_web3.map((skill, i) => (
                          <span key={i} className="skills-section__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Fade>
            </div>
          </div>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <div className="resume-page__content">
            <div className="resume-page__content-left">
              <h2 className="resume-page__heading">Certifications</h2>
              <p className="resume-page__subheading--body">PROFESSIONAL QUALIFICATIONS</p>
            </div>
            <div className="resume-page__content-right">
              <div className="certifications-wrapper">
                <Fade bottom>
                  {data.certifications.map((cert, i) => (
                    <div className="certification" key={i}>
                      <h3 className="certification__name">{cert.name}</h3>
                      {cert.issuer && <p className="certification__issuer">{cert.issuer}</p>}
                      {cert.year && <p className="certification__year">{cert.year}</p>}
                      {cert.status && <p className="certification__status">{cert.status}</p>}
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        )}

        {data.key_technical_achievements && data.key_technical_achievements.length > 0 && (
          <div className="resume-page__content">
            <div className="resume-page__content-left">
              <h2 className="resume-page__heading">Key Technical Achievements</h2>
              <p className="resume-page__subheading--body">NOTABLE ACCOMPLISHMENTS</p>
            </div>
            <div className="resume-page__content-right">
              <div className="achievements-wrapper">
                <Fade bottom>
                  {data.key_technical_achievements.map((achievement, i) => (
                    <div className="achievement" key={i}>
                      <p className="achievement__text">{achievement}</p>
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumePage;
