import React from 'react';
import $ from "jquery";

class AddLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:0
    }
    this.Like = this.Like.bind(this);
    this.two = this.two.bind(this);
  }

  addLikePost(likes){
    console.log("likes front end ", this.state.likes);
    $.ajax({
      method: 'POST',
      url:'/likes',
      contentType: 'application/json',
      data: JSON.stringify({
        likes: this.state.likes
      })
    }).done(() => {
      this.getLikePost();
    });
  }

 getLikePost(){
   $.ajax({
     url: '/likes',
     method: 'GET',
     success: (likes) => {
       console.log("this is results"+likes)
       this.setState({likes:this.state.likes});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
   })
 }
 componentDidMount(){
   this.getLikePost()
    }
  Like (){
    this.setState(function(prevState, props){
      return{likes:prevState.likes+1};
    });
    console.log("this is the state " , this.state.likes);
  }


two(){
  this.Like();
  this.addLikePost()
}
  render () {
    return(
      <div className="counter">

       <h3>{this.state.likes}
       {console.log(this.state.likes)}
       <button className="btn" onClick={this.two}>
       <img src="https://i.imgur.com/U7C5R53.jpg?5"/></button>
       </h3>
      </div>
    );
  }

}
export default AddLikes;
