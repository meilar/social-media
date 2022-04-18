import React from "react";
import './../index.css';
import Profile from "./Profile";
import Bio from "./Bio";
import TweetBox from "./TweetBox";
import TweetFeed from "./TweetFeed";
import SuggestBox from "./SuggestBox";

function Body(props) {
  return (
    <React.Fragment>
      <div class="col-md-2">
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
      </div>
      <div class="col-md-8">
        <TweetBox />
        <TweetFeed />
      </div>
      <div class="col-md-2">
        <SuggestBox />
      </div>
    </React.Fragment>
  )
}

export default Body;