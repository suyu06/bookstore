import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our Bestsellers !</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/library1.jpg'
              text='Let Your Imagination Run Wild'
              label='General Fiction'
              path='/fictionhome'
            />
            <CardItem
              src='images/sci.jpg'
              text='Explore Exciting New Worlds'
              label='Sci-Fi & Fantasy'
              path='/scifihome'
            />
            <CardItem
              src='images/cook.webp'
              text=' Learn to Cook Like a Professional Chef '
              label='Cookbooks'
              path='/cookbookhome'
            />            
               </ul>
                
            </div>
        </div>   
    </div>
  );
}

export default Cards;