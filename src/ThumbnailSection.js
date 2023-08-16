import React from 'react';
import './ThumbnailSection.css';

const ThumbnailSection = ({ thumbnails }) => {
  return (
    <div className="thumbnail-section hidden-mobile">
      {thumbnails.map(img => (
        <img src={img} alt="small product img"/>
      ))}
    </div>
  );
};

export default ThumbnailSection;
