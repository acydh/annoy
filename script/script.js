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
  annoyingButton.style.top = event.clientY + 20 + "px";
	annoyingButton.style.left = event.clientX + 80 + "px";
}

function vanish(){
  annoyingButton.style.animationName = "buttonVanish";
  annoyingButton.style.animationDuration = "1s";
  setTimeout(function(){annoyingButton.style.display = "none";}, 900);
}

function setAnnoyingCursor() {
  document.documentElement.style.cursor = "wait";
}

setAnnoyingCursor();
