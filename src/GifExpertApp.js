import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     setCategories([...categories,nombre])
    // }


    return (
      <div >
        <h1 className="text-3xl text-white text-center mb-8">GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        <ol className="mt-10 content-center">
            {categories.map(category => {
              return <GifGrid key={category} category={category}/>
            })}
        </ol>   
      </div>
    );
};

export default GifExpertApp;