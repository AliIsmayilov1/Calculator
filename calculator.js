let btns = document.getElementsByTagName("button")
let opt
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
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#EEE4B1"
    }
    document.getElementById("rst").style.backgroundColor = "red" 
    document.getElementById("eql").style.backgroundColor = "#5F374B"
    document.getElementById("dl").style.backgroundColor = "#5F374B"
}
function theme2() {
    document.body.style.backgroundColor = "#5356FF"
    document.getElementById("result").style.backgroundColor = "#378CE7"
    document.getElementById("operators").style.backgroundColor = "#67C6E3"
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#DFF5FF"
        // btns[i].style.color = "black"
    }
    document.getElementById("rst").style.backgroundColor = "red" 
    document.getElementById("eql").style.backgroundColor = "#378CE7"
    document.getElementById("dl").style.backgroundColor = "#378CE7"
}
function theme3() {
    document.body.style.backgroundColor = "#496989"
    document.getElementById("result").style.backgroundColor = "#58A399"
    document.getElementById("operators").style.backgroundColor = "#A8CD9F"
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#E2F4C5"
    }
    document.getElementById("rst").style.backgroundColor = "red" 
    document.getElementById("eql").style.backgroundColor = "#58A399"
    document.getElementById("dl").style.backgroundColor = "#58A399"
}
function Del() {
    document.getElementById("result").innerText = Math.trunc(+document.getElementById("result").innerText / 10)
    if (document.getElementById("result").innerText == 0) {
        document.getElementById("result").innerText = ""
    }
}
let sum1
let sum2
let sum
function plus() {
    sum1 = document.getElementById("result").innerText;
    document.getElementById("result").innerText = ""
    opt = "+"
}
let mns1
let mns2
let mns
function minus() {
    mns1 = document.getElementById("result").innerText;
    document.getElementById("result").innerText = ""
    opt = "-"
}
let vrm1
let vrm2
let vrm
function multiply() {
    vrm1 = document.getElementById("result").innerText
    document.getElementById("result").innerText = ""
    opt = "*"
}

let blm1
let blm2
let blm
function divide() {
    blm1 = document.getElementById("result").innerText
    document.getElementById("result").innerText = ""
    opt = "/"
}

function Reset() {
    document.getElementById("result").innerText = ""
}
function point (){
    document.getElementById("result").innerText += "."
}

function equals() {
    if (opt == "+") {
        sum2 = document.getElementById("result").innerText;
        sum = Number(sum1) + Number(sum2);
        document.getElementById("result").innerText = sum
    }
    if (opt == "-") {
        let mns2 = document.getElementById("result").innerText;
        if (mns1 > mns2) {
            mns = Number(mns1) - Number(mns2)
        }
        else {
            mns = Number(mns2) - Number(mns1)
        }
        document.getElementById("result").innerText = mns
    }
    if (opt == "*") {
        vrm2 = document.getElementById("result").innerText
        vrm = Number(vrm1) * Number(vrm2)
        document.getElementById("result").innerText = vrm
    }
    if (opt == "/") {
        blm2 = document.getElementById("result").innerText
        blm = Number(blm1) / Number(blm2)
        document.getElementById("result").innerText = blm
    }
}