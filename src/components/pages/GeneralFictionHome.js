import React from 'react';
import Cards from '../Cards';
import CardItem from '../CardItem.js';
import '../Cards.css';
import {Button} from '../Button';


function GeneralFictionHome() {
    return (
        <div className='cookbookhome'>
            <div className='cards'>
                <h1>Best Sellers in Fiction</h1>     
                <div className='cards__container'>
                    <div className='cards__wrapper'>

                        <ul className='cards__items'>
                            <CardItem
                                src='images/new_books.jpg'
                                text='Our Most Popular Fiction Books'                                
                                label='General Fiction'                                                        
                                path='/generalfictionhome'
                            />

                        </ul>
                        <ul className='cards__items'><CardItem
                                src='images/AllTheLight.jpeg'                             
                                text='All the Light We Cannot See'                                
                                label='#1 Best Seller '
                                author="by Anthony Doerr"
                                price='Price $14.99' 
                                path='/allthelight'
                            /></ul>
                        <ul className='cards__items'>
                            
                            <CardItem
                                src='images/CandyHouse.jpeg'
                                text='The Candy House'
                                label='#2'
                                author="by Jennifer Egan"
                                price='Price $17.99' 
                                path='/candyhouse'
                            />
                            <CardItem
                                src='images/Americanah.jpeg'
                                text='Americanah'
                                label='#3'
                                author="by Chimamanda Ngozi Adichie"
                                price='Price $16.95' 
                                path='/americanah'
                            />

                            <CardItem
                                src='images/WindUpBird.jpeg'
                                text='The Wind-Up Bird Chronicle'
                                author="by Haruki Murakami"
                                price='Price $17.99' 
                                label='#4'
                                path='/windupbirdchronicle'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/OscarWao.jpeg'
                                text='The Brief Wondrous Life of Oscar Wao'   
                                author="by Junot Díaz"
                                price='Price $14.99' 
                                label='#5'
                                path='/oscarwao'
                            />
                            <CardItem
                                src='images/LittleFires.jpeg'
                                text="Little Fires Everywhere"
                                label='#6'
                                author="by Celeste Ng"
                                price='Price $13.99;                                ' 
                                path='/littlefireseverywhere'
                            />
                            <CardItem
                                src='images/WhiteTeeth.jpeg'
                                text='White Teeth'
                                author="by Zadie Smith"
                                price='Price $14.99' 
                                label='#7'
                                path='/whiteteeth'
                            />
                            
                        </ul>
                        <ul className='cards__items'>
                        
                            <CardItem
                                src='images/CrawdadsSing.jpeg'
                                text='Where the Crawdads Sing'
                                author="by Delia Owens"
                                price='Price $13.49' 
                                label='#8'
                                path='/crawdads'
                            />
                            <CardItem
                                src='images/Goldfinch.jpeg'
                                text='The Goldfinch'
                                author="by Donna Tartt"
                                price='Price $17.99' 
                                label='#9'
                                path='/goldfinch'
                            />
                            <CardItem
                                src='images/SalvageTheBones.jpeg'
                                text='Salvage the Bones'
                                author="by Jesmyn Ward"
                                price='Price $14.99' 
                                label='#10'
                                path='/salvagethebones'
                            />
                             </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralFictionHome;