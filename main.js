console.log("working")

const heading = document.querySelector("#dad-jokes")



// make a async function to use the API 
// 

async function getJoke() {
const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
const dadJoke = await response.json();
heading.innerHTML = dadJoke.joke;

}

getJoke();


// plan for linking to DOM
// select the H1 element in the HTML (doc.querySelector)
// replace the text in the h1 with the api function (joke item)

