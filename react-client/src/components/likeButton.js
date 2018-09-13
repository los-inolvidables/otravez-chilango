import React from 'react';




class LikeButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0,
      count2:0
    }
    this.Like = this.Like.bind(this);
    this.unlike = this.unlike.bind(this);
  }

  Like (){
    this.setState({
      count: this.state.count + 1
    });
  }
  async unlike (){
    this.setState({
      count2: this.state.count2 +1
    });
  }

  render(){
    return (
      <div className="counter">
      <h3>{this.state.count}  <button className="btn" onClick={this.Like}>
      <img src="https://i.imgur.com/U7C5R53.jpg?3"/></button> {this.state.count2}
      <button className="btn2" onClick={this.unlike}>
      <img src="https://i.imgur.com/U7C5R53.jpg?4"/></button> </h3>

      </div>
    );
  }
}
export default LikeButton;
