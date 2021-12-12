import React, { useState, useEffect } from "react";
import SelectRegion from "../Components/JS/SelectRegion.js";
import SerchKeyword from "../Components/JS/SerchKeyword.js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="logo">
        <h1>카페 YouYoungHae</h1>
      </div>
      <div className="main">
        <SelectRegion />
      </div>
    </div>
  );
}

export default Home;
