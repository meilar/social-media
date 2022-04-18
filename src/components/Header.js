import React from "react";
import './../index.css';


function Header(props) {

  return (
    <React.Fragment>
      <button>Home</button>
      <button>Notifications <span>{props.notifications}</span></button>
      <button>Messages <span>{props.messages}</span></button>
      <form>
        <input type="text" name="searchBox" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  )
}

export default Header;