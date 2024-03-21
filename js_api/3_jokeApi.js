// Objective: Fetch and display a random joke, introducing basic error handling concepts.

async function fetchJoke(id, range, types) {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist&idRange=1-319&amount=10"
    );
    const joke = await response.json();
    console.log(joke);
    if (joke.type === "single") {
      console.log(`Joke: ${joke.joke}`);
    } else {
      console.log(`Setup: ${joke.setup}`);
      console.log(`Delivery: ${joke.delivery}`);
    }
  } catch (error) {
    console.error("Failed to fetch joke:", error);
  }
}

fetchJoke();
