const toggleButton = document.getElementById("dark-light-toggle");
toggleButton.addEventListener("click", () => toggleDarkLight());

const toggleDarkLight = () => {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

const loadTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
};

loadTheme();

/*

*/

//==============================================================

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const spansTags = document.getElementsByTagName("span");

let filteredElements = [];

for (let i = 0; i < spansTags.length; i++) {
  if (!spansTags[i].classList.contains("notHacked")) {
    filteredElements.push(spansTags[i]);
  }
}
console.log(filteredElements);

for (let element of filteredElements) {
  element.addEventListener("mouseover", (e) => {
    let iterations = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= e.target.dataset.value.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 40);
  });
}

/*

document.querySelector("h1").onmouseover = (e) => {
  let iterations = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= e.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1;
  }, 60);
};
*/
