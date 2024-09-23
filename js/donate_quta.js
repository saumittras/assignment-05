document.getElementById("donateQuta").addEventListener("click", function () {
  // getting input value by id
  const qutaDonateAmount = getInputValuById("qutaDonateInput");
  console.log(qutaDonateAmount);

  // input validation amount validationInput(parseAmount)
  validationInput(qutaDonateAmount);

  // feni current blance
  const qutaBlance = getInnerTextById("quta-amount");
  console.log(qutaBlance);

  //Get Main Blance Amount
  const mainBlance = getInnerTextById("main-blance");
  console.log(mainBlance);

  // Blance validation
  donateBlanceValidation(mainBlance, qutaDonateAmount);

  // added the donation amount to the noyakhali Blance
  addDonationAmount("quta-amount", qutaBlance, qutaDonateAmount);

  //reduce the donate amount from main Balance
  reduceDonationAmount(mainBlance, qutaDonateAmount);

  // Added transetion conformation modal
  my_modal_5.showModal();

  // added history
  addDonateHistory(qutaDonateAmount, "Aid for Injured in Quota Movement");
});
