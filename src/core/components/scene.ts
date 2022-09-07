import { Scene, WebGLCubeRenderTarget, TextureLoader } from 'three';
import bgUrl from '@/assets/textures/solar/8k_stars_milky_way.jpg'

function createScene(renderer: any) {
  const scene = new Scene();
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(
    bgUrl,
    () => {
      const rt = new WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    }
  )

  return scene;
}

export { createScene };