var myIndexHeritage = 0;
carouselHeritage();

function carouselHeritage() {
  var i;
  var x = document.getElementsByClassName("mySlidesHeritage");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  myIndexHeritage++;

  if (myIndexHeritage > x.length) {myIndexHeritage = 1}
  x[myIndexHeritage-1].style.display = "block";
    setTimeout(carouselHeritage, 2000); // Change image every 2 seconds
}
