import React from "react";
import BookList from "../components/BookList";
import BookInfo from "../components/BookInfo";
import UserCart from "../components/Cart";
import { Link } from 'react-router-dom';
import './AllBooks.css';

function AllBooks() {
    return (
        <div className='allbooks'>
            <br></br>
            <h1> What's on your wish list today? </h1>
            <br></br>
            <p>Jump to:</p> 
            <ul>
            <li><Link to="/fictionhome">General Fiction</Link></li>
            <li><Link to="/scifihome">Sci Fi & Fantasy</Link></li>
            <li><Link to="/cookbookhome">Cookbooks</Link></li>
            </ul>

            
            <UserCart />
        </div>
    );
}

export default AllBooks;