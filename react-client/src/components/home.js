import React , { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Bar from "./bar.js";
import TypeWriteR from "./typeWriter.jsx";
import AddLikes from './addLikes.jsx';
import Video from "./video/video.js"

class Home extends React.Component{
  render(){
    return (
      <div>
        <div className="main">

        <br/>
        <br/>
          <h1>Chilango Life</h1>
            <TypeWriteR />
          <br/>
          <br/>
          <div className="vid">
            <Video />
          </div>
          <div className="childef" >
            <p >CHILANGO:</p>
            <p>Used for a person born in</p>
            <p >the suburbs or surrounding areas of</p>
            <p >Mexico City who has moved to Mexico City. </p>
          </div>
          <div className="btnlike">
            <AddLikes />
          </div>
            <div className="fb-share-button" data-href="https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp"
            data-layout="button_count" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"></a>  </div>
          </div>
          </div>
    );
  }
}
export default Home;
