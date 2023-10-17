console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    // console.log(response);
    // console.log(typeof response);
    const data = await response.json();
    // console.log(data);
    // console.log(typeof data);

    const foundItem = data.results.find((element) => element.name === "R2-D2");
    // console.log(foundItem)
    const eyeColor = foundItem.eye_color;
    console.log(eyeColor);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
