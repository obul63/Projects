const cardNumberInput = document.querySelector(".card-number");

cardNumberInput.addEventListener("input", function (event) {
const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
});

document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.querySelector(".card-number");
    // const maxLength = parseInt(cardNumberInput.dataset.maxlength);
  
    cardNumberInput.addEventListener("input", function (event) {
      const input = event.target;
      const value = input.value.replace(/\s/g, " "); // Remove existing spaces
  
      if (value.length > 16) {
        input.value = value.slice(0, 16); // Limit input to the specified max length
      } else {
        // Insert spaces after every 4 digits
        input.value = value.replace(/(\d{4})/g, " $1 ").trim();
      }
    });
  });
  