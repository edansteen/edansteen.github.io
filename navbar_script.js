/*
    Change the background of the navbar once you scroll
*/
const changeNavBackground = () => {    
    if (window.scrollY >= 1) {
      //Change navbar to "active"
      //add "active" class to navbar
      document.getElementById('nav').classList.add('active');
    }
    else {
      //Remove "active" class from navbar
      document.getElementById('nav').classList.remove('active');
    }
  }

window.onload = function() {
    document.getElementById('mobileNavIcon').onclick = function() {
        document.getElementById("links").style.visibility = "visible";
    }
        console.log("button pressed");
}