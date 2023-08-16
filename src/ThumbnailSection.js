import React from 'react';
import './ThumbnailSection.css';

const ThumbnailSection = ({ setSelectedImgIndex, selectedImgIndex, thumbnails }) => {
  const handleSelectedImgChange = (newIndex) => {
    setSelectedImgIndex(newIndex);
  }

  return (
    <div className="thumbnail-section hidden-mobile">
      {thumbnails.map((img, i) => (
        <div className={`${i === selectedImgIndex ? "selected" : ""}`}>
          <img className={`${i === selectedImgIndex ? "selected" : ""}`} src={img} alt="small product img" key={i} onClick={() => handleSelectedImgChange(i)}/>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailSection;
