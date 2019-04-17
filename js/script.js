$('.single-item').on(`init reInit`, function(event, slick) {
    $('.counter').text(1);
})
$('.single-item').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter').text(currentSlide + 1);
})
$('.single-item').slick({
    arrows: false,
    dots: true,
    appendDots: $('.arrows'),
});