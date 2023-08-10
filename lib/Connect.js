import {
  getMid
} from 'diagram-js/lib/layout/LayoutUtil';

import {
  isNil,
  isObject,
  assign
} from 'min-dash';

/**
 * @typedef {import('../../model/Types').Element} Element
 *
 * @typedef {import('../../util/Types').Point} Point
 *
 * @typedef {import('../dragging/Dragging').default} Dragging
 * @typedef {import('../../core/EventBus').default} EventBus
 * @typedef {import('../modeling/Modeling').default} Modeling
 * @typedef {import('../modeling/ElementFactory').default} ElementFactory
 * @typedef {import('../rules/Rules').default} Rules
 */

/**
 * @param {EventBus} eventBus
 * @param {Dragging} dragging
 * @param {Modeling} modeling
 * @param {Rules} rules
 * @param {ElementFactory} elementFactory
 */
export default function Connect(eventBus, dragging, modeling, rules, elementFactory) {

  // rules

  var UNALLOWED_APPEND_SOURCES = [
    'bpmn:Participant',
    'bpmn:DataObjectReference',
    'bpmn:DataStoreReference',
    'bpmn:EndEvent'
  ];

  function isAppendTargetValid(source, target) {
    return !UNALLOWED_APPEND_SOURCES.includes(source.type) && 
      (!target || target.type === 'bpmn:Process' || target.constructor.name === 'RootImpl' || !target.parent ||
      target.type === 'bpmn:Participant' && source?.parent?.id === target.id);
  }

  function canConnect(source, target) {
    return rules.allowed('connection.create', {
      source: source,
      target: target
    });
  }

  function canConnectReverse(source, target) {
    return canConnect(target, source);
  }


  // event handlers

  eventBus.on('connect.hover', function (event) {
    var context = event.context,
      start = context.start,
      hover = event.hover,
      canExecute,
      canAppend;

    // cache hover state
    context.hover = hover;

    canExecute = context.canExecute = canConnect(start, hover);
    canAppend = context.canAppend = isAppendTargetValid(start, hover);

    // ignore hover
    if (isNil(canExecute)) {
      return;
    }

    if (canExecute !== false) {
      context.source = start;
      context.target = hover;

      return;
    }

    canExecute = context.canExecute = canConnectReverse(start, hover);

    // ignore hover
    if (isNil(canExecute)) {
      return;
    }

    if (canExecute !== false) {
      context.source = hover;
      context.target = start;
    }
  });

  eventBus.on(['connect.out', 'connect.cleanup'], function (event) {
    var context = event.context;

    context.hover = null;
    context.source = null;
    context.target = null;

    context.canExecute = false;
    context.canAppend = false;
  });

  eventBus.on('connect.end', function (event) {
    var context = event.context,
      canExecute = context.canExecute,
      canAppend = context.canAppend,
      connectionStart = context.connectionStart,
      connectionEnd = {
        x: event.x,
        y: event.y
      },
      source = context.source,
      target = context.target;

    // TODO exclude case where connect is forbidden
    console.log(context);
    if (canAppend) {
      var shape = elementFactory.createShape(assign({ type: 'bpmn:Task' }, {}));

      var createdShape = modeling.createShape(shape, connectionEnd, context.start.parent, { attach: false });
      target = createdShape;
      canExecute = context.canExecute = canConnect(context.start, target);
    }
    
    if (!canExecute) {
      return false;
    }

    var attrs = null,
      hints = {
        connectionStart: isReverse(context) ? connectionEnd : connectionStart,
        connectionEnd: isReverse(context) ? connectionStart : connectionEnd
      };

    if (isObject(canExecute)) {
      attrs = canExecute;
    }

    context.connection = modeling.connect(context.start, target, attrs, hints);
  });


  // API

  /**
   * Start connect operation.
   *
   * @param {MouseEvent|TouchEvent} event
   * @param {Element} start
   * @param {Point} [connectionStart]
   * @param {boolean} [autoActivate=false]
   */
  this.start = function (event, start, connectionStart, autoActivate) {
    if (!isObject(connectionStart)) {
      autoActivate = connectionStart;
      connectionStart = getMid(start);
    }

    dragging.init(event, 'connect', {
      autoActivate: autoActivate,
      data: {
        shape: start,
        context: {
          start: start,
          connectionStart: connectionStart
        }
      }
    });
  };
}

Connect.$inject = [
  'eventBus',
  'dragging',
  'modeling',
  'rules',
  'elementFactory'
];


// helpers //////////

export function isReverse(context) {
  var hover = context.hover,
    source = context.source,
    target = context.target;

  return hover && source && hover === source && source !== target;
}