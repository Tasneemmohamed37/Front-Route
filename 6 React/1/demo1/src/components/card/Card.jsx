import { useState } from 'react';

export default function Card({productObject, deleteFn, index}){

    const {id, name, price, category, description, imageUrl} = productObject;
    let [counter, setCounter] = useState(0);

    function increaseCounter(){
        setCounter(++counter)
    }

    function decreaseCounter(){
        setCounter(--counter)
    }


    return(
        <>
        <div className="bg-white w-1/5 shadow-md rounded-md">
            <img src={imageUrl} 
                alt="" className="w-100 h-60 object-cover"/>
            <div className="p-5">
                <h1 className="text-lg font-bold">{name}</h1>
                <h5 className="text-sm font-semibold">{category}</h5>
                <p className="text-gray-500 ">{description}</p>
                <div className="flex items-center justify-between my-5">
                    <i className="fa-solid fa-minus" onClick={decreaseCounter}></i>
                    <h6 className='text-sm font-semibold'>{counter}</h6>
                    <i className="fa-solid fa-plus" onClick={increaseCounter}></i>
                </div>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-base uppercase mx-auto w-full"
                    onClick={()=>{deleteFn(index)}} //this func has a param so must use arrow func
                    >Delete</button>
            </div>
        </div>
        </>
    )
}