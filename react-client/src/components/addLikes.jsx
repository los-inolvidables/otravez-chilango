import React from 'react';
import $ from "jquery";
import getTotalLikes from "../../../database/index.js";

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
    $.ajax({
      method: 'POST',
      url:'/likes',
      contentType: 'application/json',
      data: JSON.stringify({
        likes: this.state.likes
      })
    }).done(() => {
      // this.getLikePost();
    });
  }

 getLikePost(){
   $.ajax({
     url: '/likes',
     method: 'GET',
     success: (likes) => {
       var likesArray=JSON.stringify(likes);

       if(likes){
         likes.forEach((item) =>{
           this.setState({likes: item.likes+1});
         })
       }
       getTotalLikes(null, (results)=> console.log(`Here are the ${results}`));
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
    this.setState({
    likes:this.state.likes+1
    });
  }


two(){
  this.Like();
  this.addLikePost()
}
  render () {
    return(
      <div className="Type">
      <p className="Type"> Dont forget to like and share!! </p>
       <h3>{this.state.likes}
       <button className="btn" onClick={this.two}>
       <img src="https://i.imgur.com/U7C5R53.jpg?5"/></button>
       </h3>
      </div>
    );
  }
}
export default AddLikes;
