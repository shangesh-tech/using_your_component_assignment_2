import React from 'react';
import LikeButton from './likebutton';
import './postcard.css';

function PostCard({ post, toggleLike }) {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={post.username} className="profile-image" />
      <div className="post-content" style={{color:'black'}}>
        <h3>@{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton isLiked={post.isLiked} onClick={() => toggleLike(post.id)} />
      </div>
    </div>
  );
}

export default PostCard;
