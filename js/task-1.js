"use strict";

function makeTransaction(quantity, pricePerDroid) {
    
    const totalPrice = quantity * pricePerDroid

    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);

}

makeTransaction(5, 3000)


