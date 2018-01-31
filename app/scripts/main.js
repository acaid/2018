// (function(){
//   let gradientTimer = "-"+ Math.floor(Math.random() * 60) + "s";
//   // $('body').css({"animation-delay": gradientTimer, "animation": "fadein .2s ease forwards, rotateGradient 60s ease infinite"});
//   // let animationString = "animation": "fadein .2s ease forwards, rotateGradient 60s" + gradientTimer + "ease infinite"
//     $('body').css({"animation": "fadeIn .5s ease forwards, rotateGradient 60s " + gradientTimer + " ease infinite"});
// })();

(function(){
  let gradientTimer = '-'+ Math.floor(Math.random() * 60) + 's';
  let animationString = 'fadeIn .5s ease forwards, rotateGradient 60s ' + gradientTimer + ' ease infinite';
  document.getElementsByTagName('body')[0].style.animation = animationString;
})();
