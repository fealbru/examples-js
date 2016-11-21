$(function () {



    /* Smooth scroll to Plans Block
     ====================================*/

    $('#js-get-started').on('click', function (e) {
        e.preventDefault();
        var $plansOffset = $('#js-plans').offset().top;
        $('html, body').animate({
            scrollTop: $plansOffset
        }, 500);
    });

});
