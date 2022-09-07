import { PerspectiveCamera } from "three";

function createPerspectiveCamera(
  fov: number = 75,
  aspect: number = window.innerWidth / window.innerHeight,
  near: number = 0.01,
  far: number = 10000,
  name: string="Perspective Camera"
) {
  const camera: PerspectiveCamera = new PerspectiveCamera(fov, aspect, near, far);
  const cameraLayer: number = 1;
  camera.layers.set(cameraLayer);
  camera.name = name

  return camera;
}

export { createPerspectiveCamera };