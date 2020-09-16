import React from "react";

// [style]
import './DefaultWorkTime.scss';

// [components/inputs]
import Input from '../inputs/Input'

function DefaultWorkTime() {
  return (
    <div className="dwt-container">
      <div className="dwt-main">
        <span className="dwt-title">Varsayılan Çalışma Saati</span>
        <span className="dwt-desc">
          Bu ayar tatil olan günlerde, gece nöbetinin ayarlanabilmesi için
          önemlidir
        </span>
        <div className="dwt-default-time">
          <span className="dwt-default-text">Başlangıç:</span>
          <Input defVal={8} min={0} max={24}/>
          <span> : </span>
          <Input defVal={30} min={0} max={59}/>
          <span className="dwt-defaul-save-btn">Kaydet</span>
        </div>
      </div>
    </div>
  );
}

export default DefaultWorkTime;
