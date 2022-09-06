import {
  SphereGeometry,
  MeshNormalMaterial,
  Mesh,
  Raycaster,
  Vector3
} from 'three'

const raycaster = new Raycaster()

class Golem {
  radius: number;
  widthSegments: number;
  heightSegments: number;
  golemGeometry: any;
  golemMaterial: any;
  golemMesh: any;

  constructor() {
    this.radius = 0.05
    this.widthSegments = 6
    this.heightSegments = 6

    this.golemGeometry = new SphereGeometry(
      this.radius, this.widthSegments, this.heightSegments
    );

    this.golemMaterial = new MeshNormalMaterial({
      wireframe: true
    });

    this.golemMesh = new Mesh(this.golemGeometry, this.golemMaterial);
    this.golemMesh.name = 'Golem Mesh'
  }

  get mesh() {
    return this.golemMesh
  }

  tick(delta) {
    this.golemMesh.rotation.x += 0.001
  }
}

export { Golem }