import React from 'react'
function Coin({name,price,icon,symbol}){
    return(
        <div className="coin">
            <img src={icon}></img>
            <h1>Name: {name}</h1>
            <h3>Price:{price}</h3>
            <h3>Symbol:{symbol}</h3>
              

        </div>
    );
}

export default Coin;