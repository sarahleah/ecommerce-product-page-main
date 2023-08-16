import React from 'react';
import './ThumbnailSection.css';

const ThumbnailSection = ({ thumbnails }) => {
  return (
    <div className="thumbnail-section hidden-mobile">
      {thumbnails.map((img, i) => (
        <img src={img} alt="small product img" key={i}/>
      ))}
    </div>
  );
};

export default ThumbnailSection;
