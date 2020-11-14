import React from "react";

 
const Image = ({ image, alt }) => {

  const handleImageClick = (image) => {
    console.log(image);
  };

  return (
    <div className="image-list">
      <img src={image} alt={alt} onClick={() => handleImageClick(image)} />
      
    </div>
  );
};

export default Image;
