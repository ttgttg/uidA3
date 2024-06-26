document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  const backButton = document.getElementById("backButton");
  const customerForm = document.getElementById("customerDetailsForm");
  const paymentForm = document.getElementById("paymentDetailsForm");

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    customerForm.style.display = "none";
    paymentForm.style.display = "block";
  });

  // Event listener for the back button
  backButton.addEventListener("click", function () {
    customerForm.style.display = "block";
    paymentForm.style.display = "none";
  });

  // Lead to order confirmation when user submits
  paymentForm.addEventListener("submit", submitted);

  function submitted(e) {
    if (!window.confirm("Are you sure?")) {
      e.preventDefault();
    } else {
      e.preventDefault();
      window.location.assign("order-confirmation.html");
    }
  }
});
