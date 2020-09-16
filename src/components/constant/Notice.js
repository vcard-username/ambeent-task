import React from "react";

// [style]
import './Notice.scss';

function Notice() {
  return (
    <div className="notice-container">
      <div className="notice-main">
        <i className="fas fa-info-circle notife-icon"></i>
        <span>
          Yetkili servis çalışma saatlerini buradan ayarlayabilirsiniz
        </span>
      </div>
    </div>
  );
}

export default Notice;
