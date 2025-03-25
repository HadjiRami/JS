let btn = document.getElementById("btn");

btn.onclick = function() {
    this.style.backgroundColor = "red";
    // this.style.display = "none"; // Uncomment to hide the button
    this.style.width = "120px";
    this.style.height = "40px";
};

btn.ondblclick = function() {
    this.style.background = "green";
    this.style.width = "102px";
    this.style.height = "60px";
};

btn.onmouseover = function() {
    this.style.backgroundColor = "lightblue";  // Change color on hover over button
};

window.onload = function() {
    btn.style.backgroundColor = "orange";
};