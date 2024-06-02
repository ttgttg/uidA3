document.addEventListener('DOMContentLoaded', function() {
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');

    continueShoppingBtn.addEventListener('click', function() {
        // Navigate to the previous page in the browser's history
        window.history.back();
    });
});
