// Get Input value by ID(string value)
function getInputValuById(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

// get innerText by id
function getInnerTextById(id) {
  const innerTextValue = parseFloat(document.getElementById(id).innerText);
  return innerTextValue;
}
// Blance validation
function donateBlanceValidation(mainBlance, donateBalance) {
  if (mainBlance < donateBalance) {
    return alert("Insufflation Balance");
  }
}

// added the donation amount to the noyakhali Blance
function addDonationAmount(sectionId, sectionBalance, donateAmount) {
  document.getElementById(sectionId).innerText = (
    sectionBalance + donateAmount
  ).toFixed(2);
}

//reduce the donate amount from main Balance
function reduceDonationAmount(mainBlances, donateAmount) {
  document.getElementById("main-blance").innerText = (
    mainBlances - donateAmount
  ).toFixed(2);
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
    "py-8",
    "mb-6"
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

  historySection.insertBefore(donateHistory, historySection.firstChild);
}

// togle button by two ID
function buttonStyleAddById(id1, id2) {
  document.getElementById(id2).classList.add("font-semibold", "bg-[#B4F461]");
  document.getElementById(id1).classList.add("font-medium", "bg-transparent");

  document
    .getElementById(id2)
    .classList.remove("font-medium", "bg-transparent");
  document
    .getElementById(id1)
    .classList.remove("font-semibold", "bg-[#B4F461]");
}
