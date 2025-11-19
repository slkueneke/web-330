/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Shannon Kueneke
  Date: November 17, 2025
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables= [
  {
    tableNumber: 1,
    capacity: 4,
    isReserved: false
  },
  {
    tableNumber: 2,
    capacity: 2,
    isReserved: false
  },
  {
    tableNumber: 3,
    capacity: 6,
    isReserved: false
  }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // loop through tables array
  for (let i = 0; i < tables.length; i++) {
    //find obj for selectedTable number
    if (tables[i].tableNumber == tableNumber) {
      if (!tables[i].isReserved) {
        //book table
        tables[i].isReserved = true;

        setTimeout(function() {
          callback("success");
        }, time);
        break;
      } else {
        callback("fail");
      }
    }
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) { console.log('submit')
    e.preventDefault();

    function resMessaging(status) {
      if (status === "success") {
        document.getElementById("message").textContent = "Table has been successfully booked!";
      } else if (status === "fail") {
        document.getElementById('message').textContent = 'Error: Table is not available!';
      }
    }
    // get selected table number from form
    let selectedTable = document.getElementById("tableNumber").value;
    reserveTable(selectedTable, resMessaging, 2000);
  });
