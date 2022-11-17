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
  app.stage.addChild(text);
  document.body.appendChild(app.view);
  setInterval(function() {
    let right = true;
    if (right == true && text.x < 1500) {
      text.x += 3;
    } else {
      right = false;
    }
  }, 10);
}
