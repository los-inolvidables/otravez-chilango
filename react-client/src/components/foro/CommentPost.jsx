import React from 'react';


const CommentPost = (props) => (
  <div>
  <span className= "title1">{props.post.description}</span>{" : "}<span className="con">{props.post.description2}</span>
  </div>
)

export default CommentPost;
