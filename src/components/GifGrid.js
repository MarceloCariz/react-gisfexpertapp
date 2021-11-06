import React, { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGif";
import GifGridItem from "./GifGridItem";
const GifGrid = ({ category }) => {
    
    const {data:images,loading} = useFetchGifs(category);

  return (
    < >
      <h3 className="text-white text-2xl uppercase text-center mb-20">{category}</h3>
      {loading && <p>Loading</p> }
      <div className=" ">
        <ol className="grid sm:gap-2 gap-1 sm:grid-cols-3 place-content-end grid-cols-2 justify-items-center">
          {images.map((img) => {
            return (
              <GifGridItem
                key={img.id}
                ///spread operator, envia todos los datos de la imagen
                {...img}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
