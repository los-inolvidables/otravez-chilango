import React, { Component } from "react";
import $ from "jquery";
//import { Link } from "react-router-dom";
import Coverflow from 'react-coverflow';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      //set up for stylesheet
     <div>
        <Coverflow
          width={960}
          height={350}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >

          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >

          </div>
          <img src='https://i.imgur.com/Ok6XIk0.jpg'alt='valle de bravo'/>
          <img src='https://i.imgur.com/AEmUarJ.jpg'alt='zocalo'/>
          <img src='https://i.imgur.com/VdlHK2n.jpg'alt='valle'/>
          <img src='https://i.imgur.com/qijGsWm.jpg'alt='bellas artes'/>
          <img src='https://i.imgur.com/jAZiQy5.png'alt='papalote'/>


        </Coverflow>
      </div>

    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

export default Carousel;
