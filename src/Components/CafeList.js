import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CafeList.css";

function CafeList({ id, name, address, x, y }) {
  return (
    <div className="cafes_data">
      <Link
        to={{
          pathname: `/cafe/${id}`,
          state: {
            name: name,
            address: address,
            x: x,
            y: y,
          },
        }}
      >
        <h4 className="cafe_name">{name}</h4>
      </Link>
      <h6 className="cafe_address">{address}</h6>
    </div>
  );
}

export default CafeList;
