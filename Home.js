buttons)
function changeNewsSlide(newsStartingSlide) {
  showNewsSlides((newsSlideIndex += newsStartingSlide));
}

// Thumbnail image controls
function currentNewsSlide(newsStartingSlide) {
  showNewsSlides((newsSlideIndex = newsStartingSlide));
}

function showNewsSlides(newsStartingSlide) {
  let i;
  let slides = document.getElementsByClassName("news-slides");
  let navigationDots = document.getElementsByClassName("news-dot-navigation");
  //Defaults to first slide if the newsSlideIndex is higher than the amount of slides
  if (newsStartingSlide > slides.length) {
    newsSlideIndex = 1;
  }
  //Defaults to last slide if the newsSlideIndex is lower than the amount of slides
  if (newsStartingSlide < 1) {
    newsSlideIndex = slides.length;
  }
  //Hides all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Removes active class from the dot navigation
  for (i = 0; i < navigationDots.length; i++) {
    navigationDots[i].className = navigationDots[i].className.replace(
      " news-active",
      ""
    );
  }
  //Shows current slide
  slides[newsSlideIndex - 1].style.display = "block";
  //Activates corresponding dot navigation based on current slide
  navigationDots[newsSlideIndex - 1].className += " news-active";
}
//==================================================