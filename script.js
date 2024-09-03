import data from "./projects.json";

const projects = JSON.parse(data);

console.log(projects);
console.log(projects[0].text);

window.onload = function() {
  document.getElementById("closeModal").onclick = function() {
    document.getElementById("infoModal").style.display = 'none';
  }
}