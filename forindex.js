console.info(2 + 3);
var elem = document.getElementById("cpr");
var elem_html = elem.innerHTML;
var elem_new_html = elem_html.replace("(c)", "&copy;");
console.info(elem_new_html);
elem.innerHTML = elem_new_html;
