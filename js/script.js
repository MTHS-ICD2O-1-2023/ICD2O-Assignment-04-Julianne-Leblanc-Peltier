// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

// variable
let priceOfBurger = 0

function myButtonClicked() {
  // ingredients variables
  const tomatoIngredient = document.getElementById("checkbox-tomato").checked
/*  const cheeseIngredient = document.getElementById("checkbox-cheese").checked
  const lettuceIngredient = document.getElementById("checkbox-lettuce").checked
  const mustardIngredient = document.getElementById("checkbox-mustard").checked
  const ketchupIngredient = document.getElementById("checkbox-ketchup").checked
  const picklesIngredient = document.getElementById("checkbox-pickles").checked */
  // size variable
  const bigBurgerSize = document.getElementById("option-big-burger").checked
  // extra ingredients variables
  const oneExtraIngredient = document.getElementById("option-one-extra").checked
  const twoExtraIngredients = document.getElementById("option-two-extras").checked
  const threeExtraIngredients = document.getElementById("option-three-extras").checked
  const TAX = 0.13

  // add price of basic burger
  if (bigBurgerSize == true) {
    // process
    let priceOfBurger = priceOfBurger + 13.50
  } else {
    // process
    let priceOfBurger = priceOfBurger + 17.40
  }

  // additional fees if extras are true
  if (oneExtraIngredient == true) {
    // process
    let priceOfBurger = priceOfBurger + 1.250
  } else if (twoExtraIngredients == true) {
    // process
    let priceOfBurger = priceOfBurger + 2.50
  } else if (threeExtraIngredients == true) {
    // process
    let priceOfBurger = priceOfBurger + 3.750
  } else { // if no extas are checked
    let priceOfBurger = priceOfBurger + 0.00
  }

  // print the ingredients previously listed
  if (tomatoIngredient == true) {
    print("tomato")
  }

  // calculates TAX afterwards
  priceOfBurger = priceOfBurger + (priceOfBurger * TAX)

  // output
  document.getElementById("end-choices").innerHTML = "You've chosen: <br />" 
  document.getElementById("end-price").innerHTML = "Your total is: $" + priceOfBurger
}
