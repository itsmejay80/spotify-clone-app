import React from "react";
import "./Body.css";
import Header from "./Header";

export default function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src="" alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>desciption...</p>
        </div>
      </div>
    </div>
  );
}
