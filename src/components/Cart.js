import { useState, useEffect } from 'react';
import BookInfo from "../components/BookInfo";

const UserCart = () => {

    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");
    const [cartTotal, setCartTotal] = useState(0);

    const items = [
        { BookInfo }
    ]

    useEffect( ()=> {total()},[cart])
    
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++){
            totalVal += cart[i].price
        }
        setCartTotal(totalVal)
    }
    
    const addToCart = (book) => {
        let duplicate = false
        for (let i = 0; i < cart.length; i++){
            if(cart[i].id === book.id) duplicate = true
        }
        setCart([...cart, book]);
        if (duplicate) {
            
            setAlert (`Warning: Duplicate title. ${book.title} is already in your cart.`);
        } else setAlert("");
    };

    const removeFromCart = (book) => {
        let cartCopy = [...cart]
        cartCopy = cartCopy.filter(cartItem => cartItem.id !== book.id)
        setCart(cartCopy)
        setAlert ("");
    }

    const listItems = BookInfo.map(book => (
        <div key={book.id}>
            {`${book.title}, by ${book.author}.
            Category: ${book.category}. Price: $${book.price}. `}
            <input type='submit' value='Add to Cart' onClick={() => addToCart(book)}/>

    </div>))

const cartItems = cart.map(book => (
    <div key={book.id}>
        {`${book.title}: $${book.price}. Category: ${book.category} `}
        <input type='submit' value='Remove' onClick={() => removeFromCart(book)}/>

    </div>))


    return (
    <div>
        <br></br>
        <div>{listItems}
        </div>
        <br></br>
        <h2>Shopping Cart</h2>
        <div>{cartItems}</div> 
        <div>{alert}</div>
        <div>Total: ${cartTotal}</div>
    </div>
    );
}

export default UserCart;