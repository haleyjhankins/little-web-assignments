var curtainWrapper = document.querySelector('#curtainWrapper');
var leftCurtain = document.querySelector('.curtainLeft');
var rightCurtain = document.querySelector('.curtainRight');
var homersVoice = new Audio('homervoice.mp4');

  curtainWrapper.onclick = function () {
    homersVoice.play();
    leftCurtain.style.marginLeft = "-600px";
    rightCurtain.style.marginRight = "-600px";

    };
