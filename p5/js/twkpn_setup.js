// https://cocopon.github.io/tweakpane/quick-tour.html
// CDN
const pane = new Tweakpane.Pane();
const PARAMS = {
  factor: 123,
  title: 'hello',
  color: '#ff0055',
};
pane.addInput(PARAMS, 'factor');
pane.addInput(PARAMS, 'title');
pane.addInput(PARAMS, 'color');
var twkpn = document.getElementById('twkpn');
twkpn.innerHTML = pane;