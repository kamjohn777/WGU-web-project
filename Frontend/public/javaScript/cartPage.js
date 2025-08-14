document.addEventListener("DOMContentLoaded", function () {
    const itemsDisplay = document.querySelector(".items-display");
    const subtotalEl = document.getElementById("subtotal");
    const discountEl = document.getElementById("discount");
    const deliveryEl = document.getElementById("delivery");
    const totalEl = document.getElementById("total");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        itemsDisplay.innerHTML = "";
        let subtotal = 0;

        cart.forEach((item, idx) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "cart-item";

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title;
            img.className = "cart-item-img";

            const detailsDiv = document.createElement("div");
            detailsDiv.className = "cart-item-details";
            detailsDiv.innerHTML = `
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-desc">Size: Large<br>Color: White</div>
            `;

            // Quantity controls (default 1 per item)
            const actionsDiv = document.createElement("div");
            actionsDiv.className = "cart-item-actions";
            const qtySpan = document.createElement("span");
            qtySpan.className = "cart-qty";
            qtySpan.textContent = item.qty || 1;

            const minusBtn = document.createElement("button");
            minusBtn.className = "cart-qty-btn";
            minusBtn.textContent = "−";
            minusBtn.onclick = () => {
                if ((item.qty || 1) > 1) {
                    item.qty = (item.qty || 1) - 1;
                    saveCart();
                    renderCart();
                }
            };

            const plusBtn = document.createElement("button");
            plusBtn.className = "cart-qty-btn";
            plusBtn.textContent = "+";
            plusBtn.onclick = () => {
                item.qty = (item.qty || 1) + 1;
                saveCart();
                renderCart();
            };

            const removeBtn = document.createElement("button");
            removeBtn.className = "cart-remove-btn material-symbols-outlined";
            removeBtn.textContent = "delete";
            removeBtn.onclick = () => {
                cart.splice(idx, 1);
                saveCart();
                renderCart();
            };

            actionsDiv.appendChild(minusBtn);
            actionsDiv.appendChild(qtySpan);
            actionsDiv.appendChild(plusBtn);
            actionsDiv.appendChild(removeBtn);

            itemDiv.appendChild(img);
            itemDiv.appendChild(detailsDiv);
            itemDiv.appendChild(actionsDiv);

            itemsDisplay.appendChild(itemDiv);

            subtotal += item.price * (item.qty || 1);
        });

        // Update summary
        subtotalEl.textContent = `$${subtotal}`;
        const discount = Math.round(subtotal * 0.2);
        discountEl.textContent = `-$${discount}`;
        const delivery = 15;
        deliveryEl.textContent = `$${delivery}`;
        totalEl.textContent = `$${subtotal - discount + delivery}`;
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Promo code logic (optional, just a stub)
    document.getElementById("apply-promo").onclick = () => {
        alert("Promo applied! (stub)");
    };

    document.querySelector(".checkout-btn").onclick = () => {
        if (cart.length > 0) {
            alert("Thank you for your order!");
            cart = [];
            saveCart();
            renderCart();
        } else {
            alert("Your cart is empty.");
        }
    };

    renderCart();
});