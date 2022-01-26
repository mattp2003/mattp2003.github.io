function revealMessage() {
    document.getElementById("process").style.display = "block"; 
}

function switchColorTheme() {
    var sId = document.body.id === "color_mode" ? "dark_mode" : "color_mode";
    document.body.id = sId;
}