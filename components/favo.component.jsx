import React from 'react';
import starOff from '../assets/images/star_off.png';
import starOn from '../assets/images/star_on.png';
import "../assets/style/favorite.style.css" ;

const Favo = ({ isFavorite, onToggleFavorite }) => {
  const handleToggle = () => {
    onToggleFavorite();
  };

  return (
    <img
      src={isFavorite ? starOn : starOff}
      alt={isFavorite ? 'Favorite' : 'Not Favorite'}
      className="favorite-icon"
      onClick={handleToggle}
    />
  );
};

export default Favo;
