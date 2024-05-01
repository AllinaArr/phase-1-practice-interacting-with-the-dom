const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");

plusBtn.addEventListener("click", function () {
  var counterLocation = document.querySelector("#counter");
  var counterValue = parseInt(counterLocation.textContent);
  counterValue += 1;
  counterLocation.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  var counterLocation = document.querySelector("#counter");
  var counterValue = parseInt(counterLocation.textContent);
  if (counterValue > 0) {
    counterValue -= 1;
    counterLocation.textContent = counterValue;
  }
});
