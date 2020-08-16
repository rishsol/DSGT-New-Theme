function mobileCheck()
{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
        mobile();
    }
    else
    {
        desktop();
    }
}

function desktop()
{
    var desktop = document.getElementById("desktopDIV");
    var mobile = document.getElementById("mobileDIV")

    desktop.style.display = "block";
    mobile.style.display = "none";
    //alert("desktop");
}

function mobile()
{
    var desktop = document.getElementById("desktopDIV");
    var mobile = document.getElementById("mobileDIV")

    desktop.style.display = "none";
    mobile.style.display = "block";
    //alert("mobile");
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var slideIndex = 0;
showSlides();
  
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    //var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    } */
    slides[slideIndex-1].style.display = "block";  
    //dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}