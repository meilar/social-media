import React from 'react';
import './../index.css';


function Profile(props) {
  return (
    <React.Fragment>
      <img src={props.img} />
      <p><em>{props.userName}</em></p>
      <p>Tweets: {props.tweetCount}</p>
      <p>Following: {props.followingCount}</p>
      <p>Followers: {props.followersCount}</p>
    </React.Fragment>
  )
}

export default Profile;