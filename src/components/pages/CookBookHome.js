import React from 'react';
import Cards from '../Cards';
import CardItem from '../CardItem.js';
import '../Cards.css';
import {Button} from '../Button';


function CookBookHome() {
    return (
        <div className='cookbookhome'>
            <div className='cards'>
                <h1>Best Sellers in Cookbooks</h1>     
                <div className='cards__container'>
                    <div className='cards__wrapper'>

                        <ul className='cards__items'>
                            <CardItem
                                src='images/cook.jpeg'
                                text=' Learn to Cook Like a Professional Chef'                                
                                label='Cookbook'                                                        
                                path='/cookbookhome'
                            />

                        </ul>
                        <ul className='cards__items'><CardItem
                                src='images/1snacking3.jpg'                             
                                text='Snacking Cakes: Simple Treats for Anytime Cravings'                                
                                label='#1 Best Seller '
                                author="by Yossy Arefi "
                                price='Price $22.99' 
                                path='/cbone'
                            /></ul>
                        <ul className='cards__items'>
                            
                            <CardItem
                                src='images/2mooncakes.jpeg'
                                text='Mooncakes and Milk Bread: Sweet and Savory Recipes Inspired by 
                                Chinese Bakeries '
                                label='#2'
                                author="by Kristina Cho "
                                price='Price $26.95 ' 
                                path='/cbtwo'
                            />
                            <CardItem
                                src='images/3flour.jpeg'
                                text='Flour Water Salt Yeast: The Fundamentals of Artisan Bread and Pizza'
                                label='#3'
                                author="by Ken Forkish"
                                price='Price $31.49 ' 
                                path='/cbthree'
                            />

                            <CardItem
                                src='images/4baking.jpeg'
                                text='Paleo Baking at Home: The Ultimate Resource for
                                 Delicious Grain-Free Cookies and More
                                '
                                author="by Michele Rosen "
                                price='Price $19.79' 
                                label='#4'
                                path='/cbfour'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/5cook.jpeg'
                                text='The Great British Baking Show: Love to Bake'   
                                author="by  Paul Hollywood, Prue Leith "
                                price='Price $26.00' 
                                label='#5'
                                path='/cbfive'
                            />
                            <CardItem
                                src='images/6cook.jpeg'
                                text="The Cook's Illustrated Baking Book"
                                label='#6'
                                author="by America's Test Kitchen"
                                price='Price $40.00                                ' 
                                path='/cb6'
                            />
                            <CardItem
                                src='images/7cook.jpeg'
                                text='Pieometry: Modern Tart Art and Pie Design for the Eye and the Palate
                                '
                                author="by  Lauren Ko"
                                price='Price $32.50' 
                                label='#7'
                                path='/cb7'
                            />
                            
                        </ul>
                        <ul className='cards__items'>
                        
                            <CardItem
                                src='images/8cook.jpeg'
                                text='French Pastry Made Simple: Foolproof Recipes for Éclairs, Tarts, Macarons and More
                                '
                                author="by  Molly Wilkinsonv"
                                price='Price $20.69' 
                                label='#8'
                                path='/cb8'
                            />
                            <CardItem
                                src='images/9cook.jpeg'
                                text='Grandbaby Cakes: Modern Recipes, Vintage Charm, Soulful Memories
                                '
                                author="by Jocelyn Delk Adams"
                                price='Price $24.95' 
                                label='#9'
                                path='/cb9'
                            />
                            <CardItem
                                src='images/10cook.jpeg'
                                text='Afternoon Tea At Home: Deliciously indulgent recipes for sandwiches, savouries, scones, cakes and other fancies
                                '
                                author="by Will Torrent"
                                price='Price $27.99' 
                                label='#10'
                                path='/cb10'
                            />
                             </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookBookHome;