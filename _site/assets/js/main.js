//Change background img for the about page
$(document).ready(function(){
var sitelink = document.URL;
var x=document.getElementsByClassName('page-content');
if(sitelink=="https://daniel2005315.github.io/site/about/"){
  console.log(sitelink);
  x[0].style.backgroundImage = "url('https://daniel2005315.github.io/site/assets/img/selfie_3.png')";
  x[0].style.backgroundPosition="right top";
  x[0].style.backgroundRepeat = "no-repeat"
  x[0].style.backgroundSize="300px 400px";
}
});


//Slide down bars

$(document).ready(function(){
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
    	  panel.style.maxHeight = null;
      } else {
    	  panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }
  }
});

/** Slide show **/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
