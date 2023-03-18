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

  return (
    <>
      <ModelNavbar />
      <Cards images={DIGITALS} displayModal={displayModal} />
      <Modal show={showPicture} onHide={handleClose}>
        <img src={photoPath} />
      </Modal>
      <Socials />
    </>
  );
}

export default Digitals;
