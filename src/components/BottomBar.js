import React from "react";
import { Link } from "react-router-dom";
import "./BottomBar.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

function BottomBar() {
  return (
    <>
      <div className="bottom-bar">
        <div className="copyright">
          <div className="made-by">
            <AiOutlineCopyrightCircle />
            &nbsp;2023 by Chloe Lau
          </div>
        </div>
        <div className="contact">
          <CiMail />
          &nbsp;&nbsp;chloleila@yahoo.com.sg
        </div>
        {/* <div className="links">
          <Link to="/">Contact</Link>
        </div> */}
      </div>
    </>
  );
}

export default BottomBar;
