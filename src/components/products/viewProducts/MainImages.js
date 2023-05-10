import React, { useState } from "react";
const MainImages = ({ images }) => {
  if (images) {
    const [preview, setPreview] = useState(images[0]);
    return (
      <div className="w-[280px] lg:w-[340px] h-[450px]">
        <div className="w-full h-[75%]">
          <img src={preview} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-full h-[25%] flex justify-center items-center mt-1">
          {images.slice(0, 4).map((image) => {
            return (
              <div
                onMouseOver={() => setPreview(image)}
                className="w-[25%] h-full p-[2px] hover:border transition-all duration-200 ease-linear  hover:border-black"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MainImages;
