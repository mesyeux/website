import React, { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const [activeTab, setActiveTab] = useState("recsys");

  const projects = {
    recsys: {
      title: "Recommendation System: Collaborative Filtering",
      tech: [
        "Python",
        "NumPy",
        "Pandas",
        "Evaluation Metrics",
        "Hyperparameter Tuning",
      ],
      description: [
        "Researched and developed item-item collaborative filtering system for recommending movies to users",
        "Preprocessed large dataset (size ~800k)",
        "Applied statistical analysis and hyperparameter tuning to optimize prediction quality",
        "Evaluated model with metrics, obtaining RMSE ~0.995, Precision@5 ~0.748, Recall@5 ~0.480 while maintaining efficient runtime and memory usage",
      ],
      link: {
        label: "Source",
        url: "https://github.com/mesyeux/collab-filtering",
      },
    },
    nlp: {
      title: "NLP Machine Translation",
      tech: [
        "Python",
        "Pytorch",
        "SentencePiece",
        "LSTM",
        "Embeddings",
        "Deep Learning",
        "Fine-Tuning",
      ],
      description: [
        "Explored text generation and translation using deep learning model (seq2seq) using IWSLT dataset (~231K sentence pairs)",
        "Implemented tokenization with SentencePiece, converted tokens to vector embeddings",
        "Fine-tuned and optimised model hyperparameters to improve model performance at predicting next token",
        "Built evaluation pipelines",
      ],
      link: {
        label: "Source",
        url: "https://github.com/mesyeux/iwslt2017-zh-en",
      },
    },
  };

  const currentProject = projects[activeTab];

  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="projects-title">Projects</h2>

        {/* Tab Navigation */}
        <div className="projects-nav">
          {["recsys", "nlp"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`project-tab ${activeTab === key ? "active" : ""}`}
            >
              {key === "recsys"
                ? "Recommendation System"
                : "Machine Translation"}
            </button>
          ))}
        </div>

        <div className="project-content-wrapper">
          <div className="project-content-centered">
            <h3 className="project-title">{currentProject.title}</h3>

            <div className="tech-badges">
              {currentProject.tech.map((tech, index) => (
                <Badge key={index} className="tech-badge">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="project-description">
              <ul className="description-list">
                {currentProject.description.map((point, index) => (
                  <li key={index} className="description-item">
                    <span className="bullet-dot">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {currentProject.link && (
              <div className="project-link-wrapper">
                {currentProject.link.download ? (
                  <a
                    href={currentProject.link.url}
                    download
                    className="project-link"
                  >
                    <span className="link-icon">🔗</span>
                    {currentProject.link.label}
                  </a>
                ) : (
                  <Link
                    to={currentProject.link.url}
                    target="_blank"
                    className="project-link"
                  >
                    <span className="link-icon">🔗</span>
                    {currentProject.link.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
