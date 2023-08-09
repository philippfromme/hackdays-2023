import {
  assign,
  every,
  forEach,
  isArray,
  isDefined,
  isFunction,
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
 * @typedef {ElementType|ElementType[]} AppendNodeTarget
 */


var nodeSelector = '.djs-append-node-circle';
var OFFSET = 4;
var NODE_WIDTH = 20;

/**
 * Append node around elements,
 * allowing to append anything.
 *
 * @param {Canvas} canvas
 * @param {EventBus} eventBus
 * @param {Overlays} overlays
 */
export default function AppendNode(canvas, eventBus, overlays) {
  this._canvas = canvas;
  this._eventBus = eventBus;
  this._overlays = overlays;


  this._current = null;

  console.log("aaaa")

  this._init();
}

AppendNode.$inject = [
  'canvas',
  'eventBus',
  'overlays'
];

// TODO provider to only show on relevant elements

/**
 * Registers events needed for interaction with other components.
 */
AppendNode.prototype._init = function () {
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
 * Trigger context pad via DOM event.
 *
 * The entry to trigger is determined by the target element.
 *
 * @param {string} action
 * @param {Event} event
 * @param {boolean} [autoActivate=false]
 */


AppendNode.prototype.trigger = function(action, event, autoActivate) {

  var originalEvent,
      button = event.delegateTarget || event.target;

  if (!button) {
    return event.preventDefault();
  }

  //entry = domAttr(button, 'data-action');
  originalEvent = event.originalEvent || event;

  console.log("I be " + action)
  //return this.triggerEntry(entry, action, originalEvent, autoActivate);
};

/**
 * Show the append node for given elements.
 *
 * @param {AppendNodeTarget} target
 * @param {boolean} [force=false] - Force re-showing append node.
 */
AppendNode.prototype.show = function(target, force) {
  if (!force && this.isShown(target)) {
    return;
  }

  this.hide();

  this._updateAndShow(target);
};

/**
 * @param {AppendNodeTarget} target
 */
AppendNode.prototype._updateAndShow = function(target) {
  var node = this.getNode(target),
      html = node.html, // TODO multiple nodes
      image;

  /*
  forEach(entries, function(entry, id) {
    var grouping = entry.group || 'default',
        control = domify(entry.html || '<div class="entry" draggable="true"></div>'),
        container;

    domAttr(control, 'data-action', id);

    container = domQuery('[data-group=' + escapeCSS(grouping) + ']', html);
    if (!container) {
      container = domify('<div class="group"></div>');
      domAttr(container, 'data-group', grouping);

      html.appendChild(container);
    }

    container.appendChild(control);

    if (entry.className) {
      addClasses(control, entry.className);
    }

    if (entry.title) {
      domAttr(control, 'title', entry.title);
    }

    if (entry.imageUrl) {
      image = domify('<img>');
      domAttr(image, 'src', entry.imageUrl);
      image.style.width = '100%';
      image.style.height = '100%';

      control.appendChild(image);
    }
  });
  */

  domClasses(html).add('show'); // TODO rename class

  this._current = {
    target: target,
    node: node
  };

  this._eventBus.fire('appendNodes.show', { current: this._current });
};

/**
 * @param {AppendNodeTarget} target
 *
 * @return {Overlay}
 */
AppendNode.prototype.getNode = function(target) {
  if (this.isShown()) {
    return this._current.node;
  }

  var self = this;

  var overlays = this._overlays;

  // TODO multiple nodes
  var html = domify(`
    <div class="djs-append-node">
      <div class="djs-append-node-circle" title="Append/connect" draggable="true"></div>
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
  this._overlayId = overlays.add(activeRootElement, 'append-node', overlaysConfig);

  var node = overlays.get(this._overlayId);

  this._eventBus.fire('appendNodes.create', {
    target: target,
    node: node
  });

  console.log("Append Node Created");

  return node;
};

/**
 * Hide the node
 */
AppendNode.prototype.hide = function() {
  if (!this.isShown()) {
    return;
  }

  this._overlays.remove(this._overlayId);

  this._overlayId = null;

  this._eventBus.fire('appendNodes.hide', { current: this._current });

  this._current = null;
};

/**
 * Check if node is shown.
 *
 * If target is provided, check if it is shown
 * for the given target.
 *
 * @param {AppendNodeTarget} [target]
 * @return {boolean}
 */
AppendNode.prototype.isShown = function(target) {
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

// TODO multiple nodes
/**
 * Get append node position.
 *
 * @param {AppendNodeTarget} target
 *
 * @return {Rect}
 */
AppendNode.prototype._getPosition = function(target) {

  var elements = isArray(target) ? target : [ target ];
  var bBox = getBBox(elements);

  console.log(bBox);

  return {
    position: {
      left: bBox.x + bBox.width + OFFSET,
      top: bBox.y + bBox.height / 2 - NODE_WIDTH
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
