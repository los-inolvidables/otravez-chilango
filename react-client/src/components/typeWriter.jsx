import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class TypeWriteR extends React.Component {

  render() {
    return (
      // Passing in text.
      <div className="Type">
        <TypeWriter typing={1}>We have created this page to show you some great
        places of Mexico city and its surrounding areas. Mexico city is a great place to visit, and
        it has many beautifull places. There is always something going on in the city, therefore
        there are alot of things you can do.....We have listed a few.Check it out!!!!
        </TypeWriter>
    </div>
    );
  }
}

export default TypeWriteR;
