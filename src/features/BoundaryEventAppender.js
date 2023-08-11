import {
  assign,
  every,
  forEach,
  isArray,
  isDefined,
  isFunction,
  isObject,
  some
} from 'min-dash';

import {
  delegate as domDelegate,
  event as domEvent,
  attr as domAttr,
  query as domQuery,
  classes as domClasses,
  domify as domify
} from 'min-dom';

import { getBBox } from 'diagram-js/lib/util/Elements';

/**
 * @typedef {import('../../model/Types').Element} Element
 *
 * @typedef {import('../../util/Types').Rect} Rect
 *
 * @typedef {import('../../core/Canvas').default} Canvas
 * @typedef {import('../../core/EventBus').default} EventBus
 * @typedef {import('../overlays/Overlays').default} Overlays
 *
 * @typedef {import('../overlays/Overlays').Overlay} Overlay
 *
 */

/**
 * @template {Element} [ElementType=Element]
 *
 * @typedef {ElementType|ElementType[]} BoundaryEventAppenderTarget
 */

var nodeSelector = '.djs-boundary-event-appender-circle';
var OFFSET = 20;
var NODE_WIDTH = 20;

var DEFAULT_PRIORITY = 1000;

var ALLOWED_ACTIONS = ['click', 'dragstart'];

/**
 * Append node around elements,
 * allowing to append anything.
 *
 * @param {Canvas} canvas
 * @param {EventBus} eventBus
 * @param {Overlays} overlays
 */
export default function BoundaryEventAppender(canvas, eventBus, overlays) {
  this._canvas = canvas;
  this._eventBus = eventBus;
  this._overlays = overlays;


  this._current = null;

  this._init();
}

BoundaryEventAppender.$inject = [
  'canvas',
  'eventBus',
  'overlays'
];

// TODO provider to only show on relevant elements

/**
 * Registers events needed for interaction with other components.
 */
BoundaryEventAppender.prototype._init = function () {
  var self = this;

  this._eventBus.on('selection.changed', function (event) {

    var selection = event.newSelection;

    var target = selection.length
      ? selection.length === 1
        ? selection[0]
        : selection
      : null;

    if (target) {
      self.show(target, true);
    } else {
      self.hide();
    }
  });

  this._eventBus.on('elements.changed', function (event) {
    var elements = event.elements,
      current = self._current;

    if (!current) {
      return;
    }

    var currentTarget = current.target;

    var currentChanged = some(
      isArray(currentTarget) ? currentTarget : [currentTarget],
      function (element) {
        return includes(elements, element);
      }
    );

    // re-open if elements in current selection changed
    if (currentChanged) {
      self.show(currentTarget, true);
    }
  });
};

/**
 * @overlord
 *
 * Register a provider with the default priority. See
 * {@link BoundaryEventAppenderProvider} for examples.
 *
 * @param {BoundaryEventAppenderProvider} provider
 */

/**
 * Register a provider with the given priority. See
 * {@link BoundaryEventAppenderProvider} for examples.
 *
 * @param {number} priority
 * @param {BoundaryEventAppenderProvider} provider
 */
BoundaryEventAppender.prototype.registerProvider = function(priority, provider) {
  if (!provider) {
    provider = priority;
    priority = DEFAULT_PRIORITY;
  }

  this._eventBus.on('boundaryEventAppender.getProviders', priority, function(event) {
    event.providers.push(provider);
  });
};


/**
 * Get boundary event appender actions for given elements.
 *
 * @param {BoundaryEventAppenderTarget} target
 *
 * @return {BoundaryEventAppenderActions} object of drag and click actions
 */
BoundaryEventAppender.prototype.getActions = function(target) {
  if (isArray(target)) return {};
  
  var providers = this._getProviders();

  var clickFn = 'getBoundaryEventAppenderClickAction';
  var dragFn = 'getBoundaryEventAppenderDragAction';

  var entries = {};

  // TODO does it make sense to register multiple?

  // loop through all providers and their entries.
  // group entries by id so that overriding an entry is possible
  forEach(providers, function(provider) {

    // click
    if (isFunction(provider[clickFn])) {
      entries['click'] = provider[clickFn](target);
    }

    // drag
    if (isFunction(provider[dragFn])) {
      entries['dragstart'] = provider[dragFn](target);
    }
  });

  return entries;
};

/**
 * Trigger context pad via DOM event.
 *
 * The entry to trigger is determined by the target element.
 *
 * @param {string} action
 * @param {Event} event
 * @param {boolean} [autoActivate=false]
 */


BoundaryEventAppender.prototype.trigger = function(action, event, autoActivate) {

  var originalEvent,
      button = event.delegateTarget || event.target;

  if (!button) {
    return event.preventDefault();
  }

  originalEvent = event.originalEvent || event;

  return this.triggerAction(action, originalEvent, autoActivate);
};

/**
 * Trigger boundary event appender action.
 *
 * @param {string} action
 * @param {Event} event
 * @param {boolean} [autoActivate=false]
 */
BoundaryEventAppender.prototype.triggerAction = function(actionId, event, autoActivate) {

  if (!this.isShown()) {
    return;
  }

  var target = this._current.target,
    actions = this._current.actions;

  var action = actions[actionId];

  if (!action) {
    return;
  }

  //var handler = entry.action;
  // action

  if (this._eventBus.fire('boundaryEventAppender.trigger', { action, event }) === false) {
    return;
  }

  // simple action (via callback function)
  if (isFunction(action)) {
    return action(event, target, autoActivate);
  }

  // silence other actions
  event.preventDefault();
};

/**
 * Show the boundary event appender for given elements.
 *
 * @param {BoundaryEventAppenderTarget} target
 * @param {boolean} [force=false] - Force re-showing boundary event appender.
 */
BoundaryEventAppender.prototype.show = function(target, force) {
  if (!force && this.isShown(target)) {
    return;
  }

  this.hide();

  this._updateAndShow(target);
};

BoundaryEventAppender.prototype._getProviders = function() {

  var event = this._eventBus.createEvent({
    type: 'boundaryEventAppender.getProviders',
    providers: []
  });

  this._eventBus.fire(event);

  return event.providers;
};

/**
 * @param {BoundaryEventAppenderTarget} target
 */
BoundaryEventAppender.prototype._updateAndShow = function(target) {
  var actions = this.getActions(target),
      node = this.getNode(target),
      html = node.html, // TODO multiple nodes
      image;

  var showNode = isObject(actions) && 
    ALLOWED_ACTIONS.some(action => isFunction(actions[action]));

  domClasses(html).add(showNode ? 'show' : 'hide'); // TODO rename classes

  this._current = {
    target: target,
    actions: actions,
    node: node
  };

  this._eventBus.fire('boundaryEventAppenders.show', { current: this._current });
};

/**
 * @param {BoundaryEventAppenderTarget} target
 *
 * @return {Overlay}
 */
BoundaryEventAppender.prototype.getNode = function(target) {
  if (this.isShown()) {
    return this._current.node;
  }

  var self = this;

  var overlays = this._overlays;

  var eventSvg = `
    <svg>
      <g class="djs-visual">
        <circle cx="18" cy="18" r="18" style="stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px; fill: white;"></circle>
        <circle cx="18" cy="18" r="15" style="stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px; fill: none;"></circle>
      </g>
    </svg>
  `; 

  var html = domify(`
    <div class="djs-boundary-event-appender">
      <div class="djs-boundary-event-appender-circle" title="Add boundary event" draggable="true"></div>
    </div>
  `);

  var position = this._getPosition(target);

  var overlaysConfig = assign({
    html: html
  }, this._overlaysConfig, position);

  domDelegate.bind(html, nodeSelector, 'click', function(event) {
    self.trigger('click', event);
  });

  domDelegate.bind(html, nodeSelector, 'dragstart', function(event) {
    self.trigger('dragstart', event);
  });

  // stop propagation of mouse events
  domEvent.bind(html, 'mousedown', function(event) {
    event.stopPropagation();
  });

  var activeRootElement = this._canvas.getRootElement();

  // TODO multiple nodes
  this._overlayId = overlays.add(activeRootElement, 'boundary-event-appender', overlaysConfig);

  var node = overlays.get(this._overlayId);

  this._eventBus.fire('boundaryEventAppenders.create', {
    target: target,
    node: node
  });

  return node;
};

/**
 * Hide the node
 */
BoundaryEventAppender.prototype.hide = function() {
  if (!this.isShown()) {
    return;
  }

  this._overlays.remove(this._overlayId);

  this._overlayId = null;

  this._eventBus.fire('boundaryEventAppenders.hide', { current: this._current });

  this._current = null;
};

/**
 * Check if node is shown.
 *
 * If target is provided, check if it is shown
 * for the given target.
 *
 * @param {BoundaryEventAppenderTarget} [target]
 * @return {boolean}
 */
BoundaryEventAppender.prototype.isShown = function(target) {
  var current = this._current;

  if (!current) {
    return false;
  }

  // basic no-args is open check
  if (!target) {
    return true;
  }

  var currentTarget = current.target;

  // TODO
  // strict handling of single vs. multi-selection
  if (isArray(target) !== isArray(currentTarget)) {
    return false;
  }

  if (isArray(target)) {
    return (
      target.length === currentTarget.length &&
      every(target, function(element) {
        return includes(currentTarget, element);
      })
    );
  } else {
    return currentTarget === target;
  }
};

/**
 * Get boundary event appender position.
 *
 * @param {BoundaryEventAppenderTarget} target
 *
 * @return {Rect}
 */
BoundaryEventAppender.prototype._getPosition = function(target) {

  var elements = isArray(target) ? target : [ target ];
  var bBox = getBBox(elements);

  console.log(bBox);

  return {
    position: {
      left: bBox.x + bBox.width - OFFSET + 2,
      top: bBox.y + bBox.height - OFFSET + 2
    }
  };
};

// helpers //////////

/**
 * @param {any[]} array
 * @param {any} item
 *
 * @return {boolean}
 */
function includes(array, item) {
  return array.indexOf(item) !== -1;
}
