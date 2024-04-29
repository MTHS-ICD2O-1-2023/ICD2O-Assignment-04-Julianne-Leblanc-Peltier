// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // variables
  const alwaysOnButtonChecked = document.getElementById("option-positive").checked
  const TAX = 0.13
  let priceOfBurger = 0

  if (alwaysOnButtonChecked == true) {
    // process
    let priceOfBurger = priceOfBurger + 5.0
  } else {
    // process
    let priceOfBurger = priceOfBuger = 7.50
  }

  if (alwaysOnButtonChecked2 == true) {
    // process
    let priceOfBurger = priceOfBurger + 1.20
  }
  else if (OnButtonCheck == true) {
    .// process
    let priceOfBurger = priceOfBurger + 2.50
  } else {
    // process
    let priceOfBurger = priceOfBurger + 3.75
  }
  // output
  document.getElementById("end-price").innerHTML = "Your total is: $" + priceOfBurger + (priceOfBurger * TAX)
}

*/
