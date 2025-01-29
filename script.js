// Select left and right buttons for the first product slide
const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

// Scroll the first product slide to the right
rightBtn.addEventListener("click", function (event) {
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft += 1100; // Scroll by 1100px
    event.preventDefault(); // Prevent default anchor behavior
});

// Scroll the first product slide to the left
leftBtn.addEventListener("click", function (event) {
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -= 1100; // Scroll by -1100px
    event.preventDefault();
});

// Select left and right buttons for the second product slide
const leftBtn1 = document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");

// Scroll the second product slide to the right
rightBtn1.addEventListener("click", function (event) {
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft += 1100; // Scroll by 1100px
    event.preventDefault();
});

// Scroll the second product slide to the left
leftBtn1.addEventListener("click", function (event) {
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft -= 1100; // Scroll by -1100px
    event.preventDefault();
});

// Select left and right buttons for the third product slide
const leftBtn2 = document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");

// Scroll the third product slide to the right
rightBtn2.addEventListener("click", function (event) {
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft += 1100; // Scroll by 1100px
    event.preventDefault();
});

// Scroll the third product slide to the left
leftBtn2.addEventListener("click", function (event) {
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft -= 1100; // Scroll by -1100px
    event.preventDefault();
});

// Back to top functionality
const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth", // Smooth scrolling effect
    });
});

// Sidebar toggle functionality
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

// Open sidebar and overlay
sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active"); // Show sidebar
    cross.classList.add("active"); // Show close button
    black.classList.add("active"); // Show background overlay
    document.body.classList.add("stop-scroll"); // Prevent scrolling
});

// Close sidebar and overlay
cross.addEventListener("click", () => {
    sidebar.classList.remove("active"); // Hide sidebar
    cross.classList.remove("active"); // Hide close button
    black.classList.remove("active"); // Hide background overlay
    document.body.classList.remove("stop-scroll"); // Allow scrolling
});

// Sign-in modal toggle functionality
const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1"); // Toggle overlay for sign-in
    signin.classList.toggle("active"); // Toggle visibility of sign-in modal
    tri.classList.toggle("active"); // Toggle visibility of triangle pointer
    document.body.classList.toggle("stop-scroll"); // Toggle scroll prevention
});
