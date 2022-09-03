import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import GUI from 'lil-gui';

import { createRenderer } from '../systems/renderer';
import { createScene } from '../components/scene';
import { createPerspectiveCamera } from '../components/camera';

interface WorldSceneSettings {
  // id: number,
  // container: any,
  // start(): string,

}

let renderer_, scene_, camera_;

class WorldConstructor {
  container: HTMLElement;
  stats: any;
  lilGui: any;
  timeSpeedSetting: any;


  constructor(container: any) {
    // initialize defined earlier properties
    this.container = container
    this.stats = new Stats();
    this.lilGui = new GUI();
    // has to be an object for lilGui to accept as slider
    this.timeSpeedSetting = { speed: 1};

    // Render, attach scene
    renderer_ = createRenderer();
    scene_ = createScene(renderer_);
    this.container.append(renderer_.domElement);

    // Create scene tools
    camera_ = createPerspectiveCamera()
    // move the camera back
    camera_.position.set(0, 0, 20)
    // so we can view the scene center
    camera_.lookAt(0, 0, 0)

    this.initialize_();
  }

  // Scene's objects setup
  async initialize_() {

    this.container.appendChild(this.stats.dom);
    // Add sliders to number fields by passing: min, max, step
    this.lilGui.add(this.timeSpeedSetting, 'speed', -100, 100, 1)
      .name('Time speed')
      .onChange((value: number) => { console.log(value) })
  }

  start() {
    console.log("World Scene started!")
  }
}

export { WorldConstructor };
