import React from 'react'
import { useState, useEffect } from 'react';
import cardData from '../api/tours.json';


export default function TourList() {
    const [card, setCard] = useState([])
    
    useEffect(() => {
        setCard(cardData)
        
    }, [])
    return (
        
        <div className="container md:mx-auto items-center text-center w-[500px] h-[300px]">
            <h1>Tour List</h1>
            
                {card.length && card.map(cards =>(
                    <div className="flex flex-col group gap-y-2 transition hover:bg-purple-50 items-center text-center p-4 ">

                    <img src={cards.image} alt={cards.title} className=" mb-6 " />
                    <p className="">{cards.description}</p>
                    </div>

                ))}
                
           
    
                
          
        </div>
    )
}
