;(function ($) {
    $(document).ready(function () {
        $('.menu-trigger').on('click', function () {
            var ui = $('.menu-trigger'),
                nav = $('nav ul');
            nav.slideToggle(500);
            ui.toggleClass('open-menu');
            if (ui.hasClass('open-menu')) {
                nav.css('display', 'flex');
                $('nav').css('height', '100vh');
            }
            else {
                $('nav').css('height', '0');
                nav.css('display', 'none');

            }
        });
        $(window).resize(function () {
            if ($(window).width() > 768) {
                $('nav ul').removeAttr('style');
            }
        });
    });
})(jQuery);