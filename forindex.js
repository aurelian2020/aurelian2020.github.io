console.info(2 + 3);
var elem = document.getElementById("cpr");
var elem_html = elem.innerHTML;
var elem_new_html = elem_html.replace("(c)", "&copy;");
console.info(elem_new_html);
elem.innerHTML = elem_new_html;
var m2 = document.getElementById("m2");
m2.innerHTML = "&nbsp;";
var pages = ["Home", "Skills", "Projects", "Languages"];
console.log("first element of pages array is: " + pages[0]);
function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
function showLanguagesPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}
function showProjectsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("languages").style.display = "none";
}
showHomePage();
