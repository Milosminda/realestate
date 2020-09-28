$(document).ready(function(){

// Image Slide On Click //
var slideIndex = [1,1];
var slideId = ["slide-img", "slide-img--2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// Change on Click //

  var prev = $('.btn__slide').attr("class");
  $(".js__slide-1").click(function(){
    var currClass = this.className;
    if (prev == currClass) {
      plusSlides(-1, 0);
    } else {
      plusSlides(1, 0);
    }
});
$(".js__slide-2").click(function(){
  var currClass = this.className;
  console.log(currClass + '  drugi');
  if (prev == currClass) {
    plusSlides(-1, 1);
  } else {
    plusSlides(1, 1);
  }
});
// Image Auto Slide //
var slideIndex_1 = 0;
autoSlide();

function autoSlide() {
  var i;
  var slides = $(".slide-img");
  var slides_2 = $(".slide-img--2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides_2[i].style.display = "none";  
  }
  slideIndex_1++;
  if (slideIndex_1 > slides.length) {slideIndex_1 = 1}
  if (slideIndex_1 > slides_2.length) {slideIndex_1 = 1}
  slides[slideIndex_1-1].style.display = "block";  
  slides_2[slideIndex_1-1].style.display = "block";  
  setTimeout(autoSlide, 3500); // Change image every 3 seconds
}


});