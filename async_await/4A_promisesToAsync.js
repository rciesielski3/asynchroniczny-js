function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

fetchData("https://swapi.dev/api/people/1");
