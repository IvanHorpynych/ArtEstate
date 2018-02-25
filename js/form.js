var submitForm;

submitForm = function() {
    var form_data;
    form_data = $('#contactform').serialize();
    $.ajax({
        type: 'POST',
        url: 'form-process.php',
        data: form_data,
        success: function(text) {
            console.log('ELSE');
            if (text === 'success') {
                $('#contactform')[0].reset();
                $('.alert-success').show(0);
                $('.navbar-fixed-top').addClass('hide');
                return;
            }
        }
    });
};


$('#contactform').on('submit', function(event) {
    if (event.isDefaultPrevented()) {
        console.log('IF');
        $('.alert-fail').show(0);
        $('.navbar-fixed-top').addClass('hide');
    } else {
        event.preventDefault();
        submitForm();
        $('#start-form').stop().css('display', 'none').animate({opacity: 0}, 2000);
        $('#submit-block').stop().css('display', 'flex').animate({opacity: 1}, 2000);

        $('#submit-block')
            // .delay(2000)
            .queue(function (next) {
                $(this).stop().css('display', 'none').animate({opacity: 2}, 2000);
                next();
            });
        $('#start-form')
            // .delay(2000)
            .queue(function (next) {
                $(this).stop().css('display', 'flex').animate({opacity: 3}, 2000);
                next();
            });
        document.getElementById('contactform-name').value = '';
        document.getElementById('contactform-email').value = '';
        document.getElementById('contactform-message').value = '';
    }
});