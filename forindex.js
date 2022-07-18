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

function hide(id) {
  console.info("hide ", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.warn("show ", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

// urmatoarele patru functii nu se mai folosesc

function showHomePage() {
  hideAllPages();
  show("home");
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
  show("skills");
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
  show("languages");
}
function showProjectsPage() {
  //   document.getElementById("home").style.display = "none";
  //   document.getElementById("skills").style.display = "none";
  //   document.getElementById("languages").style.display = "none";
  //   hidePage("home");
  //   hidePage("skills");
  //   hidePage("languages");
  hideAllPages();
  show("projects");
}

function showPage(id) {
  //   console.warn("please show this page ", id);
  hideAllPages();
  show(id);
}
// showHomePage();
showPage("home");
