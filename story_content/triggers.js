function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61ZI8dO9x9F":
        Script1();
        break;
      case "5kuph1qKdM0":
        Script2();
        break;
      case "5k7gwh0azGZ":
        Script3();
        break;
      case "6SIGKAkwY2p":
        Script4();
        break;
      case "5V6WEqUNtF5":
        Script5();
        break;
      case "5VSL0Q0aKQh":
        Script6();
        break;
      case "6fty7uGLeo3":
        Script7();
        break;
      case "5vtajX7PEti":
        Script8();
        break;
      case "5qTGuzCg3XS":
        Script9();
        break;
      case "6N36C4K39oI":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5sNVyOQkcWx');
const duration = 750;
const easing = 'ease-out';
const id = '6eU2buY45KN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5sNVyOQkcWx');
const duration = 750;
const easing = 'ease-out';
const id = '6eU2buY45KN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6SZIFAUkbVF');
const duration = 750;
const easing = 'ease-out';
const id = '6eU2buY45KN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6SZIFAUkbVF');
const duration = 750;
const easing = 'ease-out';
const id = '6eU2buY45KN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
