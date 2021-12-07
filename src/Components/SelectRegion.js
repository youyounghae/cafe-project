import React, { useState, useEffect } from "react";
import Select from "react-select";
import SelectOption from "./SelectOption";
import "./SelectRegion.css";
import SerchKeyword from "./SerchKeyword";

function SelectRegion() {
  const [citySelectedOption, setCitySelectedOption] = useState();
  const [countySelectedOption, setCountySelectedOption] = useState(0);

  const handleCitySelect = (selectedOption) => {
    const cityName = selectedOption.value;
    // console.log(cityName);
    setCitySelectedOption(cityName);
    return <SerchKeyword propsFunction={cityName} />;
  };

  const handleCountySelect = (selectedOption) => {
    setCountySelectedOption(selectedOption.value);
  };

  const customStyle = () => {
    // height: 10;
  };
  return (
    <>
      <div className="select1">
        <Select
          options={SelectOption.cityOption}
          onChange={handleCitySelect}
          defaultValue={{ label: "선택하세요", value: 0 }}
          styles={customStyle}
          autosize={false}
        />
      </div>
      <div className="select2">
        <Select
          options={SelectOption[citySelectedOption]}
          onChange={handleCountySelect}
        />
      </div>
    </>
  );
}

export default SelectRegion;
