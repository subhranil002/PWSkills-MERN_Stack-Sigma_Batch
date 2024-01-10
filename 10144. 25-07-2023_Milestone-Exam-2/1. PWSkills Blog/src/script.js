const togglePopup = () => {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    if (popup.style.display === "none") {
        popup.style.display = "flex";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
