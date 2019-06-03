var indecies = ["Blank", "Custom", "Exercise", "Juggler", "Bike", "Dive"];
function initialize(){

    alert(indecies[0]);
    var textAreaValue;
    for(var i = 0; i<ANIMATIONS.length;i++){
        textAreaValue = textAreaValue + ANIMATIONS[indecies[i]];
    }
    // var textAreaValue = ANIMATIONS["Blank"] +
    //     ANIMATIONS["Custom"] +
    //     ANIMATIONS["Exercise"] +
    //     ANIMATIONS["Juggler"] +
    //     ANIMATIONS["Bike"] +
    //     ANIMATIONS["Dive"];
    alert(textAreaValue);
    var textAreaObj = document.getElementById("textArea");
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
initialize();