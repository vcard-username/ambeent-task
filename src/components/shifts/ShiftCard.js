import React, { useState, useEffect } from "react";

// [components/inputs]
import Input from "../inputs/Input";

// [style]
import "./ShiftCard.scss";

function ShiftCard({ data }) {
  // [hook] state
  const [oldStartTimeS, oldSetStartTime] = useState({ hour: "8", min: "30" });
  const [oldEndTimeS, oldSeEndTime] = useState({ hour: "18", min: "0" });
  const [oldHolidayS, oldSetHoliday] = useState(false);
  const [saveS, setSaveS] = useState(true);

  // [hook] component did mount
  useEffect(() => {
    control();
  }, [oldStartTimeS, oldEndTimeS, oldHolidayS]);

  // save data
  function savedData() {
    data.startTime = oldStartTimeS;
    data.endTime = oldEndTimeS;
    data.isHoliday = oldHolidayS;
    control();
  }

  // control
  function control() {
    if (
      data.startTime.hour !== oldStartTimeS.hour ||
      data.startTime.min !== oldStartTimeS.min ||
      data.endTime.hour !== oldEndTimeS.hour ||
      data.endTime.min !== oldEndTimeS.min ||
      data.isHoliday !== oldHolidayS
    ) {
      setSaveS(false);
    } else {
      setSaveS(true);
    }
  }

  // change function
  function inputOnChange(e) {
    const { name, value } = e.target;
    oldSetStartTime((el) => ({
      ...el,
      [name]: value,
    }));
    oldSeEndTime((el) => ({
      ...el,
      [name]: value,
    }));
  }

  function switchOnChange() {
    oldSetHoliday(!oldHolidayS);
  }

  return (
    <div className="sc-container">
      <div className="sc-main">
        <span className="sc-constant-text">Gün</span>
        <span className="sc-day">{data.day}</span>
        <div className="sc-switch">
          <label className="switch">
            <input onClick={() => switchOnChange()} type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="sc-switch-text">Tatil</span>
        </div>
        <div className="sc-time">
          <div className="sc-time-text">
            <span>Başlangıç:</span>
            <span>Bitiş:</span>
          </div>
          <div className="sc-time-clock">
            <div className="sc-time-clock-start sctsi">
              <Input
                min={0}
                max={24}
                defVal={8}
                name="hour"
                onChange={inputOnChange}
              />
              <span> : </span>
              <Input
                min={0}
                max={59}
                defVal={30}
                name="min"
                onChange={inputOnChange}
              />
            </div>
            <div className="sc-time-clock-end sctsi">
              <Input
                min={0}
                max={24}
                defVal={18}
                name="hour"
                onChange={inputOnChange}
              />
              <span> : </span>
              <Input
                min={0}
                max={59}
                defVal={0}
                name="min"
                onChange={inputOnChange}
              />
            </div>
          </div>
        </div>
        <div className="sc-save-btn">
          <button disabled={saveS} onClick={() => savedData()}>
            KAYDET
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShiftCard;
