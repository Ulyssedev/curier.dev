var letters = "abcdefghijklmnopqrstuvwxyz";
var h1Element = document.querySelector("h1");
var iteration = 0;

var interval = setInterval(() => {

  clearInterval(interval);

  interval = setInterval(() => {
    h1Element.innerText = h1Element.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return h1Element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if(iteration >= h1Element.dataset.value.length){
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}, 0);