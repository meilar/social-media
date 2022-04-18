import React from "react";
import PropTypes from "prop-types";

function SuggestedUser(props){
  return (
    <React.Fragment>
      <hr/>
      <p><em>{props.userName}</em></p>
      <img url={props.img} />
      <button href={props.url}>Follow</button>
    </React.Fragment>
  )
}

SuggestedUser.propTypes = {
  userName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SuggestedUser;