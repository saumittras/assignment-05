document
  .getElementById("donateNoyakhali")
  .addEventListener("click", function () {
    const noyakhaliDonateAmount = parseFloat(
      document.getElementById("noyakhaliAmount").value
    );

    // Input validation for donate amount input
    if (isNaN(noyakhaliDonateAmount) || noyakhaliDonateAmount <= 0) {
      return alert(
        "⚠️Ivalid Donate Amount⚠️. Please Enter a Valid Input Amount"
      );
    }

    const noyakhaliBlance = parseFloat(
      document.getElementById("noyakhali-amount").innerText
    );
    const mainBlance = parseFloat(
      document.getElementById("main-blance").innerText
    );
    // Blance validation
    if (mainBlance < noyakhaliDonateAmount) {
      return alert("Insufflation Balance");
    }
    // added the donation amount to the noyakhali Blance
    document.getElementById("noyakhali-amount").innerText = (
      noyakhaliBlance + noyakhaliDonateAmount
    ).toFixed(2);
    document.getElementById("main-blance").innerText = (
      mainBlance - noyakhaliDonateAmount
    ).toFixed(2);

    my_modal_5.showModal();
    // will added a histoy from here
  });
