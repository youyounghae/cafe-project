import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import Home from "./Routes/Home";
import CafeDetailPage from "./Components/CafeDetailPage";

function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cafe/:id" component={CafeDetailPage} />
      </HashRouter>
    </>
  );
}

export default App;
