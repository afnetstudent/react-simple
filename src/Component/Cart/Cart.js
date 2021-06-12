import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    let total = 0;
    for(let i =0; i< cart.length; i++){
        const Players = cart[i];
        total = total + Players.salary;
    }
    return (
        <div>
            <h4>Selected Players </h4>
            <h5>Total selected Players: {cart.length} </h5>
            <p> salary: {total}</p>
        </div>
    );
};

export default Cart;