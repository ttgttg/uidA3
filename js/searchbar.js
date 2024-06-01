const icon = document.querySelector(".nav__search__icon");
const search = document.querySelector(".nav__search");
const clearButton = document.querySelector(".nav__search__clear");
icon.onclick = function loadSearch() {
  search.classList.toggle("active");
};


//If the user presses Enter and the input is not empty, navigate to the product page.
//If the user presses Enter and the input is empty, display an alert.
const input = document.getElementById("mySearch");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (input.value.trim() !== "") {
      window.location.assign("product-list.html");
    } else {
      alert("Please enter something to start browsing!");
    }
  }
});


//If the user clicks the clear button and the input is empty, display an alert.
//If the user clicks the clear button and the input is not empty, clear the input field.
clearButton.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter something to clear input!");
  } else {
    input.value = ""; // Clear the input field if it is not empty
  }
});
