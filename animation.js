function changeColorWhenPressed(e) {

  function getColor() {
    smallColor = color.textContent.toLowerCase();
    console.log(smallColor);
    document.body.style.background = smallColor;
  }

  switch (e.keyCode) {
    case 65:
      var color = document.getElementById('red');
      getColor();
      break;
    case 83:
      var color = document.getElementById('orange');
      getColor();
      break;
    case 68:
      var color = document.getElementById('yellow');
      getColor();
      break;
    case 70:
      var color = document.getElementById('green');
      getColor();
      break;
    case 72:
      var color = document.getElementById('cyan');
      getColor();
      break;
    case 74:
      var color = document.getElementById('blue');
      getColor();
      break;
    case 75:
      var color = document.getElementById('purple');
      getColor();
      break;
    case 76:
      var color = document.getElementById('pink');
      getColor();
      break;
  }
}

function removeColor() {
  document.body.style.background =  "#ded9d6";
}

function keyChange(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.style.color = "grey";
  key.style.background = "white";
}

function removeKeyChange(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.style.color = "white";
  key.style.background = "rgba(0,0,0,0.4)";
}

window.addEventListener('keydown', changeColorWhenPressed);
window.addEventListener('keydown', keyChange);
window.addEventListener('keyup', removeColor);
window.addEventListener('keyup', removeKeyChange);
