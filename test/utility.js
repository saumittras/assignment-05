// Get Input value by ID(string value)
function getInputValuById(id) {
  return document.getElementById(id).value;
}

// Parse float value and fixed it 2 digit after fraction

function parseFolot2digin(value) {
  return parseFloat(value).toFixed(2);
}

// get innerText by id
function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}

// add innerText by ID,textstring or value
function addInnerTextById(id, text) {
  document.getElementById(id).innerText = text;
}

// remove class name by id and ClassName
function removeClassNameById(id) {
  const ccc = document.getElementById(id);
  ccc.classList.remove("hidden");
}
// add class name by id and ClassName
function removeClassNameById(id, className) {
  document.getElementById(id).classList.add(className);
}

// remove button style id1 for style button and style remove button
function buttonStyleAddById(id1, id2) {
  document
    .getElementById(id1)
    .classList.add(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  document.getElementById(id1).classList.add("text-gray-600");

  document
    .getElementById(id2)
    .classList.remove(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
}
