import * as PIXI from "pixi.js";
init();
function init() {
  const app = new PIXI.Application({
    width: 1850,
    height: 900,
    backgroundColor: 11534335
  });
  document.body.appendChild(app.view);
}
