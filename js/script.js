// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const negative = document.getElementById("negative").checked
  let randomNumber = Math.floor(Math.random() * 6) + 1

  // process
  if (negative == true) {
    randomNumber = randomNumber * (-1)
    document.getElementById("answer").innerHTML = "The random number is: " + randomNumber
  } else {
    document.getElementById("answer").innerHTML = "The random number is: " + randomNumber
  }
}