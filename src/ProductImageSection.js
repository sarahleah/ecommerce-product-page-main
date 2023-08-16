import React, { useState } from 'react';

import './ProductImageSection.css';

import thumbnail0 from '../images/image-product-1-thumbnail.jpg';
import thumbnail1 from '../images/image-product-2-thumbnail.jpg';
import thumbnail2 from '../images/image-product-3-thumbnail.jpg';
import thumbnail3 from '../images/image-product-4-thumbnail.jpg';

import productImg0 from '../images/image-product-1.jpg'
import productImg1 from '../images/image-product-2.jpg'
import productImg2 from '../images/image-product-3.jpg'
import productImg3 from '../images/image-product-4.jpg'

import ThumbnailSection from './ThumbnailSection';

const thumbnails = [thumbnail0, thumbnail1, thumbnail2, thumbnail3];
const imgs = [productImg0, productImg1, productImg2, productImg3];

const ProductImageSection = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  return (
    <div className="product-image-section">
      <img className="selected-img" src={imgs[selectedImgIndex]} alt="product img" />
      <ThumbnailSection setSelectedImgIndex={setSelectedImgIndex} selectedImgIndex={selectedImgIndex} thumbnails={thumbnails} />
    </div>
  );
};

export default ProductImageSection;
