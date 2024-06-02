
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  const backButton = document.getElementById("backButton");
  const customerForm = document.getElementById(
    "customerDetailsForm"
  );
  const paymentForm = document.getElementById("paymentDetailsForm");

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    // Hide the customer details form
    customerForm.style.display = "none";
    // Show the payment details form
    paymentForm.style.display = "block";
  });

  // Event listener for the back button
  backButton.addEventListener("click", function () {
    // Show the customer details form
    customerForm.style.display = "block";
    // Hide the payment details form
    paymentForm.style.display = "none";
  });
});
