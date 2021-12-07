import React, { useState, useEffect } from "react";
import SelectRegion from "../Components/SelectRegion";
import SerchKeyword from "../Components/SerchKeyword";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="logo">
        <h1>카페 YouYoungHae</h1>
      </div>
      <div className="main">
        <div className="left">
          <div className="dropbox">
            <SelectRegion />
          </div>
        </div>
        <div className="center">
          <SerchKeyword />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Home;
