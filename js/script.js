function slidetoggle() {
    var slider = document.getElementById("nav-slide");
    slider.style.height = window.innerHeight - 60 + "px";

    if (slider.style.right == "0px") {
        slider.style.right = "-100vw";
    }

    else {
        slider.style.right = "0px";
    }
}