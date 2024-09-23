document
  .getElementById("history-button")
  .addEventListener("click", function () {
    console.log(" clicked history Button");
    buttonStyleAddById("donate-button", "history-button");
    removeClassNameById("history");
    addClassNameById("donate", "hidden");
  });

document.getElementById("donate-button").addEventListener("click", function () {
  console.log(" clicked donate Button");
  buttonStyleAddById("history-button", "donate-button");
  removeClassNameById("donate");
  addClassNameById("history", "hidden");
});
