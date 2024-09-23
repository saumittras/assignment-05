document.getElementById("donateFeni").addEventListener("click", function () {
  // getting input value by id
  const feniDonateAmount = getInputValuById("feniDonateInput");
  console.log(feniDonateAmount);

  // input validation amount validationInput(parseAmount)
  validationInput(feniDonateAmount);

  // feni current blance
  const feniBlance = getInnerTextById("feni-amount");
  console.log(feniBlance);

  //Get Main Blance Amount
  const mainBlance = getInnerTextById("main-blance");
  console.log(mainBlance);

  // Blance validation
  donateBlanceValidation(mainBlance, feniDonateAmount);

  // added the donation amount to the noyakhali Blance
  addDonationAmount("feni-amount", feniBlance, feniDonateAmount);

  //reduce the donate amount from main Balance
  reduceDonationAmount(mainBlance, feniDonateAmount);

  // Added transetion conformation modal
  my_modal_5.showModal();

  // added history
  addDonateHistory(feniDonateAmount, "Relief in Feni");
});
