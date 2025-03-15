"use strict";

function getShippingMessage(country, price, deliveryFee) {

const totalPrice = price + deliveryFee

console.log(`Shipping to ${country} will cost ${totalPrice} credits`)

}

getShippingMessage("Australia", 120, 50);
