console.log("НАЧАЛ ВЫПОЛНЯТЬСЯ MAIN JS");
const loader = (
  id
) => `<div data-js-loader=${id} class="spinner-border" role="status">
		            <span class="visually-hidden">Loading...</span>
	            </div>`;

number = prompt("Сколько чисел?");
createCards(Number(number));

function getRandomFactOfNumber(number, type) {
  const urlAPI = new URL("http://numbersapi.com/");
  const types = {
    math: "math",
    life: "trivia",
  };
  urlAPI.pathname += `${number}/${types[type]}`;

  document
    .querySelector(`[data-js-card="${number}"]`)
    .querySelector("p").innerHTML = loader(number);

  fetch(urlAPI.toString())
    .then((res) => res.text())
    .then((res) => {
      document.querySelector(`[data-js-loader="${number}"]`).remove();

      document
        .querySelector(`[data-js-card="${number}"]`)
        .querySelector("p").innerHTML = res;
    })
    .catch((err) => {
      document
        .querySelector(`[data-js-card="${number}"]`)
        .querySelector("p").innerHTML = "Error loading";
    });
}

function createCards(number) {
  const cardContainer = document.querySelector("#card-container");

  for (let i = 0; i < number; i++) {
    cardContainer.innerHTML += createCard(i, i);
    getRandomFactOfNumber(i, "math");
  }
}

function createCard(number, id) {
  return `<div data-js-card=${id} class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${number}</h5>
                    <p></p>
                </div>
            </div>`;
}
