import React from "react";
import './../index.css';
import Header from "./Header";
import Body from "./Body";

function App() {

  return (
    <React.Fragment>
      <Header 
        notifications="(4)"
        messages="(2)"/>
      <Body 
        userName="Kellie A. Corrigan"/>
    </React.Fragment>
  )
}

export default App;
