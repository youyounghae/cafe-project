import React from "react";
import { RenderAfterNavermapsLoaded, Marker } from "react-naver-maps";
import MapAPI from "./Map";

function CafeDetailPage({ location: { state }, history }) {
  if (state === undefined) {
    history.push("/");
  }
  if (state) {
    console.log(state);

    return (
      <div>
        <h2>카페명:{state.name}</h2>
        <h3>주소:{state.address}</h3>
        <div className="map">
          <RenderAfterNavermapsLoaded
            ncpClientId={"kjjjcehuul"} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
            <MapAPI x={state.x} y={state.y} />
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CafeDetailPage;
