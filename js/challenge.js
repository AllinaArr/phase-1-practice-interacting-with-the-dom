const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");
const likesUl = document.querySelector(".likes");
const submitBtn = document.querySelector("#submit");
const comment = document.querySelector(".comments");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");

var counterLocation = document.querySelector("#counter");
var counterValue = parseInt(counterLocation.textContent);

//

function increaseCounter() {
  counterValue += 1;
  counterLocation.textContent = counterValue;
}
// Set an interval to call the increaseCounter function every second
var interval = setInterval(increaseCounter, 1000);

plusBtn.addEventListener("click", function () {
  counterValue += 1;
  counterLocation.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue -= 1;
    counterLocation.textContent = counterValue;
  }
});

var timesCount = {};

heartBtn.addEventListener("click", () => {
  var count = timesCount[counterValue];
  count = (timesCount[counterValue] || 0) + 1;

  var likesLi = document.createElement("li");
  likesLi.textContent = `${counterValue} has been liked  ${count}  times `;
  likesUl.append(likesLi);
});

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var parag = document.createElement("p");
  parag.textContent = commentInput.value;
  comment.appendChild(parag);
});

pauseBtn.addEventListener("click", () => {
  if (pauseBtn.textContent === "pause") {
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    submitBtn.disabled = true;
    pauseBtn.textContent = "resume";
    clearInterval(interval);
  } else {
    pauseBtn.textContent = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    submitBtn.disabled = false;
  }
});
