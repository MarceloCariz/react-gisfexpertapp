import React from 'react';


const GifGridItem = ({id, title, url}) => {

    return (
        <div className=" card animate__animated animate__bounce mb-8 ">
            <img className="object-fit w-auto max-h-64 " src={url} alt={title}/>
            <p className="text-white text-center font-semibold">{title}</p>
        </div>
    );
};

export default GifGridItem;