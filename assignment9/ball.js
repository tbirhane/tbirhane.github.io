var ballVelocity = 0;
function update() {
    ballVelocity += 1;
    if (parseInt($("#ball").css('top')) > $(window).height()) {
        ballVelocity *= -.9;
    }
    $("#ball").css('top', function(idx, old) {
        return parseInt(old) + ballVelocity + 'px';
    });
}
$(function () {
    $("#ball").css({'top' : '0px',
                    'left' : '50%'});
    setInterval(update, 20);
});



