
document.addEventListener('DOMContentLoaded', () => {
var textWrapper = document.querySelector('.moto_word_slider');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='word-slider-letter'>$&</span>");
console.log(textWrapper);
anime.timeline({loop: true})
.add({
    targets: '.moto_word_slider .word-slider-letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
}).add({
    targets: '.moto_word_slider .word-slider-letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
});
});