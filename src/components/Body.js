import React from "react";
import './../index.css';
import Profile from "./Profile";
import Bio from "./Bio";
import TweetBox from "./TweetBox";
// import TweetFeed from "./TweetFeed";
// import SuggestedUser from "./SuggestedUser";

function Body(props) {
  return (
    <React.Fragment>
      <Profile
        img="https://picsum.photos/75"
        userName={props.userName}
        tweetCount='231'
        followingCount='4001'
        followersCount='12'
      />
      <Bio
        content="Kellie really loves coding. She especially loves React!!"
        userName={props.userName}
      />
      <TweetBox />
      {/* <TweetFeed />
      <SuggestedUser /> */}
    </React.Fragment>
  )
}

export default Body;