import React from 'react';
import './Playerdata.css';

const Playerdata = (props) => {
    const {img, name, salary}= props.Players;
    
    return (
        <div className="player">
            <div>
                <img src ={img} alt=""/>
            </div>
            <div className="profile">
            <h4>{name}</h4>
            <h3>{salary}</h3>
            <button className="select-player" onClick={()=> props.HandleAddPlayer(props.Players)}> Select This Player</button>
            </div>
           
        </div>
    );
};

export default Playerdata;