"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Shannon Kueneke
      Date:   November 3, 2025

      Filename: project09-02b.js
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

//populate data from sessionStorage to table
function populateData() {
  let orderTDs = document.querySelectorAll("#order td");
  orderTDs.forEach(function(td) {
    let tdID = td.id;
    document.getElementById(tdID).textContent = sessionStorage.getItem(tdID);
  });
}
populateData();
