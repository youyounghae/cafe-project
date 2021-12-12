import React, { useState } from "react";
import Select from "react-select";
import SelectOption from "./SelectOption";
import SelectKeyword from "./SerchKeyword";
import "../CSS/SelectRegion.css";

function SelectRegion() {
  const [citySelectedOption, setCitySelectedOption] = useState(0);
  const [countySelectedOption, setCountySelectedOption] = useState(0);

  const handleCitySelect = (selectedOption) => {
    setCitySelectedOption(selectedOption.value);
    setCountySelectedOption(0);
  };

  const handleCountySelect = (selectedOption) => {
    setCountySelectedOption(selectedOption.value);
  };

  return (
    <>
      <Select
        className="select1"
        options={SelectOption.cityOption}
        onChange={handleCitySelect}
        defaultValue={{ label: "선택하세요", value: 0 }}
      />
      <Select
        className="select2"
        options={SelectOption[citySelectedOption]}
        onChange={handleCountySelect}
        defaultValue={{ label: "선택하세요", value: 0 }}
      />
      <SelectKeyword
        cityName={citySelectedOption}
        countyName={countySelectedOption}
      />
    </>
  );
}

export default SelectRegion;
