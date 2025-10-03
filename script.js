// Navbar toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcons = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    // menuIcons.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    if (isOpen) {
        // If menu is open, show the close (X) icon
        menuIcons.setAttribute("class", "ri-close-line");
    } else {
        // If menu is closed, show the hamburger icon
        menuIcons.setAttribute("class", "ri-menu-line");
    }
});

// Animation
const scrollRevealOption = {
    distance : "50px",
    origin : "bottom",
    duration : 1000
};

ScrollReveal().reveal(".left", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".right img", {
    ...scrollRevealOption,
    origin : "right"
});
ScrollReveal().reveal(".heading", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".para", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".box", {
    ...scrollRevealOption,
    delay : 1000
});
ScrollReveal().reveal(".left-box", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".mid", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".right-box", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".left-box li", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".right-box li", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".blog-box", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".contact-left", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".contact-right", {
    ...scrollRevealOption,
    delay : 500
});
ScrollReveal().reveal(".footer-col", {
    ...scrollRevealOption,
    delay : 500
});