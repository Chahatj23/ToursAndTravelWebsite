// JavaScript for form submission and validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
  
      // Create an object to hold the form values
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
  
      // You can access the form values like this:
      const name = formValues["name"];
      const email = formValues["email"];
      const phone = formValues["phone"];
      const departureDate = formValues["departure-date"];
      const passengers = formValues["passengers"];
      const message = formValues["message"];
  
      // You can perform validation or further processing here
  
      // For demonstration purposes, let's log the form values
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Phone: " + phone);
      console.log("Departure Date: " + departureDate);
      console.log("Passengers: " + passengers);
      console.log("Message: " + message);
  
      // Reset the form (you can remove this if not needed)
      form.reset();
    });
  });
  