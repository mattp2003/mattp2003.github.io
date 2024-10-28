document.getElementById("arrow").onclick = function() {
    var overlay = document.getElementById("overlay");
    overlay.setAttribute("transition-style", "in:wipe:left");
    setTimeout(function() {
        window.location.href = "home.html";
    }, 2500);
};