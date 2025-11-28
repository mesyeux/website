import React from "react";
import CardItem from "../CardItem";
import ModelNavbar from "../ModelNavbar";
import { COVERIMAGES } from "../images/index.js";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Socials from "../Socials";

export const JobPage = (props) => {
  const pathname = window.location.pathname;
  const folder = pathname.substring(pathname.lastIndexOf("/") + 1);

  const jobData = COVERIMAGES.find((item) => item.folder === folder);
  const images = jobData?.images || [];

  const [photoPath, setPhotoPath] = useState("");
  const [showPicture, setShowPicture] = useState(false);

  const handleClose = () => setShowPicture(false);
  const displayModal = (path) => {
    setShowPicture(true);
    setPhotoPath(path);
  };

  const isVideo =
    photoPath?.endsWith(".mp4") ||
    photoPath?.endsWith(".mov") ||
    photoPath?.endsWith(".webm");

  return (
    <>
      <ModelNavbar />
      <div className="job-page-images">
        {images.map((imagePath, index) => (
          <CardItem
            key={index}
            src={imagePath}
            label="lookbook"
            displayModal={displayModal}
          />
        ))}
      </div>
      <Modal show={showPicture} onHide={handleClose}>
        {isVideo ? (
          <video src={photoPath} controls autoPlay style={{ width: "100%" }} />
        ) : (
          <img src={photoPath} style={{ width: "100%" }} alt="" />
        )}
      </Modal>
      <Socials />
    </>
  );
};
