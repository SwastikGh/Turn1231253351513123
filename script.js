function revealContent() {
    var revealContent = document.getElementById("reveal-content");
    var revealButton = document.querySelector(".reveal-button");
    if (revealContent.style.display === "block") {
        revealContent.style.display = "none";
        revealButton.textContent = "Reveal";
    } else {
        var countdown = 10;
        var interval = setInterval(function() {
            if (countdown > 0) {
                revealButton.textContent = countdown;
                countdown--;
            } else {
                clearInterval(interval);
                revealButton.textContent = "Close";
                revealContent.style.display = "block";
            }
        }, 500);
    }
}