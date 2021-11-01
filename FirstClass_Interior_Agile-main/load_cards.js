function createCard(title, description, image) {
  wrapper = document.createElement("div");
  wrapper.classList.add("card");
  wrapper.style = "float: none; margin: 0 auto; width: 30rem;";

  img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = image;
  img.alt = title;
  img.style = "max-height: 15rem; object-fit: cover;";

  div = document.createElement("div");
  div.classList.add("card-body");

  h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerHTML = title;

  p = document.createElement("p");
  p.classList.add("card-text");
  p.innerHTML = description;

  div.appendChild(h5);
  div.appendChild(p);

  wrapper.appendChild(img);
  wrapper.appendChild(div);

  return wrapper;
}

window.addEventListener("load", async () => {
  let dataDict = await fetch("/data.json");
  dataDict = dataDict.json();

  dataDict.then((data) => {
    for (let i = 1; i < 13; i++) {
      element = document.getElementById(i.toString());
      card = createCard(
        data[i.toString()][0],
        data[i.toString()][1],
        `/images/designs/${i}.jpg`
      );
      if (i === 2 || i === 5 || i === 8 || i === 11) {
        card.style =
          "float: none; margin: 0 auto; width: 50rem; height: 30rem;";
        card.children[1].children[0].style = "font-size: xx-large;";
        card.children[1].children[1].style = "font-size: x-large;";
      }
      element.appendChild(card);
    }
  });
});
