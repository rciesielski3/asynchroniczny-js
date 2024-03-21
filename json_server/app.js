// keep track of current page and limit of books per page

async function loadBooks() {
  // get books based on filters
  // _page
  // _limit
  // _sort
  // _author_like
  // add them to the dom
}

async function addBook() {
  // get data from DOM
  // POST data to database
  // load again newest books
}

async function deleteBook(id) {
  // delete book
  // load newest books
}

function nextPage() {
  // go to the next page and load books
}

function prevPage() {
  // go to previous page and load the books
}

// load books once DOM content is loaded
document.addEventListener("DOMContentLoaded", loadBooks);

// Additional tasks
// 1. add select to chose how many elements we want to see on a page
// 2. edit books, only name of the book
// 3. sortowanie rosnące i malejące dla roku i tytułu
