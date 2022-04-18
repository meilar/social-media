import React from "react";
import './../index.css';
import Header from "./Header";
import Body from "./Body";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
        <Header 
          notifications="(4)"
          messages="(2)"/>
        </div>
        <div class="row">
        <Body 
          userName="Kellie A. Corrigan"/>       
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
