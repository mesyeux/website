import React, { useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
import ModelNavbar from "../ModelNavbar";
import { COVERIMAGES } from "../images/index.js";
import { useState } from "react";
import Socials from "../Socials";

function Portfolio(props) {
  const [images, setImages] = useState(COVERIMAGES);
  const [coverImage, setCoverImage] = useState(COVERIMAGES[1]);
  const [coverText, setCoverText] = useState("PORTFOLIO");

  const filterImages = (currCat) => {
    if (currCat === "") {
      setImages(COVERIMAGES);
    } else {
      const newImage = COVERIMAGES.filter((newItem) => {
        return newItem["filter"] === currCat;
      });
      setImages(newImage);
    }
  };
  return (
    <>
      <ModelNavbar filterImages={filterImages} setCoverText={setCoverText} />
      <div className="filter-cover-wrap">
        <h1 className="filter-text">{coverText}</h1>
        <div className="filter-cover-img-wrap">
          <img src={images[0].path} className="filter-cover-img" />
        </div>
      </div>
      <Cards images={images} />
      <Socials />
    </>
  );
}

export default Portfolio;
