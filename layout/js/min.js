$(function(){
    'use strict'
// Adjust slider hight
var window_height = $(window).height(),
    upper_height = $('.upper-bar').innerHeight(),
    nav_height = $('.navbar').innerHeight();
$('.slider,.carousel-item').height(window_height-(upper_height + nav_height));

});
