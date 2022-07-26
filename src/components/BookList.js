import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function BookList( { books } ) {
    return(
        <div>
            { books.map((book, key) => (
                <div key={key} to={`/book/${book.title}`}>
                    <h3>{book.title}</h3> 
                    <p>{book.author}</p>
                    <p>{book.price}</p>
                    <p>{book.category}</p>
                    
                </div>
            ))}            
        </div>
    );
}

export default BookList;