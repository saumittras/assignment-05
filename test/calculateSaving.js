document.getElementById("calculate").addEventListener("click", function () {
  const income = parseFloat(getInputValuById("income"));
  const softwareCost = parseFloat(getInputValuById("software"));
  const courseCost = parseFloat(getInputValuById("courses"));

  const internetCost = parseFloat(getInputValuById("internet"));
  const totalCost = softwareCost + courseCost + internetCost;

  const balance = parseFloat(income) - totalCost;
  addInnerTextById("balance", balance);
  addInnerTextById("total-expenses", totalCost);
  const resultId = document.getElementById("results");
  resultId.classList.remove("hidden");
});
