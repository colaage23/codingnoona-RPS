import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {props.item && (
        <img
          key={props.flipKey}
          className="item-img flip"
          src={props.item.img}
        />
      )}
      <h2>{props.item && props.item.name}</h2>
    </div>
  );
};

export default Box;
