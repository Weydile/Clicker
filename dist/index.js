import * as PIXI from "../_snowpack/pkg/pixijs";
init();
function init() {
  const app = new PIXI.Application({
    width: 1850,
    height: 900,
    backgroundColor: 11534335
  });
  document.body.appendChild(app.view);
}
