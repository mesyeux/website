import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const isVideo =
    props.src?.endsWith(".mp4") ||
    props.src?.endsWith(".mov") ||
    props.src?.endsWith(".webm") ||
    props.type === "video";

  return (
    <>
      <div className="cards__item">
        <Link
          className="cards__item__link"
          to={props.path}
          onClick={() => {
            props.text === undefined
              ? props.displayModal(props.src)
              : console.log(props.text);
          }}
        >
          <div className="img__wrap">
            {isVideo ? (
              <video
                src={props.src}
                className="cards__item__img"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={props.src}
                alt="Portfolio Picture"
                className="cards__item__img"
              />
            )}
            <p className="img__description"> {props.text} </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;
