$(document).ready(function() {
    $('input').focusout(function() {
        if ($(this).val() == '') {
            $(this).addClass('warning');
        } else {
            $(this).removeClass('warning');
        }
    });
});