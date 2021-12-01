$(document).ready(function() {

    $(this).on('click', '#page_1_next', function() {
        $('#intro_page_one').addClass('d-none');
        $('#intro_page_two').removeClass('d-none');
    });
    $(this).on('click', '#page_2_next', function() {
        $('#intro_page_two').addClass('d-none');
        $('#intro_page_three').removeClass('d-none');
    });
    $(this).on('click', '.get-started-btn', function() {
        $('#intro_page_three').addClass('d-none');
        $('#sign_up_page').removeClass('d-none');
    })

    // FOR OTP MESSAGE
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));

                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));

                if (next.length) {
                    $(next).select();
                } else {
                    if (parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

    $(this).on('click', '#reset_OTP_number', function() {
        $('.digit-group input').val('');

    });



}); // END OF READY