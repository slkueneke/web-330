/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Shannon Kueneke
  Date: December 8, 2025
  Filename: script.js
*/

"use strict";

const movies = [
  {
    'movie-poster': 'images/movie_father.png',
    'movie-title': 'The Consolefather',
    'movie-director': 'Francis Ford Coppola',
    'movie-year': '1972',
    'movie-synopsis':
      'A powerful object-oriented patriarch logs his way through betrayal and inheritance in a sprawling codebase.',
  },
  {
    'movie-poster': 'images/movie_pulp.png',
    'movie-title': 'Pulp Function',
    'movie-director': 'Quentin Tarantino',
    'movie-year': '1994',
    'movie-synopsis':
      'A rogue developer writes chaotic, callback-heavy code that tangles the lives of asynchronous APIs across the web.',
  },
  {
    'movie-poster': 'images/movie_lord.png',
    'movie-title': 'The Lord of the Strings',
    'movie-director': 'Peter Jackson',
    'movie-year': '2001',
    'movie-synopsis':
      'A junior dev embarks on a quest to refactor legacy string concatenations into template literals before the deadline.',
  },
  {
    'movie-poster': 'images/movie_country.png',
    'movie-title': 'No Country for Old Syntax',
    'movie-director': 'The Coen Brothers',
    'movie-year': '2007',
    'movie-synopsis':
      'As ES6 takes over, a veteran coder struggles to survive in a ruthless land of arrow functions and destructuring.',
  },
  {
    'movie-poster': 'images/movie_harry.png',
    'movie-title': 'When Harry Met JSON',
    'movie-director': 'Rob Reiner',
    'movie-year': '1989',
    'movie-synopsis':
      'Two developers, one obsessed with XML and the other with JSON, keep bumping into each other across projects until they finally realize that structured data—and maybe love—is best shared in a lightweight format.',
  },
];

function fetchMovie(title) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      let index = getIndex(title); console.log(index)
      if (index !== undefined) {
        document.getElementById("error-message").textContent = "";
        resolve(movies[index]);
        console.log("movie found");
      } else {
        reject("Movie not found.");
      }
    },2000);
  })
}

async function displayMovie(title) {
  try {
    let message = await fetchMovie(title);
    console.log(message)
    console.log("fetch movie successfully found movie.");

    fillFields("movie-title", message["movie-title"]);
    fillFields("movie-director", message["movie-director"]);
    fillFields("movie-year", message["movie-year"]);
    fillFields("movie-synopsis", message["movie-synopsis"]);

    document.getElementById("movie-poster").innerHTML = "<img src='" + message["movie-poster"] + "' alt='movie poster'>";
  } catch(error) {
    clearMovie();
    document.getElementById("error-message").textContent = error;
  }
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  let getInput = document.getElementById("title-input").value.trim().toLowerCase();
  displayMovie(getInput);
});

function getIndex(title) {
  for (let i = 0; i < movies.length; i++) {
    let thisTitle = title.toLowerCase();
    let objTitle = movies[i]['movie-title'].toLowerCase();
    if (objTitle === thisTitle) {
      return i;
    }
  }
}

function fillFields(field, val) {
  document.getElementById(field).innerText = val;
}

function clearMovie() {
  document.getElementById('movie-poster').innerHTML = '';
  document.getElementById('movie-title').innerHTML = '';
  document.getElementById('movie-director').innerHTML = '';
  document.getElementById('movie-year').innerHTML = '';
  document.getElementById('movie-synopsis').innerHTML = '';
}