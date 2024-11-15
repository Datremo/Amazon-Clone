// Mock Data Layer for tracking events
let dataLayer = [];

// Function to handle Add to Cart action
function addToCart(productName, productPrice, productImage) {
    console.log(`Adding ${productName} to cart at price ₹${productPrice}`);

    // Push the event to the data layer
    dataLayer.push({
        event: "addToCart",
        product: {
            name: productName,
            price: productPrice,
            image: productImage
        }
    });

    // Save cart data to localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice, image: productImage });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${productName} to cart!`);
    console.log(dataLayer);
}

// Function to handle Purchase action (checkout)
function checkout() {
    console.log("Checkout button clicked");

    // Push the purchase event to the data layer
    dataLayer.push({
        event: "purchase",
        items: JSON.parse(localStorage.getItem('cart')) || []
    });

    // Clear cart from localStorage
    localStorage.removeItem('cart');

    // Redirect to thank you message after purchase
    document.getElementById("cart-items").innerHTML = "<p>Thank you for the purchase!</p>";
}
