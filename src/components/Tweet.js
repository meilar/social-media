import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return (
    <React.Fragment>
      <hr/>
      <p><em>{props.userName}</em></p>
      <p>{props.content}</p>
    </React.Fragment>
  );
}

Tweet.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Tweet;