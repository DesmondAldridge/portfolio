//MODALS
//'About Me' Modal
document.getElementsByClassName("tablink")[0].click();

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("aboutMeTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}

//'Portfolio' Modal
document.getElementsByClassName("tablink")[0].click();

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("aboutMeTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}