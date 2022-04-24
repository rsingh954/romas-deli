fetch("./menu.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    loadMenu(jsondata);
  });

function loadMenu(data) {
  let { sandwiches } = data.menu;
  for (const prop in sandwiches) {
    const special = document.querySelector(".special");
    const card = document.createElement("div");
    const title = document.createElement("div");
    const priceContainer = document.createElement("div");
    const priceSmall = document.createElement("span");
    const priceLarge = document.createElement("span");
    const hr = document.createElement("hr");
    const textContainer = document.createElement("div");
    const description = document.createElement("div");
    console.log(sandwiches);
    card.classList.add("card");

    title.classList.add("card-title");

    priceContainer.classList.add("price");
    textContainer.classList.add("left");

    description.classList.add("description");
    console.log(sandwiches);
    title.textContent = prop;
    description.textContent =
      prop == "Gyro"
        ? ""
        : !sandwiches[prop].description
        ? "May include Mayonnaise, mustard, garlic sauce, lettuce, tomato, onions, and pickles."
        : sandwiches[prop].description;
    priceSmall.textContent = "S " + sandwiches[prop].small + " ";
    priceLarge.textContent =
      sandwiches[prop].large === undefined ? "" : "L " + sandwiches[prop].large;

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    priceContainer.appendChild(priceSmall);
    priceContainer.appendChild(priceLarge);

    card.appendChild(textContainer);
    card.appendChild(priceContainer);

    special.appendChild(card);
  }
}
let observedElements = document.querySelectorAll(".about-container");

const options = {
  //define your options
  threshold: 0.5,
};

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // define the event/property you want to use
      //do something with the element, in our case, add a class
      entry.target.classList.add("inview");
    } else {
      // OPTIONAL, in case you want to do something once the intersection is done
    }
  });
};

// create a new instance using our callback which contains our elements and actions, using the options we defined
let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach((element) => {
  observer.observe(element); // run the observer
});
