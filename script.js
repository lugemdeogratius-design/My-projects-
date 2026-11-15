const buttons=
document.querySelectorAll(".product-card button");

buttons. forEach(function(button) {
    button. onclick = function() {
        alert("product added to basket!");
    };
});