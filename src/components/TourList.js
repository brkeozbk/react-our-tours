import React from 'react'
import { useState, useEffect } from 'react';
import cardData from '../api/tours.json';
import ReactReadMoreReadLess from "react-read-more-read-less"


export default function TourList() {
    const [card, setCard] = useState([])
    
    useEffect(() => {
        setCard(cardData)
        
    }, [])
    return (
        <div className="bg-brand-color">
        <div className=" md:mx-auto items-center text-center w-[800px] box-content ">
            <h1 className="mb-7 text-4xl font-semibold">Tour List</h1>
            
                {card.length && card.map(cards =>(
                    <div className=" flex flex-col group gap-y-2 transition box-content justify-evenly items-center text-center p-4 ">
                        <div className="bg-white rounded-3xl">
                    <img src={cards.image} className="rounded-3xl w-[800px] h-[400px] mb-6 "/>
                    <div className="container mx-auto h-11 flex items-center justify-between" >
                    <p className="mb-6 font-semibold text-lg text-primary-brand-color">{cards.title}</p>
                    <span className="mb-6 font-semibold text-lg text-blue-700 bg-blue-100">{cards.price}</span>
                    </div>
                    
                    <span className="mt-2 text-sm text-gray-700"> <ReactReadMoreReadLess charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              
                >
                    {cards.description}
                    </ReactReadMoreReadLess></span>
                    <button type="submit" className="rounded-3xl bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
                    Not Interest
                </button>
                    </div>
                    </div>

                ))}
                
           
    
                
                </div>
        </div>
    )
}
