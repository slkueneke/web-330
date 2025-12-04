/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignments

  Author: Shannon Kueneke
  Date: December 3, 2025
  Filename: chefs.js
*/

'use strict';

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    chefName: 'Bob',
    specialty: 'Sauces',
    weakness: 'Desserts',
    restaurantLocation: 'Paris, France',
  },
  {
    chefName: 'June',
    specialty: 'BBQ',
    weakness: 'Vegetarian',
    restaurantLocation: 'St. Louis, MO, USA',
  },
  {
    chefName: 'Kevin',
    specialty: 'Pizza',
    weakness: 'Asian Cuisine',
    restaurantLocation: 'Florence, Italy',
  },
];

  // These functions should return a promise that resolves with the chef's information after a delay
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[0]);
    }, 2000);
  });
}

function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[1]);
    }, 3000);
  });
}

function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[2]);
      //reject("Chef details unable to be retrieved");
    }, 4000);
  });
}



Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    let chefNum = 1;
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log(result.value);
        populateData(result.value, chefNum);
        chefNum++;
      } else {
        console.log('An error occurred:', result.reason);
        let thisError = document.querySelector('#chef' + chefNum + ' .error p');
        thisError.textContent = "ERROR: " + result.reason;
        chefNum++;

      }
    });
  }
);

function populateData(chefObj, chefNumber) {
  let thisChef = document.querySelector("#chef" + chefNumber);
  let chefData = chefObj;

  for (let key in chefData) {
    let elBuilder = thisChef.querySelector("." + key + " span");
    elBuilder.textContent = chefData[key];
  }
}