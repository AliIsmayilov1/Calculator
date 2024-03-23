function Type1() {
    document.getElementById("result").innerText += document.getElementById("a").innerText
}
function Type2() {
    document.getElementById("result").innerText += document.getElementById("b").innerText
}
function Type3() {
    document.getElementById("result").innerText += document.getElementById("c").innerText
}
function Type4() {
    document.getElementById("result").innerText += document.getElementById("d").innerText
}
function Type5() {
    document.getElementById("result").innerText += document.getElementById("e").innerText
}
function Type6() {
    document.getElementById("result").innerText += document.getElementById("f").innerText
}
function Type7() {
    document.getElementById("result").innerText += document.getElementById("g").innerText
}
function Type8() {
    document.getElementById("result").innerText += document.getElementById("k").innerText
}
function Type9() {
    document.getElementById("result").innerText += document.getElementById("h").innerText
}
function Type0() {
    document.getElementById("result").innerText += document.getElementById("z").innerText
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
function Del() {
    document.getElementById("result").innerText = Math.trunc(+document.getElementById("result").innerText / 10)
    if (document.getElementById("result").innerText == 0) {
        document.getElementById("result").innerText = ""
    }
}
function plus() {
    document.getElementById("result").innerText = ""
}

function equals() {
    let sum1 = document.getElementById("result").innerText;
    let sum2 = document.getElementById("result").innerText;
    let sum = +sum1 + +sum2;
    document.getElementById("result").innerText = sum
}
function minus() {
    let mns1 = document.getElementById("result").innerText;
    let mns2 = documnet.getElementById("result").innerText;
    if (mns1 > mns2) {
        let mns = +mns1 - +mns2
        document.getElementById("result").innerText = mns
    }
    else {
        let mns = +mns2 - +mns1
        document.getElementById("result").innerText = mns
    }
}
