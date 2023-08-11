import Modeler from 'bpmn-js/lib/Modeler';

import FeaturesModule from './features';

import BundledFeaturesModule from '../dist/features.bundle';

console.log(BundledFeaturesModule);

import xml from './diagram.bpmn';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import './app.css';

if (window.modeler) {
  window.modeler.destroy();
}

window.modeler = new Modeler({
  container: '#app',
  keyboard: {
    bindTo: window
  },
  additionalModules: [
    FeaturesModule
  ]
});

window.modeler.importXML(xml);