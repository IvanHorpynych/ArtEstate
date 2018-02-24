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
    }
});