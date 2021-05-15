function expand(button) {
    document.getElementById("expand").className = "expand";
    document.getElementById("btn").onclick = close;
    document.getElementById("chevron").classList = "fas fa-chevron-circle-up";
    document.getElementById("body").style.overflow = "hidden";
}
function close(button) {
    document.getElementById("expand").className = "expandhidden";
    document.getElementById("btn").onclick = expand;
    document.getElementById("chevron").classList = "fas fa-chevron-circle-down";
    document.getElementById("body").style.overflow = "hidden";
}
