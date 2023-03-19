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
  const noOfItems = COVERIMAGES.filter((item) => item.folder === folder)[0][
    "noOfItems"
  ];

  const [photoPath, setPhotoPath] = useState("");

  const [showPicture, setShowPicture] = useState(false);
  const handleClose = () => setShowPicture(false);
  const displayModal = (path) => {
    setShowPicture(true);
    setPhotoPath(path);
  };

  const array = Array.from({ length: noOfItems }, (_, i) => i + 1);
  return (
    <>
      <ModelNavbar />
      <div className="job-page-images">
        {array.map((item) => (
          <CardItem
            src={"/images/" + folder + "/" + item + ".jpg"}
            label="lookbook"
            displayModal={displayModal}
          />
        ))}
      </div>
      <Modal show={showPicture} onHide={handleClose}>
        <img src={photoPath} />
      </Modal>
      <Socials />
    </>
  );
};
