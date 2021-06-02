function expand(button) {
    document.getElementById("expand").className = "expand";
    document.getElementById("btn").onclick = close;
    document.getElementById("searchbar").className = "hidden";
    document.getElementById("chevron").classList = "fas fa-times";
}
function close(button) {
    document.getElementById("expand").className = "expandhidden";
    document.getElementById("btn").onclick = expand;
    document.getElementById("searchbar").className = "bar";
    document.getElementById("chevron").classList = "fas fa-bars";
}
