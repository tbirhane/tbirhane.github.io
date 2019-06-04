var indecies = ["Blank", "Custom", "Exercise", "Juggler", "Bike", "Dive"];
window.onload = function(){
    var textAreaObj = document.getElementById("textArea");
    var textAreaValue = ANIMATIONS["Blank"] +
        ANIMATIONS["Custom"] +
        ANIMATIONS["Exercise"] +
        ANIMATIONS["Juggler"] +
        ANIMATIONS["Bike"] +
        ANIMATIONS["Dive"];
    textAreaObj.value = textAreaValue;
}
function animationText() {
    var textAreaObj = document.getElementById("textArea");
    //alert(textAreaObj);
    var fieldSetObj = document.getElementById("aniType");
    var  choice = fieldSetObj.value;
    //alert(choice);
    textAreaObj.value = ANIMATIONS[choice];
}

function setFontSize() {
    var obj = document.getElementById("textArea");
    var selectorObj = document.getElementById("fontsizeId");
    var fontSize = selectorObj.value;
    if(fontSize == "Tiny"){
        obj.style.fontSize = 7 + "pt";
    }
    if(fontSize == "Small"){
        obj.style.fontSize = 10 + "pt";
    }
    if(fontSize == "Medium"){
        obj.style.fontSize = 12 + "pt";
    }
    if(fontSize == "Large"){
        obj.style.fontSize = 16 + "pt";
    }
    if(fontSize == "Extra Large"){
        obj.style.fontSize = 24 + "pt";
    }
    if(fontSize == "XXL"){
        obj.style.fontSize = 32 + "pt";
    }

}
function animate() {
    var textAreaObject = document.getElementById("textArea");
    // var top = window.getComputedStyle(textAreaObject, null).getPropertyValue("top");
    // var left = window.getComputedStyle(textAreaObject, null).getPropertyValue("left");
    //alert(fontSize);
    var text = textAreaObject.value;
    var newText = text.slice(0, text.length/2) + "\n" + text.slice(text.length/2);
    textAreaObject.value = newText;
    // textAreaObject.style.top = parseFloat(top) + 1 + "px";
    // textAreaObject.style.left = parseFloat(left) + 1 + "px";
}

var timerId;
function animation() {
    if(!timerId){
        timerId = setInterval(animate, 250);
    }
    /*animate*/
}
function stopAnimation(){
    clearInterval(timerId);
    timerId = null;
}