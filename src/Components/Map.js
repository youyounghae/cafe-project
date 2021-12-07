import React, { Component } from "react";
import { NaverMap, Marker } from "react-naver-maps";
const { naver } = window;

class MapAPI extends Component {
  render() {
    const navermaps = window.naver.maps;
    return (
      <div>
        <NaverMap
          mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
          style={{
            width: "100%",
            height: "800px",
          }}
          naverRef={(ref) => {
            this.mapRef = ref;
          }}
          defaultCenter={{ lat: this.props.y, lng: this.props.x }}
          defaultZoom={17}
        >
          <Marker
            key={1}
            position={new navermaps.LatLng(this.props.y, this.props.x)}
            animation={2}
            // onClick={() => {
            //   alert("여기는 N서울타워입니다.");
            // }}
          />
        </NaverMap>
      </div>
    );
  }
}

export default MapAPI;
