
$(function () {
    $(".person").addClass('boy');
});

// $(function() {
//     prepopulate();
// });
// function prepopulate() {
//     $("#people .person").addClass("boy");
// }
function getGender() {
    return $('input:checked').val();
}