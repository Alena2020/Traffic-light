const LIGHTS = {
  red: 'red',
  yellow: 'yellow',
  green: 'green'
};

const CLASSES_BY_LIGHT = {
  [LIGHTS.red]: 'traffic-light_red',
  [LIGHTS.yellow]: 'traffic-light_yellow',
  [LIGHTS.green]: 'traffic-light_green'
};

const NEXT_LIGHT_BY_LIGHT = {
  [LIGHTS.red]: LIGHTS.green,
  [LIGHTS.green]: LIGHTS.yellow,
  [LIGHTS.yellow]: LIGHTS.red
};

let currentLight = LIGHTS.red;

function switchLight(light) {
  const currentClass = CLASSES_BY_LIGHT[currentLight];
  const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
  const nextClass = CLASSES_BY_LIGHT[nextLight];

  currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];

  light.classList.replace(currentClass, nextClass);
}

function initLight(light) {
  light.classList.add(CLASSES_BY_LIGHT[currentLight]);
}