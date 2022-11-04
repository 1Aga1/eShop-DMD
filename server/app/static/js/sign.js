$(document).ready(function() {
    function check_email(email) {
        var email_pattern = /^[a-z0-9_.-]+@[a-z0-9-_.]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        if (email.search(email_pattern) == 0) {
            return true;
        } else {
            return false;
        };
    };

    function get_form_data($inputs) {
        var values = {};
        $inputs.each(function() {
            if ($(this).val() != '') {
                if (this.name != 'email') {
                    values[this.name] = $(this).val();
                } else {
                    if (check_email($(this).val()) == true) {
                        values[this.name] = $(this).val();
                    } else {
                        $('.alert').append('Введите корректный email!');
                        values = false;
                    };
                };
            }
            else {
                $(this).addClass('warning');
                values = false;
            };          
        });

        return values;
    }

    $('#signup__form_button').click(function() {
        $('.alert').empty();
        var $inputs = $('.signup__form :input').not(':button');

        var values = get_form_data($inputs);

        if (values != false) {
            $.ajax({
                type: 'POST',
                url: location.pathname,
                data: {
                    'values': JSON.stringify(values)
                }
            }).done(function(status) {
                if (status == true) {
                    location.href('sing_in');
                };
            });
        };
    });
});