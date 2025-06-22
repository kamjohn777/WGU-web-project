document.addEventListener("DOMContentLoaded", function() {
    // Load the footer
    fetch("../html/footer.html")
        .then(res => res.text())
        .then(data => {
            const footerPlaceholder = document.createElement("div");
            footerPlaceholder.id = "footer-placeholder";
            document.body.appendChild(footerPlaceholder); // Append footer at the end of the body
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});