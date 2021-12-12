import React, { useState } from "react";
import CafeList from "./CafeList";
import "../CSS/SerchKeyword.css";

const { kakao } = window;

function SerchKeyword({ cityName, countyName }) {
  const [places, setPlaces] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = () => {
    setPlaces([]);
    const ps = new window.kakao.maps.services.Places();

    const placesSearchDB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        if (pagination.current <= pagination.last) {
          setPlaces((prev) => [...prev, ...data]);
          pagination.nextPage();
          return places;
        }
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    };
    console.log(cityName);
    if (cityName !== 0 && countyName !== 0) {
      ps.keywordSearch(
        cityName + countyName + inputValue + "카페",
        placesSearchDB
      );
    } else if (cityName !== 0 && countyName === 0) {
      ps.keywordSearch(cityName + inputValue + "카페", placesSearchDB);
    } else ps.keywordSearch(inputValue + "카페", placesSearchDB);
  };

  return (
    <>
      <div className="serch">
        <input
          type="text"
          className="serch_keyword"
          value={inputValue}
          onChange={onChange}
        ></input>
        <button className="serchBtn" onClick={onSubmit}>
          submit
        </button>
      </div>
      <div className="cafeList">
        {places.map((place) => (
          <CafeList
            key={place.id}
            id={place.id}
            name={place.place_name}
            address={place.road_address_name}
            x={place.x}
            y={place.y}
          />
        ))}
      </div>
    </>
  );
}

export default SerchKeyword;
