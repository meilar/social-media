import React from "react";
import './../index.css';
import Profile from "./Profile";
// import Bio from "./Bio";
// import TweetBox from "./TweetBox";
// import TweetFeed from "./TweetFeed";
// import SuggestedUser from "./SuggestedUser";

function Body(props) {
  return (
    <React.Fragment>
      <Profile 
        userName="Kellie A. Corrigan"
        tweetCount='231'
        followingCount='4001'
        followersCount='12'
      />;
      {/* <Bio /> */}
      {/* <TweetBox />
      <TweetFeed />
      <SuggestedUser /> */}
    </React.Fragment>
  );
}

export default Body;