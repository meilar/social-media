import React from "react";
import './../index.css';

function TweetBox() {

  return (
    <React.Fragment>
      <form>
        <input type="text" name="newTweet" placeholder="What's happening?" />
        <button type="submit">Tweet!</button>
      </form>
    </React.Fragment>
  )
}

export default TweetBox;