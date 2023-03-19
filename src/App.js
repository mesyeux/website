import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Digitals from "./components/pages/Digitals";
import { JobPage } from "./components/pages/JobPage";
import Profile from "./components/pages/Profile";
import DevPage from "./components/pages/DevPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<DevPage />} />
        <Route
          exact
          path="/portfolio/editorials"
          element={<Portfolio filter="editorial" />}
        />
        <Route
          exact
          path="/portfolio/lookbooks"
          element={<Portfolio filter="lookbook" />}
        />
        <Route
          exact
          path="/portfolio/ecommerce"
          element={<Portfolio filter="ecommerce" />}
        />
        <Route
          exact
          path="/portfolio/runway"
          element={<Portfolio filter="runway" />}
        />
        <Route
          exact
          path="/portfolio/tests"
          element={<Portfolio filter="test" />}
        />
        <Route path="/portfolio/:folderName" element={<JobPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/idk" element={<JobPage />} />
        <Route path="/digitals" element={<Digitals />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <BottomBar/> */}
    </div>
  );
}

export default App;
