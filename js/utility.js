// Get Input value by ID(string value)
function getInputValuById(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

// remove class name by id and ClassName
function removeClassNameById(id) {
  const ccc = document.getElementById(id);
  ccc.classList.remove("hidden");
}

// add class name by id and ClassName
function addClassNameById(id, className) {
  document.getElementById(id).classList.add(className);
}

//Function for add donate history
function addDonateHistory(donateBlance, place) {
  const donateHistory = document.createElement("div");
  donateHistory.classList.add(
    "border",
    "w-10/12",
    "mx-auto",
    "rounded-lg",
    "bg-white",
    "border-gray-300",
    "py-8"
  );
  const newDateTime = new Date();
  newDateTime.setFullYear(2024);

  donateHistory.innerHTML = `
        <h1 class="text-xl  font-bold text-[rgb(17,17,17)] px-4 pb-4">
          ${donateBlance} Taka is Donated for ${place}, Bangladesh
        </h1>
        <p class="text-base text-[rgba(17, 17, 17, 0.7)] font-light px-4">
          ${newDateTime}
        </p>
    `;
  const historySection = document.getElementById("history");

  historySection.insertBefore(donateHistory, historyContainer.firstChild);
}
