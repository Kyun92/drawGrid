window.onload = function () {
  var inputX = document.getElementById('inputX');
  var inputY = document.getElementById('inputY');
  var vspacing = document.getElementById('vspacing');
  var hspacing = document.getElementById('hspacing');
  var clear = document.getElementById('clear');
  var wid = 1231;
  var hei = 1747;

  function drawCanvas() {
    var canvas = document.getElementById('gridArea');
    var ctx = canvas.getContext('2d');
    drawRedLine(ctx)
  }
  inputX.addEventListener('keyup', inputEvent);
  inputY.addEventListener('keyup', inputEvent);
  vspacing.addEventListener('keyup', inputEvent);
  hspacing.addEventListener('keyup', inputEvent);
  clear.addEventListener('click', clearEvent);
  function inputEvent() {
    drawCanvas();
  }
  function clearEvent() {
    var canvas = document.getElementById('gridArea');
    var ctx = canvas.getContext('2d');
    ctx.width = wid;
    ctx.hei = hei;
    ctx.clearRect(0, 0, wid, hei);

    inputX.value = '';
    inputY.value = '';
    vspacing.value = '';
    hspacing.value = '';
  }
  function drawRedLine(ctx) {
    var x = Number(inputX.value);
    var y = Number(inputY.value);
    var vspace = Number(vspacing.value);
    var hspace = Number(hspacing.value);

    if (!x || !y || !vspace || !hspace) {
      return
    }
    var startX;
    var startY;
    ctx.clearRect(0, 0, wid, hei);
    ctx.strokeStyle="#FF0000";
    for(startX = x; startX < wid; startX+=vspace){
      ctx.beginPath();
      ctx.moveTo(startX,0);
      ctx.lineTo(startX,hei);
      ctx.stroke();
    }
    for(startY = y; startY < hei; startY+=hspace){
      ctx.beginPath();
      ctx.moveTo(0,startY);
      ctx.lineTo(wid, startY);
      ctx.stroke();
    }
  }
  drawCanvas();
};