document.addEventListener("DOMContentLoaded", function() {
    fetch("../html/header.html")
        .then(res => res.text())
        .then(data => {
            const headerPlaceholder = document.createElement("div");
            headerPlaceholder.id = "header-placeholder";
            document.body.insertBefore(headerPlaceholder, document.body.firstChild);
            headerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});