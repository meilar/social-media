import React from "react";
import './../index.css';

function Bio(props) {

  return (
    <React.Fragment>
      <p>{props.userName}</p>
      <p>{props.content}</p>
    </React.Fragment>
  )
}

export default Bio;