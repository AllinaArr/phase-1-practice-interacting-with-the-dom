const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");

var counterLocation = document.querySelector("#counter");
var counterValue = parseInt(counterLocation.textContent);

// Define the increaseCounter function
function increaseCounter() {
  counterValue += 1; // Increment the counter value by 1
  counterLocation.textContent = counterValue; // Update the counter display
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
