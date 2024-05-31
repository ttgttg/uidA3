const icon = document.querySelector(".nav__search__icon");
const search = document.querySelector(".nav__search");
const clearButton = document.querySelector(".nav__search__clear");
icon.onclick = function loadSearch() {
  search.classList.toggle("active");
};



//check if input is valid, if yes take user to the product page
const input = document.getElementById("mySearch");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (input.value.trim() !== "") {
      window.location.assign("../html/product_page.html");
    } else {
      alert("Please enter something to start browsing!");
    }
  }
});

//check whether the user has entered something in the search bar
clearButton.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter something to start browsing!");
  } else {
    input.value = ""; // Clear the input field if it is not empty
  }
});
