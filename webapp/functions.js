$(document).ready(function () {
    $('#validate-form, #invalidate-form').hide();
    $('#validate-form').show();

    $('#validate-tab').click(function () {
        $('#validate-form').show();
        $('#invalidate-form').hide();
    });

    $('#invalidate-tab').click(function () {
        $('#validate-form').hide();
        $('#invalidate-form').show();
    });
});