var coverHeight = $('.carousel').height();
$(window).scroll(function(){
    if ($(window).scrollTop() > coverHeight)
    $('#backtotop').addClass('visible');
    else
    $('#backtotop').removeClass('visible');
})
// when its refreshed
if ($(window).scrollTop() > coverHeight)
$('#backtotop').addClass('visible');
else
$('#backtotop').removeClass('visible');