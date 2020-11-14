import React from "react";
import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

class ImageList extends React.Component {
  render() {
    return (
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="15px">
            {this.props.images.map((image) => (
              <Image
                key={image.id}
                id={image.id}
                image={image.urls.small}
                alt={image.alt_description}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    );
  }
}

export default ImageList;
