import React from 'react';
import Cards from '../Cards';
import CardItem from '../CardItem.js';
import '../Cards.css';
import {Button} from '../Button';
import './CookBookHome.css';

function SciFiHome() {
    return (
        <div className='scifihome'>
            <div className='cards'>
                <h1>Best Sellers in Sci-Fi</h1>
                {/* <div className='input-areas'>
          <form>
            <input
              className='search-input'       
              placeholder='Search By Author'
            />
            <Button buttonStyle='btn--outline'>Search</Button>
          </form> */}
        {/* </div> */}
                <div className='cards__container'>
                    <div className='cards__wrapper'>

                        <ul className='cards__items'>
                            <CardItem
                                src='images/sci.jpg'
                                text='Experience Football on Top of the Himilayan Mountains'                               
                                label='Sci-Fi'                                                        
                                path='/services'
                            />

                        </ul>
                        <ul className='cards__items'><CardItem
                                src='images/1sf.jpg'                             
                                text='Blood of Elves'                                
                                label='#1 Best Seller '
                                author="by Andrzej Sapkowski "
                                price='Price $17.99'                               
                                path='/Sf1'
                            /></ul>
                        <ul className='cards__items'>
                            
                            <CardItem
                                src='images/2sf.jpg'
                                text='Escape Pod: The Science Fiction Anthology'
                                label='#2'
                                author="by S.B. Divya, Mur Lafferty, N. K. Jemisin, Cory Doctorow, Ken Liu "
                                price='Price $15.95 ' 
                                path='/Sf2'
                            />
                            <CardItem
                                src='images/3sf.jpg'
                                text='The Best Science Fiction and Fantasy of the Year, Volume Eleven'
                                label='#3'
                                author="by Joe Abercrombie, Jonathan Strahan, Geoff Ryman, Lavie Tidhar, Paolo Bacigalupi"
                                price='Price $7.49 ' 
                                path='/Sf3'
                            />

                            <CardItem
                                src='images/4sf.jpg'
                                text='Lightspeed'
                                author="by John Joseph Adams, N. K. Jemisin, Kij Johnson, Alexander Weinstein, Ramez Naam "
                                price='Price $3.99' 
                                label='#4'
                                path='/Sf4'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/5sf.jpg'
                                text='Clarkesworld: Year Eight'   
                                author="by  Neil Clarke, Michael Swanwick, N. K. Jemisin, Sean Wallace, Naomi Kritzer "
                                price='Price $6.99' 
                                label='#5'
                                path='/Sf5'
                            />
                            <CardItem
                                src='images/6sf.jpg'
                                text="The Eye of the World"
                                label='#6'
                                author="by Robert Jordan"
                                price='Price $15.99'                                
                                path='/Sf6'
                            />
                            <CardItem
                                src='images/7sf.jpg'
                                text="Abaddon's Gate"
                                author="by James S. A. Corey"
                                price='Price $15.99' 
                                label='#7'
                                path='/Sf7'
                            />
                            
                        </ul>
                        <ul className='cards__items'>
                        
                            <CardItem
                                src='images/8sf.jpg'
                                text="Mass Effect Andromeda: Initiation"
                                author="by N. K. Jemisin, Mac Walters"
                                price='Price $7.99' 
                                label='#8'
                                path='/Sf8'
                            />
                            <CardItem
                                src='images/9sf.jpg'
                                text="The City Born Great"
                                author="by N. K. Jemisin"
                                price='Price $1.99' 
                                label='#9'
                                path='/Sf9'
                            />
                            <CardItem
                                src='images/10sf.jpg'
                                text="The Witcher"
                                author="by Paul Tobin, Joe Querio"
                                price='Price $1.99' 
                                label='#10'
                                path='/Sf10'
                            />
                             </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SciFiHome;