$(function () {
    $("#boundary1").mouseover(overAction);
    $("#boundary1").mouseleave(leaveAction)
});
function overAction() {
    $('#boundary1').addClass("youlose");//css('background-color','red');
}
function leaveAction() {
    $('#boundary1').removeClass("youlose");
}
//
$(function () {
    $(".boundary").mouseover(turnAllRed);
    $(".boundary").mouseleave(removeColor);
})
function turnAllRed(){
    $('.boundary').addClass('youlose');
}
function removeColor() {
    $('.boundary').removeClass('youlose');
}

// win lose
var status = 0;
$(function () {
    $('.boundary').mouseover(win);

});
function win() {
    status = 1;
}

$(function () {
    $('#end').mouseover(message);
});
function message(evt) {
    if(status == 1)
        alert("you win");
    if (status == 0)
        alert("Sorry, you loose");
    evt.preventDefault();
    status = 0;
}
$(function () {
    $('#start').click(reset);
});
function reset() {
    $('boun')
}``
