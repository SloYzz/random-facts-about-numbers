const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

const btn = document.querySelector("#joke-btn");

function handleClick(e) {
  const modalBody = document
    .querySelector("#jokeModal")
    .querySelector(".modal-body");

  modalBody.innerHTML = ` <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>`;
  fetch(JOKE_API_URL)
    .then((res) => res.json())
    .then((res) => {
      modalBody.innerHTML = res.joke;
    })
    .catch((err) => {
      modalBody.innerHTML = "Error loading joke";
    });
}

btn.addEventListener("click", handleClick);
