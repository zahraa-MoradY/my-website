let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
    ) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}