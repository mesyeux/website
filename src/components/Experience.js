import React, { useState } from "react";
import dbsLogo from "../assets/images/dbs.png";
import rakutenLogo from "../assets/images/rakuten.png";
import "./Experience.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Experience() {
  const [activeTabDBS, setActiveTabDBS] = useState("responsibilities");
  const [activeTabRakuten, setActiveTabRakuten] = useState("responsibilities");

  const dbsData = {
    responsibilities: [
      "Developed full-stack internal banking applications supporting corporate finance functions (liquidity management)",
      "Applied Agile methodology with Git, Bitbucket, and Jira following REST and MVC design patterns",
      "Collaborated cross-functionally with data analysts and back-end teams to ensure data integrity and scalability across systems",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Java",
      "Spring",
      "Hibernate",
      "Jira",
      "Git",
    ],
  };

  const rakutenData = {
    responsibilities: [
      "Migrated merchant portal from AngularJS to ReactJS/TypeScript, enhancing performance for e-commerce platform",
      "Built data-driven full-stack features and APIs using NestJS, Spring, GraphQL, and AWS S3 for scalable data storage and system",
      "Designed UI mockups in Figma and implemented responsive front-end components",
      "Communicated across teams to understand requirements and design and engineer solutions",
    ],
    tech: [
      "React",
      "Typescript",
      "Javascript",
      "NestJS",
      "HTML",
      "CSS",
      "AWS",
      "Java",
      "Spring",
      "Figma",
    ],
  };

  const tabs = [
    { key: "responsibilities", label: "Responsibilities" },
    { key: "tech", label: "Tech Stack" },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          className="experience-swiper"
        >
          <SwiperSlide>
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="experience-company">
                  <div className="company-logo-wrapper">
                    <div className="logo-glass-bg-rakuten"></div>
                    <img
                      src={rakutenLogo}
                      alt="Rakuten Logo"
                      className="company-logo"
                    />
                  </div>
                  <h3 className="company-name">Rakuten Asia</h3>
                  <p className="company-position">
                    Full-stack Development Internship
                  </p>
                </div>

                <div className="experience-details">
                  <div className="tab-navigation">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        className={`tab-button ${
                          activeTabRakuten === tab.key ? "active" : ""
                        }`}
                        onClick={() => setActiveTabRakuten(tab.key)}
                      >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="tab-content">
                    {activeTabRakuten === "responsibilities" && (
                      <div className="content-fade-in">
                        <ul className="responsibilities-list">
                          {rakutenData.responsibilities.map((item, index) => (
                            <li key={index} className="responsibility-item">
                              <span className="bullet">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTabRakuten === "tech" && (
                      <div className="content-fade-in">
                        <div className="tech-stack">
                          {rakutenData.tech.map((tech, index) => (
                            <span key={index} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="experience-company">
                  <div className="company-logo-wrapper">
                    <div className="logo-glass-bg-dbs"></div>
                    <img
                      src={dbsLogo}
                      alt="DBS Bank Logo"
                      className="company-logo"
                    />
                  </div>
                  <h3 className="company-name">DBS Bank</h3>
                  <p className="company-position">
                    Software Engineering Internship
                  </p>
                </div>

                <div className="experience-details">
                  <div className="tab-navigation">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        className={`tab-button ${
                          activeTabDBS === tab.key ? "active" : ""
                        }`}
                        onClick={() => setActiveTabDBS(tab.key)}
                      >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="tab-content">
                    {activeTabDBS === "responsibilities" && (
                      <div className="content-fade-in">
                        <ul className="responsibilities-list">
                          {dbsData.responsibilities.map((item, index) => (
                            <li key={index} className="responsibility-item">
                              <span className="bullet">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTabDBS === "tech" && (
                      <div className="content-fade-in">
                        <div className="tech-stack">
                          {dbsData.tech.map((tech, index) => (
                            <span key={index} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Experience;
