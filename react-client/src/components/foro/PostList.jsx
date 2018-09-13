import React from 'react';
import CommentPost from './CommentPost.jsx';


const PostList = (props) => (
 <div className="posts">
 {props.posts.map((post) => <CommentPost post={post} key={post.id}/>)}
 </div>
)

export default PostList;
