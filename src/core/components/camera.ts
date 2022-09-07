import { PerspectiveCamera } from "three";

function createPerspectiveCamera(
  fov: number = 75,
  aspect: number = window.innerWidth / window.innerHeight,
  near: number = 0.01,
  far: number = 1000,
  name: string="Perspective Camera"
) {
  const camera: PerspectiveCamera = new PerspectiveCamera(fov, aspect, near, far);
  camera.name = name

  return camera;
}

export { createPerspectiveCamera };