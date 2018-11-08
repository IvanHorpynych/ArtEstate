var submitForm;

submitForm = function () {
    var form_data;
    form_data = $('#contactform').serialize();
    $.ajax({
        type: 'POST',
        url: 'form-process.php',
        data: form_data,
        success: function (text) {
            console.log('ELSE');
            if (text === 'success') {
                $('#contactform')[0].reset();
                return;
            }
        }
    });
};


$('#contactform').on('submit', function (event) {
    if (event.isDefaultPrevented()) {
        $('.alert-fail').show(0);
        $('.navbar-fixed-top').addClass('hide');
    } else {
        event.preventDefault();
        submitForm();
        $('.sendform .text-block').eq(0).addClass('active');
        blockAnimate();
        document.getElementById('contactform-name').value = '';
        document.getElementById('contactform-email').value = '';
        document.getElementById('contactform-phone').value = '';
        blockAnimate();
    }

    function blockAnimate() {
        var length = $('.sendform .text-block').length - 1;
        $('.sendform .text-block').each(function (index) {
            if ($(this).hasClass('active') && index != length) {
                $(this).removeClass('active').fadeOut(1000).next('.text-block').addClass('active').fadeIn(1000);
                return false;
            } else if (index == length) {
                $(this).removeClass('active').fadeOut(1000);
                $('.sendform .text-block').eq(0).addClass('active').fadeIn(1000);
                return false;
            }
        });
    };


});