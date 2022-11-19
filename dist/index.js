import * as PIXI from "../snowpack/pkg/pixijs.js";
init();
function init() {
  const app = new PIXI.Application({
    width: 1850,
    height: 900,
    backgroundColor: 11534335
  });
  const text = new PIXI.Text("Hello ЖУЛЯ!", {
    fontFamily: "Arial",
    fontSize: 55,
    fill: 10000000,
    align: "center"
  });
  text.y = 25;
  app.stage.addChild(text);
  document.body.appendChild(app.view);
  let right = true;
  let up = true;
  setInterval(function () {
    if (text.x < 1550 && right)
      text.x += 5;
    else
      right = false;
    if (text.x > 0 && !right)
      text.x -= 5;
    else
      right = true;
    if (text.y < 850 && up)
      text.y += 5;
    else
      up = false;
    if (text.y > 0 && !up)
      text.y -= 5;
    else
      up = true;
    if (text.x == 0 || text.x >= 1545 || text.y == 0 || text.y == 845)
      text.tint = getRandomInt(0, 10000000);
      console.log("🚀 ~ file: index.js ~ line 39 ~ text.fill", text.tint)
  }, 15);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}