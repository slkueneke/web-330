"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Shannon Kueneke
      Date:   November 3, 2025

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

//run showData() when submit is clicked
document.getElementById('submitButton').onclick = function() {
  showData();
}

//show data on the page
function showData() {
  let formFields = document.querySelectorAll("#profile input, #profile textarea, #profile select");
  formFields.forEach(function(field) {
    let fieldID = field.id;
    let fieldValue = field.value;
    sessionStorage.setItem(fieldID, fieldValue);
  });

  location.href = "project09-02b.html";
}
