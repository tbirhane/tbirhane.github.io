
// $(function () {
//     $(".person").addClass('boy');
// });

    $(function() {
        prepopulate();
    });
    function prepopulate() {
        $("#people .person").addClass("boy");
    }
    function getGender() {
        return $('input:checked').val();
    }
//alert(getGender());
$(function() {
    prepopulate();
    $("#add").click(populate);
});

// Add! button event handler; adds 5 people of current gender
function populate() {
    var gender = getGender();
    for (var i = 0; i < 5; i++) {
        $('#people').append($('<div>').addClass('person ' + gender));
    }
}

$(function() {
    prepopulate();
    $("#kill").click(kill);
});
// Get all guys or girls and splat one fifth of them
function kill(gender) {
    var peeps = $('#people .' + gender);
    for (var i = 0; i < peeps.length / 5; i++) {
        var randomIndex = Math.floor(Math.random() * peeps.length);
        $(peeps[randomIndex]).removeClass(gender);
        // so future kills won't choose splat victims
        $(peeps[randomIndex]).addClass('splat');
    }
}