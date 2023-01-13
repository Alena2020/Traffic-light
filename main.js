const btn = document.querySelector('.btn');
const trafficLight = document.querySelector('.traffic-light');

initLight(trafficLight);

btn.addEventListener('click', function() {
  switchLight(trafficLight);
});

