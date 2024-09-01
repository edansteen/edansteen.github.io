import data from "./projects.json";

const projects = JSON.parse(data);

console.log(projects);
console.log(projects[0].text);

var linksHidden = true; //

/*
    Change the background of the navbar once you scroll
*/
const changeNavBackground = () => {    
    if (window.scrollY >= 1) {
      //Change navbar to "active"
      //add "active" class to navbar
    }
    else {
      //Remove "active" class from navbar
    }
  }

/*
* Used for the mobile menu button of the navbar
*/
function toggleLinks() {
    let x = getElementById("links");

    if (linksHidden) {
      x.style.visibility = true;
    }
    else {
      x.style.visibility = false;
    }           
    
    linksHidden = !linksHidden;
}