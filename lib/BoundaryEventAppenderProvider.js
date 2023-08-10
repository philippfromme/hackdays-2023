import {
  assign,
  forEach,
  isArray,
  every
} from 'min-dash';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import {
  isExpanded,
  isEventSubProcess
} from 'bpmn-js/lib/util/DiUtil';

import {
  isAny
} from 'bpmn-js/lib/features/modeling/util/ModelingUtil';

import {
  getChildLanes
} from 'bpmn-js/lib/features/modeling/util/LaneUtil';

import {
  hasPrimaryModifier
} from 'diagram-js/lib/util/Mouse';

import { getBBox } from 'diagram-js/lib/util/Elements';

/**
 * @typedef {import('didi').Injector} Injector
 * @typedef {import('diagram-js/lib/core/EventBus').default} EventBus
 * @typedef {import('diagram-js/lib/features/context-pad/ContextPad').default} ContextPad
 * @typedef {import('../modeling/Modeling').default} Modeling
 * @typedef {import('../modeling/ElementFactory').default} ElementFactory
 * @typedef {import('diagram-js/lib/features/connect/Connect').default} Connect
 * @typedef {import('diagram-js/lib/features/create/Create').default} Create
 * @typedef {import('diagram-js/lib/features/popup-menu/PopupMenu').default} PopupMenu
 * @typedef {import('diagram-js/lib/features/canvas/Canvas').default} Canvas
 * @typedef {import('diagram-js/lib/features/rules/Rules').default} Rules
 * @typedef {import('diagram-js/lib/i18n/translate/translate').default} Translate
 *
 * @typedef {import('../../model/Types').Element} Element
 * @typedef {import('../../model/Types').ModdleElement} ModdleElement
 *
 * @typedef { { } } BoundaryEventAppenderConfig
 */


/**
 * BPMN-specific boundary event appender provider.
 *
 * @param {BoundaryEventAppenderConfig} config
 * @param {Injector} injector
 * @param {EventBus} eventBus
 * @param {ContextPad} contextPad
 * @param {Modeling} modeling
 * @param {ElementFactory} elementFactory
 * @param {Connect} connect
 * @param {Create} create
 * @param {PopupMenu} popupMenu
 * @param {Canvas} canvas
 * @param {Rules} rules
 * @param {Translate} translate
 */
export default function BoundaryEventAppenderProvider(
  config, injector, eventBus,
  boundaryEventAppender, modeling, elementFactory,
  connect, create, popupMenu,
  canvas, rules, translate) {

  config = config || {};

  boundaryEventAppender.registerProvider(this);

  this._boundaryEventAppender = boundaryEventAppender;

  this._modeling = modeling;

  this._elementFactory = elementFactory;
  this._connect = connect;
  this._create = create;
  this._popupMenu = popupMenu;
  this._canvas = canvas;
  this._rules = rules;
  this._translate = translate;

  if (config.autoPlace !== false) {
    this._autoPlace = injector.get('autoPlace', false);
  }

  eventBus.on('create.end', 250, function (event) {
    var context = event.context,
      shape = context.shape;

    if (!hasPrimaryModifier(event) || !boundaryEventAppender.isShown(shape)) {
      return;
    }

  });
}

BoundaryEventAppenderProvider.$inject = [
  'config.boundaryEventAppender',
  'injector',
  'eventBus',
  'boundaryEventAppender',
  'modeling',
  'elementFactory',
  'connect',
  'create',
  'popupMenu',
  'canvas',
  'rules',
  'translate'
];

function isAppendAllowed(element) {
  var businessObject = element.businessObject;


  // TODO only on task types + subprocesses

  return element.type !== 'label' &
    is(businessObject, 'bpmn:FlowNode') &&
    (
      !is(businessObject, 'bpmn:Event') &&
      !is(businessObject, 'bpmn:Gateway') &&
      !businessObject.isForCompensation &&
      !isEventSubProcess(businessObject)
    );
};

/**
* @param {Element} element
*
* @return {BoundaryEventAppenderAction}
*/
BoundaryEventAppenderProvider.prototype.getBoundaryEventAppenderClickAction = function (element) {
  var boundaryEventAppender = this._boundaryEventAppender,
    modeling = this._modeling,

    elementFactory = this._elementFactory,
    connect = this._connect,
    create = this._create,
    popupMenu = this._popupMenu,
    rules = this._rules,
    autoPlace = this._autoPlace,
    translate = this._translate;

  if (!isAppendAllowed(element)) return null;

  var task = 'bpmn:BoundaryEvent';
  var options = {};

  function appendStart(event, element) {

    var shape = elementFactory.createShape(assign({ type: task }, options));
    create.start(event, shape, {
      source: element
    });


  }

  // TODO custom autoplace to append the event on the element 
  /*
  var append = autoPlace ? function(event, element) {
    var shape = elementFactory.createShape(assign({ type: task }, options));
    
    const node = boundaryEventAppender.getNode(element).html;

    const nodeRect = node.getBoundingClientRect();
    
    var position = {
      x: nodeRect.left + 10,
      y: nodeRect.top + 10
    };
    modeling.appendShape(element, shape, position, element.parent);
    //autoPlace.append(element, shape);
  } : appendStart;
  */
  

  return appendStart;
}

/**
* @param {Element} element
*
* @return {BoundaryEventAppenderAction}
*/
BoundaryEventAppenderProvider.prototype.getBoundaryEventAppenderDragAction = function (element) {
  var boundaryEventAppender = this._boundaryEventAppender,
    modeling = this._modeling,

    elementFactory = this._elementFactory,
    connect = this._connect,
    create = this._create,
    popupMenu = this._popupMenu,
    rules = this._rules,
    autoPlace = this._autoPlace,
    translate = this._translate;

  if (!isAppendAllowed(element)) return null;

  var task = 'bpmn:BoundaryEvent';
  var options = {};

  return function(event, element) {
    var shape = elementFactory.createShape(assign({ type: task }, options));
    create.start(event, shape, {
      source: element
    });
  };
}


/**
 * Calculates the position for the append menu relatively to the element.
 * The menu should pop up directly behind the mouse cursor
 *
 * @param {djs.model.Base} element
 * @returns {Object}
 */
BoundaryEventAppenderProvider.prototype._getAppendMenuPosition = function(element) {
  const boundaryEventAppender = this._boundaryEventAppender;
  const popupMenu = this._popupMenu;

  const X_OFFSET = 20;
  const Y_OFFSET = 90;
  const POPUP_HEIGHT = 360; 
  
  // TODO get height from popup after creation or make configurable

  const node = boundaryEventAppender.getNode(element).html;

  const nodeRect = node.getBoundingClientRect();

  const pos = {
    x: nodeRect.left - X_OFFSET,
    y: nodeRect.top + POPUP_HEIGHT - Y_OFFSET
  };

  return pos;
};

// helpers /////////

/**
 * @param {ModdleElement} businessObject
 * @param {string} type
 * @param {string} eventDefinitionType
 *
 * @return {boolean}
 */
function isEventType(businessObject, type, eventDefinitionType) {

  var isType = businessObject.$instanceOf(type);
  var isDefinition = false;

  var definitions = businessObject.eventDefinitions || [];
  forEach(definitions, function(def) {
    if (def.$type === eventDefinitionType) {
      isDefinition = true;
    }
  });

  return isType && isDefinition;
}