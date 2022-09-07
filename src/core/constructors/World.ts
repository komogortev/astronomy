import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import GUI from 'lil-gui';

import { createScene } from '../components/scene';
import { createPerspectiveCamera } from '../components/camera';
import { createAmbientLight, createPointLight } from '../components/lights';
import { createRenderer } from '../systems/renderer';
import { Resizer } from '../systems/Resizer';
import { Loop } from '../systems/Loop'
import { Golem } from './Golem';

interface WorldSceneSettings {
  container: Element;
  stats: any;
  lilGui: any;
  timeSpeedSetting: any;
  controls: any;
}

let renderer_: any, scene_: any, camera_: any, golem: any, loop_: any, textureLoader: any;

class WorldConstructor {
  container: Element;
  stats: any;
  lilGui: any;
  timeSpeedSetting: any;
  controls: any;

  constructor(container: Element) {
    // initialize defined earlier properties
    this.container = container;
    this.stats = Stats();
    this.lilGui = new GUI();
    this.timeSpeedSetting = { speed: 1 }; // has to be an object for lilGui to accept as slider

    // Render, attach scene
    renderer_ = createRenderer();
    scene_ = createScene(renderer_, );
    this.container.appendChild(renderer_.domElement);

    //const ambLight_ = createAmbientLight(0xffffff, .5);
    //const pointLight_ = createPointLight(0xffffff, 100);
    //scene_.add(ambLight_, pointLight_);

    // Create scene tools
    camera_ = createPerspectiveCamera();
    camera_.position.set(0, 0, 15); // move the camera back
    camera_.lookAt(0, 0, 0); // so we can view the scene center

    // Setup reactive listeners/updaters
    const resizer = new Resizer(this.container, camera_, renderer_);
    loop_ = new Loop(camera_, scene_, renderer_);
    this.initialize_();
    this.controls = new OrbitControls(camera_, renderer_.domElement);


    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene_.add(cube);

    camera_.position.z = 5;

    //golem = new Golem();
    // golem = new createCube("test cube");
    // scene_.add(golem);
    // loop_.updatables.push(golem);
    this.animate(cube);
  }

  animate(cube: any) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(this.animate);
    renderer_.render(scene_, camera_);
  }

  // Scene's objects setup
  async initialize_() {
    this.container.appendChild(this.stats.dom);
    // Add sliders to number fields by passing: min, max, step
    this.lilGui.add(this.timeSpeedSetting, 'speed', -100, 100, 1)
      .name('Time speed')
      .onChange((value: number) => { console.log(value) });


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
