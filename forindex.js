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

function hidePage(id) {
  console.info("hide ", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  console.warn("show ", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showHomePage() {
  hideAllPages();
  showPage("home");
  //   hidePage("skills");
  //   hidePage("projects");
  //   hidePage("languages");
  //   document.getElementById("skills").style.display = "none";
  //   document.getElementById("projects").style.display = "none";
  //   document.getElementById("languages").style.display = "none";
}
function showSkillsPage() {
  //   hidePage("home");
  //   hidePage("projects");
  //   hidePage("languages");
  hideAllPages();
  showPage("skills");
  //   document.getElementById("home").style.display = "none";
  //   document.getElementById("projects").style.display = "none";
  //   document.getElementById("languages").style.display = "none";
}
function showLanguagesPage() {
  //   document.getElementById("home").style.display = "none";
  //   document.getElementById("skills").style.display = "none";
  //   document.getElementById("projects").style.display = "none";
  //   hidePage("home");
  //   hidePage("skills");
  //   hidePage("projects");
  hideAllPages();
  showPage("languages");
}
function showProjectsPage() {
  //   document.getElementById("home").style.display = "none";
  //   document.getElementById("skills").style.display = "none";
  //   document.getElementById("languages").style.display = "none";
  //   hidePage("home");
  //   hidePage("skills");
  //   hidePage("languages");
  hideAllPages();
  showPage("projects");
}
showHomePage();
