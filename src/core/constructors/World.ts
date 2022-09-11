import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import GUI from 'lil-gui';

import { createScene } from '../components/scene';
import { createPerspectiveCamera } from '../components/camera';
import { createAmbientLight, createPointLight } from '../components/lights';
import { createRenderer } from '../systems/renderer';
import { Resizer } from '../systems/Resizer';
import { Loop } from '../systems/Loop'
import { SolarGroup } from './SolarGroup';
import { Golem } from '../constructors/Golem';

interface WorldSceneSettings {
  container: Element;
  stats: any;
  lilGui: any;
  timeSpeedSetting: any;
}

let renderer_: any,
scene_: any,
camera_: any,
golem: any,
solarGroup_: any,
loop_: any,
textureLoader: any,
controls_: any;

class WorldConstructor implements WorldSceneSettings {
  container: Element;
  stats: any;
  lilGui: any;
  timeSpeedSetting: any;

  constructor(container: Element) {
    // attach stats tracker
    this.container = container;
    this.stats = Stats();
    this.container.appendChild(this.stats.dom);

    // Init lilGui controls
    this.timeSpeedSetting = { speed: 1 }; // <name for slider>: <value>
    this.lilGui = new GUI();
    this.lilGui.add(this.timeSpeedSetting, 'speed', -100, 100, 1)
      .name('Time speed')
      .onChange((value: number) => { console.log(value) });

    // Render, attach scene
    renderer_ = createRenderer();
    scene_ = createScene(renderer_, );
    this.container.appendChild(renderer_.domElement);

    this.initializeScene_();
    this.initializeSceneObjects_();

    controls_ = new OrbitControls(camera_, renderer_.domElement);
  }

  // Scene setup
  async initializeScene_() {
    const ambLight_ = createAmbientLight(0xffffff, .5);
    const pointLight_ = createPointLight(0xffffff, 100);
    scene_.add(ambLight_, pointLight_);

    // Create scene tools
    camera_ = createPerspectiveCamera();
    camera_.position.set(0, 15, 20); // move the camera back
    camera_.lookAt(0, 0, 0); // so we can view the scene center

    // Setup reactive listeners/updaters
    const resizer = new Resizer(this.container, camera_, renderer_);
    loop_ = new Loop(camera_, scene_, renderer_);
  }

  // Scene's objects setup
  async initializeSceneObjects_() {
    golem = new Golem();
    golem.mesh.position.set(0, 12, 12)
    scene_.add(golem.mesh);
    loop_.updatables.push(golem);

    // Create Solar System
    solarGroup_ = new SolarGroup('Sun');
    console.log(solarGroup_)
    // Add system children to scene/loop_
    // *(account on just three categories of inheritance: star/planet/moon)
    solarGroup_.starGroup.children.forEach((mesh: any) => {
      mesh.children
        .forEach((m: any) => {
          // :1 moons/athmospheres/cities
          if (['athmosphereMap', 'POI'].includes(m.name)) {
            loop_.updatables.push(m)
          }
        })
      // :2 planets
      loop_.updatables.push(mesh);
    });
    // :3 star
    scene_.add(solarGroup_.starGroup);
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
    controls_.tick(delta, loop_.updatables);
  }
}

export { WorldConstructor };
