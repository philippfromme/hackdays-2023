import {
  assign,
  forEach
} from 'min-dash';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import {
  isEventSubProcess
} from 'bpmn-js/lib/util/DiUtil';

import {
  hasPrimaryModifier
} from 'diagram-js/lib/util/Mouse';

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
 * @typedef {import('diagram-js/lib/features/dragging/Dragging').default} Dragging
 * @typedef {import('diagram-js/lib/i18n/translate/translate').default} Translate
 *
 * @typedef {import('../../model/Types').Element} Element
 * @typedef {import('../../model/Types').ModdleElement} ModdleElement
 *
 * @typedef { { } } AppendNodeConfig
 */

/**
 * BPMN-specific append node provider.
 *
 * @param {AppendNodeConfig} config
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
 * @param {Dragging} dragging
 * @param {Translate} translate
 */
export default function AppendNodeProvider(
  config, injector, eventBus,
  appendNode, modeling, elementFactory,
  connect, create, popupMenu,
  canvas, rules, dragging, translate) {

  config = config || {};

  appendNode.registerProvider(this);

  this._appendNode = appendNode;

  this._modeling = modeling;

  this._elementFactory = elementFactory;
  this._connect = connect;
  this._create = create;
  this._popupMenu = popupMenu;
  this._canvas = canvas;
  this._rules = rules;
  this._dragging = dragging;
  this._translate = translate;

  if (config.autoPlace !== false) {
    this._autoPlace = injector.get('autoPlace', false);
  }

  eventBus.on('create.end', 250, function (event) {
    var context = event.context,
      shape = context.shape;

    if (!hasPrimaryModifier(event) || !appendNode.isShown(shape)) {
      return;
    }

  });
}

AppendNodeProvider.$inject = [
  'config.appendNode',
  'injector',
  'eventBus',
  'appendNode',
  'modeling',
  'elementFactory',
  'connect',
  'create',
  'popupMenu',
  'canvas',
  'rules',
  'dragging',
  'translate'
];

function isAppendAllowed(element) {
  var businessObject = element.businessObject;


  return element.type !== 'label' &
    is(businessObject, 'bpmn:FlowNode') &&
    (
      !is(businessObject, 'bpmn:EndEvent') &&
      !businessObject.isForCompensation &&
      !isEventType(businessObject, 'bpmn:IntermediateThrowEvent', 'bpmn:LinkEventDefinition') &&
      !isEventSubProcess(businessObject) ||
      is(businessObject, 'bpmn:EventBasedGateway') ||
      isEventType(businessObject, 'bpmn:BoundaryEvent', 'bpmn:CompensateEventDefinition')
    );
};

/**
* @param {Element} element
*
* @return {AppendNodeAction}
*/
/*
AppendNodeProvider.prototype.getAppendNodeClickAction = function (element) {
  var appendNode = this._appendNode,
    modeling = this._modeling,

    elementFactory = this._elementFactory,
    connect = this._connect,
    create = this._create,
    popupMenu = this._popupMenu,
    rules = this._rules,
    autoPlace = this._autoPlace,
    translate = this._translate;

  if (!isAppendAllowed(element)) return null;

  var task = 'bpmn:Task';
  var options = {};

  function appendStart(event, element) {

    var shape = elementFactory.createShape(assign({ type: task }, options));
    create.start(event, shape, {
      source: element
    });
  }


  var append = autoPlace ? function(event, element) {
    var shape = elementFactory.createShape(assign({ type: task }, options));

    autoPlace.append(element, shape);
  } : appendStart;

  return append;
}
*/

AppendNodeProvider.prototype.getAppendNodeClickAction = function (element) {
  var appendNode = this._appendNode,
    modeling = this._modeling,

    elementFactory = this._elementFactory,
    connect = this._connect,
    create = this._create,
    popupMenu = this._popupMenu,
    rules = this._rules,
    autoPlace = this._autoPlace,
    translate = this._translate;

  if (!isAppendAllowed(element)) return null;

  const getAppendMenuPosition = this._getAppendMenuPosition.bind(this);

  if (popupMenu.isEmpty(element, 'bpmn-append')) return null;

  return function(event, element) {
    const position = assign(getAppendMenuPosition(element), {
      cursor: { x: event.x, y: event.y }
    });

    popupMenu.open(element, 'bpmn-append', position, {
      title: translate('Append element'),
      width: 300,
      search: true
    });  
  };
}

/**
* @param {Element} element
*
* @return {AppendNodeAction}
*/
AppendNodeProvider.prototype.getAppendNodeDragAction = function (element) {
  var appendNode = this._appendNode,
    modeling = this._modeling,

    elementFactory = this._elementFactory,
    connect = this._connect,
    create = this._create,
    popupMenu = this._popupMenu,
    rules = this._rules,
    dragging = this._dragging,
    autoPlace = this._autoPlace,
    translate = this._translate;

  if (!isAppendAllowed(element)) return null;

  var businessObject = element.businessObject;

  function startConnect(event, element) {
    connect.start(event, element);
    /*
    dragging.init(event, 'connect', {
      data: {
        shape: element,
        context: {
          start: element
        }
      }
    });
    */
  }

  return startConnect;
}


/**
 * Calculates the position for the append menu relatively to the element.
 * The menu should pop up directly behind the mouse cursor
 *
 * @param {djs.model.Base} element
 * @returns {Object}
 */
AppendNodeProvider.prototype._getAppendMenuPosition = function(element) {
  const appendNode = this._appendNode;
  const popupMenu = this._popupMenu;

  const X_OFFSET = 20;
  const Y_OFFSET = 90;
  const POPUP_HEIGHT = 360; 
  
  // TODO get height from popup after creation or make configurable

  const node = appendNode.getNode(element).html;

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