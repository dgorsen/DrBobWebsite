// JavaScript Document

$(function(){
    $('.nav-button').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('html, body').animate({
        scrollTop: $($href).offset().top
    }, 1000);
    });
});