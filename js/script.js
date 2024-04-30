// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // variables
  const bigBurgerSize = document.getElementById("option-big-burger").checked
  const oneExtraIngredient = document.getElementById("option-one-extra").checked
  const twoExtraIngredients = document.getElementById("option-two-extras").checked
  const threeExtraIngredients = document.getElementById("option-three-extras").checked
  const TAX = 0.13
  let priceOfBurger = 0

  if (bigBurgerSize == true) {
    // process
    let priceOfBurger = priceOfBurger + 13.50
  } else {
    // process
    let priceOfBurger = priceOfBuger = 17.40
  }

  if (oneExtraIngredient == true) {
    // process
    let priceOfBurger = priceOfBurger + 1.250
  } else if (twoExtraIngredients == true) {
    // process
    let priceOfBurger = priceOfBurger + 2.50
  } else {
    // process
    let priceOfBurger = priceOfBurger + 3.75
  }
  // output
  document.getElementById("end-price").innerHTML = "Your total is: $" + priceOfBurger + (priceOfBurger * TAX)
}

*/
