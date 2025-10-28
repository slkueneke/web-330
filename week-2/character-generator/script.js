/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Shannon Kueneke
  Date: October 25, 2025
  Filename: script.js
*/

"use strict";

function enableCTA() {
  document.getElementById("characterForm").onchange = function() {
    if (!!document.getElementById("heroName").value &&
        !!document.getElementById("heroGender").value &&
        !!document.getElementById("heroClass").value
    ) {
      document.getElementById("generateHero").removeAttribute("disabled");
    }
  };
}
enableCTA();


function createCharacter(name, gender, characterClass) {
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    },
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  if (this.getAttribute("disabled")) {
    return false;
  }

  // Get form values
  let name = document.getElementById("heroName").value;
  let gender = document.getElementById("heroGender").value;
  let char = document.getElementById("heroClass").value;

  // Create character
  let newCharacter = createCharacter(name, gender, char);

  // Display character information
  function addInfo() {
    let charName = newCharacter.getName();
    let charGender = newCharacter.getGender();
    let charClass = newCharacter.getClass();

    let welcomeMsg = '<p>WELCOME, ' + charGender.toUpperCase() + ' ' + charClass.toUpperCase() + ' ' + charName.toUpperCase() + '!</p><img src="images/' + charClass + '_' + charGender + '.png" alt="Hero Image" >';
    document.getElementById("characterForm").classList.add("hide");
    document.getElementById("characterOutput").innerHTML = welcomeMsg;

  }
  addInfo();
});