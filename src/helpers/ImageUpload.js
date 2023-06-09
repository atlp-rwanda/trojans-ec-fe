import React from "react";
import ImageCard from "../components/shared/ImageCard";
import { v4 as uuidV4 } from "uuid";
export const handleImageUpload = (
  event,
  setValue,
  setFormData,
  setImagePreview,
  handleFilter
) => {
  const images = event.target.files;
  const imageArray = Array.from(images);
  setValue("image", imageArray);
  setFormData((prevState) => {
    return {
      ...prevState,
      image: imageArray,
    };
  });
  setImagePreview(() => {
    return imageArray.map((image) => {
      const id = uuidV4();
      return (
        <ImageCard
          key={id}
          id={id}
          src={URL.createObjectURL(image)}
          click={() => handleFilter(id)}
          uploaded={true}
        />
      );
    });
  });
};
