function toggle() {
    let extraContent = document.getElementById("extra");
    let buttonText = document.getElementById("moreButton")
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        buttonText.textContent = "Less";
    } else {
        extraContent.style.display = "none";
        buttonText.textContent = "More";
    }
}