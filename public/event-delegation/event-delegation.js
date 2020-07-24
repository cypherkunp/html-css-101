let selectedTd;
let table = document.getElementsByTagName("table")[0];
let greetList = document.getElementById("greet-list");

table.onclick = function (event) {
  let target = event.target; // where was the click?
  if (target.tagName != "TD") return; // not on TD? Then we're not interested
  highlight(target); // highlight it
};

greetList.onclick = function (event) {
  let { target } = event;
  if (target.tagName !== "LI") return;
  highlight(target);
};

function highlight(td) {
  if (selectedTd) {
    // remove the existing highlight if any
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight"); // highlight the new td
}
