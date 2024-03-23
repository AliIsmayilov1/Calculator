
function Type1() {
    document.getElementById("result").innerText = document.getElementById("a").innerText
}
function Type2() {
    document.getElementById("result").innerText = document.getElementById("b").innerText
}
function theme1() {
    document.body.style.backgroundColor = "#430A5D"
    document.getElementById("result").style.backgroundColor = "#5F374B"
    document.getElementById("operators").style.backgroundColor = "#8C6A5D"
}
function theme2() {
    document.body.style.backgroundColor = "#5356FF"
    document.getElementById("result").style.backgroundColor = "#378CE7"
    document.getElementById("operators").style.backgroundColor = "#67C6E3"
}
function theme3() {
    document.body.style.backgroundColor = "#FF204E"
    document.getElementById("result").style.backgroundColor = "#A0153E"
    document.getElementById("operators").style.backgroundColor = "#5D0E41"
}
console.log(document.getElementById("a").innerText);
console.log(document.getElementById("result").innerText);