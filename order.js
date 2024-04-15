document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let total = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const inputQuantity = checkbox.nextElementSibling; 
            const quantity = parseInt(inputQuantity.value, 10);
            if (quantity > 0) { 
                total += parseFloat(checkbox.dataset.price) * quantity;
            }
        }
    });
    document.getElementById('totalAmount').textContent = total.toFixed(2);
});
