import React from "react";
import Tweet from "./Tweet";
import './../index.css';

const tweetList = [
  {
    userName: "Alex A",
    content: "Hello this is a tweet"
  },
  {
    userName: "Matt E",
    content: "The weather is nice today!"
  },
  {
    userName: "John D",
    content: "I just got a puppy!"
  },
  {
    userName: "Emily C",
    content: "Things are going fine"
  }
];

function TweetFeed() {

  return (
    <React.Fragment>
      {tweetList.map((tweet, index) =>
        <Tweet userName={tweet.userName}
        content={tweet.content}/>
      )}
    </React.Fragment>
  )
}

export default TweetFeed;