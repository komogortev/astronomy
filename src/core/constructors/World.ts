import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import GUI from 'lil-gui';

import { createRenderer } from '../systems/renderer';
import { createScene } from '../components/scene';
import { createPerspectiveCamera } from '../components/camera';
import { createAmbientLight, createPointLight } from '../components/lights';
import { Loop } from '../systems/Loop'

import { createCube } from '../components/cube';
import { Golem } from './Golem';

interface WorldSceneSettings {
  // id: number,
  // container: any,
  // start(): string,

}

let renderer_: any, scene_: any, camera_: any, golem, loop_: any;

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
    this.timeSpeedSetting = { speed: 1 }; // has to be an object for lilGui to accept as slider

    // Render, attach scene
    renderer_ = createRenderer();
    scene_ = createScene(renderer_);
    this.container.appendChild(renderer_.domElement);

    const ambLight_ = createAmbientLight(0xffffff, .5);
    const pointLight_ = createPointLight(0xffffff, 100);
    scene_.add(ambLight_, pointLight_);

    // Create scene tools
    camera_ = createPerspectiveCamera();
    camera_.position.set(0, 0, 20); // move the camera back
    camera_.lookAt(0, 0, 0); // so we can view the scene center

    loop_ = new Loop(camera_, scene_, renderer_);

    this.initialize_();
  }

  // Scene's objects setup
  async initialize_() {
    this.container.appendChild(this.stats.dom);
    // Add sliders to number fields by passing: min, max, step
    this.lilGui.add(this.timeSpeedSetting, 'speed', -100, 100, 1)
      .name('Time speed')
      .onChange((value: number) => { console.log(value) });

   // golem = new Golem();
    golem = new createCube("test cube")
    loop_.updatables.push(golem);
    //golem.mesh.position.set(0, 0, 0);
    scene_.add(golem);
    console.log("scene_", scene_);
    renderer_.render(scene_, camera_);
  }

  render() {
    // draw a single frame
    renderer_.render(scene_, camera_);
  }

  start() {
    loop_.start();
    console.log("World Scene started!");
  }

  stop() {
    loop_.stop();
  }

  tick(delta: number) {
    this.stats.update(delta);
  }
}

export { WorldConstructor };
