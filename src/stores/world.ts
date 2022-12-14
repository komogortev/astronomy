// stores/world.ts
import { ref, reactive, computed, toRefs } from "vue";
/**
 * 1. [AU] (150,000,000 km; 93,000,000 mi)
 * 2. "orbital_period" (also revolution period) is the amount of time a given
 *      astronomical object takes to complete one orbit around another object.
 * 3. "rotation_period" (or synodic day, or solar day) is the period
 *      for a celestial object to rotate once in relation to the star it is
 *      orbiting, and is the basis of solar time. (full day)
 * 4. POI - Cartesian coordinates may be retrieved from spherical
 *      coords (radius, inclination, azimuth)
 *      x = R cos() sin()
 *      y = R sin() sin()
 *      z = R cos()
 */
const baseUrl = import.meta.url
const state = reactive({
  solarSystemStore: {
    'Sun': {
      nameId: 'Sun',
      radius:   { km: 700000 * 0.1 }, // multiply by additional scale down
      distance: { AU: 0 },
      orbital_period:  { days: 0 },
      rotation_period: { days: 27 },
      tilt: 0,
      emissive: 0xFFFF00,
      emissiveMap: '/assets/textures/solar/sun/2k_sun.jpg',
      emissiveIntensity: 10,
      children: {
        'Mercury': {
          nameId: 'Mercury',
          radius:   { km: 2440 },
          distance: { AU: 0.4 },
          orbital_period: { days: 87.97 },
          rotation_period: { days: 175.94 },
          tilt: 0.3,
          emissive: 0xA6ACAF,
          emissiveMap: `/assets/textures/solar/mercury/mercury_2k.jpg`,
          emissiveIntensity: .5,
          bumpMap: '/assets/textures/solar/mercury/mercury_bump.jpg',
          bumpScale: 0.0125,
        },
        'Venus': {
          nameId: 'Venus',
          radius: { km: 6052 },
          distance: { AU: 0.7 },
          orbital_period:  { days: 224.7 },
          rotation_period: { days: 243 },
          tilt: 3.86,
          emissive: 0xE67E22,
          emissiveMap: '/assets/textures/solar/venus/2k_venus_surface.jpg',
          emissiveIntensity: .25,
          displacementMap: '/assets/textures/solar/venus/venus_bump.jpg',
          displacementScale: 0.025,
          bumpMap: '/assets/textures/solar/venus/venus_bump.jpg',
          bumpScale: 0.125,
          athmosphereMap: '/assets/textures/solar/venus/2k_venus_atmosphere.jpg',
          athmosphereOpacity: 0.3,
          athmosphereDepth: 0.43,
        },
        'Earth': {
          nameId: 'Earth',
          radius:   { km: 6371 },
          distance: { AU: 1 },
          orbital_period:  { days: 365 },
          rotation_period: { days: 1 },
          tilt: 0.41,
          // textureMap: 'public/assets/textures/solar/earth/earth_daymap_8k.jpg',
          emissive: 0xEBF5FB,
          emissiveMap: '/assets/textures/solar/earth/earth_daymap_8k.jpg',
          emissiveIntensity: .125,
          displacementMap: '/assets/textures/solar/earth/earth_bump_8k.jpg',
          displacementScale: 0.15,
          bumpMap: '/assets/textures/solar/earth/EarthNormal.png',
          bumpScale: 0.125,
          specularMap: '/assets/textures/solar/earth/EarthSpec.png',
          shininess: 0.5,
          athmosphereMap: '/assets/textures/solar/earth/8k_earth_clouds.jpg',
          athmosphereOpacity: 0.5,
          athmosphereDepth: 0.425,
          children: {
            'Moon': {
              nameId: 'Moon',
              radius:   { km: 1737.4 },
              distance: { AU: 0.00257 * 8, km: 385000 }, //0.00257, 385000
              orbital_period:  { days: 28 },
              rotation_period: { days: 0 },
              tilt: 5.145,
              emissive: 0xFEF9E7,
              emissiveMap: '/assets/textures/solar/earth/moons/moon_2k.jpg',
              emissiveIntensity: .00125,
            }
          },
          POI: [
            {
              name: 'Montreal',
              lat: 45.5017,
              lng: -73.5673,
            },
            {
              name: 'Toronto',
              lat: 43.6532,
              lng: -79.3832,
            },
            {
              name: 'Los-Angeles',
              lat: 34.0522,
              lng: -118.2437,
            },
            {
              name: 'Chisinau',
              lat: 47.0105,
              lng: 28.8638,
            },
            {
              name: 'Kiev',
              lat: 50.4501,
              lng: 30.5234,
            }
          ]
        },
        'Mars': {
          nameId: 'Mars',
          radius:   { km: 3396 },
          distance: { AU: 1.5 },
          orbital_period:  { days: 687 },
          rotation_period: { days: 1.02 },
          tilt: 5.65,
          emissive: 0x943126,
          emissiveMap: '/assets/textures/solar/mars/2k_mars.jpg',
          emissiveIntensity: .000125,
          bumpMap: '/assets/textures/solar/mars/1k_mars_bump.jpg',
          bumpScale: 0.5,
        },
        'Jupiter': {
          nameId: 'Jupiter',
          radius:   { km: 69911 },
          distance: { AU: 5.2 },
          orbital_period:  { days: 4380 },
          rotation_period: { days: 0.413575 },
          emissive: 0xFAE5D3,
          emissiveMap: '/assets/textures/solar/jupiter/2k_jupiter.jpg',
          emissiveIntensity: .015,
          children: {
            Ganymede: {
              nameId: 'Ganymede',
              radius:   { km: 2634.1 },
              distance: { AU: 0.007152508221 * 4 },
              orbital_period:  { days: 7.16 },
              rotation_period: { days: 0 },
              tilt: 0.33,
              emissive: 0xFAE5D3,
              emissiveMap: '/assets/textures/solar/jupiter/moons/Ganymede-blinn.jpg',
              emissiveIntensity: .015,
            }
          }
        },
        'Saturn': {
          nameId: 'Saturn',
          radius:   { km: 58232 },
          distance: { AU: 9.5 },
          orbital_period:  { days: 29 * 365 },
          rotation_period: { days: 0.43416 },
          tilt: 26.73,
          textureMap: '',
          emissive: 0xFAE5D3,
          emissiveMap: '/assets/textures/solar/saturn/2k_saturn.jpg',
          emissiveIntensity: 0.001,
          children: {
            Titan: {
              nameId: 'Titan',
              radius:   { km: 2574.73 },
              distance: { AU: 0.008021504547 },
              orbital_period:  { days: 15.945 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xF1E17B
            },
            Enceladus: {
              nameId: 'Enceladus',
              radius:   { km: 252.1 },
              distance: { AU: 0.00159106543},
              orbital_period:  { days: 1.375 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Iapetus: {
              nameId: 'Iapetus',
              radius:   { km: 734.5 },
              distance: { AU: 0.02380381474 },
              orbital_period:  { days: 79 },
              rotation_period: { days: 0},
              tilt: 0,
              color: 0x506855
            },
            Rhea: {
              nameId: 'Rhea',
              radius:   { km: 763.8 },
              distance: { AU: 0.00352277741 },
              orbital_period:  { days: 4.5 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Dione: {
              nameId: 'Dione',
              radius:   { km: 561.4 },
              distance: { AU: 0.00252276318 },
              orbital_period:  { days: 2.75 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Tethys: {
              nameId: 'Tethys',
              radius:   { km: 531 },
              distance: { AU: 0.0019719532 },
              orbital_period:  { days: 1.875 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Mimas: {
              nameId: 'Mimas',
              radius:   { km: 198.2 },
              distance: { AU: 0.0012433332 },
              orbital_period:  { days: 0.96 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
          }
        },
        'Uranus': {
          nameId: 'Uranus',
          radius:   { km: 25362 },
          distance: { AU: 19.2 },
          orbital_period:  { days: 30660 },
          rotation_period: { days: 0.71832 },
          tilt: 97.77,
          emissive: 0x2E86C1,
          emissiveMap: '/assets/textures/solar/uranus/2k_uranus.jpg',
          emissiveIntensity: 0.001,
          children: {
            Titania: {
              nameId: 'Titania',
              radius:   { km: 788.4 },
              distance: { AU: 0.00291648536 },
              orbital_period:  { days: 8.7 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Oberon: {
              nameId: 'Oberon',
              radius:   { km: 761.4 },
              distance: { AU: 0.00390045659 },
              orbital_period:  { days: 13 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xF9D8F6
            },
            Umbriel: {
              nameId: 'Umbriel',
              radius:   { km: 584.7 },
              distance: { AU: 0.00177810017 },
              orbital_period:  { days: 4.125 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Ariel: {
              nameId: 'Ariel',
              radius:   { km: 578.9 },
              distance: { AU: 0.00127608768 },
              orbital_period:  { days: 2.5 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
            Miranda: {
              nameId: 'Miranda',
              radius:   { km: 235.8 },
              distance: { AU: 0.000868327867 },
              orbital_period:  { days: 1.413479 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDADADA
            },
          }
        },
        'Neptun': {
          nameId: 'Neptun',
          radius:   { km: 24622 },
          distance: { AU: 30.1 },
          orbital_period:  { days: 165 * 365 },
          rotation_period: { days: 0.67083 },
          tilt: 28.32,
          emissive: 0x154360,
          emissiveMap: '/assets/textures/solar/neptune/2k_neptune.jpg',
          emissiveIntensity: 0.001,
          children: {
            Triton: {
              nameId: 'Triton',
              radius:   { km: 1353.4 },
              distance: { AU: 0.002371417443 },
              orbital_period:  { days: 5.875 },
              rotation_period: { days: 0 },
              tilt: 0,
              color: 0xDAB0FF
            },
          }
        }
      }
    },
  },
  loading: true,
  settings: {
    timeSpeed: 1,
    size_scaling: {
      multiplier: 0.0001
    },
    distance_scaling: {
      divider: 1000000
    },
  },
});

function _findObjectSection(object: any, sectionKey: string): () => {} {
  let result = null

  for (const key of Object.keys(object)) {
    if (key === sectionKey) {
      result = object[key]
      break
    } else if (!result && object[key].children) {
      result = _findObjectSection(object[key].children, sectionKey)
    }
  }

  return JSON.parse(JSON.stringify(result))
}

export default function useWorldStore() {
  const getPlanetoidInfo = ((nameId: string) => {
    return _findObjectSection(state.solarSystemStore, nameId)
  })
  const getSettings = (() => {
    return state.settings
  })

  const setSolarState = (solar: any) => {
    state.solarSystemStore = solar
  }

  const setTimeSpeed = (value: number) => {
    state.settings = { ...state.settings, timeSpeed: value }
  }

  return {
    ...toRefs(state), // convert to refs when returning
    setSolarState,
    setTimeSpeed,
    getPlanetoidInfo
  }
}