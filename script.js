// Function to perform a search
function performSearch() {
    const searchInput = document.querySelector('input[name="Search"]');
    const searchTerm = searchInput.value;
    alert('You searched for: ' + searchTerm);
}

// Function to add items to the cart
function addToCart() {
    let cartItems = parseInt(localStorage.getItem('cartItems')) || 0;
    cartItems++;
    localStorage.setItem('cartItems', cartItems.toString());
    alert('Item added to cart. Total items in cart: ' + cartItems);
}

//slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;

    function showSlide(index) {
        slideIndex = index;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex +1) % slider.children.length;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000);
});
