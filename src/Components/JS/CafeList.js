import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/CafeList.css";

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
        <h3 className="cafe_name">{name}</h3>
      </Link>
      <h5 className="cafe_address">{address}</h5>
    </div>
  );
}

export default CafeList;
