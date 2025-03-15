"use strict";

function getElementWidth(content, padding, border) {

    const contentInt = Number.parseInt(content)
    const paddingInt = Number.parseInt(padding)
    const borderInt = Number.parseInt(border)

    console.log(contentInt + 2 * (paddingInt + borderInt))
}

getElementWidth("50px", "8px", "4px")
