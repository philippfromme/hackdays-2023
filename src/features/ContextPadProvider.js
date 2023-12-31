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
 * @typedef {import('diagram-js/lib/features/context-pad/ContextPadProvider').default<Element>} BaseContextPadProvider
 * @typedef {import('diagram-js/lib/features/context-pad/ContextPadProvider').ContextPadEntries} ContextPadEntries
 * @typedef {import('diagram-js/lib/features/context-pad/ContextPadProvider').ContextPadEntry} ContextPadEntry
 *
 * @typedef { { autoPlace?: boolean; } } ContextPadConfig
 */

/**
 * BPMN-specific context pad provider.
 *
 * @implements {BaseContextPadProvider}
 *
 * @param {ContextPadConfig} config
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
export default function ContextPadProvider(
    config, injector, eventBus,
    contextPad, modeling, elementFactory,
    connect, create, popupMenu,
    canvas, rules, translate) {

  config = config || {};

  contextPad.registerProvider(this);

  this._contextPad = contextPad;

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

  eventBus.on('create.end', 250, function(event) {
    var context = event.context,
        shape = context.shape;

    if (!hasPrimaryModifier(event) || !contextPad.isOpen(shape)) {
      return;
    }

    var entries = contextPad.getEntries(shape);

    if (entries.replace) {
      entries.replace.action.click(event, shape);
    }
  });
}

ContextPadProvider.$inject = [
  'config.contextPad',
  'injector',
  'eventBus',
  'contextPad',
  'modeling',
  'elementFactory',
  'connect',
  'create',
  'popupMenu',
  'canvas',
  'rules',
  'translate'
];

/**
 * @param {Element[]} elements
 *
 * @return {ContextPadEntries}
 */
ContextPadProvider.prototype.getMultiElementContextPadEntries = function(elements) {
  var modeling = this._modeling;

  var actions = {};

  if (this._isDeleteAllowed(elements)) {
    assign(actions, {
      'delete': {
        group: 'edit',
        html: `<div class="entry">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
            <path d="M7 6H6V12H7V6Z" fill="currentColor"/>
            <path d="M10 6H9V12H10V6Z" fill="currentColor"/>
            <path d="M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4Z" fill="currentColor"/>
            <path d="M10 1H6V2H10V1Z" fill="currentColor"/>
          </svg>
        </div>`,
        title: this._translate('Remove'),
        action: {
          click: function(event, elements) {
            modeling.removeElements(elements.slice());
          }
        }
      }
    });
  }

  return actions;
};

/**
 * @param {Element[]} elements
 *
 * @return {boolean}
 */
ContextPadProvider.prototype._isDeleteAllowed = function(elements) {

  var baseAllowed = this._rules.allowed('elements.delete', {
    elements: elements
  });

  if (isArray(baseAllowed)) {
    return every(baseAllowed, function(element) {
      return includes(baseAllowed, element);
    });
  }

  return baseAllowed;
};

/**
 * @param {Element} element
 *
 * @return {ContextPadEntries}
 */
ContextPadProvider.prototype.getContextPadEntries = function(element) {
  var contextPad = this._contextPad,
      modeling = this._modeling,

      elementFactory = this._elementFactory,
      connect = this._connect,
      create = this._create,
      popupMenu = this._popupMenu,
      rules = this._rules,
      autoPlace = this._autoPlace,
      translate = this._translate;

  var actions = {};

  if (element.type === 'label') {
    return actions;
  }

  var businessObject = element.businessObject;

  function startConnect(event, element) {
    connect.start(event, element);
  }

  function removeElement(e, element) {
    modeling.removeElements([ element ]);
  }

  function getReplaceMenuPosition(element) {

    var Y_OFFSET = 5;

    var pad = contextPad.getPad(element).html;

    var padRect = pad.getBoundingClientRect();

    var pos = {
      x: padRect.left,
      y: padRect.bottom + Y_OFFSET
    };

    return pos;
  }

  /**
   * Create an append action.
   *
   * @param {string} type
   * @param {string} className
   * @param {string} [title]
   * @param {Object} [options]
   *
   * @return {ContextPadEntry}
   */
  function appendAction(type, className, title, options) {

    if (typeof title !== 'string') {
      options = title;
      title = translate('Append {type}', { type: type.replace(/^bpmn:/, '') });
    }

    function appendStart(event, element) {

      var shape = elementFactory.createShape(assign({ type: type }, options));
      create.start(event, shape, {
        source: element
      });
    }


    var append = autoPlace ? function(event, element) {
      var shape = elementFactory.createShape(assign({ type: type }, options));

      autoPlace.append(element, shape);
    } : appendStart;


    return {
      group: 'model',
      className: className,
      title: title,
      action: {
        dragstart: appendStart,
        click: append
      }
    };
  }

  function splitLaneHandler(count) {

    return function(_, element) {

      // actual split
      modeling.splitLane(element, count);

      // refresh context pad after split to
      // get rid of split icons
      contextPad.open(element, true);
    };
  }

  if (!popupMenu.isEmpty(element, 'bpmn-replace')) {

    // Replace menu entry
    assign(actions, {
      'replace': {
        group: 'edit',
        html: `<div class="entry">
          <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="myMask">
              <rect x="0" y="0" width="17" height="17" fill="white" stroke="white" />
              <rect x="5.5" y="6.5" width="11" height="9" rx="2.5" fill="black" stroke="black" />
            </mask>
            <rect x="0.5" y="1.5" width="10" height="10" rx="5" fill="transparent" stroke="currentColor" mask="url(#myMask)" />
            <rect x="5.5" y="6.5" width="11" height="9" rx="2.5" fill="transparent" stroke="currentColor" />
          </svg>
        </div>`,
        title: translate('Change type'),
        action: {
          click: function(event, element) {

            var position = assign(getReplaceMenuPosition(element), {
              cursor: { x: event.x, y: event.y }
            });

            popupMenu.open(element, 'bpmn-replace', position, {
              title: translate('Change element'),
              width: 300,
              search: true
            });
          }
        }
      }
    });
  }

  if (isAny(businessObject, [ 'bpmn:Lane', 'bpmn:Participant' ]) && isExpanded(element)) {

    var childLanes = getChildLanes(element);

    

    if (childLanes.length < 2) {

      if (element.height >= 120) {
        assign(actions, {
          'lane-divide-two': {
            group: 'lane-divide',
            className: 'bpmn-icon-lane-divide-two',
            title: translate('Divide into two Lanes'),
            action: {
              click: splitLaneHandler(2)
            }
          }
        });
      }

      if (element.height >= 180) {
        assign(actions, {
          'lane-divide-three': {
            group: 'lane-divide',
            className: 'bpmn-icon-lane-divide-three',
            title: translate('Divide into three Lanes'),
            action: {
              click: splitLaneHandler(3)
            }
          }
        });
      }
    }

    assign(actions, {
      'lane-insert-below': {
        group: 'lane-insert-below',
        className: 'bpmn-icon-lane-insert-below',
        title: translate('Add Lane below'),
        action: {
          click: function(event, element) {
            modeling.addLane(element, 'bottom');
          }
        }
      }
    });

  }

  if (is(businessObject, 'bpmn:FlowNode')) {

    if (is(businessObject, 'bpmn:EventBasedGateway')) {

      assign(actions, {
        'append.receive-task': appendAction(
          'bpmn:ReceiveTask',
          'bpmn-icon-receive-task',
          translate('Append ReceiveTask')
        ),
        'append.message-intermediate-event': appendAction(
          'bpmn:IntermediateCatchEvent',
          'bpmn-icon-intermediate-event-catch-message',
          translate('Append MessageIntermediateCatchEvent'),
          { eventDefinitionType: 'bpmn:MessageEventDefinition' }
        ),
        'append.timer-intermediate-event': appendAction(
          'bpmn:IntermediateCatchEvent',
          'bpmn-icon-intermediate-event-catch-timer',
          translate('Append TimerIntermediateCatchEvent'),
          { eventDefinitionType: 'bpmn:TimerEventDefinition' }
        ),
        'append.condition-intermediate-event': appendAction(
          'bpmn:IntermediateCatchEvent',
          'bpmn-icon-intermediate-event-catch-condition',
          translate('Append ConditionIntermediateCatchEvent'),
          { eventDefinitionType: 'bpmn:ConditionalEventDefinition' }
        ),
        'append.signal-intermediate-event': appendAction(
          'bpmn:IntermediateCatchEvent',
          'bpmn-icon-intermediate-event-catch-signal',
          translate('Append SignalIntermediateCatchEvent'),
          { eventDefinitionType: 'bpmn:SignalEventDefinition' }
        )
      });
    } else

    if (isEventType(businessObject, 'bpmn:BoundaryEvent', 'bpmn:CompensateEventDefinition')) {

      assign(actions, {
        'append.compensation-activity':
            appendAction(
              'bpmn:Task',
              'bpmn-icon-task',
              translate('Append compensation activity'),
              {
                isForCompensation: true
              }
            )
      });
    } else

    if (!is(businessObject, 'bpmn:EndEvent') &&
        !businessObject.isForCompensation &&
        !isEventType(businessObject, 'bpmn:IntermediateThrowEvent', 'bpmn:LinkEventDefinition') &&
        !isEventSubProcess(businessObject)) {

      assign(actions, {
        /*
        'append.end-event': appendAction(
          'bpmn:EndEvent',
          'bpmn-icon-end-event-none',
          translate('Append EndEvent')
        ),
        'append.gateway': appendAction(
          'bpmn:ExclusiveGateway',
          'bpmn-icon-gateway-none',
          translate('Append Gateway')
        ),
        'append.append-task': appendAction(
          'bpmn:Task',
          'bpmn-icon-task',
          translate('Append Task')
        ),
        'append.intermediate-event': appendAction(
          'bpmn:IntermediateThrowEvent',
          'bpmn-icon-intermediate-event-none',
          translate('Append Intermediate/Boundary Event')
        )
        */
      });
    }
  }

  if (is(businessObject, 'bpmn:SequenceFlow')) {
    assign(actions, {
      'append.text-annotation': appendAction(
        'bpmn:TextAnnotation',
        'bpmn-icon-text-annotation',
        translate('Append TextAnnotation')
      )
    });
  }

  if (
    isAny(businessObject, [
      'bpmn:FlowNode',
      'bpmn:InteractionNode',
      'bpmn:DataObjectReference',
      'bpmn:DataStoreReference',
    ])
  ) {
    assign(actions, {
      'append.text-annotation': appendAction(
        'bpmn:TextAnnotation',
        'bpmn-icon-text-annotation',
        translate('Append TextAnnotation')
      ),

      'connect': {
        group: 'connect',
        html: `<div class="entry">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" transform="translate(0.948242)" fill="transparent" style="mix-blend-mode:multiply"/>
            <path d="M8.44824 4.5V6H17.8907L5.44824 18.4425L6.50574 19.5L18.9482 7.0575V16.5H20.4482V4.5H8.44824Z" fill="currentColor"/>
          </svg>
        </div>`,
        title: translate(
          'Connect using ' +
            (businessObject.isForCompensation
              ? ''
              : 'Sequence/MessageFlow or ') +
            'Association'
        ),
        action: {
          click: startConnect,
          dragstart: startConnect,
        },
      },
    });
  }

  if (is(businessObject, 'bpmn:TextAnnotation')) {
    assign(actions, {
      'connect': {
        group: 'connect',
        html: `<div class="entry">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" transform="translate(0.948242)" fill="transparent" style="mix-blend-mode:multiply"/>
          <path d="M8.44824 4.5V6H17.8907L5.44824 18.4425L6.50574 19.5L18.9482 7.0575V16.5H20.4482V4.5H8.44824Z" fill="currentColor"/>
        </svg>
      </div>`,
        title: translate('Connect using Association'),
        action: {
          click: startConnect,
          dragstart: startConnect,
        },
      },
    });
  }

  if (isAny(businessObject, [ 'bpmn:DataObjectReference', 'bpmn:DataStoreReference' ])) {
    assign(actions, {
      'connect': {
        group: 'connect',
        html: `<div class="entry">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" transform="translate(0.948242)" fill="transparent" style="mix-blend-mode:multiply"/>
          <path d="M8.44824 4.5V6H17.8907L5.44824 18.4425L6.50574 19.5L18.9482 7.0575V16.5H20.4482V4.5H8.44824Z" fill="currentColor"/>
        </svg>
      </div>`,
        title: translate('Connect using DataInputAssociation'),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    });
  }

  if (is(businessObject, 'bpmn:Group')) {
    assign(actions, {
      'append.text-annotation': appendAction(
        'bpmn:TextAnnotation',
        'bpmn-icon-text-annotation',
        translate('Append TextAnnotation')
      )
    });
  }

  // delete element entry, only show if allowed by rules
  var deleteAllowed = rules.allowed('elements.delete', { elements: [ element ] });

  if (isArray(deleteAllowed)) {

    // was the element returned as a deletion candidate?
    deleteAllowed = deleteAllowed[0] === element;
  }

  if (deleteAllowed) {
    assign(actions, {
      'delete': {
        group: 'delete',
        html: `<div class="entry">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 6H6V12H7V6Z" fill="currentColor"/>
            <path d="M10 6H9V12H10V6Z" fill="currentColor"/>
            <path d="M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4Z" fill="currentColor"/>
            <path d="M10 1H6V2H10V1Z" fill="currentColor"/>
          </svg>
        </div>`,
        title: translate('Remove'),
        action: {
          click: removeElement
        }
      }
    });
  }

  return actions;
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

function includes(array, item) {
  return array.indexOf(item) !== -1;
}