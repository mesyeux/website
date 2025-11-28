import React from "react";
import ModelNavbar from "../ModelNavbar";
import { DIGITALS } from "../images/index.js";
import Cards from "../Cards";
import Socials from "../Socials";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Digitals() {
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
      <Cards images={DIGITALS} displayModal={displayModal} />
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
}

export default Digitals;
