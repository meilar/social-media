import React from "react";
import Button from 'react-bootstrap/Button';
import './../index.css';

function TweetBox() {

  return (
    <React.Fragment>
      <form>
        <input type="text" name="newTweet" placeholder="What's happening?" />
        <Button variant="primary" active="true">Tweet!</Button>{' '}
      </form>
    </React.Fragment>
  )
}

export default TweetBox;