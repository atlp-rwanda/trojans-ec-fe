import React from "react";
import ImageCard from "../../shared/ImageCard";

const ImagePreview = ({images, handleFilter, uploaded }) => {
    return (
        <div data-testid="image-preview-cont" className="flex mb-4 flex-wrap">
            {images.map((image, index) => (
                <ImageCard
                key={index}
                id={index}
                src={image}
                click={() => handleFilter(index)}
                removeTestId={`remove-${index}`}
                imageCardTestId={`image-card-${index}`}
                uploaded={uploaded}
              />
            ))}
          </div>
    );
}

export default ImagePreview;