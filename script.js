
const navIcon = document.getElementById('mobileNavIcon');
var linksHidden = true;


function closeNav() {
  document.getElementById("links").classList.remove('active');
  document.getElementsByClassName("block")[0].style.display = 'none';
  document.getElementById("open").style.display = 'block';
  document.getElementById("close").style.display = 'none';
  navIcon.style.position = 'absolute';
  linksHidden = true;
}

window.onload = function() {  
  navIcon.onclick = function() {
    if (linksHidden) {
      document.getElementById("links").classList.add('active');
      document.getElementsByClassName("block")[0].style.display = 'block';
      document.getElementById("open").style.display = 'none';
      document.getElementById("close").style.display = 'block';
      navIcon.style.position = 'fixed';
      linksHidden = false;
    }
    else {
      closeNav();
    }
  }

  document.getElementsByClassName("block")[0].onclick = function () {
    closeNav();
  }

  let x = document.getElementById("links").children;

  for (let i = 0; i < x.length; i++) {
    x[i].onclick = function() {
      closeNav();
    }
  }
}