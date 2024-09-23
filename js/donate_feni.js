document.getElementById("donateFeni").addEventListener("click", function () {
  // getting input value by id
  const feniDonateAmount = getInputValuById("feniDonateInput");

  if (isNaN(feniDonateAmount) || feniDonateAmount <= 0) {
    alert("⚠️Ivalid Donate Amount⚠️. Please Enter a Valid Input Amount");
    return;
  }

  // feni current blance
  const feniBlance = getInnerTextById("feni-amount");

  //Get Main Blance Amount
  const mainBlance = getInnerTextById("main-blance");
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
