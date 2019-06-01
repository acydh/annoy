// //////////////////////////////////////
// ANNOYING BUTTON V1
// //////////////////////////////////////

var followingCounter = 0;
var annoyingButton = document.querySelector(".annoying-button");

annoyingButton.addEventListener('mouseenter', startFollowing);

function startFollowing() {
  if (followingCounter <= 2) {
    annoyingButton.removeEventListener('mouseenter', startFollowing);
    window.addEventListener('mousemove', moveButton);
    setTimeout(stopFollowing, 1000);
    followingCounter++;
  } else {
    vanish();
  }
}

function stopFollowing() {
  window.removeEventListener('mousemove', moveButton);
  annoyingButton.addEventListener('mouseenter', startFollowing);
}

function moveButton() {
  annoyingButton.style.top = event.clientY - 40 + "px";
	annoyingButton.style.left = event.clientX - 70 + "px";
}

function vanish(){
  annoyingButton.style.animationName = "buttonVanish";
  annoyingButton.style.animationDuration = "1s";
  setTimeout(() => {
    annoyingButton.style.display = "none";
  }, 900);
  setAnnoyingCursor();
}


// //////////////////////////////////////
// ANNOYING CURSOR V1
// //////////////////////////////////////



function setAnnoyingCursor() {
  document.documentElement.style.cursor = "wait";
}



// //////////////////////////////////////
// ANNOYING COOKIES V1
// //////////////////////////////////////


const cookieBox = document.querySelector(".annoy-cookies");
const closeCookies = document.querySelector(".close");
closeCookies.addEventListener("click", hideCookies);
var showTimes = 0;

function showAnnoyingCookies() {
  cookieBox.style.bottom = "0";
}

function hideCookies() {
  cookieBox.style.bottom = "-200px";
  if (showTimes < 1) {
    setTimeout(showAnnoyingCookies, 2000);
    showTimes++;
  }

}

showAnnoyingCookies()
