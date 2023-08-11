import Modeler from 'bpmn-js/lib/Modeler';

import BpmnColorPickerModule from 'bpmn-js-color-picker';

import FeaturesModule from './features';

import xml from './diagram.bpmn';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import './app.css';

console.log('creating modeler');

const modeler = new Modeler({
  container: '#app',
  keyboard: {
    bindTo: window
  },
  additionalModules: [
    FeaturesModule,
    BpmnColorPickerModule
  ]
});

modeler.importXML(xml);