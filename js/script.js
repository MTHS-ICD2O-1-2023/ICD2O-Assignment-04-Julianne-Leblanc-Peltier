// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

// variable

function myButtonClicked() {
  // burger cost variable
  let priceOfBurger = 0
  // size variable
  const bigBurgerSize = document.getElementById("option-big-burger").checked
  // ingredients variables
  const tomatoIngredient = document.getElementById("checkbox-tomato").checked
  const cheeseIngredient = document.getElementById("checkbox-cheese").checked
  const lettuceIngredient = document.getElementById("checkbox-lettuce").checked
  const mustardIngredient = document.getElementById("checkbox-mustard").checked
  const ketchupIngredient = document.getElementById("checkbox-ketchup").checked
  const picklesIngredient = document.getElementById("checkbox-pickles").checked
  // extra ingredients variables
  const oneExtraIngredient = document.getElementById("option-one-extra").checked
  const twoExtraIngredients = document.getElementById("option-two-extras").checked
  const threeExtraIngredients = document.getElementById("option-three-extras").checked
  const TAX = 0.13

  // add price of basic burger (basic burger is "Big" bigger burger is "Extra Big")
  if (bigBurgerSize == true) {
    // process
    priceOfBurger = priceOfBurger + 13.50
    // output
    document.getElementById("size-of-burger").innerHTML = "Big Burger"
    document.getElementById("price-of-burger-size").innerHTML = "$13.50"
  } else {
    // process
    priceOfBurger = priceOfBurger + 17.40
    // output
    document.getElementById("size-of-burger").innerHTML = "Extra Big Burger"
    document.getElementById("price-of-burger-size").innerHTML = "$17.40"
  }

  document.getElementById("ingredients-used").innerHTML = "You've selected the following ingredients:"

  // print the ingredients checked by user
  if (tomatoIngredient == true) {
    document.getElementById("tomato-used").innerHTML = "tomato"
  }

  if (cheeseIngredient == true) {
    document.getElementById("cheese-used").innerHTML = "cheese"
  }

    if (lettuceIngredient == true) {
    document.getElementById("lettuce-used").innerHTML = "lettuce"
  }

  if (mustardIngredient == true) {
    document.getElementById("mustard-used").innerHTML = "mustard"
  }

  if (ketchupIngredient == true) {
    document.getElementById("ketchup-used").innerHTML = "ketchup"
  }

  if (picklesIngredient == true) {
    document.getElementById("pickles-used").innerHTML = "pickles"
  }

  // additional fees if extras are true
  if (oneExtraIngredient == true) {
    // process
    priceOfBurger = priceOfBurger + 1.250
    // output
    document.getElementById("extra-ingredients").innerHTML = "1 extra"
        document.getElementById("extra-ingredients-price").innerHTML = "$1.25"
  } else if (twoExtraIngredients == true) {
    // process
    priceOfBurger = priceOfBurger + 2.50
    // output
    document.getElementById("extra-ingredients").innerHTML = "2 extras"
    document.getElementById("extra-ingredients-price").innerHTML = "$2.50"
  } else if (threeExtraIngredients == true) {
    // process
    priceOfBurger = priceOfBurger + 3.750
    // output
    document.getElementById("extra-ingredients").innerHTML = "3 extras"
    document.getElementById("extra-ingredients-price").innerHTML = "$3.75"
  } else { // if no extas are checked
    priceOfBurger = priceOfBurger + 0.00
  }

  // output end price ** BEFORE TAX
  document.getElementById("end-cost-text").innerHTML = "Price is:"
  document.getElementById("end-cost").innerHTML = "$" + (priceOfBurger).toFixed(2) + " + PLUS TAX"

  // output end total
  document.getElementById("end-price-text").innerHTML = "Your total is:"
  document.getElementById("end-price").innerHTML = "$" + (priceOfBurger + (priceOfBurger * TAX)).toFixed(2)
}
