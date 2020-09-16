import React from "react";

// [components/shifts]
import ShiftCard from "./ShiftCard";

// [style]
import './ShiftList.scss';

// [helper/{data}]
import cardData from '../../helper/cardData';

function ShiftList() {
  return (
    <div className="sl-container">
      <div className="sl-main">
        {cardData.map((data) => {
          return <ShiftCard data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
}

export default ShiftList;
