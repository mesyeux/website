import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDownItem from "./DropDownItem";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import "./ModelNavbar.css";

function ModelNavbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleDropdown = () => setDropdown(!dropdown);

  const handleOnClick = (filter, text) => {
    handleDropdown();

    props.filterImages(filter);
    props.setCoverText(text);
    console.log(filter);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect((filter) => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton); //??

  return (
    <>
      <nav className="model-navbar">
        <div className="model-container">
          <Link to="/" className="model-navbar-logo" onClick={closeMobileMenu}>
            chloe lau.
          </Link>
          <div className="model-navbar-container">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <AiFillCaretRight /> : <AiFillCaretLeft />}
            </div>
            <ul className={click ? "model-nav-menu active" : "model-nav-menu"}>
              <li className="model-nav-item">
                <Link
                  to="/profile"
                  className="model-nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>
              <li className="model-nav-item">
                <div className="menu-container">
                  <div className="model-nav-links" onClick={handleDropdown}>
                    Portfolio&nbsp;
                    {dropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </div>
                  <div
                    className={
                      dropdown
                        ? "model-dropdown-menu active"
                        : "model-dropdown-menu inactive"
                    }
                  >
                    <ul class="list-unstyled">
                      <DropDownItem
                        exact
                        text="Editorials"
                        link="/portfolio/editorials"
                        onClick={() => handleOnClick("editorial", "EDITORIALS")}
                      />
                      <DropDownItem
                        exact
                        text="Ecommerce"
                        link="/portfolio/ecommerce"
                        onClick={() => handleOnClick("ecommerce", "ECOMMERCE")}
                      />
                      <DropDownItem
                        exact
                        text="Lookbooks"
                        link="/portfolio/lookbooks"
                        onClick={() => handleOnClick("lookbook", "LOOKBOOKS")}
                      />
                      <DropDownItem
                        exact
                        text="Runway"
                        link="/portfolio/runway"
                        onClick={() => handleOnClick("runway", "RUNWAY")}
                      />
                      {/* <DropDownItem
                        exact
                        text="Tests"
                        link="/portfolio/tests"
                        onClick={() => handleOnClick("test", "TESTS")}
                      /> */}
                      <DropDownItem
                        exact
                        text="All"
                        link="/portfolio"
                        onClick={() => handleOnClick("", "PORTFOLIO")}
                      />
                    </ul>
                  </div>
                </div>
              </li>
              <li className="model-nav-item">
                <Link
                  to="/digitals"
                  className="model-nav-links"
                  onClick={closeMobileMenu}
                >
                  Digitals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ModelNavbar;
