import {
  Group,
  Object3D,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshNormalMaterial,
  TextureLoader,
  SphereGeometry,
  Color,
  Raycaster
} from 'three';
import { AppSettings } from '../../globals';
import useWorldStore from "../../stores/world";
import { convertRotationPerDayToRadians, calcPosFromLatLngRad } from '../../utils/helpers';

const raycaster = new Raycaster()
const loader = new TextureLoader();

const {
  solarSystemStore,
  settings,
  setTimeSpeed,
  getPlanetoidInfo
} = useWorldStore();

function createSolarGroup() {
  // A group holds other objects but cannot be seen itself
  const starGroup = new Group();
  const geometry = new SphereGeometry(1, 132, 132);
  const sunChildren: { [index: string]: any } = solarSystemStore.value

  Object.keys(solarSystemStore.value).forEach((key: any) => {
    const planetoidInfo: { [key: string]: any } = getPlanetoidInfo(key)

    const starMesh = decoratePlanetoid(
      geometry,
      planetoidInfo
    )
    starGroup.add(starMesh);

    // Create planet meshes
    if (sunChildren[key].children) {
      Object.keys(sunChildren[key].children).forEach(childKey => {
        const planetMesh = decoratePlanetoid(
          geometry,
          getPlanetoidInfo(childKey),
          starMesh.scale.x
        )
        starGroup.add(planetMesh);

        // Create moon meshes
        if (sunChildren[key].children[childKey].children) {
          Object.keys(sunChildren[key].children[childKey].children).forEach(childKey2 => {
            const moonMesh = decoratePlanetoid(
              geometry,
              getPlanetoidInfo(childKey2),
              planetMesh.scale.x
            )
            planetMesh.add(moonMesh);
          })
        }
      })
    }
  })

  return starGroup;
}

const baseUrlPrefix = import.meta.env.PROD ? '/astronomy' : ''
function decoratePlanetoid(geometry: any, data: any, parentScale: number = 0) {
  const group = new Group();

  // 1. Create material according to planetoid data
  const sphereMaterial = data.emissive
    ? new MeshPhongMaterial({
      emissive: data.emissive,
      emissiveMap: loader.load(new URL(`${baseUrlPrefix}${data.emissiveMap}`, import.meta.url).href),
      emissiveIntensity: 1,
    })
    : new MeshPhongMaterial({
      color: data.color ? new Color(data.color)  : '#fff',
      map: loader.load(new URL(`${baseUrlPrefix}${data.textureMap}`, import.meta.url).href),
    })

  if (data.displacementMap) {
    sphereMaterial.displacementMap = loader.load(new URL(`${baseUrlPrefix}${data.displacementMap}`, import.meta.url).href)
    sphereMaterial.displacementScale = data.displacementScale
    // sphereMaterial.wireframe = true;
  }

  if (data.bumpMap) {
    sphereMaterial.bumpMap = loader.load(new URL(`${baseUrlPrefix}${data.bumpMap}`, import.meta.url).href)
    sphereMaterial.bumpScale = data.bumpScale
  }

  if (data.specularMap) {
    sphereMaterial.specularMap = loader.load(data.specularMap)
    sphereMaterial.shininess = data.shininess
  }
  // 1. Create sphere mesh
  const sphereMesh = new Mesh(geometry, sphereMaterial);
  sphereMesh.name = `${data.nameId} MeshGroup`
  // Scale mesh by planetoid data factor?
  // Might need to either apply to group or decouple mesh altogether
  sphereMesh.scale.multiplyScalar(data.radius.km * settings.value.size_scaling.multiplier)
  // sphereMesh.rotation.z = data.tilt

  const planetDistanceOffset = parentScale > 0
    ? ((parentScale + sphereMesh.scale.x) * 2)
    : 0
  const distanceInKm = data.distance.AU * AppSettings.AU.km
  sphereMesh.position.x = (distanceInKm + planetDistanceOffset) / settings.value.distance_scaling.divider

  // /!\ radiants = degrees * (2 * Math.PI)
  const radiansPerSecond = convertRotationPerDayToRadians(data.rotation_period.days)

  //Generate athmosphere
  if (data.athmosphereMap) {
    const materialClouds = new MeshBasicMaterial({
      map: loader.load(data.athmosphereMap),
      transparent: true,
      opacity: data.athmosphereOpacity,
    });
    const athmosphereMesh = new Mesh(geometry, materialClouds);
    athmosphereMesh.name = 'Athmosphere Map';
    athmosphereMesh.scale.set(sphereMesh.scale.x + 0.5, sphereMesh.scale.y + 0.5, sphereMesh.scale.z + 0.5);
    athmosphereMesh.scale.multiplyScalar(
      sphereMesh.scale.x + data.athmosphereDepth
    );
    athmosphereMesh.position.set(0, 0, 0);
    athmosphereMesh.rotation.z = data.tilt;
    // athmosphereMesh.tick = (delta: number) => {
    //   // rotate athmosphereMesh in anticlockwise direction (+=)
    //   athmosphereMesh.rotation.y += delta * radiansPerSecond * settings.value.timeSpeed;
    // };
    sphereMesh.add(athmosphereMesh);
  }

  // Generate POI
  if (data.POI) {
    const poiGeometry = new SphereGeometry(0.005, 6, 6);
    const poiMaterial = new MeshBasicMaterial({ color: 0xff0000 });

    data.POI.forEach((poi: any) => {
      let poiMesh = new Mesh(poiGeometry, poiMaterial);
      poiMesh.name = `POI: ${poi.name}`

      const cartPos = calcPosFromLatLngRad(
        poi.lat,
        poi.lng,
        (data.radius.km * settings.value.size_scaling.multiplier) + 0.375
      );
      poiMesh.position.set(cartPos.x, cartPos.y, cartPos.z);

      sphereMesh.add(poiMesh);
    });
  }

  // each frame, animate sphereMesh
  // group.tick = (delta) => {
  //   // rotate planetoid in anticlockwise direction (+=)
  //   sphereMesh.rotation.y += delta * radiansPerSecond * settings.value.timeSpeed;
  // };

  group.add(sphereMesh)

  return group;
}

export { createSolarGroup };