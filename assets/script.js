//MODALS
//'About Me' Modal
document.getElementsByClassName("tablink")[0].click();

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("theTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("currentTab");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("currentTab");
}