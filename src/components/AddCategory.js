import React, { useState } from 'react';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handeInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats =>[inputValue,...cats])
            setInputValue('')
        }
      

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center">
                <input className="border-gray-500 bg-gray-200 text-black border-4 w-2/4 text-center rounded-lg" type="text" value={inputValue} onChange={handeInputChange}/>
            </form>
        </>
    );
};

export default AddCategory;