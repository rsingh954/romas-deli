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

    title.textContent = prop;
    description.textContent = !sandwiches[prop].description
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
