import {
  insertCSS
} from 'bpmn-js/test/helper';

import Modeler from 'bpmn-js/lib/Modeler';

import BpmnColorPickerModule from 'bpmn-js-color-picker';

import FooModule from '../../lib';

insertCSS('diagram-js', require('bpmn-js/dist/assets/diagram-js.css'));
insertCSS('bpmn-font', require('bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'));

insertCSS('bpmn-js', require('bpmn-js/dist/assets/bpmn-js.css'));

insertCSS('styles', require('assets/css/styles.css'));

var singleStart = window.__env__ && window.__env__.SINGLE_START === 'true';


describe('linting', function() {

  let modeler, el;

  beforeEach(function() {
    el = document.createElement('div');
    el.style.top = '0px';
    el.style.left = '0px';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.position = 'fixed';

    document.body.appendChild(el);

    // given
    modeler = new Modeler({
      container: el,
      additionalModules: [
        BpmnColorPickerModule,
        FooModule
      ]
    });
  });


  (singleStart ? it.only : it)('should work', async function() {

    // given
    const diagram = require('./diagram.bpmn');

    // when
    await modeler.importXML(diagram);

    // then
  });

});
