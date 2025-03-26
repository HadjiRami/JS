

let opennav = document.getElementById("opennav");
let close = document.getElementById("Closenav");
let side = document.getElementById("sidenav");

// Open the sidebar when "opennav" is clicked
opennav.onclick = function() {
    side.style.right = '0';  // Open the sidebar (bring it to the right edge)
}

// Close the sidebar when "Closenav" is clicked
close.onclick = function() {
    side.style.right = '-250px';  // Close the sidebar (move it out of view)
}
