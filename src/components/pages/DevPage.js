import React from "react";
import DevNavBar from "../DevNavBar";
import DevBanner from "../DevBanner";
import Skills from "../Skills";
import Projects from "../Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "../Experience";
import BottomBar from "../BottomBar";

function DevPage() {
  return (
    <div className="dev-page">
      <DevNavBar />
      {/* <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={0.5}>
          <DevBanner />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.7}>
          <Experience />
        </ParallaxLayer>
      </Parallax> */}
      <DevBanner />
      <Skills />
      <Experience />
      <Projects />
      <BottomBar />
    </div>
  );
}

export default DevPage;
