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