function makeBig() {
    alert("Hello, world!");
    document.getElementById("input").style.fontSize = "24pt";
}

function change() {
    alert("New Change has Occurred");
    var fancy = document.getElementById("fancy");
    if(fancy.checked) {
        document.getElementById("input").style.fontWeight = "bold";
        document.getElementById("input").style.color = "blue";
        document.getElementById("input").style.textDecoration = "underline";
    }
    else {
        document.getElementById("input").style.fontWeight = "normal";
        document.getElementById("input").style.color = "black";
        document.getElementById("input").style.textDecoration = "none";
    }
}

function Moo() {
    alert("Moo has Occurred");
    document.getElementById("input").value = document.getElementById("input").value.toUpperCase();
    var str = document.getElementById("input").value;
    var parts = str.split(".");
    str = parts.join("-Moo ");
    document.getElementById("input").value = str;
    //text = text.value.toUpperCase();
}