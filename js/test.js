// remove button style id1 for style button and style remove button
function buttonStyleAddById(id1, id2) {
  document
    .getElementById(id2)
    .classList.add(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  document.getElementById(id1).classList.add("text-gray-600");

  document
    .getElementById(id1)
    .classList.remove(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
}
