document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("customer-form");
  const customerDiv = document.getElementById("customer-info");
  const feedbackDiv = document.getElementById("feedback-info");

  // Load existing info from sessionStorage
  const storedInfo = JSON.parse(sessionStorage.getItem("customerInfo"));
  if (storedInfo) {
    displayInfo(storedInfo);
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const info = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      feedback: form.feedback.value,
      date: form.date.value
    };
    sessionStorage.setItem("customerInfo", JSON.stringify(info));
    displayInfo(info);
    form.reset();
  });

  function displayInfo(info) {
    customerDiv.innerHTML = `
      <p><strong>Name:</strong> ${info.name}</p>
      <p><strong>Email:</strong> ${info.email}</p>
      <p><strong>Phone:</strong> ${info.phone}</p>
      <p><strong>Date:</strong> ${info.date}</p>
    `;
    feedbackDiv.innerHTML = `
      <p><strong>Feedback / Custom Order:</strong> ${info.feedback}</p>
    `;
  }
});