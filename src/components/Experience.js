import React from "react";
import dbsLogo from "../assets/images/dbs.png";
import { useState } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

function Experience() {
  const [showElement, setShowElement] = useState(false);
  const [activeTab, setActiveTab] = useState("roles");

  const handleShow = () => {
    setShowElement(!showElement);
  };

  return (
    <>
      <section className="experience" id="experience">
        <div className="experience-wrapper">
          <h2>Experience</h2>
          <div className="experience-item-wrapper">
            {/* <Row className="align-items-stretch">
              <Col className="experience-item-img" sm={3}>
                <img src={dbsLogo} />
                <p>DBS Software Engineering Internship</p>
              </Col>
              <Col className="experience-item-desc" sm={9}>
                <Tab.Container
                  id="experience-item-tabs"
                  defaultActiveKey="first"
                  fill
                >
                  <Row className="align-items-center">
                    <Col sm={5}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Role</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            Responsibilities
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tech Used</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={7}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          Fullstack Software Developer
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>
                            Participated in full-stack development for internal
                            banking web applications meant to facilitate
                            liquidity management for corporations
                          </p>
                          <p>
                            Utilised Angular, Typescript, HTML and CSS for
                            front-end to enhance existing features and user
                            interfaces to be more user-friendly
                          </p>
                          <p>
                            Utilised Java, Spring, Hibernate and mySQL to
                            implement and enhance back-end computations and data
                            retrieval
                          </p>
                          <p>
                            Carried out testing and fixed bugs in raised issues
                            before deploying code for user acceptance testing
                            and release
                          </p>
                          <p>
                            Utilised tools like Bitbucket, Jira and Git for
                            project management
                          </p>
                          <p>
                            Followed REST, MVC frameworks and Agile methodology
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          Angular, Typescript, HTML, CSS, Java, Spring,
                          Hibernate, mySQL, Bitbucket, Jira, Git
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row> */}
            <div className="experience-item-img">
              <img src={dbsLogo} />
              <p>DBS Software Engineering Internship</p>
            </div>
            <div className="experience-item-tabs">
              <a
                className={
                  activeTab === "roles" ? "nav-item active" : "nav-item"
                }
                onClick={() => setActiveTab("roles")}
              >
                Role
              </a>
              <a
                className={
                  activeTab === "responsibilities"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={() => setActiveTab("responsibilities")}
              >
                Responsibilities
              </a>
              <a
                className={
                  activeTab === "tech" ? "nav-item active" : "nav-item"
                }
                onClick={() => setActiveTab("tech")}
              >
                Tech Used
              </a>
            </div>
            <div className="experience-item-desc">
              {activeTab === "roles" ? (
                <div>Fullstack Software Engineering Intern</div>
              ) : activeTab === "responsibilities" ? (
                <div>
                  <p>
                    Participated in full-stack development for internal banking
                    web applications meant to facilitate liquidity management
                    for corporations
                  </p>
                  <p>
                    Enhanced existing features and UI to be more user-friendly
                    with front-end frameworks
                  </p>
                  <p>
                    Implemented and enhanced back-end computations & data
                    retrieval
                  </p>
                  <p>
                    Carried out testing and fixed bugs in raised issues before
                    deploying code for user acceptance testing and release
                  </p>
                  <p>Utilised Bitbucket, Jira and Git for project management</p>
                  <p>REST, MVC frameworks and Agile methodology</p>
                </div>
              ) : (
                <div>
                  Angular, Typescript, HTML, CSS, Java, Spring, Hibernate,
                  mySQL, Bitbucket, Jira, Git
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
