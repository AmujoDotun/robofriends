import React from 'react';
import Card from './Card';

const  CardArray = ({ robots }) => {
    // looping through cardsComponent
    const cardsComponent = robots.map((user , i)=>{
        return ( 
        <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} />);
         })
    return(
        <div>
           {/* calling the array function */}
           {cardsComponent}
        
        </div>
        
    );
}
export default CardArray;