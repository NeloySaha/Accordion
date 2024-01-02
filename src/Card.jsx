import React, { useState } from "react";

export const Card = ({ title, text, id, handleSelectedId, selectedId }) => {
  return (
    <div
      className={`${selectedId === id && "open"} item`}
      onClick={() => handleSelectedId(id)}
    >
      <p className="number">{id}</p>
      <p className="title">{title}</p>
      <p className="icon">{selectedId === id ? "-" : "+"}</p>

      {selectedId === id && <div className="content-box">{text}</div>}
    </div>
  );
};
