import { PerspectiveCamera } from "three";

function createPerspectiveCamera(fov: number=75, name: string="perspective camera") {

  const camera = new PerspectiveCamera(
    fov, // fov = Field Of View
    window.innerWidth / window.innerHeight, // aspect ratio
    0.05, // near clipping plane
    10000, // far clipping plane
  );
  var cameraLayer = 1;

  // camera.title = name
  // camera.layers.set(cameraLayer);

  return camera;
}


export { createPerspectiveCamera };