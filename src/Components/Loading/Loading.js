import React from "react";
import loading from "../../assets/img/loading.png";
import "../../Css/loading.css";
function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Loading" />
    </div>
  );
}
export default Loading;
