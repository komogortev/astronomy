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
  settings,
  getPlanetoidInfo
} = useWorldStore();

class SolarGroup {
  starInfo: any;
  starGroup: any;
  protected geometry: any;

  constructor(name: string) {
    this.starInfo = getPlanetoidInfo(name);
    this.starGroup = new Group();
    this.geometry = new SphereGeometry(1, 132, 132);

    this.initialize();
  }

  initialize(): void {
    const starMesh = decoratePlanetoid(
      this.geometry,
      this.starInfo
    )

    this.initializeSatellites(starMesh, this.starInfo);


    this.starGroup.add(starMesh);
  }

  initializeSatellites(parent: any, parentInfo: any): void {
    if (parentInfo.hasOwnProperty("children")) {
      Object.keys(parentInfo.children).forEach((satelliteName: string) => {
        const satelliteInfo: { [key: string]: any } = parentInfo.children[satelliteName]
        const satelliteMesh = decoratePlanetoid(
          this.geometry,
          satelliteInfo,
          parent.scale.x
        )

        this.initializeSatellites(satelliteMesh, satelliteInfo);

        parent.add(satelliteMesh);
      })
    }
  }
}

const baseUrlPrefix = import.meta.env.PROD ? '/astronomy' : '';

function decoratePlanetoid(geometry: any, data: any, parentScale: number = 0) {
  const group: { [k: string]: any } = new Group();

  // 1. Create material according to planetoid data
  if (data.hasOwnProperty('displacementMap')) {}
  const sphereMaterial = data.hasOwnProperty('emissive')
    ? new MeshPhongMaterial({
      emissive: data.emissive,
      emissiveMap: loader.load(`${baseUrlPrefix}${data.emissiveMap}`),
      emissiveIntensity: 1,
    })
    : new MeshPhongMaterial({
      color: data.color ? new Color(data.color)  : '#fff',
      map: loader.load(`${baseUrlPrefix}${data.textureMap}`),
    })

  if (data.hasOwnProperty('displacementMap')) {
    sphereMaterial.displacementMap = loader.load(`${baseUrlPrefix}${data.displacementMap}`)
    sphereMaterial.displacementScale = data.displacementScale
  }

  if (data.hasOwnProperty('bumpMap')) {
    sphereMaterial.bumpMap = loader.load(`${baseUrlPrefix}${data.bumpMap}`)
    sphereMaterial.bumpScale = data.bumpScale
  }

  if (data.hasOwnProperty('specularMap')) {
    sphereMaterial.specularMap = loader.load(data.specularMap)
    sphereMaterial.shininess = data.shininess
  }
  // 1. Create sphere mesh
  const sphereMesh = new Mesh(geometry, sphereMaterial);
  sphereMesh.name = `${data.nameId} MeshGroup`
  // Scale mesh by planetoid data factor?
  // Might need to either apply to group or decouple mesh altogether
  sphereMesh.scale.multiplyScalar(data.radius.km * settings.value.size_scaling.multiplier)
  sphereMesh.rotation.z = data.tilt

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

  // Generate POI (cities)
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
  group.tick = (delta: number) => {
    // rotate planetoid in anticlockwise direction (+=)
    sphereMesh.rotation.y += delta * radiansPerSecond * settings.value.timeSpeed;
  };

  group.add(sphereMesh)

  return group;
}

export { SolarGroup };