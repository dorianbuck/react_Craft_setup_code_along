import React from "react";

const GreetingInput = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type a planet name"
        onChange={(event) => {
          props.renderGreeting(event);
        }}
      />
    </>
  );
};

export default GreetingInput;
