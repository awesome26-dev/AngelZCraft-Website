document.addEventListener("scroll", () => {
    let navbar = document.getElementsByClassName("navbar")[0];
    if (scrollY > 1) {
        navbar.classList.add("navbar-scroll")
    } else
        navbar.classList.remove("navbar-scroll")
})