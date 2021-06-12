import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json';
import Cart from '../Cart/Cart';
import Playerdata from '../PlayerData/Playerdata';
import './Player.css';

const Plyer = () => {
    const first10 = fakeData.slice(0,10);
    const [Player, setPlayer] = useState(first10);
    const [cart, setcart] = useState([]);
    const HandleAddPlayer =(Plyer)=>{
        console.log('plyer-added');
        const newCart = [...cart,Player];
        setcart(newCart);
    }
    return (
        <div className='container'>
        <div className='Player-container'>
    
                {
                    Player.map(Players => <Playerdata 
                        HandleAddPlayer={HandleAddPlayer}
                        Players={Players}></Playerdata>)
                }
            
                <div> <h1> git test </h1></div>
        </div>
            
           <div className='cart-container'>
                <h1>
                   <Cart cart={cart}></Cart>
                </h1>
           </div>
         
        </div>
    );
};

export default Plyer;