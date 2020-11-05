function forclear() {
    removeZero()
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == 0) {
         value = ""
         document.getElementById("output").innerHTML = value;
    }
}
function perc() {
    removeZero()
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
   
}

function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var expression = eval(new String(equation));
    var solved = eval(expression.toString());
    document.getElementById("output").innerHTML = solved;
}
