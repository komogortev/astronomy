import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import GUI from 'lil-gui';

import { createRenderer } from '../systems/renderer';
import { createScene } from '../components/scene';

interface WorldSceneSettings {
  // id: number,
  // container: any,
  // start(): string,

}

let renderer_, scene_;

class WorldConstructor {
  container: HTMLElement;
  stats: any;
  gui: any;
  timeSpeedSetting: number;


  constructor(container: any) {
    // initialize defined earlier properties
    this.container = container
    this.stats = new Stats();
    this.gui = new GUI();
    this.timeSpeedSetting = 1;

    // Render, attach scene
    renderer_ = createRenderer();
    scene_ = createScene(renderer_);
    this.container.append(renderer_.domElement);

    this.initialize_();
  }

  // Scene's objects setup
  async initialize_() {

    this.container.appendChild(this.stats.dom);
    // Add sliders to number fields by passing min and max
    this.gui.add(this.timeSpeedSetting, 'speed', -100, 100, 1)
      .name('Time speed')
      .onChange((value: number) => { console.log(value) })
  }

  start() {
    console.log("World Scene started!")
  }
}

export { WorldConstructor };
