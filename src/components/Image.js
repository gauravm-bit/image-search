import React from "react";
 

const Image = ({ image, alt }) => {
  return (
    <div className="image-list">
      <img src={image} alt={alt} />
    </div>
  );
};

export default Image;
