import React from 'react';
import './likebutton.css';

function LikeButton({ isLiked, onClick }) {
  return (
    <button
      className={`like-button ${isLiked ? 'liked' : ''}`}
      onClick={onClick}
    >
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}

export default LikeButton;
