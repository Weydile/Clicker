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
    fill: 16715792,
    align: "center"
  });
  text.y = 25;
  app.stage.addChild(text);
  document.body.appendChild(app.view);
  let right = true;
  let up = true;
  setInterval(function() {
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
    if (text.y > 25 && !up)
      text.y -= 5;
    else
      up = true;
  }, 15);
}
