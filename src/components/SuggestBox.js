import React from "react";
import SuggestedUser from "./SuggestedUser";
import './../index.css';

const suggestedList = [
  {
    userName: "Alex A",
    img: "https://picsum.photos/75",
    url: "/home"
  },
  {
    userName: "Matt E",
    img: "https://picsum.photos/75",
    url: "/home"
  },
  {
    userName: "Eric C",
    img: "https://picsum.photos/75",
    url: "/home"
  },
  {
    userName: "Zach G",
    img: "https://picsum.photos/75",
    url: "/home"
  }
];

function SuggestBox(props) {

  return (
    <React.Fragment>
      {suggestedList.map((suggestedUser, index) =>
        <SuggestedUser 
          userName={suggestedUser.userName}
          img={suggestedUser.img}
          url={suggestedUser.url}
        />    
      )}
    </React.Fragment>
  )
}

export default SuggestBox;