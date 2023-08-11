/******/ var __webpack_modules__ = ({

/***/ "../bpmn-io/bpmn-js-color-picker/node_modules/bpmn-js/lib/util/ModelUtil.js":
/*!**********************************************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/node_modules/bpmn-js/lib/util/ModelUtil.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBusinessObject: () => (/* binding */ getBusinessObject),
/* harmony export */   getDi: () => (/* binding */ getDi),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isAny: () => (/* binding */ isAny)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/bpmn-js-color-picker/node_modules/min-dash/dist/index.esm.js");



/**
 * Is an element of the given BPMN type?
 *
 * @param  {djs.model.Base|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);

  return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf(type);
}


/**
 * Return true if element has any of the given types.
 *
 * @param {djs.model.Base} element
 * @param {Array<string>} types
 *
 * @return {boolean}
 */
function isAny(element, types) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)(types, function(t) {
    return is(element, t);
  });
}

/**
 * Return the business object for a given element.
 *
 * @param  {djs.model.Base|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}

/**
 * Return the di object for a given element.
 *
 * @param  {djs.model.Base} element
 *
 * @return {ModdleElement}
 */
function getDi(element) {
  return element && element.di;
}

/***/ }),

/***/ "../bpmn-io/bpmn-js-color-picker/node_modules/min-dom/dist/index.esm.js":
/*!******************************************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/node_modules/min-dom/dist/index.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignStyle: () => (/* binding */ assign),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   classes: () => (/* binding */ classes),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   delegate: () => (/* binding */ delegate),
/* harmony export */   domify: () => (/* binding */ domify$1),
/* harmony export */   event: () => (/* binding */ event),
/* harmony export */   matches: () => (/* binding */ matches),
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   queryAll: () => (/* binding */ all),
/* harmony export */   remove: () => (/* binding */ remove)
/* harmony export */ });
function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Assigns style attributes in a style-src compliant way.
 *
 * @param {Element} element
 * @param {...Object} styleSources
 *
 * @return {Element} the element
 */
function assign(element, ...styleSources) {
  const target = element.style;

  forEach(styleSources, function(style) {
    if (!style) {
      return;
    }

    forEach(style, function(value, key) {
      target[key] = value;
    });
  });

  return element;
}

/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr(el, name, val) {

  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name) {
  return this.list.contains(name);
};

/**
 * Remove all children from the given element.
 */
function clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

/**
 * @param { HTMLElement } element
 * @param { String } selector
 *
 * @return { boolean }
 */
function matches(element, selector) {
  return element && typeof element.matches === 'function' && element.matches(selector);
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest(element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE &&
      currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matches(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matches(currentElem, selector) ? currentElem : null;
}

var componentEvent = {};

var bind$1 = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind$1 = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind$1 !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = componentEvent.bind = function(el, type, fn, capture){
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = componentEvent.unbind = function(el, type, fn, capture){
  el[unbind$1](prefix + type, fn, capture || false);
  return fn;
};

var event = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  bind: bind_1,
  unbind: unbind_1,
  'default': componentEvent
}, [componentEvent]);

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = [ 'focus', 'blur' ];

function bind(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.bind(el, type, function(e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.unbind(el, type, fn, capture);
}

var delegate = {
  bind,
  unbind
};

/**
 * Expose `parse`.
 */

var domify = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = Object.prototype.hasOwnProperty.call(map, tag) ? map[tag] : map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

var domify$1 = domify;

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../bpmn-io/diagram-js/node_modules/path-intersection/intersect.js":
/*!*************************************************************************!*\
  !*** ../bpmn-io/diagram-js/node_modules/path-intersection/intersect.js ***!
  \*************************************************************************/
/***/ ((module) => {



/**
 * This file contains source code adapted from Snap.svg (licensed Apache-2.0).
 *
 * @see https://github.com/adobe-webplatform/Snap.svg/blob/master/src/path.js
 */

/* eslint no-fallthrough: "off" */

var p2s = /,?([a-z]),?/gi,
    toFloat = parseFloat,
    math = Math,
    PI = math.PI,
    mmin = math.min,
    mmax = math.max,
    pow = math.pow,
    abs = math.abs,
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[-+]?\d+)?)[\s]*,?[\s]*/ig;

var isArray = Array.isArray || function(o) { return o instanceof Array; };

function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

function clone(obj) {

  if (typeof obj == 'function' || Object(obj) !== obj) {
    return obj;
  }

  var res = new obj.constructor;

  for (var key in obj) {
    if (hasProperty(obj, key)) {
      res[key] = clone(obj[key]);
    }
  }

  return res;
}

function repush(array, item) {
  for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
    return array.push(array.splice(i, 1)[0]);
  }
}

function cacher(f) {

  function newf() {

    var arg = Array.prototype.slice.call(arguments, 0),
        args = arg.join('\u2400'),
        cache = newf.cache = newf.cache || {},
        count = newf.count = newf.count || [];

    if (hasProperty(cache, args)) {
      repush(count, args);
      return cache[args];
    }

    count.length >= 1e3 && delete cache[count.shift()];
    count.push(args);
    cache[args] = f.apply(0, arg);

    return cache[args];
  }
  return newf;
}

function parsePathString(pathString) {

  if (!pathString) {
    return null;
  }

  var pth = paths(pathString);

  if (pth.arr) {
    return clone(pth.arr);
  }

  var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
      data = [];

  if (isArray(pathString) && isArray(pathString[0])) { // rough assumption
    data = clone(pathString);
  }

  if (!data.length) {

    String(pathString).replace(pathCommand, function(a, b, c) {
      var params = [],
          name = b.toLowerCase();

      c.replace(pathValues, function(a, b) {
        b && params.push(+b);
      });

      if (name == 'm' && params.length > 2) {
        data.push([b].concat(params.splice(0, 2)));
        name = 'l';
        b = b == 'm' ? 'l' : 'L';
      }

      while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
    });
  }

  data.toString = paths.toString;
  pth.arr = clone(data);

  return data;
}

function paths(ps) {
  var p = paths.ps = paths.ps || {};

  if (p[ps]) {
    p[ps].sleep = 100;
  } else {
    p[ps] = {
      sleep: 100
    };
  }

  setTimeout(function() {
    for (var key in p) {
      if (hasProperty(p, key) && key != ps) {
        p[key].sleep--;
        !p[key].sleep && delete p[key];
      }
    }
  });

  return p[ps];
}

function rectBBox(x, y, width, height) {

  if (arguments.length === 1) {
    y = x.y;
    width = x.width;
    height = x.height;
    x = x.x;
  }

  return {
    x: x,
    y: y,
    width: width,
    height: height,
    x2: x + width,
    y2: y + height
  };
}

function pathToString() {
  return this.join(',').replace(p2s, '$1');
}

function pathClone(pathArray) {
  var res = clone(pathArray);
  res.toString = pathToString;
  return res;
}

function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
  var t1 = 1 - t,
      t13 = pow(t1, 3),
      t12 = pow(t1, 2),
      t2 = t * t,
      t3 = t2 * t,
      x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
      y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;

  return {
    x: fixError(x),
    y: fixError(y)
  };
}

function bezierBBox(points) {

  var bbox = curveBBox.apply(null, points);

  return rectBBox(
    bbox.x0,
    bbox.y0,
    bbox.x1 - bbox.x0,
    bbox.y1 - bbox.y0
  );
}

function isPointInsideBBox(bbox, x, y) {
  return x >= bbox.x &&
    x <= bbox.x + bbox.width &&
    y >= bbox.y &&
    y <= bbox.y + bbox.height;
}

function isBBoxIntersect(bbox1, bbox2) {
  bbox1 = rectBBox(bbox1);
  bbox2 = rectBBox(bbox2);
  return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
    || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
    || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
    || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
    || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
    || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
    || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
    || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
    || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
        || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
    && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
        || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
}

function base3(t, p1, p2, p3, p4) {
  var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
      t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
  return t * t2 - 3 * p1 + 3 * p2;
}

function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {

  if (z == null) {
    z = 1;
  }

  z = z > 1 ? 1 : z < 0 ? 0 : z;

  var z2 = z / 2,
      n = 12,
      Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
      Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
      sum = 0;

  for (var i = 0; i < n; i++) {
    var ct = z2 * Tvalues[i] + z2,
        xbase = base3(ct, x1, x2, x3, x4),
        ybase = base3(ct, y1, y2, y3, y4),
        comb = xbase * xbase + ybase * ybase;

    sum += Cvalues[i] * math.sqrt(comb);
  }

  return z2 * sum;
}


function intersectLines(x1, y1, x2, y2, x3, y3, x4, y4) {

  if (
    mmax(x1, x2) < mmin(x3, x4) ||
      mmin(x1, x2) > mmax(x3, x4) ||
      mmax(y1, y2) < mmin(y3, y4) ||
      mmin(y1, y2) > mmax(y3, y4)
  ) {
    return;
  }

  var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
      ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
      denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (!denominator) {
    return;
  }

  var px = fixError(nx / denominator),
      py = fixError(ny / denominator),
      px2 = +px.toFixed(2),
      py2 = +py.toFixed(2);

  if (
    px2 < +mmin(x1, x2).toFixed(2) ||
      px2 > +mmax(x1, x2).toFixed(2) ||
      px2 < +mmin(x3, x4).toFixed(2) ||
      px2 > +mmax(x3, x4).toFixed(2) ||
      py2 < +mmin(y1, y2).toFixed(2) ||
      py2 > +mmax(y1, y2).toFixed(2) ||
      py2 < +mmin(y3, y4).toFixed(2) ||
      py2 > +mmax(y3, y4).toFixed(2)
  ) {
    return;
  }

  return { x: px, y: py };
}

function fixError(number) {
  return Math.round(number * 100000000000) / 100000000000;
}

function findBezierIntersections(bez1, bez2, justCount) {
  var bbox1 = bezierBBox(bez1),
      bbox2 = bezierBBox(bez2);

  if (!isBBoxIntersect(bbox1, bbox2)) {
    return justCount ? 0 : [];
  }

  // As an optimization, lines will have only 1 segment

  var l1 = bezlen.apply(0, bez1),
      l2 = bezlen.apply(0, bez2),
      n1 = isLine(bez1) ? 1 : ~~(l1 / 5) || 1,
      n2 = isLine(bez2) ? 1 : ~~(l2 / 5) || 1,
      dots1 = [],
      dots2 = [],
      xy = {},
      res = justCount ? 0 : [];

  for (var i = 0; i < n1 + 1; i++) {
    var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
    dots1.push({ x: p.x, y: p.y, t: i / n1 });
  }

  for (i = 0; i < n2 + 1; i++) {
    p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
    dots2.push({ x: p.x, y: p.y, t: i / n2 });
  }

  for (i = 0; i < n1; i++) {

    for (var j = 0; j < n2; j++) {
      var di = dots1[i],
          di1 = dots1[i + 1],
          dj = dots2[j],
          dj1 = dots2[j + 1],
          ci = abs(di1.x - di.x) < .01 ? 'y' : 'x',
          cj = abs(dj1.x - dj.x) < .01 ? 'y' : 'x',
          is = intersectLines(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y),
          key;

      if (is) {
        key = is.x.toFixed(9) + '#' + is.y.toFixed(9);

        if (xy[key]) {
          continue;
        }

        xy[key] = true;

        var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
            t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);

        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {

          if (justCount) {
            res++;
          } else {
            res.push({
              x: is.x,
              y: is.y,
              t1: t1,
              t2: t2
            });
          }
        }
      }
    }
  }

  return res;
}


/**
 * Find or counts the intersections between two SVG paths.
 *
 * Returns a number in counting mode and a list of intersections otherwise.
 *
 * A single intersection entry contains the intersection coordinates (x, y)
 * as well as additional information regarding the intersecting segments
 * on each path (segment1, segment2) and the relative location of the
 * intersection on these segments (t1, t2).
 *
 * The path may be an SVG path string or a list of path components
 * such as `[ [ 'M', 0, 10 ], [ 'L', 20, 0 ] ]`.
 *
 * @example
 *
 * var intersections = findPathIntersections(
 *   'M0,0L100,100',
 *   [ [ 'M', 0, 100 ], [ 'L', 100, 0 ] ]
 * );
 *
 * // intersections = [
 * //   { x: 50, y: 50, segment1: 1, segment2: 1, t1: 0.5, t2: 0.5 }
 * // ]
 *
 * @param {String|Array<PathDef>} path1
 * @param {String|Array<PathDef>} path2
 * @param {Boolean} [justCount=false]
 *
 * @return {Array<Intersection>|Number}
 */
function findPathIntersections(path1, path2, justCount) {
  path1 = pathToCurve(path1);
  path2 = pathToCurve(path2);

  var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
      res = justCount ? 0 : [];

  for (var i = 0, ii = path1.length; i < ii; i++) {
    var pi = path1[i];

    if (pi[0] == 'M') {
      x1 = x1m = pi[1];
      y1 = y1m = pi[2];
    } else {

      if (pi[0] == 'C') {
        bez1 = [x1, y1].concat(pi.slice(1));
        x1 = bez1[6];
        y1 = bez1[7];
      } else {
        bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
        x1 = x1m;
        y1 = y1m;
      }

      for (var j = 0, jj = path2.length; j < jj; j++) {
        var pj = path2[j];

        if (pj[0] == 'M') {
          x2 = x2m = pj[1];
          y2 = y2m = pj[2];
        } else {

          if (pj[0] == 'C') {
            bez2 = [x2, y2].concat(pj.slice(1));
            x2 = bez2[6];
            y2 = bez2[7];
          } else {
            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
            x2 = x2m;
            y2 = y2m;
          }

          var intr = findBezierIntersections(bez1, bez2, justCount);

          if (justCount) {
            res += intr;
          } else {

            for (var k = 0, kk = intr.length; k < kk; k++) {
              intr[k].segment1 = i;
              intr[k].segment2 = j;
              intr[k].bez1 = bez1;
              intr[k].bez2 = bez2;
            }

            res = res.concat(intr);
          }
        }
      }
    }
  }

  return res;
}


function pathToAbsolute(pathArray) {
  var pth = paths(pathArray);

  if (pth.abs) {
    return pathClone(pth.abs);
  }

  if (!isArray(pathArray) || !isArray(pathArray && pathArray[0])) { // rough assumption
    pathArray = parsePathString(pathArray);
  }

  if (!pathArray || !pathArray.length) {
    return [['M', 0, 0]];
  }

  var res = [],
      x = 0,
      y = 0,
      mx = 0,
      my = 0,
      start = 0,
      pa0;

  if (pathArray[0][0] == 'M') {
    x = +pathArray[0][1];
    y = +pathArray[0][2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }

  for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
    res.push(r = []);
    pa = pathArray[i];
    pa0 = pa[0];

    if (pa0 != pa0.toUpperCase()) {
      r[0] = pa0.toUpperCase();

      switch (r[0]) {
      case 'A':
        r[1] = pa[1];
        r[2] = pa[2];
        r[3] = pa[3];
        r[4] = pa[4];
        r[5] = pa[5];
        r[6] = +pa[6] + x;
        r[7] = +pa[7] + y;
        break;
      case 'V':
        r[1] = +pa[1] + y;
        break;
      case 'H':
        r[1] = +pa[1] + x;
        break;
      case 'M':
        mx = +pa[1] + x;
        my = +pa[2] + y;
      default:
        for (var j = 1, jj = pa.length; j < jj; j++) {
          r[j] = +pa[j] + ((j % 2) ? x : y);
        }
      }
    } else {
      for (var k = 0, kk = pa.length; k < kk; k++) {
        r[k] = pa[k];
      }
    }
    pa0 = pa0.toUpperCase();

    switch (r[0]) {
    case 'Z':
      x = +mx;
      y = +my;
      break;
    case 'H':
      x = r[1];
      break;
    case 'V':
      y = r[1];
      break;
    case 'M':
      mx = r[r.length - 2];
      my = r[r.length - 1];
    default:
      x = r[r.length - 2];
      y = r[r.length - 1];
    }
  }

  res.toString = pathToString;
  pth.abs = pathClone(res);

  return res;
}

function isLine(bez) {
  return (
    bez[0] === bez[2] &&
    bez[1] === bez[3] &&
    bez[4] === bez[6] &&
    bez[5] === bez[7]
  );
}

function lineToCurve(x1, y1, x2, y2) {
  return [
    x1, y1, x2,
    y2, x2, y2
  ];
}

function qubicToCurve(x1, y1, ax, ay, x2, y2) {
  var _13 = 1 / 3,
      _23 = 2 / 3;

  return [
    _13 * x1 + _23 * ax,
    _13 * y1 + _23 * ay,
    _13 * x2 + _23 * ax,
    _13 * y2 + _23 * ay,
    x2,
    y2
  ];
}

function arcToCurve(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {

  // for more information of where this math came from visit:
  // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
  var _120 = PI * 120 / 180,
      rad = PI / 180 * (+angle || 0),
      res = [],
      xy,
      rotate = cacher(function(x, y, rad) {
        var X = x * math.cos(rad) - y * math.sin(rad),
            Y = x * math.sin(rad) + y * math.cos(rad);

        return { x: X, y: Y };
      });

  if (!recursive) {
    xy = rotate(x1, y1, -rad);
    x1 = xy.x;
    y1 = xy.y;
    xy = rotate(x2, y2, -rad);
    x2 = xy.x;
    y2 = xy.y;

    var x = (x1 - x2) / 2,
        y = (y1 - y2) / 2;

    var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);

    if (h > 1) {
      h = math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }

    var rx2 = rx * rx,
        ry2 = ry * ry,
        k = (large_arc_flag == sweep_flag ? -1 : 1) *
            math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
        cx = k * rx * y / ry + (x1 + x2) / 2,
        cy = k * -ry * x / rx + (y1 + y2) / 2,
        f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
        f2 = math.asin(((y2 - cy) / ry).toFixed(9));

    f1 = x1 < cx ? PI - f1 : f1;
    f2 = x2 < cx ? PI - f2 : f2;
    f1 < 0 && (f1 = PI * 2 + f1);
    f2 < 0 && (f2 = PI * 2 + f2);

    if (sweep_flag && f1 > f2) {
      f1 = f1 - PI * 2;
    }
    if (!sweep_flag && f2 > f1) {
      f2 = f2 - PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }

  var df = f2 - f1;

  if (abs(df) > _120) {
    var f2old = f2,
        x2old = x2,
        y2old = y2;

    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * math.cos(f2);
    y2 = cy + ry * math.sin(f2);
    res = arcToCurve(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }

  df = f2 - f1;

  var c1 = math.cos(f1),
      s1 = math.sin(f1),
      c2 = math.cos(f2),
      s2 = math.sin(f2),
      t = math.tan(df / 4),
      hx = 4 / 3 * rx * t,
      hy = 4 / 3 * ry * t,
      m1 = [x1, y1],
      m2 = [x1 + hx * s1, y1 - hy * c1],
      m3 = [x2 + hx * s2, y2 - hy * c2],
      m4 = [x2, y2];

  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];

  if (recursive) {
    return [m2, m3, m4].concat(res);
  } else {
    res = [m2, m3, m4].concat(res).join().split(',');
    var newres = [];

    for (var i = 0, ii = res.length; i < ii; i++) {
      newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }

    return newres;
  }
}

// Returns bounding box of cubic bezier curve.
// Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
// Original version: NISHIO Hirokazu
// Modifications: https://github.com/timo22345
function curveBBox(x0, y0, x1, y1, x2, y2, x3, y3) {
  var tvalues = [],
      bounds = [[], []],
      a, b, c, t, t1, t2, b2ac, sqrtb2ac;

  for (var i = 0; i < 2; ++i) {

    if (i == 0) {
      b = 6 * x0 - 12 * x1 + 6 * x2;
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
      c = 3 * x1 - 3 * x0;
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }

    if (abs(a) < 1e-12) {

      if (abs(b) < 1e-12) {
        continue;
      }

      t = -c / b;

      if (0 < t && t < 1) {
        tvalues.push(t);
      }

      continue;
    }

    b2ac = b * b - 4 * c * a;
    sqrtb2ac = math.sqrt(b2ac);

    if (b2ac < 0) {
      continue;
    }

    t1 = (-b + sqrtb2ac) / (2 * a);

    if (0 < t1 && t1 < 1) {
      tvalues.push(t1);
    }

    t2 = (-b - sqrtb2ac) / (2 * a);

    if (0 < t2 && t2 < 1) {
      tvalues.push(t2);
    }
  }

  var j = tvalues.length,
      jlen = j,
      mt;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
    bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
  }

  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  bounds[0].length = bounds[1].length = jlen + 2;

  return {
    x0: mmin.apply(0, bounds[0]),
    y0: mmin.apply(0, bounds[1]),
    x1: mmax.apply(0, bounds[0]),
    y1: mmax.apply(0, bounds[1])
  };
}

function pathToCurve(path) {

  var pth = paths(path);

  // return cached curve, if existing
  if (pth.curve) {
    return pathClone(pth.curve);
  }

  var curvedPath = pathToAbsolute(path),
      attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
      processPath = function(path, d, pathCommand) {
        var nx, ny;

        if (!path) {
          return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
        }

        !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);

        switch (path[0]) {
        case 'M':
          d.X = path[1];
          d.Y = path[2];
          break;
        case 'A':
          path = ['C'].concat(arcToCurve.apply(0, [d.x, d.y].concat(path.slice(1))));
          break;
        case 'S':
          if (pathCommand == 'C' || pathCommand == 'S') {

            // In 'S' case we have to take into account, if the previous command is C/S.
            nx = d.x * 2 - d.bx;

            // And reflect the previous
            ny = d.y * 2 - d.by;

            // command's control point relative to the current point.
          }
          else {

            // or some else or nothing
            nx = d.x;
            ny = d.y;
          }
          path = ['C', nx, ny].concat(path.slice(1));
          break;
        case 'T':
          if (pathCommand == 'Q' || pathCommand == 'T') {

            // In 'T' case we have to take into account, if the previous command is Q/T.
            d.qx = d.x * 2 - d.qx;

            // And make a reflection similar
            d.qy = d.y * 2 - d.qy;

            // to case 'S'.
          }
          else {

            // or something else or nothing
            d.qx = d.x;
            d.qy = d.y;
          }
          path = ['C'].concat(qubicToCurve(d.x, d.y, d.qx, d.qy, path[1], path[2]));
          break;
        case 'Q':
          d.qx = path[1];
          d.qy = path[2];
          path = ['C'].concat(qubicToCurve(d.x, d.y, path[1], path[2], path[3], path[4]));
          break;
        case 'L':
          path = ['C'].concat(lineToCurve(d.x, d.y, path[1], path[2]));
          break;
        case 'H':
          path = ['C'].concat(lineToCurve(d.x, d.y, path[1], d.y));
          break;
        case 'V':
          path = ['C'].concat(lineToCurve(d.x, d.y, d.x, path[1]));
          break;
        case 'Z':
          path = ['C'].concat(lineToCurve(d.x, d.y, d.X, d.Y));
          break;
        }

        return path;
      },

      fixArc = function(pp, i) {

        if (pp[i].length > 7) {
          pp[i].shift();
          var pi = pp[i];

          while (pi.length) {
            pathCommands[i] = 'A'; // if created multiple C:s, their original seg is saved
            pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)));
          }

          pp.splice(i, 1);
          ii = curvedPath.length;
        }
      },

      pathCommands = [], // path commands of original path p
      pfirst = '', // temporary holder for original path command
      pathCommand = ''; // holder for previous path command of original path

  for (var i = 0, ii = curvedPath.length; i < ii; i++) {
    curvedPath[i] && (pfirst = curvedPath[i][0]); // save current path command

    if (pfirst != 'C') // C is not saved yet, because it may be result of conversion
    {
      pathCommands[i] = pfirst; // Save current path command
      i && (pathCommand = pathCommands[i - 1]); // Get previous path command pathCommand
    }
    curvedPath[i] = processPath(curvedPath[i], attrs, pathCommand); // Previous path command is inputted to processPath

    if (pathCommands[i] != 'A' && pfirst == 'C') pathCommands[i] = 'C'; // A is the only command
    // which may produce multiple C:s
    // so we have to make sure that C is also C in original path

    fixArc(curvedPath, i); // fixArc adds also the right amount of A:s to pathCommands

    var seg = curvedPath[i],
        seglen = seg.length;

    attrs.x = seg[seglen - 2];
    attrs.y = seg[seglen - 1];
    attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
    attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
  }

  // cache curve
  pth.curve = pathClone(curvedPath);

  return curvedPath;
}

module.exports = findPathIntersections;


/***/ }),

/***/ "../bpmn-io/bpmn-js-color-picker/colors/ColorContextPadProvider.js":
/*!*************************************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/colors/ColorContextPadProvider.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorContextPadProvider)
/* harmony export */ });
/* harmony import */ var bpmn_js_lib_draw_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmn-js/lib/draw/BpmnRenderUtil */ "../bpmn-io/bpmn-js-color-picker/node_modules/bpmn-js/lib/util/ModelUtil.js");

function ColorContextPadProvider(contextPad, popupMenu, canvas, translate) {
  this._contextPad = contextPad;
  this._popupMenu = popupMenu;
  this._canvas = canvas;
  this._translate = translate;
  contextPad.registerProvider(this);
}
ColorContextPadProvider.$inject = ['contextPad', 'popupMenu', 'canvas', 'translate'];
ColorContextPadProvider.prototype.getContextPadEntries = function (element) {
  return this._createPopupAction([element]);
};
ColorContextPadProvider.prototype.getMultiElementContextPadEntries = function (elements) {
  return this._createPopupAction(elements);
};
ColorContextPadProvider.prototype._createPopupAction = function (elements) {
  if (elements.length === 1 && elements[0].labelTarget) {
    console.log('return no entries');
    return {};
  } else {
    console.log('return entries');
  }
  const canvas = this._canvas;
  const translate = this._translate;
  const contextPad = this._contextPad;
  const popupMenu = this._popupMenu;
  return {
    'set-color': {
      group: 'edit',
      className: 'bpmn-icon-color',
      title: translate('Set Color'),
      html: `<div class="entry">${getSvg(elements)}</div>`,
      action: {
        click: (event, element) => {
          // get start popup draw start position
          var position = {
            ...getStartPosition(canvas, contextPad, elements),
            cursor: {
              x: event.x,
              y: event.y
            }
          };

          // open new color-picker popup
          popupMenu.open(elements, 'color-picker', position, {
            orientation: 'horizontal',
            separators: true
          });
        }
      }
    }
  };
};

// helpers //////////////////////

const WHITE = '#ffffff',
  BLACK = '#161616';
function getColors(element) {
  const di = (0,bpmn_js_lib_draw_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_0__.getDi)(element);
  return {
    fill: di.get('fill') || WHITE,
    stroke: di.get('stroke') || BLACK
  };
}
function getSvg(elements) {
  if (elements.length === 1) {
    const {
      fill,
      stroke
    } = getColors(elements[0]);
    return `<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" fill="${fill}" stroke="${stroke}" stroke-width="2" />
    </svg>
    `;
  }
  return `<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" fill="${WHITE}" stroke="${BLACK} stroke-width="2" />
  </svg>
  `;
}
function getStartPosition(canvas, contextPad, elements) {
  const pad = contextPad.getPad(elements).html;
  console.log(pad);
  const padRect = pad.getBoundingClientRect();
  console.log(padRect);
  const pos = {
    x: padRect.left,
    y: padRect.top - 50
  };
  return pos;
}

/***/ }),

/***/ "../bpmn-io/bpmn-js-color-picker/colors/ColorPopupProvider.js":
/*!********************************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/colors/ColorPopupProvider.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorPopupProvider)
/* harmony export */ });
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dom */ "../bpmn-io/bpmn-js-color-picker/node_modules/min-dom/dist/index.esm.js");

const COLORS = [{
  label: 'Default',
  fill: undefined,
  stroke: undefined
}, {
  label: 'Blue',
  fill: '#BBDEFB',
  stroke: '#0D4372'
}, {
  label: 'Orange',
  fill: '#FFE0B2',
  stroke: '#6B3C00'
}, {
  label: 'Green',
  fill: '#C8E6C9',
  stroke: '#205022'
}, {
  label: 'Red',
  fill: '#FFCDD2',
  stroke: '#831311'
}, {
  label: 'Purple',
  fill: '#E1BEE7',
  stroke: '#5B176D'
}];
function ColorPopupProvider(config, bpmnRendererConfig, popupMenu, modeling, translate) {
  this._popupMenu = popupMenu;
  this._modeling = modeling;
  this._translate = translate;
  this._colors = config && config.colors || COLORS;
  this._defaultFillColor = bpmnRendererConfig && bpmnRendererConfig.defaultFillColor || 'white';
  this._defaultStrokeColor = bpmnRendererConfig && bpmnRendererConfig.defaultStrokeColor || 'rgb(34, 36, 42)';
  this._popupMenu.registerProvider('color-picker', this);
}
ColorPopupProvider.$inject = ['config.colorPicker', 'config.bpmnRenderer', 'popupMenu', 'modeling', 'translate'];
ColorPopupProvider.prototype.getEntries = function (elements) {
  var self = this;
  var colorIcon = (0,min_dom__WEBPACK_IMPORTED_MODULE_0__.domify)(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="100%">
      <circle cx="8" cy="8" r="7" fill="var(--fill-color)" stroke="var(--stroke-color)" stroke-width="2" />
    </svg>
  `);
  var entries = this._colors.map(function (color) {
    colorIcon.style.setProperty('--fill-color', color.fill || self._defaultFillColor);
    colorIcon.style.setProperty('--stroke-color', color.stroke || self._defaultStrokeColor);
    return {
      group: color.label === 'Default' ? {
        id: 'default',
        name: 'Default'
      } : {
        id: 'custom',
        name: 'Custom'
      },
      title: self._translate(color.label),
      id: color.label.toLowerCase() + '-color',
      imageUrl: `data:image/svg+xml;utf8,${encodeURIComponent(colorIcon.outerHTML)}`,
      action: createAction(self._modeling, elements, color)
    };
  });
  return entries;
};
function createAction(modeling, element, color) {
  return function () {
    modeling.setColor(element, color);
  };
}

/***/ }),

/***/ "../bpmn-io/bpmn-js-color-picker/colors/index.js":
/*!*******************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/colors/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorContextPadProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorContextPadProvider */ "../bpmn-io/bpmn-js-color-picker/colors/ColorContextPadProvider.js");
/* harmony import */ var _ColorPopupProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPopupProvider */ "../bpmn-io/bpmn-js-color-picker/colors/ColorPopupProvider.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __init__: ['colorContextPadProvider', 'colorPopupProvider'],
  colorContextPadProvider: ['type', _ColorContextPadProvider__WEBPACK_IMPORTED_MODULE_0__["default"]],
  colorPopupProvider: ['type', _ColorPopupProvider__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "../bpmn-io/bpmn-js-color-picker/index.js":
/*!************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../bpmn-io/bpmn-js-color-picker/colors/index.js");


/***/ }),

/***/ "../bpmn-io/bpmn-js/lib/features/append-preview/AppendPreview.js":
/*!***********************************************************************!*\
  !*** ../bpmn-io/bpmn-js/lib/features/append-preview/AppendPreview.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppendPreview)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/bpmn-js/node_modules/min-dash/dist/index.esm.js");

const round = Math.round;
function AppendPreview(complexPreview, connectionDocking, elementFactory, eventBus, layouter, rules) {
  this._complexPreview = complexPreview;
  this._connectionDocking = connectionDocking;
  this._elementFactory = elementFactory;
  this._eventBus = eventBus;
  this._layouter = layouter;
  this._rules = rules;
}
AppendPreview.prototype.create = function (source, type, options) {
  const complexPreview = this._complexPreview,
    connectionDocking = this._connectionDocking,
    elementFactory = this._elementFactory,
    eventBus = this._eventBus,
    layouter = this._layouter,
    rules = this._rules;
  const shape = elementFactory.createShape((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({
    type: type
  }, options));
  const position = eventBus.fire('autoPlace', {
    source,
    shape
  });
  if (!position) {
    return;
  }
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)(shape, {
    x: position.x - round(shape.width / 2),
    y: position.y - round(shape.height / 2)
  });
  const connectionCreateAllowed = rules.allowed('connection.create', {
    source,
    target: shape,
    hints: {
      targetParent: source.parent
    }
  });
  let connection = null;
  if (connectionCreateAllowed) {
    connection = elementFactory.createConnection(connectionCreateAllowed);
    connection.waypoints = layouter.layoutConnection(connection, {
      source,
      target: shape
    });
    connection.waypoints = connectionDocking.getCroppedWaypoints(connection, source, shape);
  }
  complexPreview.create({
    create: [shape, connection].filter(element => !(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNil)(element))
  });
};
AppendPreview.prototype.delete = function () {
  this._complexPreview.delete();
};
AppendPreview.$inject = ['complexPreview', 'connectionDocking', 'elementFactory', 'eventBus', 'layouter', 'rules'];

/***/ }),

/***/ "../bpmn-io/bpmn-js/lib/features/modeling/util/LaneUtil.js":
/*!*****************************************************************!*\
  !*** ../bpmn-io/bpmn-js/lib/features/modeling/util/LaneUtil.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LANE_INDENTATION: () => (/* binding */ LANE_INDENTATION),
/* harmony export */   collectLanes: () => (/* binding */ collectLanes),
/* harmony export */   computeLanesResize: () => (/* binding */ computeLanesResize),
/* harmony export */   getChildLanes: () => (/* binding */ getChildLanes),
/* harmony export */   getLanesRoot: () => (/* binding */ getLanesRoot)
/* harmony export */ });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelingUtil */ "../bpmn-io/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "../bpmn-io/diagram-js/lib/layout/LayoutUtil.js");
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/resize/ResizeUtil */ "../bpmn-io/diagram-js/lib/features/resize/ResizeUtil.js");





/**
 * @typedef {import('../../../model/Types').Shape} Shape
 *
 * @typedef {import('diagram-js/lib/util/Types').Rect} Rect
 */

var abs = Math.abs;
function getTRBLResize(oldBounds, newBounds) {
  return (0,diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_0__.substractTRBL)((0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(newBounds), (0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(oldBounds));
}
var LANE_PARENTS = ['bpmn:Participant', 'bpmn:Process', 'bpmn:SubProcess'];
var LANE_INDENTATION = 30;

/**
 * Return all lanes that are children of the given shape.
 *
 * @param  {Shape} shape
 * @param  {Shape[]} [collectedShapes]
 *
 * @return {Shape[]}
 */
function collectLanes(shape, collectedShapes) {
  collectedShapes = collectedShapes || [];
  shape.children.filter(function (s) {
    if ((0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__.is)(s, 'bpmn:Lane')) {
      collectLanes(s, collectedShapes);
      collectedShapes.push(s);
    }
  });
  return collectedShapes;
}

/**
 * Return all lanes that are direct children of the given shape.
 *
 * @param {Shape} shape
 *
 * @return {Shape[]}
 */
function getChildLanes(shape) {
  return shape.children.filter(function (c) {
    return (0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__.is)(c, 'bpmn:Lane');
  });
}

/**
 * Return the parent shape of the given lane.
 *
 * @param {Shape} shape
 *
 * @return {Shape}
 */
function getLanesRoot(shape) {
  return (0,_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__.getParent)(shape, LANE_PARENTS) || shape;
}

/**
 * Compute the required resize operations for lanes
 * adjacent to the given shape, assuming it will be
 * resized to the given new bounds.
 *
 * @param {Shape} shape
 * @param {Rect} newBounds
 *
 * @return { {
 *   shape: Shape;
 *   newBounds: Rect;
 * }[] }
 */
function computeLanesResize(shape, newBounds) {
  var rootElement = getLanesRoot(shape);
  var initialShapes = (0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__.is)(rootElement, 'bpmn:Process') ? [] : [rootElement];
  var allLanes = collectLanes(rootElement, initialShapes),
    shapeTrbl = (0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(shape),
    shapeNewTrbl = (0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(newBounds),
    trblResize = getTRBLResize(shape, newBounds),
    resizeNeeded = [];
  allLanes.forEach(function (other) {
    if (other === shape) {
      return;
    }
    var topResize = 0,
      rightResize = trblResize.right,
      bottomResize = 0,
      leftResize = trblResize.left;
    var otherTrbl = (0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(other);
    if (trblResize.top) {
      if (abs(otherTrbl.bottom - shapeTrbl.top) < 10) {
        bottomResize = shapeNewTrbl.top - otherTrbl.bottom;
      }
      if (abs(otherTrbl.top - shapeTrbl.top) < 5) {
        topResize = shapeNewTrbl.top - otherTrbl.top;
      }
    }
    if (trblResize.bottom) {
      if (abs(otherTrbl.top - shapeTrbl.bottom) < 10) {
        topResize = shapeNewTrbl.bottom - otherTrbl.top;
      }
      if (abs(otherTrbl.bottom - shapeTrbl.bottom) < 5) {
        bottomResize = shapeNewTrbl.bottom - otherTrbl.bottom;
      }
    }
    if (topResize || rightResize || bottomResize || leftResize) {
      resizeNeeded.push({
        shape: other,
        newBounds: (0,diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_0__.resizeTRBL)(other, {
          top: topResize,
          right: rightResize,
          bottom: bottomResize,
          left: leftResize
        })
      });
    }
  });
  return resizeNeeded;
}

/***/ }),

/***/ "../bpmn-io/bpmn-js/lib/features/modeling/util/ModelingUtil.js":
/*!*********************************************************************!*\
  !*** ../bpmn-io/bpmn-js/lib/features/modeling/util/ModelingUtil.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getParent: () => (/* binding */ getParent),
/* harmony export */   is: () => (/* reexport safe */ _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is),
/* harmony export */   isAny: () => (/* reexport safe */ _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.isAny)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "../bpmn-io/bpmn-js/node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js");




/**
 * @typedef {import('../../../model/Types').Element} Element
 */

/**
 * Return the parent of the element with any of the given types.
 *
 * @param {Element} element
 * @param {string|string[]} anyType
 *
 * @return {Element|null}
 */
function getParent(element, anyType) {
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_1__.isString)(anyType)) {
    anyType = [anyType];
  }
  while (element = element.parent) {
    if ((0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.isAny)(element, anyType)) {
      return element;
    }
  }
  return null;
}

/***/ }),

/***/ "../bpmn-io/bpmn-js/lib/util/DiUtil.js":
/*!*********************************************!*\
  !*** ../bpmn-io/bpmn-js/lib/util/DiUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasCompensateEventDefinition: () => (/* binding */ hasCompensateEventDefinition),
/* harmony export */   hasErrorEventDefinition: () => (/* binding */ hasErrorEventDefinition),
/* harmony export */   hasEscalationEventDefinition: () => (/* binding */ hasEscalationEventDefinition),
/* harmony export */   hasEventDefinition: () => (/* binding */ hasEventDefinition),
/* harmony export */   isEventSubProcess: () => (/* binding */ isEventSubProcess),
/* harmony export */   isExpanded: () => (/* binding */ isExpanded),
/* harmony export */   isInterrupting: () => (/* binding */ isInterrupting)
/* harmony export */ });
/* harmony import */ var _ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelUtil */ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "../bpmn-io/bpmn-js/node_modules/min-dash/dist/index.esm.js");



/**
 * @typedef {import('../model/Types').Element} Element
 * @typedef {import('../model/Types').ModdleElement} ModdleElement
 */

/**
 * @param {Element} element
 * @param {ModdleElement} [di]
 *
 * @return {boolean}
 */
function isExpanded(element, di) {
  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(element, 'bpmn:CallActivity')) {
    return false;
  }
  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(element, 'bpmn:SubProcess')) {
    di = di || (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getDi)(element);
    if (di && (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(di, 'bpmndi:BPMNPlane')) {
      return true;
    }
    return di && !!di.isExpanded;
  }
  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(element, 'bpmn:Participant')) {
    return !!(0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).processRef;
  }
  return true;
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function isInterrupting(element) {
  return element && (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).isInterrupting !== false;
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function isEventSubProcess(element) {
  return element && !!(0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).triggeredByEvent;
}

/**
 * @param {Element} element
 * @param {string} eventType
 *
 * @return {boolean}
 */
function hasEventDefinition(element, eventType) {
  var eventDefinitions = (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).eventDefinitions;
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.some)(eventDefinitions, function (event) {
    return (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(event, eventType);
  });
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasErrorEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:ErrorEventDefinition');
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasEscalationEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:EscalationEventDefinition');
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasCompensateEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:CompensateEventDefinition');
}

/***/ }),

/***/ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js":
/*!************************************************!*\
  !*** ../bpmn-io/bpmn-js/lib/util/ModelUtil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBusinessObject: () => (/* binding */ getBusinessObject),
/* harmony export */   getDi: () => (/* binding */ getDi),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isAny: () => (/* binding */ isAny)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/bpmn-js/node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef { import('../model/Types').Element } Element
 * @typedef { import('../model/Types').ModdleElement } ModdleElement
 */

/**
 * Is an element of the given BPMN type?
 *
 * @param  {Element|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);
  return bo && typeof bo.$instanceOf === 'function' && bo.$instanceOf(type);
}

/**
 * Return true if element has any of the given types.
 *
 * @param {Element|ModdleElement} element
 * @param {string[]} types
 *
 * @return {boolean}
 */
function isAny(element, types) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)(types, function (t) {
    return is(element, t);
  });
}

/**
 * Return the business object for a given element.
 *
 * @param {Element|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return element && element.businessObject || element;
}

/**
 * Return the di object for a given element.
 *
 * @param {Element} element
 *
 * @return {ModdleElement}
 */
function getDi(element) {
  return element && element.di;
}

/***/ }),

/***/ "../bpmn-io/diagram-js/lib/features/resize/ResizeUtil.js":
/*!***************************************************************!*\
  !*** ../bpmn-io/diagram-js/lib/features/resize/ResizeUtil.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPadding: () => (/* binding */ addPadding),
/* harmony export */   computeChildrenBBox: () => (/* binding */ computeChildrenBBox),
/* harmony export */   ensureConstraints: () => (/* binding */ ensureConstraints),
/* harmony export */   getMinResizeBounds: () => (/* binding */ getMinResizeBounds),
/* harmony export */   reattachPoint: () => (/* binding */ reattachPoint),
/* harmony export */   resizeBounds: () => (/* binding */ resizeBounds),
/* harmony export */   resizeTRBL: () => (/* binding */ resizeTRBL),
/* harmony export */   substractTRBL: () => (/* binding */ substractTRBL)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _util_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Elements */ "../bpmn-io/diagram-js/lib/util/Elements.js");
/* harmony import */ var _layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/LayoutUtil */ "../bpmn-io/diagram-js/lib/layout/LayoutUtil.js");

var max = Math.max,
  min = Math.min;
var DEFAULT_CHILD_BOX_PADDING = 20;



/**
 * @typedef {import('../../core/Types').ElementLike} Element
 * @typedef {import('../../core/Types').ShapeLike} Shape
 *
 * @typedef {import('../../util/Types').Direction} Direction
 * @typedef {import('../../util/Types').Point} Point
 * @typedef {import('../../util/Types').Rect} Rect
 * @typedef {import('../../util/Types').RectTRBL} RectTRBL
 */

/**
 * Substract a TRBL from another
 *
 * @param {RectTRBL} trblA
 * @param {RectTRBL} trblB
 *
 * @return {RectTRBL}
 */
function substractTRBL(trblA, trblB) {
  return {
    top: trblA.top - trblB.top,
    right: trblA.right - trblB.right,
    bottom: trblA.bottom - trblB.bottom,
    left: trblA.left - trblB.left
  };
}

/**
 * Resize the given bounds by the specified delta from a given anchor point.
 *
 * @param {Rect} bounds the bounding box that should be resized
 * @param {Direction} direction in which the element is resized (nw, ne, se, sw)
 * @param {Point} delta of the resize operation
 *
 * @return {Rect} resized bounding box
 */
function resizeBounds(bounds, direction, delta) {
  var dx = delta.x,
    dy = delta.y;
  var newBounds = {
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height
  };
  if (direction.indexOf('n') !== -1) {
    newBounds.y = bounds.y + dy;
    newBounds.height = bounds.height - dy;
  } else if (direction.indexOf('s') !== -1) {
    newBounds.height = bounds.height + dy;
  }
  if (direction.indexOf('e') !== -1) {
    newBounds.width = bounds.width + dx;
  } else if (direction.indexOf('w') !== -1) {
    newBounds.x = bounds.x + dx;
    newBounds.width = bounds.width - dx;
  }
  return newBounds;
}

/**
 * Resize the given bounds by applying the passed
 * { top, right, bottom, left } delta.
 *
 * @param {Rect} bounds
 * @param {RectTRBL} resize
 *
 * @return {Rect}
 */
function resizeTRBL(bounds, resize) {
  return {
    x: bounds.x + (resize.left || 0),
    y: bounds.y + (resize.top || 0),
    width: bounds.width - (resize.left || 0) + (resize.right || 0),
    height: bounds.height - (resize.top || 0) + (resize.bottom || 0)
  };
}
function reattachPoint(bounds, newBounds, point) {
  var sx = bounds.width / newBounds.width,
    sy = bounds.height / newBounds.height;
  return {
    x: Math.round(newBounds.x + newBounds.width / 2) - Math.floor((bounds.x + bounds.width / 2 - point.x) / sx),
    y: Math.round(newBounds.y + newBounds.height / 2) - Math.floor((bounds.y + bounds.height / 2 - point.y) / sy)
  };
}
function applyConstraints(attr, trbl, resizeConstraints) {
  var value = trbl[attr],
    minValue = resizeConstraints.min && resizeConstraints.min[attr],
    maxValue = resizeConstraints.max && resizeConstraints.max[attr];
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(minValue)) {
    value = (/top|left/.test(attr) ? min : max)(value, minValue);
  }
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(maxValue)) {
    value = (/top|left/.test(attr) ? max : min)(value, maxValue);
  }
  return value;
}
function ensureConstraints(currentBounds, resizeConstraints) {
  if (!resizeConstraints) {
    return currentBounds;
  }
  var currentTrbl = (0,_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(currentBounds);
  return (0,_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asBounds)({
    top: applyConstraints('top', currentTrbl, resizeConstraints),
    right: applyConstraints('right', currentTrbl, resizeConstraints),
    bottom: applyConstraints('bottom', currentTrbl, resizeConstraints),
    left: applyConstraints('left', currentTrbl, resizeConstraints)
  });
}
function getMinResizeBounds(direction, currentBounds, minDimensions, childrenBounds) {
  var currentBox = (0,_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(currentBounds);
  var minBox = {
    top: /n/.test(direction) ? currentBox.bottom - minDimensions.height : currentBox.top,
    left: /w/.test(direction) ? currentBox.right - minDimensions.width : currentBox.left,
    bottom: /s/.test(direction) ? currentBox.top + minDimensions.height : currentBox.bottom,
    right: /e/.test(direction) ? currentBox.left + minDimensions.width : currentBox.right
  };
  var childrenBox = childrenBounds ? (0,_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asTRBL)(childrenBounds) : minBox;
  var combinedBox = {
    top: min(minBox.top, childrenBox.top),
    left: min(minBox.left, childrenBox.left),
    bottom: max(minBox.bottom, childrenBox.bottom),
    right: max(minBox.right, childrenBox.right)
  };
  return (0,_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.asBounds)(combinedBox);
}
function asPadding(mayBePadding, defaultValue) {
  if (typeof mayBePadding !== 'undefined') {
    return mayBePadding;
  } else {
    return DEFAULT_CHILD_BOX_PADDING;
  }
}
function addPadding(bbox, padding) {
  var left, right, top, bottom;
  if (typeof padding === 'object') {
    left = asPadding(padding.left);
    right = asPadding(padding.right);
    top = asPadding(padding.top);
    bottom = asPadding(padding.bottom);
  } else {
    left = right = top = bottom = asPadding(padding);
  }
  return {
    x: bbox.x - left,
    y: bbox.y - top,
    width: bbox.width + left + right,
    height: bbox.height + top + bottom
  };
}

/**
 * Is the given element part of the resize
 * targets min boundary box?
 *
 * This is the default implementation which excludes
 * connections and labels.
 *
 * @param {Element} element
 */
function isBBoxChild(element) {
  // exclude connections
  if (element.waypoints) {
    return false;
  }

  // exclude labels
  if (element.type === 'label') {
    return false;
  }
  return true;
}

/**
 * Return children bounding computed from a shapes children
 * or a list of prefiltered children.
 *
 * @param {Shape|Shape[]} shapeOrChildren
 * @param {RectTRBL|number} padding
 *
 * @return {Rect}
 */
function computeChildrenBBox(shapeOrChildren, padding) {
  var elements;

  // compute based on shape
  if (shapeOrChildren.length === undefined) {
    // grab all the children that are part of the
    // parents children box
    elements = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.filter)(shapeOrChildren.children, isBBoxChild);
  } else {
    elements = shapeOrChildren;
  }
  if (elements.length) {
    return addPadding((0,_util_Elements__WEBPACK_IMPORTED_MODULE_2__.getBBox)(elements), padding);
  }
}

/***/ }),

/***/ "../bpmn-io/diagram-js/lib/layout/LayoutUtil.js":
/*!******************************************************!*\
  !*** ../bpmn-io/diagram-js/lib/layout/LayoutUtil.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asBounds: () => (/* binding */ asBounds),
/* harmony export */   asTRBL: () => (/* binding */ asTRBL),
/* harmony export */   filterRedundantWaypoints: () => (/* binding */ filterRedundantWaypoints),
/* harmony export */   getBoundsMid: () => (/* binding */ getBoundsMid),
/* harmony export */   getConnectionMid: () => (/* binding */ getConnectionMid),
/* harmony export */   getElementLineIntersection: () => (/* binding */ getElementLineIntersection),
/* harmony export */   getIntersections: () => (/* binding */ getIntersections),
/* harmony export */   getMid: () => (/* binding */ getMid),
/* harmony export */   getOrientation: () => (/* binding */ getOrientation),
/* harmony export */   roundBounds: () => (/* binding */ roundBounds),
/* harmony export */   roundPoint: () => (/* binding */ roundPoint)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _util_Geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Geometry */ "../bpmn-io/diagram-js/lib/util/Geometry.js");
/* harmony import */ var path_intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-intersection */ "../bpmn-io/diagram-js/node_modules/path-intersection/intersect.js");
/* harmony import */ var path_intersection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_intersection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ModelUtil */ "../bpmn-io/diagram-js/lib/util/ModelUtil.js");





/**
 * @typedef {import('../core/Types').ElementLike} Element
 * @typedef {import('../core/Types').ConnectionLike} Connection
 *
 * @typedef {import('../util/Types').DirectionTRBL} DirectionTRBL
 * @typedef {import('../util/Types').Point} Point
 * @typedef {import('../util/Types').Rect} Rect
 * @typedef {import('../util/Types').RectTRBL} RectTRBL
 */

/**
 * @param {Rect} bounds
 *
 * @returns {Rect}
 */
function roundBounds(bounds) {
  return {
    x: Math.round(bounds.x),
    y: Math.round(bounds.y),
    width: Math.round(bounds.width),
    height: Math.round(bounds.height)
  };
}

/**
 * @param {Point} point
 *
 * @returns {Point}
 */
function roundPoint(point) {
  return {
    x: Math.round(point.x),
    y: Math.round(point.y)
  };
}

/**
 * Convert the given bounds to a { top, left, bottom, right } descriptor.
 *
 * @param {Point|Rect} bounds
 *
 * @return {RectTRBL}
 */
function asTRBL(bounds) {
  return {
    top: bounds.y,
    right: bounds.x + (bounds.width || 0),
    bottom: bounds.y + (bounds.height || 0),
    left: bounds.x
  };
}

/**
 * Convert a { top, left, bottom, right } to an objects bounds.
 *
 * @param {RectTRBL} trbl
 *
 * @return {Rect}
 */
function asBounds(trbl) {
  return {
    x: trbl.left,
    y: trbl.top,
    width: trbl.right - trbl.left,
    height: trbl.bottom - trbl.top
  };
}

/**
 * Get the mid of the given bounds or point.
 *
 * @param {Point|Rect} bounds
 *
 * @return {Point}
 */
function getBoundsMid(bounds) {
  return roundPoint({
    x: bounds.x + (bounds.width || 0) / 2,
    y: bounds.y + (bounds.height || 0) / 2
  });
}

/**
 * Get the mid of the given Connection.
 *
 * @param {Connection} connection
 *
 * @return {Point}
 */
function getConnectionMid(connection) {
  var waypoints = connection.waypoints;

  // calculate total length and length of each segment
  var parts = waypoints.reduce(function (parts, point, index) {
    var lastPoint = waypoints[index - 1];
    if (lastPoint) {
      var lastPart = parts[parts.length - 1];
      var startLength = lastPart && lastPart.endLength || 0;
      var length = distance(lastPoint, point);
      parts.push({
        start: lastPoint,
        end: point,
        startLength: startLength,
        endLength: startLength + length,
        length: length
      });
    }
    return parts;
  }, []);
  var totalLength = parts.reduce(function (length, part) {
    return length + part.length;
  }, 0);

  // find which segement contains middle point
  var midLength = totalLength / 2;
  var i = 0;
  var midSegment = parts[i];
  while (midSegment.endLength < midLength) {
    midSegment = parts[++i];
  }

  // calculate relative position on mid segment
  var segmentProgress = (midLength - midSegment.startLength) / midSegment.length;
  var midPoint = {
    x: midSegment.start.x + (midSegment.end.x - midSegment.start.x) * segmentProgress,
    y: midSegment.start.y + (midSegment.end.y - midSegment.start.y) * segmentProgress
  };
  return midPoint;
}

/**
 * Get the mid of the given Element.
 *
 * @param {Element} element
 *
 * @return {Point}
 */
function getMid(element) {
  if ((0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.isConnection)(element)) {
    return getConnectionMid(element);
  }
  return getBoundsMid(element);
}

// orientation utils //////////////////////

/**
 * Get orientation of the given rectangle with respect to
 * the reference rectangle.
 *
 * A padding (positive or negative) may be passed to influence
 * horizontal / vertical orientation and intersection.
 *
 * @param {Rect} rect
 * @param {Rect} reference
 * @param {Point|number} padding
 *
 * @return {DirectionTRBL} the orientation; one of top, top-left, left, ..., bottom, right or intersect.
 */
function getOrientation(rect, reference, padding) {
  padding = padding || 0;

  // make sure we can use an object, too
  // for individual { x, y } padding
  if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_2__.isObject)(padding)) {
    padding = {
      x: padding,
      y: padding
    };
  }
  var rectOrientation = asTRBL(rect),
    referenceOrientation = asTRBL(reference);
  var top = rectOrientation.bottom + padding.y <= referenceOrientation.top,
    right = rectOrientation.left - padding.x >= referenceOrientation.right,
    bottom = rectOrientation.top - padding.y >= referenceOrientation.bottom,
    left = rectOrientation.right + padding.x <= referenceOrientation.left;
  var vertical = top ? 'top' : bottom ? 'bottom' : null,
    horizontal = left ? 'left' : right ? 'right' : null;
  if (horizontal && vertical) {
    return vertical + '-' + horizontal;
  } else {
    return horizontal || vertical || 'intersect';
  }
}

// intersection utils //////////////////////

/**
 * Get intersection between an element and a line path.
 *
 * @param {string} elementPath
 * @param {string} linePath
 * @param {boolean} cropStart Whether to crop start or end.
 *
 * @return {Point}
 */
function getElementLineIntersection(elementPath, linePath, cropStart) {
  var intersections = getIntersections(elementPath, linePath);

  // recognize intersections
  // only one -> choose
  // two close together -> choose first
  // two or more distinct -> pull out appropriate one
  // none -> ok (fallback to point itself)
  if (intersections.length === 1) {
    return roundPoint(intersections[0]);
  } else if (intersections.length === 2 && (0,_util_Geometry__WEBPACK_IMPORTED_MODULE_3__.pointDistance)(intersections[0], intersections[1]) < 1) {
    return roundPoint(intersections[0]);
  } else if (intersections.length > 1) {
    // sort by intersections based on connection segment +
    // distance from start
    intersections = (0,min_dash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(intersections, function (i) {
      var distance = Math.floor(i.t2 * 100) || 1;
      distance = 100 - distance;
      distance = (distance < 10 ? '0' : '') + distance;

      // create a sort string that makes sure we sort
      // line segment ASC + line segment position DESC (for cropStart)
      // line segment ASC + line segment position ASC (for cropEnd)
      return i.segment2 + '#' + distance;
    });
    return roundPoint(intersections[cropStart ? 0 : intersections.length - 1]);
  }
  return null;
}
function getIntersections(a, b) {
  return path_intersection__WEBPACK_IMPORTED_MODULE_0___default()(a, b);
}
function filterRedundantWaypoints(waypoints) {
  // alter copy of waypoints, not original
  waypoints = waypoints.slice();
  var idx = 0,
    point,
    previousPoint,
    nextPoint;
  while (waypoints[idx]) {
    point = waypoints[idx];
    previousPoint = waypoints[idx - 1];
    nextPoint = waypoints[idx + 1];
    if ((0,_util_Geometry__WEBPACK_IMPORTED_MODULE_3__.pointDistance)(point, nextPoint) === 0 || (0,_util_Geometry__WEBPACK_IMPORTED_MODULE_3__.pointsOnLine)(previousPoint, nextPoint, point)) {
      // remove point, if overlapping with {nextPoint}
      // or on line with {previousPoint} -> {point} -> {nextPoint}
      waypoints.splice(idx, 1);
    } else {
      idx++;
    }
  }
  return waypoints;
}

// helpers //////////////////////

function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/***/ }),

/***/ "../bpmn-io/diagram-js/lib/util/Elements.js":
/*!**************************************************!*\
  !*** ../bpmn-io/diagram-js/lib/util/Elements.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   eachElement: () => (/* binding */ eachElement),
/* harmony export */   getBBox: () => (/* binding */ getBBox),
/* harmony export */   getClosure: () => (/* binding */ getClosure),
/* harmony export */   getEnclosedElements: () => (/* binding */ getEnclosedElements),
/* harmony export */   getParents: () => (/* binding */ getParents),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   isFrameElement: () => (/* binding */ isFrameElement),
/* harmony export */   selfAndAllChildren: () => (/* binding */ selfAndAllChildren),
/* harmony export */   selfAndChildren: () => (/* binding */ selfAndChildren),
/* harmony export */   selfAndDirectChildren: () => (/* binding */ selfAndDirectChildren)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef {import('../model/Types').Connection} Connection
 * @typedef {import('../model/Types').Element} Element
 * @typedef {import('../model/Types').Shape} Shape
 *
 * @typedef {import('../../type/Types').Rect} Rect
 *
 * @typedef { {
 *   allShapes: Record<string, Shape>,
 *   allConnections: Record<string, Connection>,
 *   topLevel: Record<string, Element>,
 *   enclosedConnections: Record<string, Connection>,
 *   enclosedElements: Record<string, Element>
 * } } Closure
 */

/**
 * Get parent elements.
 *
 * @param {Element[]} elements
 *
 * @return {Element[]}
 */
function getParents(elements) {
  // find elements that are not children of any other elements
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.filter)(elements, function (element) {
    return !(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.find)(elements, function (e) {
      return e !== element && getParent(element, e);
    });
  });
}
function getParent(element, parent) {
  if (!parent) {
    return;
  }
  if (element === parent) {
    return parent;
  }
  if (!element.parent) {
    return;
  }
  return getParent(element.parent, parent);
}

/**
 * Adds an element to a collection and returns true if the
 * element was added.
 *
 * @param {Object[]} elements
 * @param {Object} element
 * @param {boolean} [unique]
 */
function add(elements, element, unique) {
  var canAdd = !unique || elements.indexOf(element) === -1;
  if (canAdd) {
    elements.push(element);
  }
  return canAdd;
}

/**
 * Iterate over each element in a collection, calling the iterator function `fn`
 * with (element, index, recursionDepth).
 *
 * Recurse into all elements that are returned by `fn`.
 *
 * @param {Element|Element[]} elements
 * @param {(element: Element, index: number, depth: number) => Element[] | boolean | undefined} fn
 * @param {number} [depth] maximum recursion depth
 */
function eachElement(elements, fn, depth) {
  depth = depth || 0;
  if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(elements)) {
    elements = [elements];
  }
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(elements, function (s, i) {
    var filter = fn(s, i, depth);
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(filter) && filter.length) {
      eachElement(filter, fn, depth + 1);
    }
  });
}

/**
 * Collects self + child elements up to a given depth from a list of elements.
 *
 * @param {Element|Element[]} elements the elements to select the children from
 * @param {boolean} unique whether to return a unique result set (no duplicates)
 * @param {number} maxDepth the depth to search through or -1 for infinite
 *
 * @return {Element[]} found elements
 */
function selfAndChildren(elements, unique, maxDepth) {
  var result = [],
    processedChildren = [];
  eachElement(elements, function (element, i, depth) {
    add(result, element, unique);
    var children = element.children;

    // max traversal depth not reached yet
    if (maxDepth === -1 || depth < maxDepth) {
      // children exist && children not yet processed
      if (children && add(processedChildren, children, unique)) {
        return children;
      }
    }
  });
  return result;
}

/**
 * Return self + direct children for a number of elements
 *
 * @param {Element[]} elements to query
 * @param {boolean} [allowDuplicates] to allow duplicates in the result set
 *
 * @return {Element[]} the collected elements
 */
function selfAndDirectChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, 1);
}

/**
 * Return self + ALL children for a number of elements
 *
 * @param {Element[]} elements to query
 * @param {boolean} [allowDuplicates] to allow duplicates in the result set
 *
 * @return {Element[]} the collected elements
 */
function selfAndAllChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, -1);
}

/**
 * Gets the the closure for all selected elements,
 * their enclosed children and connections.
 *
 * @param {Element[]} elements
 * @param {boolean} [isTopLevel=true]
 * @param {Closure} [closure]
 *
 * @return {Closure} newClosure
 */
function getClosure(elements, isTopLevel, closure) {
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(isTopLevel)) {
    isTopLevel = true;
  }
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(isTopLevel)) {
    closure = isTopLevel;
    isTopLevel = true;
  }
  closure = closure || {};
  var allShapes = copyObject(closure.allShapes),
    allConnections = copyObject(closure.allConnections),
    enclosedElements = copyObject(closure.enclosedElements),
    enclosedConnections = copyObject(closure.enclosedConnections);
  var topLevel = copyObject(closure.topLevel, isTopLevel && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(elements, function (e) {
    return e.id;
  }));
  function handleConnection(c) {
    if (topLevel[c.source.id] && topLevel[c.target.id]) {
      topLevel[c.id] = [c];
    }

    // not enclosed as a child, but maybe logically
    // (connecting two moved elements?)
    if (allShapes[c.source.id] && allShapes[c.target.id]) {
      enclosedConnections[c.id] = enclosedElements[c.id] = c;
    }
    allConnections[c.id] = c;
  }
  function handleElement(element) {
    enclosedElements[element.id] = element;
    if (element.waypoints) {
      // remember connection
      enclosedConnections[element.id] = allConnections[element.id] = element;
    } else {
      // remember shape
      allShapes[element.id] = element;

      // remember all connections
      (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(element.incoming, handleConnection);
      (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(element.outgoing, handleConnection);

      // recurse into children
      return element.children;
    }
  }
  eachElement(elements, handleElement);
  return {
    allShapes: allShapes,
    allConnections: allConnections,
    topLevel: topLevel,
    enclosedConnections: enclosedConnections,
    enclosedElements: enclosedElements
  };
}

/**
 * Returns the surrounding bbox for all elements in
 * the array or the element primitive.
 *
 * @param {Element|Element[]} elements
 * @param {boolean} [stopRecursion=false]
 *
 * @return {Rect}
 */
function getBBox(elements, stopRecursion) {
  stopRecursion = !!stopRecursion;
  if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(elements)) {
    elements = [elements];
  }
  var minX, minY, maxX, maxY;
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(elements, function (element) {
    // If element is a connection the bbox must be computed first
    var bbox = element;
    if (element.waypoints && !stopRecursion) {
      bbox = getBBox(element.waypoints, true);
    }
    var x = bbox.x,
      y = bbox.y,
      height = bbox.height || 0,
      width = bbox.width || 0;
    if (x < minX || minX === undefined) {
      minX = x;
    }
    if (y < minY || minY === undefined) {
      minY = y;
    }
    if (x + width > maxX || maxX === undefined) {
      maxX = x + width;
    }
    if (y + height > maxY || maxY === undefined) {
      maxY = y + height;
    }
  });
  return {
    x: minX,
    y: minY,
    height: maxY - minY,
    width: maxX - minX
  };
}

/**
 * Returns all elements that are enclosed from the bounding box.
 *
 *   * If bbox.(width|height) is not specified the method returns
 *     all elements with element.x/y > bbox.x/y
 *   * If only bbox.x or bbox.y is specified, method return all elements with
 *     e.x > bbox.x or e.y > bbox.y
 *
 * @param {Element[]} elements List of Elements to search through
 * @param {Rect} bbox the enclosing bbox.
 *
 * @return {Element[]} enclosed elements
 */
function getEnclosedElements(elements, bbox) {
  var filteredElements = {};
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(elements, function (element) {
    var e = element;
    if (e.waypoints) {
      e = getBBox(e);
    }
    if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.y) && e.x > bbox.x) {
      filteredElements[element.id] = element;
    }
    if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.x) && e.y > bbox.y) {
      filteredElements[element.id] = element;
    }
    if (e.x > bbox.x && e.y > bbox.y) {
      if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.width) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.height) && e.width + e.x < bbox.width + bbox.x && e.height + e.y < bbox.height + bbox.y) {
        filteredElements[element.id] = element;
      } else if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.width) || !(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.height)) {
        filteredElements[element.id] = element;
      }
    }
  });
  return filteredElements;
}

/**
 * Get the element's type
 *
 * @param {Element} element
 *
 * @return {'connection' | 'shape' | 'root'}
 */
function getType(element) {
  if ('waypoints' in element) {
    return 'connection';
  }
  if ('x' in element) {
    return 'shape';
  }
  return 'root';
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function isFrameElement(element) {
  return !!(element && element.isFrame);
}

// helpers ///////////////////////////////

function copyObject(src1, src2) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, src1 || {}, src2 || {});
}

/***/ }),

/***/ "../bpmn-io/diagram-js/lib/util/Geometry.js":
/*!**************************************************!*\
  !*** ../bpmn-io/diagram-js/lib/util/Geometry.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMidPoint: () => (/* binding */ getMidPoint),
/* harmony export */   pointDistance: () => (/* binding */ pointDistance),
/* harmony export */   pointInRect: () => (/* binding */ pointInRect),
/* harmony export */   pointsAligned: () => (/* binding */ pointsAligned),
/* harmony export */   pointsAlignedOnAxis: () => (/* binding */ pointsAlignedOnAxis),
/* harmony export */   pointsOnLine: () => (/* binding */ pointsOnLine)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef {import('../util/Types').Axis} Axis
 * @typedef {import('../util/Types').Point} Point
 * @typedef {import('../util/Types').Rect} Rect
 */

/**
 * Computes the distance between two points.
 *
 * @param {Point} a
 * @param {Point} b
 *
 * @return {number} The distance between the two points.
 */
function pointDistance(a, b) {
  if (!a || !b) {
    return -1;
  }
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/**
 * Returns true if the point r is on the line between p and q.
 *
 * @param {Point} p
 * @param {Point} q
 * @param {Point} r
 * @param {number} [accuracy=5] The accuracy with which to check (lower is better).
 *
 * @return {boolean}
 */
function pointsOnLine(p, q, r, accuracy) {
  if (typeof accuracy === 'undefined') {
    accuracy = 5;
  }
  if (!p || !q || !r) {
    return false;
  }
  var val = (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x),
    dist = pointDistance(p, q);

  // @see http://stackoverflow.com/a/907491/412190
  return Math.abs(val / dist) <= accuracy;
}
var ALIGNED_THRESHOLD = 2;

/**
 * Check whether two points are horizontally or vertically aligned.
 *
 * @param {Point[]|Point} a
 * @param {Point} [b]
 *
 * @return {string|boolean} If and how the two points are aligned ('h', 'v' or `false`).
 */
function pointsAligned(a, b) {
  var points = Array.from(arguments).flat();
  const axisMap = {
    'x': 'v',
    'y': 'h'
  };
  for (const [axis, orientation] of Object.entries(axisMap)) {
    if (pointsAlignedOnAxis(axis, points)) {
      return orientation;
    }
  }
  return false;
}

/**
 * @param {Axis} axis
 * @param {Point[]} points
 *
 * @return {boolean}
 */
function pointsAlignedOnAxis(axis, points) {
  const referencePoint = points[0];
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.every)(points, function (point) {
    return Math.abs(referencePoint[axis] - point[axis]) <= ALIGNED_THRESHOLD;
  });
}

/**
 * Returns true if the point p is inside the rectangle rect
 *
 * @param {Point} p
 * @param {Rect} rect
 * @param {number} tolerance
 *
 * @return {boolean}
 */
function pointInRect(p, rect, tolerance) {
  tolerance = tolerance || 0;
  return p.x > rect.x - tolerance && p.y > rect.y - tolerance && p.x < rect.x + rect.width + tolerance && p.y < rect.y + rect.height + tolerance;
}

/**
 * Returns a point in the middle of points p and q
 *
 * @param {Point} p
 * @param {Point} q
 *
 * @return {Point} The mid point between the two points.
 */
function getMidPoint(p, q) {
  return {
    x: Math.round(p.x + (q.x - p.x) / 2.0),
    y: Math.round(p.y + (q.y - p.y) / 2.0)
  };
}

/***/ }),

/***/ "../bpmn-io/diagram-js/lib/util/ModelUtil.js":
/*!***************************************************!*\
  !*** ../bpmn-io/diagram-js/lib/util/ModelUtil.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isConnection: () => (/* binding */ isConnection),
/* harmony export */   isLabel: () => (/* binding */ isLabel),
/* harmony export */   isRoot: () => (/* binding */ isRoot)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js");


/**
 * Checks whether a value is an instance of Connection.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isConnection(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.has)(value, 'waypoints');
}

/**
 * Checks whether a value is an instance of Label.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isLabel(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.has)(value, 'labelTarget');
}

/**
 * Checks whether a value is an instance of Root.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isRoot(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value.parent);
}

/***/ }),

/***/ "./src/features/AppendNode.js":
/*!************************************!*\
  !*** ./src/features/AppendNode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppendNode)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "./node_modules/diagram-js/lib/util/Elements.js");




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
function AppendNode(canvas, eventBus, overlays, appendPreview) {
  this._canvas = canvas;
  this._eventBus = eventBus;
  this._overlays = overlays;
  this._appendPreview = appendPreview;
  this._current = null;
  this._init();
}
AppendNode.$inject = ['canvas', 'eventBus', 'overlays', 'appendPreview'];

// TODO provider to only show on relevant elements

/**
 * Registers events needed for interaction with other components.
 */
AppendNode.prototype._init = function () {
  var self = this;
  this._eventBus.on('selection.changed', function (event) {
    var selection = event.newSelection;
    var target = selection.length ? selection.length === 1 ? selection[0] : selection : null;
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
    var currentChanged = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentTarget) ? currentTarget : [currentTarget], function (element) {
      return includes(elements, element);
    });

    // re-open if elements in current selection changed
    if (currentChanged) {
      self.show(currentTarget, true);
    }
  });
};

/**
 * @overlord
 *
 * Register a context pad provider with the default priority. See
 * {@link AppendNodeProvider} for examples.
 *
 * @param {AppendNodeProvider} provider
 */

/**
 * Register a context pad provider with the given priority. See
 * {@link AppendNodeProvider} for examples.
 *
 * @param {number} priority
 * @param {AppendNodeProvider} provider
 */
AppendNode.prototype.registerProvider = function (priority, provider) {
  if (!provider) {
    provider = priority;
    priority = DEFAULT_PRIORITY;
  }
  this._eventBus.on('appendNode.getProviders', priority, function (event) {
    event.providers.push(provider);
  });
};

/**
 * Get append node actions for given elements.
 *
 * @param {AppendNodeTarget} target
 *
 * @return {AppendNodeActions} object of drag and click actions
 */
AppendNode.prototype.getActions = function (target) {
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) return {};
  var providers = this._getProviders();
  var clickFn = 'getAppendNodeClickAction';
  var dragFn = 'getAppendNodeDragAction';
  var entries = {};

  // TODO does it make sense to register multiple?

  // loop through all providers and their entries.
  // group entries by id so that overriding an entry is possible
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(providers, provider => {
    // click
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(provider[clickFn])) {
      entries['click'] = provider[clickFn](target);
    }

    // drag
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(provider[dragFn])) {
      entries['dragstart'] = provider[dragFn](target);
    }
    console.log('entries: ', entries);
    entries.hover = (_, element) => {
      // mouseover
      console.log('mouseover');
      this._appendPreview.create(element, 'bpmn:Task', {
        hidden: true
      });
      return () => {
        // mouseout
        console.log('mouseout');
        this._appendPreview.delete();
      };
    };
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

AppendNode.prototype.trigger = function (action, event, autoActivate) {
  var originalEvent,
    button = event.delegateTarget || event.target;
  if (!button) {
    return event.preventDefault();
  }

  //entry = domAttr(button, 'data-action');
  originalEvent = event.originalEvent || event;
  const HOVER_DELAY = 300;
  if (action === 'mouseover') {
    this._timeout = setTimeout(() => {
      this._mouseout = this.triggerAction('hover', originalEvent, autoActivate);
    }, HOVER_DELAY);
  } else if (action === 'mouseout') {
    clearTimeout(this._timeout);
    if (this._mouseout) {
      this._mouseout();
      this._mouseout = null;
    }
  }
  return this.triggerAction(action, originalEvent, autoActivate);
};

/**
 * Trigger append node action.
 *
 * @param {string} action
 * @param {Event} event
 * @param {boolean} [autoActivate=false]
 */
AppendNode.prototype.triggerAction = function (actionId, event, autoActivate) {
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

  if (this._eventBus.fire('appendNode.trigger', {
    action,
    event
  }) === false) {
    return;
  }

  // simple action (via callback function)
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(action)) {
    return action(event, target, autoActivate);
  }

  // silence other actions
  event.preventDefault();
};

/**
 * Show the append node for given elements.
 *
 * @param {AppendNodeTarget} target
 * @param {boolean} [force=false] - Force re-showing append node.
 */
AppendNode.prototype.show = function (target, force) {
  if (!force && this.isShown(target)) {
    return;
  }
  this.hide();
  this._updateAndShow(target);
};
AppendNode.prototype._getProviders = function () {
  var event = this._eventBus.createEvent({
    type: 'appendNode.getProviders',
    providers: []
  });
  this._eventBus.fire(event);
  return event.providers;
};

/**
 * @param {AppendNodeTarget} target
 */
AppendNode.prototype._updateAndShow = function (target) {
  var actions = this.getActions(target),
    node = this.getNode(target),
    html = node.html,
    // TODO multiple nodes
    image;
  var showNode = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(actions) && ALLOWED_ACTIONS.some(action => (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(actions[action]));
  (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.classes)(html).add(showNode ? 'show' : 'hide'); // TODO rename classes

  this._current = {
    target: target,
    actions: actions,
    node: node
  };
  this._eventBus.fire('appendNodes.show', {
    current: this._current
  });
};

/**
 * @param {AppendNodeTarget} target
 *
 * @return {Overlay}
 */
AppendNode.prototype.getNode = function (target) {
  if (this.isShown()) {
    return this._current.node;
  }
  var self = this;
  var overlays = this._overlays;

  // TODO use real preview
  /*
  var appendPreview = `
    <svg>  
      <g class="djs-element djs-connection" style="display: block;">
        <g class="djs-visual">
          <path data-corner-radius="5" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(34, 36, 42); stroke-width: 2px; marker-end: url(&quot;#sequenceflow-end-white-hsl_225_10_15_-341b8e86qykbiuvsan2j7nkil&quot;);" d="M370,790L420,790"></path>
        </g>
      </g>
    </svg>
  `;
  */

  // TODO multiple nodes
  var html = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)(`
    <div class="djs-append-node">
      <div class="djs-append-node-circle" title="Append/connect" draggable="true"></div>
    </div>
  `);
  var position = this._getPosition(target);
  var overlaysConfig = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({
    html: html
  }, this._overlaysConfig, position);
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, nodeSelector, 'click', function (event) {
    self.trigger('click', event);
  });
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, nodeSelector, 'dragstart', function (event) {
    self.trigger('dragstart', event);
  });
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, nodeSelector, 'mouseover', function (event) {
    self.trigger('mouseover', event);
  });
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, nodeSelector, 'mouseout', function (event) {
    self.trigger('mouseout', event);
  });

  // stop propagation of mouse events
  min_dom__WEBPACK_IMPORTED_MODULE_1__.event.bind(html, 'mousedown', function (event) {
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
  return node;
};

/**
 * Hide the node
 */
AppendNode.prototype.hide = function () {
  if (!this.isShown()) {
    return;
  }
  this._overlays.remove(this._overlayId);
  this._overlayId = null;
  this._eventBus.fire('appendNodes.hide', {
    current: this._current
  });
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
AppendNode.prototype.isShown = function (target) {
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
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) !== (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentTarget)) {
    return false;
  }
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    return target.length === currentTarget.length && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.every)(target, function (element) {
      return includes(currentTarget, element);
    });
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
AppendNode.prototype._getPosition = function (target) {
  var elements = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? target : [target];
  var bBox = (0,diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__.getBBox)(elements);
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

/***/ }),

/***/ "./src/features/AppendNodeProvider.js":
/*!********************************************!*\
  !*** ./src/features/AppendNodeProvider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppendNodeProvider)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/util/DiUtil */ "../bpmn-io/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/util/Mouse */ "./node_modules/diagram-js/lib/util/Mouse.js");





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
function AppendNodeProvider(config, injector, eventBus, appendNode, modeling, elementFactory, connect, create, popupMenu, canvas, rules, dragging, translate) {
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
    if (!(0,diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_0__.hasPrimaryModifier)(event) || !appendNode.isShown(shape)) {
      return;
    }
  });
}
AppendNodeProvider.$inject = ['config.appendNode', 'injector', 'eventBus', 'appendNode', 'modeling', 'elementFactory', 'connect', 'create', 'popupMenu', 'canvas', 'rules', 'dragging', 'translate'];
function isAppendAllowed(element) {
  var businessObject = element.businessObject;
  return element.type !== 'label' & (0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(businessObject, 'bpmn:FlowNode') && (!(0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(businessObject, 'bpmn:EndEvent') && !businessObject.isForCompensation && !isEventType(businessObject, 'bpmn:IntermediateThrowEvent', 'bpmn:LinkEventDefinition') && !(0,bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__.isEventSubProcess)(businessObject) || (0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(businessObject, 'bpmn:EventBasedGateway') || isEventType(businessObject, 'bpmn:BoundaryEvent', 'bpmn:CompensateEventDefinition'));
}
;

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
  return function (event, element) {
    const position = (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.assign)(getAppendMenuPosition(element), {
      cursor: {
        x: event.x,
        y: event.y
      }
    });
    popupMenu.open(element, 'bpmn-append', position, {
      title: translate('Append element'),
      width: 300,
      search: true
    });
  };
};

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
};

/**
 * Calculates the position for the append menu relatively to the element.
 * The menu should pop up directly behind the mouse cursor
 *
 * @param {djs.model.Base} element
 * @returns {Object}
 */
AppendNodeProvider.prototype._getAppendMenuPosition = function (element) {
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
  (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.forEach)(definitions, function (def) {
    if (def.$type === eventDefinitionType) {
      isDefinition = true;
    }
  });
  return isType && isDefinition;
}

/***/ }),

/***/ "./src/features/BoundaryEventAppender.js":
/*!***********************************************!*\
  !*** ./src/features/BoundaryEventAppender.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundaryEventAppender)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "./node_modules/diagram-js/lib/util/Elements.js");




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
function BoundaryEventAppender(canvas, eventBus, overlays) {
  this._canvas = canvas;
  this._eventBus = eventBus;
  this._overlays = overlays;
  this._current = null;
  this._init();
}
BoundaryEventAppender.$inject = ['canvas', 'eventBus', 'overlays'];

// TODO provider to only show on relevant elements

/**
 * Registers events needed for interaction with other components.
 */
BoundaryEventAppender.prototype._init = function () {
  var self = this;
  this._eventBus.on('selection.changed', function (event) {
    var selection = event.newSelection;
    var target = selection.length ? selection.length === 1 ? selection[0] : selection : null;
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
    var currentChanged = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentTarget) ? currentTarget : [currentTarget], function (element) {
      return includes(elements, element);
    });

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
BoundaryEventAppender.prototype.registerProvider = function (priority, provider) {
  if (!provider) {
    provider = priority;
    priority = DEFAULT_PRIORITY;
  }
  this._eventBus.on('boundaryEventAppender.getProviders', priority, function (event) {
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
BoundaryEventAppender.prototype.getActions = function (target) {
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) return {};
  var providers = this._getProviders();
  var clickFn = 'getBoundaryEventAppenderClickAction';
  var dragFn = 'getBoundaryEventAppenderDragAction';
  var entries = {};

  // TODO does it make sense to register multiple?

  // loop through all providers and their entries.
  // group entries by id so that overriding an entry is possible
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(providers, function (provider) {
    // click
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(provider[clickFn])) {
      entries['click'] = provider[clickFn](target);
    }

    // drag
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(provider[dragFn])) {
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

BoundaryEventAppender.prototype.trigger = function (action, event, autoActivate) {
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
BoundaryEventAppender.prototype.triggerAction = function (actionId, event, autoActivate) {
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

  if (this._eventBus.fire('boundaryEventAppender.trigger', {
    action,
    event
  }) === false) {
    return;
  }

  // simple action (via callback function)
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(action)) {
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
BoundaryEventAppender.prototype.show = function (target, force) {
  if (!force && this.isShown(target)) {
    return;
  }
  this.hide();
  this._updateAndShow(target);
};
BoundaryEventAppender.prototype._getProviders = function () {
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
BoundaryEventAppender.prototype._updateAndShow = function (target) {
  var actions = this.getActions(target),
    node = this.getNode(target),
    html = node.html,
    // TODO multiple nodes
    image;
  var showNode = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(actions) && ALLOWED_ACTIONS.some(action => (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(actions[action]));
  (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.classes)(html).add(showNode ? 'show' : 'hide'); // TODO rename classes

  this._current = {
    target: target,
    actions: actions,
    node: node
  };
  this._eventBus.fire('boundaryEventAppenders.show', {
    current: this._current
  });
};

/**
 * @param {BoundaryEventAppenderTarget} target
 *
 * @return {Overlay}
 */
BoundaryEventAppender.prototype.getNode = function (target) {
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
  var html = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)(`
    <div class="djs-boundary-event-appender">
      <div class="djs-boundary-event-appender-circle" title="Add boundary event" draggable="true"></div>
    </div>
  `);
  var position = this._getPosition(target);
  var overlaysConfig = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({
    html: html
  }, this._overlaysConfig, position);
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, nodeSelector, 'click', function (event) {
    self.trigger('click', event);
  });
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, nodeSelector, 'dragstart', function (event) {
    self.trigger('dragstart', event);
  });

  // stop propagation of mouse events
  min_dom__WEBPACK_IMPORTED_MODULE_1__.event.bind(html, 'mousedown', function (event) {
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
BoundaryEventAppender.prototype.hide = function () {
  if (!this.isShown()) {
    return;
  }
  this._overlays.remove(this._overlayId);
  this._overlayId = null;
  this._eventBus.fire('boundaryEventAppenders.hide', {
    current: this._current
  });
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
BoundaryEventAppender.prototype.isShown = function (target) {
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
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) !== (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentTarget)) {
    return false;
  }
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    return target.length === currentTarget.length && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.every)(target, function (element) {
      return includes(currentTarget, element);
    });
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
BoundaryEventAppender.prototype._getPosition = function (target) {
  var elements = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? target : [target];
  var bBox = (0,diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__.getBBox)(elements);
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

/***/ }),

/***/ "./src/features/BoundaryEventAppenderProvider.js":
/*!*******************************************************!*\
  !*** ./src/features/BoundaryEventAppenderProvider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundaryEventAppenderProvider)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/util/DiUtil */ "../bpmn-io/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/util/Mouse */ "./node_modules/diagram-js/lib/util/Mouse.js");








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
function BoundaryEventAppenderProvider(config, injector, eventBus, boundaryEventAppender, modeling, elementFactory, connect, create, popupMenu, canvas, rules, translate) {
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
    if (!(0,diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_0__.hasPrimaryModifier)(event) || !boundaryEventAppender.isShown(shape)) {
      return;
    }
  });
}
BoundaryEventAppenderProvider.$inject = ['config.boundaryEventAppender', 'injector', 'eventBus', 'boundaryEventAppender', 'modeling', 'elementFactory', 'connect', 'create', 'popupMenu', 'canvas', 'rules', 'translate'];
function isAppendAllowed(element) {
  var businessObject = element.businessObject;

  // TODO only on task types + subprocesses

  return element.type !== 'label' & (0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(businessObject, 'bpmn:FlowNode') && !(0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(businessObject, 'bpmn:Event') && !(0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(businessObject, 'bpmn:Gateway') && !businessObject.isForCompensation && !(0,bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__.isEventSubProcess)(businessObject);
}
;

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
    var shape = elementFactory.createShape((0,min_dash__WEBPACK_IMPORTED_MODULE_3__.assign)({
      type: task
    }, options));
    create.start(event, shape, {
      source: element
    });
  }

  // TODO custom autoplace to append the event on the element 

  /*
  var append = autoPlace ? function(event, element) {
    var shape = elementFactory.createShape(assign({ type: task }, options));
     if (element.attachers.length) {
      create.start(event, shape, {
        source: element
      });
      return;
    }
   
    var position = {
      x: element.x + element.width,
      y: element.y + element.height
    };
     var createdShape = modeling.createShape(shape, position, element, { attach: true });
     //autoPlace.append(element, shape);
  } : appendStart;
  */

  return appendStart;
};

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
  return function (event, element) {
    var shape = elementFactory.createShape((0,min_dash__WEBPACK_IMPORTED_MODULE_3__.assign)({
      type: task
    }, options));
    create.start(event, shape, {
      source: element
    });
  };
};

/**
 * Calculates the position for the append menu relatively to the element.
 * The menu should pop up directly behind the mouse cursor
 *
 * @param {djs.model.Base} element
 * @returns {Object}
 */
BoundaryEventAppenderProvider.prototype._getAppendMenuPosition = function (element) {
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
  (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.forEach)(definitions, function (def) {
    if (def.$type === eventDefinitionType) {
      isDefinition = true;
    }
  });
  return isType && isDefinition;
}

/***/ }),

/***/ "./src/features/Connect.js":
/*!*********************************!*\
  !*** ./src/features/Connect.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Connect),
/* harmony export */   isReverse: () => (/* binding */ isReverse)
/* harmony export */ });
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "./node_modules/diagram-js/lib/layout/LayoutUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");



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
function Connect(eventBus, dragging, modeling, rules, elementFactory) {
  // rules

  var UNALLOWED_APPEND_SOURCES = ['bpmn:Participant', 'bpmn:DataObjectReference', 'bpmn:DataStoreReference', 'bpmn:EndEvent'];
  function isAppendTargetValid(source, target) {
    return !UNALLOWED_APPEND_SOURCES.includes(source.type) && (!target || target.type === 'bpmn:Process' || target.constructor.name === 'RootImpl' || !target.parent || target.type === 'bpmn:Participant' && source?.parent?.id === target.id);
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
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNil)(canExecute)) {
      return;
    }
    if (canExecute !== false) {
      context.source = start;
      context.target = hover;
      return;
    }
    canExecute = context.canExecute = canConnectReverse(start, hover);

    // ignore hover
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNil)(canExecute)) {
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
      var shape = elementFactory.createShape((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({
        type: 'bpmn:Task'
      }, {}));
      var createdShape = modeling.createShape(shape, connectionEnd, context.start.parent, {
        attach: false
      });
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
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(canExecute)) {
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
    if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(connectionStart)) {
      autoActivate = connectionStart;
      connectionStart = (0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__.getMid)(start);
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
Connect.$inject = ['eventBus', 'dragging', 'modeling', 'rules', 'elementFactory'];

// helpers //////////

function isReverse(context) {
  var hover = context.hover,
    source = context.source,
    target = context.target;
  return hover && source && hover === source && source !== target;
}

/***/ }),

/***/ "./src/features/ContextPad.js":
/*!************************************!*\
  !*** ./src/features/ContextPad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContextPad)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "./node_modules/diagram-js/lib/util/Elements.js");
/* harmony import */ var diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/EscapeUtil */ "./node_modules/diagram-js/lib/util/EscapeUtil.js");





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
 * @typedef {import('./ContextPadProvider').default} ContextPadProvider
 * @typedef {import('./ContextPadProvider').ContextPadEntries} ContextPadEntries
 *
 * @typedef { {
 *   scale?: {
 *     min?: number;
 *     max?: number;
 *   };
 * } } ContextPadConfig
 */

/**
 * @template {Element} [ElementType=Element]
 *
 * @typedef {ElementType|ElementType[]} ContextPadTarget
 */

var entrySelector = '.entry';
var DEFAULT_PRIORITY = 1000;
var CONTEXT_PAD_PADDING = 12;

/**
 * A context pad that displays element specific, contextual actions next
 * to a diagram element.
 *
 * @param {Canvas} canvas
 * @param {ContextPadConfig} config
 * @param {EventBus} eventBus
 * @param {Overlays} overlays
 */
function ContextPad(canvas, config, eventBus, overlays) {
  this._canvas = canvas;
  this._eventBus = eventBus;
  this._overlays = overlays;
  var scale = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isDefined)(config && config.scale) ? config.scale : {
    min: 1,
    max: 1.5
  };
  this._overlaysConfig = {
    scale: scale
  };
  this._current = null;
  this._init();
}
ContextPad.$inject = ['canvas', 'config.contextPad', 'eventBus', 'overlays'];

/**
 * Registers events needed for interaction with other components.
 */
ContextPad.prototype._init = function () {
  var self = this;
  this._eventBus.on('selection.changed', function (event) {
    var selection = event.newSelection;
    var target = selection.length ? selection.length === 1 ? selection[0] : selection : null;
    if (target) {
      self.open(target, true);
    } else {
      self.close();
    }
  });
  this._eventBus.on('elements.changed', function (event) {
    var elements = event.elements,
      current = self._current;
    if (!current) {
      return;
    }
    var currentTarget = current.target;
    var currentChanged = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentTarget) ? currentTarget : [currentTarget], function (element) {
      return includes(elements, element);
    });

    // re-open if elements in current selection changed
    if (currentChanged) {
      self.open(currentTarget, true);
    }
  });
};

/**
 * @overlord
 *
 * Register a context pad provider with the default priority. See
 * {@link ContextPadProvider} for examples.
 *
 * @param {ContextPadProvider} provider
 */

/**
 * Register a context pad provider with the given priority. See
 * {@link ContextPadProvider} for examples.
 *
 * @param {number} priority
 * @param {ContextPadProvider} provider
 */
ContextPad.prototype.registerProvider = function (priority, provider) {
  if (!provider) {
    provider = priority;
    priority = DEFAULT_PRIORITY;
  }
  this._eventBus.on('contextPad.getProviders', priority, function (event) {
    event.providers.push(provider);
  });
};

/**
 * Get context pad entries for given elements.
 *
 * @param {ContextPadTarget} target
 *
 * @return {ContextPadEntries} list of entries
 */
ContextPad.prototype.getEntries = function (target) {
  var providers = this._getProviders();
  var provideFn = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'getMultiElementContextPadEntries' : 'getContextPadEntries';
  var entries = {};

  // loop through all providers and their entries.
  // group entries by id so that overriding an entry is possible
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(providers, function (provider) {
    if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(provider[provideFn])) {
      return;
    }
    var entriesOrUpdater = provider[provideFn](target);
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(entriesOrUpdater)) {
      entries = entriesOrUpdater(entries);
    } else {
      (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(entriesOrUpdater, function (entry, id) {
        entries[id] = entry;
      });
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
ContextPad.prototype.trigger = function (action, event, autoActivate) {
  var entry,
    originalEvent,
    button = event.delegateTarget || event.target;
  if (!button) {
    return event.preventDefault();
  }
  entry = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.attr)(button, 'data-action');
  originalEvent = event.originalEvent || event;
  return this.triggerEntry(entry, action, originalEvent, autoActivate);
};

/**
 * Trigger context pad entry.
 *
 * @param {string} entryId
 * @param {string} action
 * @param {Event} event
 * @param {boolean} [autoActivate=false]
 */
ContextPad.prototype.triggerEntry = function (entryId, action, event, autoActivate) {
  if (!this.isShown()) {
    return;
  }
  var target = this._current.target,
    entries = this._current.entries;
  var entry = entries[entryId];
  if (!entry) {
    return;
  }
  var handler = entry.action;
  if (this._eventBus.fire('contextPad.trigger', {
    entry,
    event
  }) === false) {
    return;
  }

  // simple action (via callback function)
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(handler)) {
    if (action === 'click') {
      return handler(event, target, autoActivate);
    }
  } else {
    if (handler[action]) {
      return handler[action](event, target, autoActivate);
    }
  }

  // silence other actions
  event.preventDefault();
};

/**
 * Open the context pad for given elements.
 *
 * @param {ContextPadTarget} target
 * @param {boolean} [force=false] - Force re-opening context pad.
 */
ContextPad.prototype.open = function (target, force) {
  if (!force && this.isOpen(target)) {
    return;
  }
  this.close();
  this._updateAndOpen(target);
};
ContextPad.prototype._getProviders = function () {
  var event = this._eventBus.createEvent({
    type: 'contextPad.getProviders',
    providers: []
  });
  this._eventBus.fire(event);
  return event.providers;
};

/**
 * @param {ContextPadTarget} target
 */
ContextPad.prototype._updateAndOpen = function (target) {
  var entries = this.getEntries(target),
    pad = this.getPad(target),
    html = pad.html,
    image;
  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(entries, function (entry, id) {
    var grouping = entry.group || 'default',
      control = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)(entry.html || '<div class="entry" draggable="true"></div>'),
      container;
    (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.attr)(control, 'data-action', id);
    container = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.query)('[data-group=' + (0,diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_2__.escapeCSS)(grouping) + ']', html);
    if (!container) {
      // add separator
      if ((0,min_dom__WEBPACK_IMPORTED_MODULE_1__.query)('.group', html)) {
        const separator = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)('<div class="separator"></div>');
        html.appendChild(separator);
      }
      container = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)('<div class="group"></div>');
      (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.attr)(container, 'data-group', grouping);
      html.appendChild(container);
    }
    container.appendChild(control);
    if (entry.className) {
      addClasses(control, entry.className);
    }
    if (entry.title) {
      (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.attr)(control, 'title', entry.title);
    }
    if (entry.imageUrl) {
      image = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)('<img>');
      (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.attr)(image, 'src', entry.imageUrl);
      image.style.width = '100%';
      image.style.height = '100%';
      control.appendChild(image);
    }
  });
  (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.classes)(html).add('open');
  this._current = {
    target: target,
    entries: entries,
    pad: pad
  };
  this._eventBus.fire('contextPad.open', {
    current: this._current
  });
};

/**
 * @param {ContextPadTarget} target
 *
 * @return {Overlay}
 */
ContextPad.prototype.getPad = function (target) {
  if (this.isOpen()) {
    return this._current.pad;
  }
  var self = this;
  var overlays = this._overlays;
  var html = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.domify)('<div class="djs-context-pad"></div>');
  var position = this._getPosition(target);
  var overlaysConfig = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({
    html: html
  }, this._overlaysConfig, position);
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, entrySelector, 'click', function (event) {
    self.trigger('click', event);
  });
  min_dom__WEBPACK_IMPORTED_MODULE_1__.delegate.bind(html, entrySelector, 'dragstart', function (event) {
    self.trigger('dragstart', event);
  });

  // stop propagation of mouse events
  min_dom__WEBPACK_IMPORTED_MODULE_1__.event.bind(html, 'mousedown', function (event) {
    event.stopPropagation();
  });
  var activeRootElement = this._canvas.getRootElement();
  this._overlayId = overlays.add(activeRootElement, 'context-pad', overlaysConfig);
  var pad = overlays.get(this._overlayId);
  this._eventBus.fire('contextPad.create', {
    target: target,
    pad: pad
  });
  return pad;
};

/**
 * Close the context pad
 */
ContextPad.prototype.close = function () {
  if (!this.isOpen()) {
    return;
  }
  this._overlays.remove(this._overlayId);
  this._overlayId = null;
  this._eventBus.fire('contextPad.close', {
    current: this._current
  });
  this._current = null;
};

/**
 * Check if pad is open.
 *
 * If target is provided, check if it is opened
 * for the given target (single or multiple elements).
 *
 * @param {ContextPadTarget} [target]
 * @return {boolean}
 */
ContextPad.prototype.isOpen = function (target) {
  var current = this._current;
  if (!current) {
    return false;
  }

  // basic no-args is open check
  if (!target) {
    return true;
  }
  var currentTarget = current.target;

  // strict handling of single vs. multi-selection
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) !== (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(currentTarget)) {
    return false;
  }
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    return target.length === currentTarget.length && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.every)(target, function (element) {
      return includes(currentTarget, element);
    });
  } else {
    return currentTarget === target;
  }
};

/**
 * Check if pad is open and not hidden.
 *
 * @return {boolean}
 */
ContextPad.prototype.isShown = function () {
  return this.isOpen() && this._overlays.isShown();
};

/**
 * Get contex pad position.
 *
 * @param {ContextPadTarget} target
 *
 * @return {Rect}
 */
ContextPad.prototype._getPosition = function (target) {
  var elements = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? target : [target];
  var bBox = (0,diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_3__.getBBox)(elements);

  // TODO async repositioning after this._current.html is rendered

  return {
    position: {
      left: bBox.x + bBox.width / 2,
      top: bBox.y - 10
    }
  };
};

// helpers //////////

function addClasses(element, classNames) {
  var classes = (0,min_dom__WEBPACK_IMPORTED_MODULE_1__.classes)(element);
  classNames = (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(classNames) ? classNames : classNames.split(/\s+/g);
  classNames.forEach(function (cls) {
    classes.add(cls);
  });
}

/**
 * @param {any[]} array
 * @param {any} item
 *
 * @return {boolean}
 */
function includes(array, item) {
  return array.indexOf(item) !== -1;
}

/***/ }),

/***/ "./src/features/ContextPadProvider.js":
/*!********************************************!*\
  !*** ./src/features/ContextPadProvider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContextPadProvider)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/features/modeling/util/ModelingUtil */ "../bpmn-io/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmn-js/lib/util/DiUtil */ "../bpmn-io/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var bpmn_js_lib_features_modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmn-js/lib/features/modeling/util/LaneUtil */ "../bpmn-io/bpmn-js/lib/features/modeling/util/LaneUtil.js");
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/util/Mouse */ "./node_modules/diagram-js/lib/util/Mouse.js");







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
function ContextPadProvider(config, injector, eventBus, contextPad, modeling, elementFactory, connect, create, popupMenu, canvas, rules, translate) {
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
  eventBus.on('create.end', 250, function (event) {
    var context = event.context,
      shape = context.shape;
    if (!(0,diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_0__.hasPrimaryModifier)(event) || !contextPad.isOpen(shape)) {
      return;
    }
    var entries = contextPad.getEntries(shape);
    if (entries.replace) {
      entries.replace.action.click(event, shape);
    }
  });
}
ContextPadProvider.$inject = ['config.contextPad', 'injector', 'eventBus', 'contextPad', 'modeling', 'elementFactory', 'connect', 'create', 'popupMenu', 'canvas', 'rules', 'translate'];

/**
 * @param {Element[]} elements
 *
 * @return {ContextPadEntries}
 */
ContextPadProvider.prototype.getMultiElementContextPadEntries = function (elements) {
  var modeling = this._modeling;
  var actions = {};
  if (this._isDeleteAllowed(elements)) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
      'delete': {
        group: 'edit',
        className: 'bpmn-icon-trash',
        title: this._translate('Remove'),
        action: {
          click: function (event, elements) {
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
ContextPadProvider.prototype._isDeleteAllowed = function (elements) {
  var baseAllowed = this._rules.allowed('elements.delete', {
    elements: elements
  });
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_1__.isArray)(baseAllowed)) {
    return (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.every)(baseAllowed, function (element) {
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
ContextPadProvider.prototype.getContextPadEntries = function (element) {
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
    modeling.removeElements([element]);
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
      title = translate('Append {type}', {
        type: type.replace(/^bpmn:/, '')
      });
    }
    function appendStart(event, element) {
      var shape = elementFactory.createShape((0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)({
        type: type
      }, options));
      create.start(event, shape, {
        source: element
      });
    }
    var append = autoPlace ? function (event, element) {
      var shape = elementFactory.createShape((0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)({
        type: type
      }, options));
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
    return function (_, element) {
      // actual split
      modeling.splitLane(element, count);

      // refresh context pad after split to
      // get rid of split icons
      contextPad.open(element, true);
    };
  }
  if (!popupMenu.isEmpty(element, 'bpmn-replace')) {
    // Replace menu entry
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
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
          click: function (event, element) {
            var position = (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(getReplaceMenuPosition(element), {
              cursor: {
                x: event.x,
                y: event.y
              }
            });
            popupMenu.open(element, 'bpmn-replace', position, {
              title: translate('Foobar'),
              width: 300,
              search: true
            });
          }
        }
      }
    });
  }
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.isAny)(businessObject, ['bpmn:Lane', 'bpmn:Participant']) && (0,bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__.isExpanded)(element)) {
    var childLanes = (0,bpmn_js_lib_features_modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_4__.getChildLanes)(element);
    if (childLanes.length < 2) {
      if (element.height >= 120) {
        (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
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
        (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
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
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
      'lane-insert-below': {
        group: 'lane-insert-below',
        className: 'bpmn-icon-lane-insert-below',
        title: translate('Add Lane below'),
        action: {
          click: function (event, element) {
            modeling.addLane(element, 'bottom');
          }
        }
      }
    });
  }
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.is)(businessObject, 'bpmn:FlowNode')) {
    if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.is)(businessObject, 'bpmn:EventBasedGateway')) {
      (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
        'append.receive-task': appendAction('bpmn:ReceiveTask', 'bpmn-icon-receive-task', translate('Append ReceiveTask')),
        'append.message-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-message', translate('Append MessageIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:MessageEventDefinition'
        }),
        'append.timer-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-timer', translate('Append TimerIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:TimerEventDefinition'
        }),
        'append.condition-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-condition', translate('Append ConditionIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:ConditionalEventDefinition'
        }),
        'append.signal-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-signal', translate('Append SignalIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:SignalEventDefinition'
        })
      });
    } else if (isEventType(businessObject, 'bpmn:BoundaryEvent', 'bpmn:CompensateEventDefinition')) {
      (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
        'append.compensation-activity': appendAction('bpmn:Task', 'bpmn-icon-task', translate('Append compensation activity'), {
          isForCompensation: true
        })
      });
    } else if (!(0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.is)(businessObject, 'bpmn:EndEvent') && !businessObject.isForCompensation && !isEventType(businessObject, 'bpmn:IntermediateThrowEvent', 'bpmn:LinkEventDefinition') && !(0,bpmn_js_lib_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__.isEventSubProcess)(businessObject)) {
      (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
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
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.is)(businessObject, 'bpmn:SequenceFlow')) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
      'append.text-annotation': appendAction('bpmn:TextAnnotation', 'bpmn-icon-text-annotation', translate('Append TextAnnotation'))
    });
  }
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.isAny)(businessObject, ['bpmn:FlowNode', 'bpmn:InteractionNode', 'bpmn:DataObjectReference', 'bpmn:DataStoreReference'])) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
      'append.text-annotation': appendAction('bpmn:TextAnnotation', 'bpmn-icon-text-annotation', translate('Append TextAnnotation')),
      'connect': {
        group: 'connect',
        html: `<div class="entry">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" transform="translate(0.948242)" fill="transparent" style="mix-blend-mode:multiply"/>
            <path d="M8.44824 4.5V6H17.8907L5.44824 18.4425L6.50574 19.5L18.9482 7.0575V16.5H20.4482V4.5H8.44824Z" fill="currentColor"/>
          </svg>
        </div>`,
        title: translate('Connect using ' + (businessObject.isForCompensation ? '' : 'Sequence/MessageFlow or ') + 'Association'),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    });
  }
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.is)(businessObject, 'bpmn:TextAnnotation')) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
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
          dragstart: startConnect
        }
      }
    });
  }
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.isAny)(businessObject, ['bpmn:DataObjectReference', 'bpmn:DataStoreReference'])) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
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
  if ((0,bpmn_js_lib_features_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__.is)(businessObject, 'bpmn:Group')) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
      'append.text-annotation': appendAction('bpmn:TextAnnotation', 'bpmn-icon-text-annotation', translate('Append TextAnnotation'))
    });
  }

  // delete element entry, only show if allowed by rules
  var deleteAllowed = rules.allowed('elements.delete', {
    elements: [element]
  });
  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_1__.isArray)(deleteAllowed)) {
    // was the element returned as a deletion candidate?
    deleteAllowed = deleteAllowed[0] === element;
  }
  if (deleteAllowed) {
    (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.assign)(actions, {
      'delete': {
        group: 'delete',
        html: `<div class="entry">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
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
  (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.forEach)(definitions, function (def) {
    if (def.$type === eventDefinitionType) {
      isDefinition = true;
    }
  });
  return isType && isDefinition;
}
function includes(array, item) {
  return array.indexOf(item) !== -1;
}

/***/ }),

/***/ "./src/features/CustomAppendMenuProvider.js":
/*!**************************************************!*\
  !*** ./src/features/CustomAppendMenuProvider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomAppendMenuProvider)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _util_CreateOptionsUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/CreateOptionsUtil */ "./src/features/util/CreateOptionsUtil.js");



/**
 * This module is an append menu provider for the popup menu.
 */
function CustomAppendMenuProvider(elementFactory, popupMenu, create, autoPlace, rules, mouse, translate) {
  this._elementFactory = elementFactory;
  this._popupMenu = popupMenu;
  this._create = create;
  this._autoPlace = autoPlace;
  this._rules = rules;
  this._create = create;
  this._mouse = mouse;
  this._translate = translate;
  this.register();
}
CustomAppendMenuProvider.$inject = ['elementFactory', 'popupMenu', 'create', 'autoPlace', 'rules', 'mouse', 'translate'];

/**
 * Register append menu provider in the popup menu
 */
CustomAppendMenuProvider.prototype.register = function () {
  this._popupMenu.registerProvider('bpmn-append', this);
};

/**
 * Gets the append options for the given element as menu entries
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu entry items
 */
CustomAppendMenuProvider.prototype.getPopupMenuEntries = function (element) {
  const rules = this._rules;
  const translate = this._translate;
  const entries = {};
  if (!rules.allowed('shape.append', {
    element: element
  })) {
    return [];
  }

  // filter out elements with no incoming connections
  const appendOptions = this._filterEntries(_util_CreateOptionsUtil__WEBPACK_IMPORTED_MODULE_0__.CREATE_OPTIONS);

  // map options to menu entries
  appendOptions.forEach(option => {
    const {
      actionName,
      className,
      label,
      target,
      description,
      group,
      search,
      rank
    } = option;
    entries[`append-${actionName}`] = {
      label: label && translate(label),
      className,
      description,
      group: group && {
        ...group,
        name: translate(group.name)
      },
      search,
      rank,
      action: this._createEntryAction(element, target)
    };
  });
  return entries;
};

/**
 * Filter out entries from the options.
 *
 * @param {Array<Object>} entries
 *
 * @return {Array<Object>} filtered entries
 */
CustomAppendMenuProvider.prototype._filterEntries = function (entries) {
  return entries.filter(option => {
    const target = option.target;
    const {
      type,
      eventDefinitionType
    } = target;
    if (['bpmn:StartEvent', 'bpmn:Participant'].includes(type)) {
      return false;
    }
    if (type === 'bpmn:BoundaryEvent' && (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(eventDefinitionType)) {
      return false;
    }
    return true;
  });
};

/**
 * Create an action for a given target.
 *
 * @param {djs.model.Base} element
 * @param {Object} target
 *
 * @return {Object}
 */
CustomAppendMenuProvider.prototype._createEntryAction = function (element, target) {
  const elementFactory = this._elementFactory;
  const autoPlace = this._autoPlace;
  const create = this._create;
  const mouse = this._mouse;
  const autoPlaceElement = () => {
    const newElement = elementFactory.create('shape', target);
    autoPlace.append(element, newElement);
  };
  const manualPlaceElement = event => {
    const newElement = elementFactory.create('shape', target);
    if (event instanceof KeyboardEvent) {
      event = mouse.getLastMoveEvent();
    }
    return create.start(event, newElement, {
      source: element
    });
  };
  return {
    click: this._canAutoPlaceElement(target) ? autoPlaceElement : manualPlaceElement,
    dragstart: manualPlaceElement
  };
};

/**
 * Check if the element should be auto placed.
 *
 * @param {Object} target
 *
 * @return {Boolean}
 */
CustomAppendMenuProvider.prototype._canAutoPlaceElement = target => {
  const {
    type
  } = target;
  if (type === 'bpmn:BoundaryEvent') {
    return false;
  }
  if (type === 'bpmn:SubProcess' && target.triggeredByEvent) {
    return false;
  }
  if (type === 'bpmn:IntermediateCatchEvent' && target.eventDefinitionType === 'bpmn:LinkEventDefinition') {
    return false;
  }
  return true;
};

/***/ }),

/***/ "./src/features/util/CreateOptionsUtil.js":
/*!************************************************!*\
  !*** ./src/features/util/CreateOptionsUtil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMON: () => (/* binding */ COMMON),
/* harmony export */   COMMON_GROUP: () => (/* binding */ COMMON_GROUP),
/* harmony export */   CREATE_OPTIONS: () => (/* binding */ CREATE_OPTIONS),
/* harmony export */   DATA_GROUP: () => (/* binding */ DATA_GROUP),
/* harmony export */   DATA_OBJECTS: () => (/* binding */ DATA_OBJECTS),
/* harmony export */   EVENT_GROUP: () => (/* binding */ EVENT_GROUP),
/* harmony export */   GATEWAY: () => (/* binding */ GATEWAY),
/* harmony export */   GATEWAY_GROUP: () => (/* binding */ GATEWAY_GROUP),
/* harmony export */   NONE_EVENTS: () => (/* binding */ NONE_EVENTS),
/* harmony export */   PARTICIPANT: () => (/* binding */ PARTICIPANT),
/* harmony export */   PARTICIPANT_GROUP: () => (/* binding */ PARTICIPANT_GROUP),
/* harmony export */   SUBPROCESS: () => (/* binding */ SUBPROCESS),
/* harmony export */   SUBPROCESS_GROUP: () => (/* binding */ SUBPROCESS_GROUP),
/* harmony export */   TASK: () => (/* binding */ TASK),
/* harmony export */   TASK_GROUP: () => (/* binding */ TASK_GROUP),
/* harmony export */   TYPED_BOUNDARY_EVENT: () => (/* binding */ TYPED_BOUNDARY_EVENT),
/* harmony export */   TYPED_END_EVENT: () => (/* binding */ TYPED_END_EVENT),
/* harmony export */   TYPED_INTERMEDIATE_EVENT: () => (/* binding */ TYPED_INTERMEDIATE_EVENT),
/* harmony export */   TYPED_START_EVENTS: () => (/* binding */ TYPED_START_EVENTS)
/* harmony export */ });
const COMMON_GROUP = {
  id: 'common',
  name: 'Common'
};
const EVENT_GROUP = {
  id: 'events',
  name: 'Events'
};
const TASK_GROUP = {
  id: 'tasks',
  name: 'Tasks'
};
const DATA_GROUP = {
  id: 'data',
  name: 'Data'
};
const PARTICIPANT_GROUP = {
  id: 'participants',
  name: 'Participants'
};
const SUBPROCESS_GROUP = {
  id: 'subprocess',
  name: 'Sub Processes'
};
const GATEWAY_GROUP = {
  id: 'gateways',
  name: 'Gateways'
};
const COMMON = [{
  label: 'Task',
  actionName: 'common-task',
  className: 'bpmn-icon-task',
  target: {
    type: 'bpmn:Task'
  }
}, {
  label: 'Exclusive Gateway',
  actionName: 'common-exclusive-gateway',
  className: 'bpmn-icon-gateway-xor',
  target: {
    type: 'bpmn:ExclusiveGateway'
  }
}, {
  label: 'End Event',
  actionName: 'common-none-end-event',
  className: 'bpmn-icon-end-event-none',
  target: {
    type: 'bpmn:EndEvent'
  }
}].map(option => ({
  ...option,
  group: COMMON_GROUP
}));
const NONE_EVENTS = [{
  label: 'Start Event',
  actionName: 'none-start-event',
  className: 'bpmn-icon-start-event-none',
  target: {
    type: 'bpmn:StartEvent'
  }
}, {
  label: 'Intermediate Throw Event',
  actionName: 'none-intermediate-throwing',
  className: 'bpmn-icon-intermediate-event-none',
  target: {
    type: 'bpmn:IntermediateThrowEvent'
  }
}, {
  label: 'Boundary Event',
  actionName: 'none-boundary-event',
  className: 'bpmn-icon-intermediate-event-none',
  target: {
    type: 'bpmn:BoundaryEvent'
  }
}, {
  label: 'End Event',
  actionName: 'none-end-event',
  className: 'bpmn-icon-end-event-none',
  target: {
    type: 'bpmn:EndEvent'
  }
}].map(option => ({
  ...option,
  group: EVENT_GROUP
}));
const TYPED_START_EVENTS = [{
  label: 'Message Start Event',
  actionName: 'message-start',
  className: 'bpmn-icon-start-event-message',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Start Event',
  actionName: 'timer-start',
  className: 'bpmn-icon-start-event-timer',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Conditional Start Event',
  actionName: 'conditional-start',
  className: 'bpmn-icon-start-event-condition',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Signal Start Event',
  actionName: 'signal-start',
  className: 'bpmn-icon-start-event-signal',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}].map(option => ({
  ...option,
  group: EVENT_GROUP
}));
const TYPED_INTERMEDIATE_EVENT = [{
  label: 'Message Intermediate Catch Event',
  actionName: 'message-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-message',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Message Intermediate Throw Event',
  actionName: 'message-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-message',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Intermediate Catch Event',
  actionName: 'timer-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-timer',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Escalation Intermediate Throw Event',
  actionName: 'escalation-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-escalation',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Conditional Intermediate Catch Event',
  actionName: 'conditional-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-condition',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Link Intermediate Catch Event',
  actionName: 'link-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-link',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:LinkEventDefinition',
    eventDefinitionAttrs: {
      name: ''
    }
  }
}, {
  label: 'Link Intermediate Throw Event',
  actionName: 'link-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-link',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:LinkEventDefinition',
    eventDefinitionAttrs: {
      name: ''
    }
  }
}, {
  label: 'Compensation Intermediate Throw Event',
  actionName: 'compensation-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-compensation',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Signal Intermediate Catch Event',
  actionName: 'signal-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-signal',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Signal Intermediate Throw Event',
  actionName: 'signal-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-signal',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}].map(option => ({
  ...option,
  group: EVENT_GROUP
}));
const TYPED_BOUNDARY_EVENT = [{
  label: 'Message Boundary Event',
  actionName: 'message-boundary',
  className: 'bpmn-icon-intermediate-event-catch-message',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Boundary Event',
  actionName: 'timer-boundary',
  className: 'bpmn-icon-intermediate-event-catch-timer',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Escalation Boundary Event',
  actionName: 'escalation-boundary',
  className: 'bpmn-icon-intermediate-event-catch-escalation',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Conditional Boundary Event',
  actionName: 'conditional-boundary',
  className: 'bpmn-icon-intermediate-event-catch-condition',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Error Boundary Event',
  actionName: 'error-boundary',
  className: 'bpmn-icon-intermediate-event-catch-error',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:ErrorEventDefinition'
  }
}, {
  label: 'Cancel Boundary Event',
  actionName: 'cancel-boundary',
  className: 'bpmn-icon-intermediate-event-catch-cancel',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:CancelEventDefinition'
  }
}, {
  label: 'Signal Boundary Event',
  actionName: 'signal-boundary',
  className: 'bpmn-icon-intermediate-event-catch-signal',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Compensation Boundary Event',
  actionName: 'compensation-boundary',
  className: 'bpmn-icon-intermediate-event-catch-compensation',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Message Boundary Event (non-interrupting)',
  actionName: 'non-interrupting-message-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-message',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Timer Boundary Event (non-interrupting)',
  actionName: 'non-interrupting-timer-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-timer',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Escalation Boundary Event (non-interrupting)',
  actionName: 'non-interrupting-escalation-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-escalation',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Conditional Boundary Event (non-interrupting)',
  actionName: 'non-interrupting-conditional-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-condition',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Signal Boundary Event (non-interrupting)',
  actionName: 'non-interrupting-signal-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-signal',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition',
    cancelActivity: false
  }
}].map(option => ({
  ...option,
  group: EVENT_GROUP
}));
const TYPED_END_EVENT = [{
  label: 'Message End Event',
  actionName: 'message-end',
  className: 'bpmn-icon-end-event-message',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Escalation End Event',
  actionName: 'escalation-end',
  className: 'bpmn-icon-end-event-escalation',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Error End Event',
  actionName: 'error-end',
  className: 'bpmn-icon-end-event-error',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:ErrorEventDefinition'
  }
}, {
  label: 'Cancel End Event',
  actionName: 'cancel-end',
  className: 'bpmn-icon-end-event-cancel',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:CancelEventDefinition'
  }
}, {
  label: 'Compensation End Event',
  actionName: 'compensation-end',
  className: 'bpmn-icon-end-event-compensation',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Signal End Event',
  actionName: 'signal-end',
  className: 'bpmn-icon-end-event-signal',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Terminate End Event',
  actionName: 'terminate-end',
  className: 'bpmn-icon-end-event-terminate',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:TerminateEventDefinition'
  }
}].map(option => ({
  ...option,
  group: EVENT_GROUP
}));
const GATEWAY = [{
  label: 'Exclusive Gateway',
  actionName: 'exclusive-gateway',
  className: 'bpmn-icon-gateway-xor',
  target: {
    type: 'bpmn:ExclusiveGateway'
  }
}, {
  label: 'Parallel Gateway',
  actionName: 'parallel-gateway',
  className: 'bpmn-icon-gateway-parallel',
  target: {
    type: 'bpmn:ParallelGateway'
  }
}, {
  label: 'Inclusive Gateway',
  search: 'or',
  actionName: 'inclusive-gateway',
  className: 'bpmn-icon-gateway-or',
  target: {
    type: 'bpmn:InclusiveGateway'
  },
  rank: -1
}, {
  label: 'Complex Gateway',
  actionName: 'complex-gateway',
  className: 'bpmn-icon-gateway-complex',
  target: {
    type: 'bpmn:ComplexGateway'
  },
  rank: -1
}, {
  label: 'Event based Gateway',
  actionName: 'event-based-gateway',
  className: 'bpmn-icon-gateway-eventbased',
  target: {
    type: 'bpmn:EventBasedGateway',
    instantiate: false,
    eventGatewayType: 'Exclusive'
  }
}].map(option => ({
  ...option,
  group: GATEWAY_GROUP
}));
const SUBPROCESS = [{
  label: 'Transaction',
  actionName: 'transaction',
  className: 'bpmn-icon-transaction',
  target: {
    type: 'bpmn:Transaction',
    isExpanded: true
  }
}, {
  label: 'Event Sub Process',
  search: 'subprocess',
  actionName: 'event-subprocess',
  className: 'bpmn-icon-event-subprocess-expanded',
  target: {
    type: 'bpmn:SubProcess',
    triggeredByEvent: true,
    isExpanded: true
  }
}, {
  label: 'Sub Process (collapsed)',
  search: 'subprocess',
  actionName: 'collapsed-subprocess',
  className: 'bpmn-icon-subprocess-collapsed',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: false
  }
}, {
  label: 'Sub Process (expanded)',
  search: 'subprocess',
  actionName: 'expanded-subprocess',
  className: 'bpmn-icon-subprocess-collapsed',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: true
  }
}].map(option => ({
  ...option,
  group: SUBPROCESS_GROUP
}));
const TASK = [{
  label: 'Task',
  actionName: 'task',
  className: 'bpmn-icon-task',
  target: {
    type: 'bpmn:Task'
  }
}, {
  label: 'User Task',
  actionName: 'user-task',
  className: 'bpmn-icon-user',
  target: {
    type: 'bpmn:UserTask'
  }
}, {
  label: 'Service Task',
  actionName: 'service-task',
  className: 'bpmn-icon-service',
  target: {
    type: 'bpmn:ServiceTask'
  }
}, {
  label: 'Send Task',
  actionName: 'send-task',
  className: 'bpmn-icon-send',
  target: {
    type: 'bpmn:SendTask'
  },
  rank: -1
}, {
  label: 'Receive Task',
  actionName: 'receive-task',
  className: 'bpmn-icon-receive',
  target: {
    type: 'bpmn:ReceiveTask'
  },
  rank: -1
}, {
  label: 'Manual Task',
  actionName: 'manual-task',
  className: 'bpmn-icon-manual',
  target: {
    type: 'bpmn:ManualTask'
  },
  rank: -1
}, {
  label: 'Business Rule Task',
  actionName: 'rule-task',
  className: 'bpmn-icon-business-rule',
  target: {
    type: 'bpmn:BusinessRuleTask'
  }
}, {
  label: 'Script Task',
  actionName: 'script-task',
  className: 'bpmn-icon-script',
  target: {
    type: 'bpmn:ScriptTask'
  }
}, {
  label: 'Call Activity',
  actionName: 'call-activity',
  className: 'bpmn-icon-call-activity',
  target: {
    type: 'bpmn:CallActivity'
  }
}].map(option => ({
  ...option,
  group: TASK_GROUP
}));
const DATA_OBJECTS = [{
  label: 'Data Store Reference',
  actionName: 'data-store-reference',
  className: 'bpmn-icon-data-store',
  target: {
    type: 'bpmn:DataStoreReference'
  }
}, {
  label: 'Data Object Reference',
  actionName: 'data-object-reference',
  className: 'bpmn-icon-data-object',
  target: {
    type: 'bpmn:DataObjectReference'
  }
}].map(option => ({
  ...option,
  group: DATA_GROUP
}));
const PARTICIPANT = [{
  label: 'Expanded Pool',
  search: 'Participant',
  actionName: 'expanded-pool',
  className: 'bpmn-icon-participant',
  target: {
    type: 'bpmn:Participant',
    isExpanded: true
  }
}, {
  label: 'Empty Pool',
  search: 'Collapsed Participant',
  actionName: 'collapsed-pool',
  className: 'bpmn-icon-lane',
  target: {
    type: 'bpmn:Participant',
    isExpanded: false
  }
}].map(option => ({
  ...option,
  group: PARTICIPANT_GROUP
}));
const CREATE_OPTIONS = [...COMMON, ...GATEWAY, ...TASK, ...SUBPROCESS, ...NONE_EVENTS, ...TYPED_START_EVENTS, ...TYPED_INTERMEDIATE_EVENT, ...TYPED_END_EVENT, ...TYPED_BOUNDARY_EVENT, ...DATA_OBJECTS, ...PARTICIPANT];

/***/ }),

/***/ "./node_modules/bpmn-js-create-append-anything/dist/index.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmn-js-create-append-anything/dist/index.es.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateAppendAnythingModule: () => (/* binding */ index$1),
/* harmony export */   CreateAppendElementTemplatesModule: () => (/* binding */ index),
/* harmony export */   RemoveTemplatesModule: () => (/* binding */ RemoveTemplatesModule)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][]} arr
 *
 * @return {T[]}
 */

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

const EVENT_GROUP = {
  id: 'events',
  name: 'Events'
};

const TASK_GROUP = {
  id: 'tasks',
  name: 'Tasks'
};

const DATA_GROUP = {
  id: 'data',
  name: 'Data'
};

const PARTICIPANT_GROUP = {
  id: 'participants',
  name: 'Participants'
};

const SUBPROCESS_GROUP = {
  id: 'subprocess',
  name: 'Sub Processes'
};

const GATEWAY_GROUP = {
  id: 'gateways',
  name: 'Gateways'
};

const NONE_EVENTS = [
  {
    label: 'Start Event',
    actionName: 'none-start-event',
    className: 'bpmn-icon-start-event-none',
    target: {
      type: 'bpmn:StartEvent'
    }
  },
  {
    label: 'Intermediate Throw Event',
    actionName: 'none-intermediate-throwing',
    className: 'bpmn-icon-intermediate-event-none',
    target: {
      type: 'bpmn:IntermediateThrowEvent'
    }
  },
  {
    label: 'Boundary Event',
    actionName: 'none-boundary-event',
    className: 'bpmn-icon-intermediate-event-none',
    target: {
      type: 'bpmn:BoundaryEvent'
    }
  },
  {
    label: 'End Event',
    actionName: 'none-end-event',
    className: 'bpmn-icon-end-event-none',
    target: {
      type: 'bpmn:EndEvent'
    }
  }
].map(option => ({ ...option, group: EVENT_GROUP }));

const TYPED_START_EVENTS = [
  {
    label: 'Message Start Event',
    actionName: 'message-start',
    className: 'bpmn-icon-start-event-message',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Start Event',
    actionName: 'timer-start',
    className: 'bpmn-icon-start-event-timer',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Conditional Start Event',
    actionName: 'conditional-start',
    className: 'bpmn-icon-start-event-condition',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Signal Start Event',
    actionName: 'signal-start',
    className: 'bpmn-icon-start-event-signal',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  }
].map(option => ({ ...option, group: EVENT_GROUP }));

const TYPED_INTERMEDIATE_EVENT = [
  {
    label: 'Message Intermediate Catch Event',
    actionName: 'message-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-message',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Message Intermediate Throw Event',
    actionName: 'message-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-message',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Intermediate Catch Event',
    actionName: 'timer-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-timer',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Escalation Intermediate Throw Event',
    actionName: 'escalation-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-escalation',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Conditional Intermediate Catch Event',
    actionName: 'conditional-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-condition',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Link Intermediate Catch Event',
    actionName: 'link-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-link',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:LinkEventDefinition',
      eventDefinitionAttrs: {
        name: ''
      }
    }
  },
  {
    label: 'Link Intermediate Throw Event',
    actionName: 'link-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-link',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:LinkEventDefinition',
      eventDefinitionAttrs: {
        name: ''
      }
    }
  },
  {
    label: 'Compensation Intermediate Throw Event',
    actionName: 'compensation-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-compensation',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Signal Intermediate Catch Event',
    actionName: 'signal-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-signal',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Signal Intermediate Throw Event',
    actionName: 'signal-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-signal',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  }
].map(option => ({ ...option, group: EVENT_GROUP }));

const TYPED_BOUNDARY_EVENT = [
  {
    label: 'Message Boundary Event',
    actionName: 'message-boundary',
    className: 'bpmn-icon-intermediate-event-catch-message',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Boundary Event',
    actionName: 'timer-boundary',
    className: 'bpmn-icon-intermediate-event-catch-timer',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Escalation Boundary Event',
    actionName: 'escalation-boundary',
    className: 'bpmn-icon-intermediate-event-catch-escalation',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Conditional Boundary Event',
    actionName: 'conditional-boundary',
    className: 'bpmn-icon-intermediate-event-catch-condition',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Error Boundary Event',
    actionName: 'error-boundary',
    className: 'bpmn-icon-intermediate-event-catch-error',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:ErrorEventDefinition'
    }
  },
  {
    label: 'Cancel Boundary Event',
    actionName: 'cancel-boundary',
    className: 'bpmn-icon-intermediate-event-catch-cancel',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:CancelEventDefinition'
    }
  },
  {
    label: 'Signal Boundary Event',
    actionName: 'signal-boundary',
    className: 'bpmn-icon-intermediate-event-catch-signal',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Compensation Boundary Event',
    actionName: 'compensation-boundary',
    className: 'bpmn-icon-intermediate-event-catch-compensation',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Message Boundary Event (non-interrupting)',
    actionName: 'non-interrupting-message-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-message',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Timer Boundary Event (non-interrupting)',
    actionName: 'non-interrupting-timer-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-timer',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Escalation Boundary Event (non-interrupting)',
    actionName: 'non-interrupting-escalation-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-escalation',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Conditional Boundary Event (non-interrupting)',
    actionName: 'non-interrupting-conditional-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-condition',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Signal Boundary Event (non-interrupting)',
    actionName: 'non-interrupting-signal-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-signal',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition',
      cancelActivity: false
    }
  }
].map(option => ({ ...option, group: EVENT_GROUP }));

const TYPED_END_EVENT = [
  {
    label: 'Message End Event',
    actionName: 'message-end',
    className: 'bpmn-icon-end-event-message',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Escalation End Event',
    actionName: 'escalation-end',
    className: 'bpmn-icon-end-event-escalation',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Error End Event',
    actionName: 'error-end',
    className: 'bpmn-icon-end-event-error',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:ErrorEventDefinition'
    }
  },
  {
    label: 'Cancel End Event',
    actionName: 'cancel-end',
    className: 'bpmn-icon-end-event-cancel',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:CancelEventDefinition'
    }
  },
  {
    label: 'Compensation End Event',
    actionName: 'compensation-end',
    className: 'bpmn-icon-end-event-compensation',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Signal End Event',
    actionName: 'signal-end',
    className: 'bpmn-icon-end-event-signal',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Terminate End Event',
    actionName: 'terminate-end',
    className: 'bpmn-icon-end-event-terminate',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:TerminateEventDefinition'
    }
  }
].map(option => ({ ...option, group: EVENT_GROUP }));

const GATEWAY$1 = [
  {
    label: 'Exclusive Gateway',
    actionName: 'exclusive-gateway',
    className: 'bpmn-icon-gateway-xor',
    target: {
      type: 'bpmn:ExclusiveGateway'
    }
  },
  {
    label: 'Parallel Gateway',
    actionName: 'parallel-gateway',
    className: 'bpmn-icon-gateway-parallel',
    target: {
      type: 'bpmn:ParallelGateway'
    }
  },
  {
    label: 'Inclusive Gateway',
    search: 'or',
    actionName: 'inclusive-gateway',
    className: 'bpmn-icon-gateway-or',
    target: {
      type: 'bpmn:InclusiveGateway'
    },
    rank: -1
  },
  {
    label: 'Complex Gateway',
    actionName: 'complex-gateway',
    className: 'bpmn-icon-gateway-complex',
    target: {
      type: 'bpmn:ComplexGateway'
    },
    rank: -1
  },
  {
    label: 'Event based Gateway',
    actionName: 'event-based-gateway',
    className: 'bpmn-icon-gateway-eventbased',
    target: {
      type: 'bpmn:EventBasedGateway',
      instantiate: false,
      eventGatewayType: 'Exclusive'
    }
  }
].map(option => ({ ...option, group: GATEWAY_GROUP }));

const SUBPROCESS = [
  {
    label: 'Transaction',
    actionName: 'transaction',
    className: 'bpmn-icon-transaction',
    target: {
      type: 'bpmn:Transaction',
      isExpanded: true
    }
  },
  {
    label: 'Event Sub Process',
    search: 'subprocess',
    actionName: 'event-subprocess',
    className: 'bpmn-icon-event-subprocess-expanded',
    target: {
      type: 'bpmn:SubProcess',
      triggeredByEvent: true,
      isExpanded: true
    }
  },
  {
    label: 'Sub Process (collapsed)',
    search: 'subprocess',
    actionName: 'collapsed-subprocess',
    className: 'bpmn-icon-subprocess-collapsed',
    target: {
      type: 'bpmn:SubProcess',
      isExpanded: false
    }
  },
  {
    label: 'Sub Process (expanded)',
    search: 'subprocess',
    actionName: 'expanded-subprocess',
    className: 'bpmn-icon-subprocess-collapsed',
    target: {
      type: 'bpmn:SubProcess',
      isExpanded: true
    }
  }
].map(option => ({ ...option, group: SUBPROCESS_GROUP }));

const TASK$1 = [
  {
    label: 'Task',
    actionName: 'task',
    className: 'bpmn-icon-task',
    target: {
      type: 'bpmn:Task'
    }
  },
  {
    label: 'User Task',
    actionName: 'user-task',
    className: 'bpmn-icon-user',
    target: {
      type: 'bpmn:UserTask'
    }
  },
  {
    label: 'Service Task',
    actionName: 'service-task',
    className: 'bpmn-icon-service',
    target: {
      type: 'bpmn:ServiceTask'
    }
  },
  {
    label: 'Send Task',
    actionName: 'send-task',
    className: 'bpmn-icon-send',
    target: {
      type: 'bpmn:SendTask'
    },
    rank: -1
  },
  {
    label: 'Receive Task',
    actionName: 'receive-task',
    className: 'bpmn-icon-receive',
    target: {
      type: 'bpmn:ReceiveTask'
    },
    rank: -1
  },
  {
    label: 'Manual Task',
    actionName: 'manual-task',
    className: 'bpmn-icon-manual',
    target: {
      type: 'bpmn:ManualTask'
    },
    rank: -1
  },
  {
    label: 'Business Rule Task',
    actionName: 'rule-task',
    className: 'bpmn-icon-business-rule',
    target: {
      type: 'bpmn:BusinessRuleTask'
    }
  },
  {
    label: 'Script Task',
    actionName: 'script-task',
    className: 'bpmn-icon-script',
    target: {
      type: 'bpmn:ScriptTask'
    }
  },
  {
    label: 'Call Activity',
    actionName: 'call-activity',
    className: 'bpmn-icon-call-activity',
    target: {
      type: 'bpmn:CallActivity'
    }
  }
].map(option => ({ ...option, group: TASK_GROUP }));

const DATA_OBJECTS = [
  {
    label: 'Data Store Reference',
    actionName: 'data-store-reference',
    className: 'bpmn-icon-data-store',
    target: {
      type: 'bpmn:DataStoreReference'
    }
  },
  {
    label: 'Data Object Reference',
    actionName: 'data-object-reference',
    className: 'bpmn-icon-data-object',
    target: {
      type: 'bpmn:DataObjectReference'
    }
  }
].map(option => ({ ...option, group: DATA_GROUP }));

const PARTICIPANT$1 = [
  {
    label: 'Expanded Pool',
    search: 'Participant',
    actionName: 'expanded-pool',
    className: 'bpmn-icon-participant',
    target: {
      type: 'bpmn:Participant',
      isExpanded: true
    }
  },
  {
    label: 'Empty Pool',
    search: 'Collapsed Participant',
    actionName: 'collapsed-pool',
    className: 'bpmn-icon-lane',
    target: {
      type: 'bpmn:Participant',
      isExpanded: false
    }
  }
].map(option => ({ ...option, group: PARTICIPANT_GROUP }));

const CREATE_OPTIONS = [
  ...GATEWAY$1,
  ...TASK$1,
  ...SUBPROCESS,
  ...NONE_EVENTS,
  ...TYPED_START_EVENTS,
  ...TYPED_INTERMEDIATE_EVENT,
  ...TYPED_END_EVENT,
  ...TYPED_BOUNDARY_EVENT,
  ...DATA_OBJECTS,
  ...PARTICIPANT$1
];

/**
 * This module is an append menu provider for the popup menu.
 */
function AppendMenuProvider(
    elementFactory, popupMenu,
    create, autoPlace, rules,
    mouse, translate
) {

  this._elementFactory = elementFactory;
  this._popupMenu = popupMenu;
  this._create = create;
  this._autoPlace = autoPlace;
  this._rules = rules;
  this._create = create;
  this._mouse = mouse;
  this._translate = translate;

  this.register();
}

AppendMenuProvider.$inject = [
  'elementFactory',
  'popupMenu',
  'create',
  'autoPlace',
  'rules',
  'mouse',
  'translate'
];

/**
 * Register append menu provider in the popup menu
 */
AppendMenuProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-append', this);
};

/**
 * Gets the append options for the given element as menu entries
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu entry items
 */
AppendMenuProvider.prototype.getPopupMenuEntries = function(element) {
  const rules = this._rules;
  const translate = this._translate;

  const entries = {};

  if (!rules.allowed('shape.append', { element: element })) {
    return [];
  }

  // filter out elements with no incoming connections
  const appendOptions = this._filterEntries(CREATE_OPTIONS);

  // map options to menu entries
  appendOptions.forEach(option => {
    const {
      actionName,
      className,
      label,
      target,
      description,
      group,
      search,
      rank
    } = option;

    entries[`append-${actionName}`] = {
      label: label && translate(label),
      className,
      description,
      group: group && {
        ...group,
        name: translate(group.name)
      },
      search,
      rank,
      action: this._createEntryAction(element, target)
    };
  });

  return entries;
};

/**
 * Filter out entries from the options.
 *
 * @param {Array<Object>} entries
 *
 * @return {Array<Object>} filtered entries
 */
AppendMenuProvider.prototype._filterEntries = function(entries) {
  return entries.filter(option => {

    const target = option.target;
    const {
      type,
      eventDefinitionType
    } = target;

    if ([
      'bpmn:StartEvent',
      'bpmn:Participant'
    ].includes(type)) {
      return false;
    }

    if (type === 'bpmn:BoundaryEvent' && isUndefined(eventDefinitionType)) {
      return false;
    }

    return true;
  });
};

/**
 * Create an action for a given target.
 *
 * @param {djs.model.Base} element
 * @param {Object} target
 *
 * @return {Object}
 */
AppendMenuProvider.prototype._createEntryAction = function(element, target) {
  const elementFactory = this._elementFactory;
  const autoPlace = this._autoPlace;
  const create = this._create;
  const mouse = this._mouse;


  const autoPlaceElement = () => {
    const newElement = elementFactory.create('shape', target);
    autoPlace.append(element, newElement);
  };

  const manualPlaceElement = (event) => {
    const newElement = elementFactory.create('shape', target);

    if (event instanceof KeyboardEvent) {
      event = mouse.getLastMoveEvent();
    }

    return create.start(event, newElement, {
      source: element
    });
  };

  return {
    click: this._canAutoPlaceElement(target) ? autoPlaceElement : manualPlaceElement,
    dragstart: manualPlaceElement
  };
};

/**
 * Check if the element should be auto placed.
 *
 * @param {Object} target
 *
 * @return {Boolean}
 */
AppendMenuProvider.prototype._canAutoPlaceElement = (target) => {
  const { type } = target;

  if (type === 'bpmn:BoundaryEvent') {
    return false;
  }

  if (type === 'bpmn:SubProcess' && target.triggeredByEvent) {
    return false;
  }

  if (type === 'bpmn:IntermediateCatchEvent' && target.eventDefinitionType === 'bpmn:LinkEventDefinition') {
    return false;
  }

  return true;
};

const appendIcon = `<svg width="22" height="22" viewBox="0 0 5.82 5.82" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M1.3 3.4c.3 0 .5-.2.5-.5s-.2-.4-.5-.4c-.2 0-.4.1-.4.4 0 .3.2.5.4.5zM3 3.4c.2 0 .4-.2.4-.5s-.2-.4-.4-.4c-.3 0-.5.1-.5.4 0 .3.2.5.5.5zM4.6 3.4c.2 0 .4-.2.4-.5s-.2-.4-.4-.4c-.3 0-.5.1-.5.4 0 .3.2.5.5.5z"/>
</svg>`;
const createIcon = `<svg width="46" height="46" viewBox="-2 -2 9.82 9.82" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M1.3 3.4c.3 0 .5-.2.5-.5s-.2-.4-.5-.4c-.2 0-.4.1-.4.4 0 .3.2.5.4.5zM3 3.4c.2 0 .4-.2.4-.5s-.2-.4-.4-.4c-.3 0-.5.1-.5.4 0 .3.2.5.5.5zM4.6 3.4c.2 0 .4-.2.4-.5s-.2-.4-.4-.4c-.3 0-.5.1-.5.4 0 .3.2.5.5.5z"/>
</svg>`;

/**
 * A provider for append context pad button
 */
function AppendContextPadProvider(contextPad, popupMenu, translate, canvas) {

  this._contextPad = contextPad;
  this._popupMenu = popupMenu;
  this._translate = translate;
  this._canvas = canvas;

  this.register();
}

AppendContextPadProvider.$inject = [
  'contextPad',
  'popupMenu',
  'translate',
  'canvas'
];

/**
 * Register append button provider in the context pad
 */
AppendContextPadProvider.prototype.register = function() {
  this._contextPad.registerProvider(this);
};

/**
 * Gets the append context pad entry
 *
 * @param {djs.model.Base} element
 * @returns {Object} entries
 */
AppendContextPadProvider.prototype.getContextPadEntries = function(element) {
  const popupMenu = this._popupMenu;
  const translate = this._translate;
  const getAppendMenuPosition = this._getAppendMenuPosition.bind(this);

  if (!popupMenu.isEmpty(element, 'bpmn-append')) {

    // append menu entry
    return {
      'append': {
        group: 'model',
        html: `<div class="entry">${appendIcon}</div>`,
        title: translate('Append element'),
        action: {
          click: function(event, element) {

            const position = assign(getAppendMenuPosition(element), {
              cursor: { x: event.x, y: event.y }
            });

            popupMenu.open(element, 'bpmn-append', position, {
              title: translate('Append element'),
              width: 300,
              search: true
            });
          }
        }
      }
    };
  }
};

/**
 * Calculates the position for the append menu relatively to the element
 *
 * @param {djs.model.Base} element
 * @returns {Object}
 */
AppendContextPadProvider.prototype._getAppendMenuPosition = function(element) {
  const contextPad = this._contextPad;

  const X_OFFSET = 5;

  const pad = contextPad.getPad(element).html;

  const padRect = pad.getBoundingClientRect();

  const pos = {
    x: padRect.right + X_OFFSET,
    y: padRect.top
  };

  return pos;
};

function e(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}));}

/**
 * @typedef { import('../model/Types').Element } Element
 * @typedef { import('../model/Types').ModdleElement } ModdleElement
 */

/**
 * Is an element of the given BPMN type?
 *
 * @param  {Element|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);

  return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf(type);
}


/**
 * Return true if element has any of the given types.
 *
 * @param {Element|ModdleElement} element
 * @param {string[]} types
 *
 * @return {boolean}
 */
function isAny(element, types) {
  return some(types, function(t) {
    return is(element, t);
  });
}

/**
 * Return the business object for a given element.
 *
 * @param {Element|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}

/**
 * Return the di object for a given element.
 *
 * @param {Element} element
 *
 * @return {ModdleElement}
 */
function getDi(element) {
  return element && element.di;
}

/**
 * Checks whether a value is an instance of Label.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isLabel(value) {
  return isObject(value) && has(value, 'labelTarget');
}

/**
 * @typedef {import('../core/Types').ElementLike} ElementLike
 * @typedef {import('../core/EventBus').default} EventBus
 * @typedef {import('./CommandStack').CommandContext} CommandContext
 *
 * @typedef {string|string[]} Events
 * @typedef { (context: CommandContext) => ElementLike[] | void } HandlerFunction
 * @typedef { (context: CommandContext) => void } ComposeHandlerFunction
 */

var DEFAULT_PRIORITY = 1000;

/**
 * A utility that can be used to plug into the command execution for
 * extension and/or validation.
 *
 * @class
 * @constructor
 *
 * @example
 *
 * ```javascript
 * import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';
 *
 * class CommandLogger extends CommandInterceptor {
 *   constructor(eventBus) {
 *     super(eventBus);
 *
 *   this.preExecute('shape.create', (event) => {
 *     console.log('commandStack.shape-create.preExecute', event);
 *   });
 * }
 * ```
 *
 * @param {EventBus} eventBus
 */
function CommandInterceptor(eventBus) {

  /**
   * @type {EventBus}
   */
  this._eventBus = eventBus;
}

CommandInterceptor.$inject = [ 'eventBus' ];

function unwrapEvent(fn, that) {
  return function(event) {
    return fn.call(that || null, event.context, event.command, event);
  };
}


/**
 * Intercept a command during one of the phases.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {string} [hook] phase to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.on = function(events, hook, priority, handlerFn, unwrap, that) {

  if (isFunction(hook) || isNumber(hook)) {
    that = unwrap;
    unwrap = handlerFn;
    handlerFn = priority;
    priority = hook;
    hook = null;
  }

  if (isFunction(priority)) {
    that = unwrap;
    unwrap = handlerFn;
    handlerFn = priority;
    priority = DEFAULT_PRIORITY;
  }

  if (isObject(unwrap)) {
    that = unwrap;
    unwrap = false;
  }

  if (!isFunction(handlerFn)) {
    throw new Error('handlerFn must be a function');
  }

  if (!isArray(events)) {
    events = [ events ];
  }

  var eventBus = this._eventBus;

  forEach(events, function(event) {

    // concat commandStack(.event)?(.hook)?
    var fullEvent = [ 'commandStack', event, hook ].filter(function(e) { return e; }).join('.');

    eventBus.on(fullEvent, priority, unwrap ? unwrapEvent(handlerFn, that) : handlerFn, that);
  });
};

/**
 * Add a <canExecute> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.canExecute = createHook('canExecute');

/**
 * Add a <preExecute> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.preExecute = createHook('preExecute');

/**
 * Add a <preExecuted> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.preExecuted = createHook('preExecuted');

/**
 * Add a <execute> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.execute = createHook('execute');

/**
 * Add a <executed> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.executed = createHook('executed');

/**
 * Add a <postExecute> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.postExecute = createHook('postExecute');

/**
 * Add a <postExecuted> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.postExecuted = createHook('postExecuted');

/**
 * Add a <revert> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.revert = createHook('revert');

/**
 * Add a <reverted> phase of command interceptor.
 *
 * @param {Events} [events] command(s) to intercept
 * @param {number} [priority]
 * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
 * @param {boolean} [unwrap] whether the event should be unwrapped
 * @param {any} [that]
 */
CommandInterceptor.prototype.reverted = createHook('reverted');

/*
 * Add prototype methods for each phase of command execution (e.g. execute,
 * revert).
 *
 * @param {string} hook
 *
 * @return { (
 *   events?: Events,
 *   priority?: number,
 *   handlerFn: ComposeHandlerFunction|HandlerFunction,
 *   unwrap?: boolean
 * ) => any }
 */
function createHook(hook) {

  /**
   * @this {CommandInterceptor}
   *
   * @param {Events} [events]
   * @param {number} [priority]
   * @param {ComposeHandlerFunction|HandlerFunction} handlerFn
   * @param {boolean} [unwrap]
   * @param {any} [that]
   */
  const hookFn = function(events, priority, handlerFn, unwrap, that) {

    if (isFunction(events) || isNumber(events)) {
      that = unwrap;
      unwrap = handlerFn;
      handlerFn = priority;
      priority = events;
      events = null;
    }

    this.on(events, hook, priority, handlerFn, unwrap, that);
  };

  return hookFn;
}

/**
 * @typedef {import('../../core/EventBus').default} EventBus
 */

/**
 * A basic provider that may be extended to implement modeling rules.
 *
 * Extensions should implement the init method to actually add their custom
 * modeling checks. Checks may be added via the #addRule(action, fn) method.
 *
 * @class
 *
 * @param {EventBus} eventBus
 */
function RuleProvider(eventBus) {
  CommandInterceptor.call(this, eventBus);

  this.init();
}

RuleProvider.$inject = [ 'eventBus' ];

e(RuleProvider, CommandInterceptor);


/**
 * Adds a modeling rule for the given action, implemented through
 * a callback function.
 *
 * The callback receives a modeling specific action context
 * to perform its check. It must return `false` to disallow the
 * action from happening or `true` to allow the action. Usually returing
 * `null` denotes that a particular interaction shall be ignored.
 * By returning nothing or `undefined` you pass evaluation to lower
 * priority rules.
 *
 * @example
 *
 * ```javascript
 * ResizableRules.prototype.init = function() {
 *
 *   \/**
 *    * Return `true`, `false` or nothing to denote
 *    * _allowed_, _not allowed_ and _continue evaluating_.
 *    *\/
 *   this.addRule('shape.resize', function(context) {
 *
 *     var shape = context.shape;
 *
 *     if (!context.newBounds) {
 *       // check general resizability
 *       if (!shape.resizable) {
 *         return false;
 *       }
 *
 *       // not returning anything (read: undefined)
 *       // will continue the evaluation of other rules
 *       // (with lower priority)
 *       return;
 *     } else {
 *       // element must have minimum size of 10*10 points
 *       return context.newBounds.width > 10 && context.newBounds.height > 10;
 *     }
 *   });
 * };
 * ```
 *
 * @param {string|string[]} actions the identifier for the modeling action to check
 * @param {number} [priority] the priority at which this rule is being applied
 * @param {(any) => any} fn the callback function that performs the actual check
 */
RuleProvider.prototype.addRule = function(actions, priority, fn) {

  var self = this;

  if (typeof actions === 'string') {
    actions = [ actions ];
  }

  actions.forEach(function(action) {

    self.canExecute(action, priority, function(context, action, event) {
      return fn(context);
    }, true);
  });
};

/**
 * Implement this method to add new rules during provider initialization.
 */
RuleProvider.prototype.init = function() {};

/**
 * Append anything modeling rules
 */
function AppendRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

e(AppendRules, RuleProvider);

AppendRules.$inject = [
  'eventBus'
];

AppendRules.prototype.init = function() {
  this.addRule('shape.append', function(context) {

    const source = context.element;

    const businessObject = getBusinessObject(source);

    if (isLabel(source)) {
      return false;
    }

    if (isAny(source, [
      'bpmn:EndEvent',
      'bpmn:Group',
      'bpmn:TextAnnotation',
      'bpmn:Lane',
      'bpmn:Participant',
      'bpmn:DataStoreReference',
      'bpmn:DataObjectReference'
    ])) {
      return false;
    }

    if (isConnection(source)) {
      return false;
    }

    if (is(source, 'bpmn:IntermediateThrowEvent') && hasEventDefinition(source, 'bpmn:LinkEventDefinition')) {
      return false;
    }

    if (is(source, 'bpmn:SubProcess') && businessObject.triggeredByEvent) {
      return false;
    }
  });

};


// helpers //////////////
function hasEventDefinition(element, eventDefinition) {
  const bo = getBusinessObject(element);

  return !!find(bo.eventDefinitions || [], function(definition) {
    return is(definition, eventDefinition);
  });
}

function isConnection(element) {
  return element.waypoints;
}

var AppendMenuModule = {
  __init__: [
    'appendMenuProvider',
    'appendContextPadProvider',
    'appendRules'
  ],
  appendMenuProvider: [ 'type', AppendMenuProvider ],
  appendContextPadProvider: [ 'type', AppendContextPadProvider ],
  appendRules: [ 'type', AppendRules ]
};

/**
 * This module is a create menu provider for the popup menu.
 */
function CreateMenuProvider(
    elementFactory, popupMenu, create,
    autoPlace, mouse, translate
) {
  this._elementFactory = elementFactory;
  this._popupMenu = popupMenu;
  this._create = create;
  this._autoPlace = autoPlace;
  this._mouse = mouse;
  this._translate = translate;

  this.register();
}

CreateMenuProvider.$inject = [
  'elementFactory',
  'popupMenu',
  'create',
  'autoPlace',
  'mouse',
  'translate'
];

/**
 * Register create menu provider in the popup menu
 */
CreateMenuProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-create', this);
};

/**
 * Returns the create options as menu entries
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu entry items
 */
CreateMenuProvider.prototype.getPopupMenuEntries = function() {

  const entries = {};

  // map options to menu entries
  CREATE_OPTIONS.forEach(option => {
    const {
      actionName,
      className,
      label,
      target,
      description,
      group,
      search,
      rank
    } = option;

    const targetAction = this._createEntryAction(target);

    entries[`create-${actionName}`] = {
      label: label && this._translate(label),
      className,
      description,
      group: group && {
        ...group,
        name: this._translate(group.name)
      },
      search,
      rank,
      action: {
        click: targetAction,
        dragstart: targetAction
      }
    };
  });

  return entries;
};

/**
 * Create an action for a given target
 *
 * @param {Object} target
 * @returns {Object}
 */
CreateMenuProvider.prototype._createEntryAction = function(target) {

  const create = this._create;
  const mouse = this._mouse;
  const popupMenu = this._popupMenu;
  const elementFactory = this._elementFactory;

  let newElement;

  return (event) => {
    popupMenu.close();

    // create the new element
    if (target.type === 'bpmn:Participant') {
      newElement = elementFactory.createParticipantShape(target);
    } else {
      newElement = elementFactory.create('shape', target);
    }

    // use last mouse event if triggered via keyboard
    if (event instanceof KeyboardEvent) {
      event = mouse.getLastMoveEvent();
    }

    return create.start(event, newElement);
  };
};

var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

const LOWER_PRIORITY = 900;

/**
 * A palette provider for the create elements menu.
 */
function CreatePaletteProvider(palette, translate, popupMenu, canvas, mouse) {

  this._palette = palette;
  this._translate = translate;
  this._popupMenu = popupMenu;
  this._canvas = canvas;
  this._mouse = mouse;

  this.register();
}

CreatePaletteProvider.$inject = [
  'palette',
  'translate',
  'popupMenu',
  'canvas',
  'mouse'
];

/**
 * Register create button provider in the palette
 */
CreatePaletteProvider.prototype.register = function() {
  this._palette.registerProvider(LOWER_PRIORITY, this);
};

/**
 * Gets the palette create entry
 *
 * @param {djs.model.Base} element
 * @returns {Object}
 */
CreatePaletteProvider.prototype.getPaletteEntries = function(element) {
  const translate = this._translate,
        popupMenu = this._popupMenu,
        canvas = this._canvas,
        mouse = this._mouse;

  const getPosition = (event) => {
    const X_OFFSET = 35;
    const Y_OFFSET = 10;

    if (event instanceof KeyboardEvent) {
      event = mouse.getLastMoveEvent();
      return { x: event.x, y: event.y };
    }

    const target = event && event.target || query('.djs-palette [data-action="create"]');
    const targetPosition = target.getBoundingClientRect();

    return target && {
      x: targetPosition.left + targetPosition.width / 2 + X_OFFSET,
      y: targetPosition.top + targetPosition.height / 2 + Y_OFFSET
    };
  };

  return {
    'create': {
      group: 'create',
      html: `<div class="entry"> ${createIcon}</div>`,
      title: translate('Create element'),
      action: {
        click: function(event) {
          const position = getPosition(event);

          const element = canvas.getRootElement();

          popupMenu.open(element, 'bpmn-create', position, {
            title: translate('Create element'),
            width: 300,
            search: true
          });
        }
      }
    }
  };
};

var CreateMenuModule = {
  __init__: [
    'createMenuProvider',
    'createPaletteProvider'
  ],
  createMenuProvider: [ 'type', CreateMenuProvider ],
  createPaletteProvider: [ 'type', CreatePaletteProvider ]
};

/**
 * Registers and executes BPMN specific editor actions.
 *
 * @param {Injector} injector
 */
function CreateAppendEditorActions(injector) {
  this._injector = injector;

  this.registerActions();
}

CreateAppendEditorActions.$inject = [
  'injector'
];

/**
 * Register actions.
 *
 * @param {Injector} injector
 */
CreateAppendEditorActions.prototype.registerActions = function() {
  const editorActions = this._injector.get('editorActions', false);
  const selection = this._injector.get('selection', false);
  const contextPad = this._injector.get('contextPad', false);
  const palette = this._injector.get('palette', false);
  const popupMenu = this._injector.get('popupMenu', false);

  const actions = {};

  // append
  if (selection && contextPad && palette && popupMenu && palette) {
    assign(actions, {
      'appendElement': function(event) {
        const selected = selection && selection.get();

        if (selected.length == 1 && !popupMenu.isEmpty(selected[0], 'bpmn-append')) {
          contextPad.triggerEntry('append', 'click', event);
        } else {
          palette.triggerEntry('create', 'click', event);
        }
      }
    });
  }

  // create
  if (palette) {
    assign(actions, {
      'createElement': function(event) {
        palette.triggerEntry('create', 'click', event);
      } }
    );
  }

  editorActions && editorActions.register(actions);

};

var EditorActionsModule = {
  __depends__: [
    AppendMenuModule,
    CreateMenuModule
  ],
  __init__: [
    'createAppendEditorActions'
  ],
  createAppendEditorActions: [ 'type', CreateAppendEditorActions ]
};

var KEYS_COPY = [ 'c', 'C' ];
var KEYS_PASTE = [ 'v', 'V' ];
var KEYS_REDO = [ 'y', 'Y' ];
var KEYS_UNDO = [ 'z', 'Z' ];

/**
 * @param {KeyboardEvent} event
 * @return {boolean}
 */
function isCmd(event) {

  // ensure we don't react to AltGr
  // (mapped to CTRL + ALT)
  if (event.altKey) {
    return false;
  }

  return event.ctrlKey || event.metaKey;
}

/**
 * Checks if key pressed is one of provided keys.
 *
 * @param {string|string[]} keys
 * @param {KeyboardEvent} event
 * @return {boolean}
 */
function isKey(keys, event) {
  keys = isArray(keys) ? keys : [ keys ];

  return keys.indexOf(event.key) !== -1 || keys.indexOf(event.code) !== -1;
}

/**
 * @param {KeyboardEvent} event
 */
function isShift(event) {
  return event.shiftKey;
}

/**
 * @param {KeyboardEvent} event
 */
function isCopy(event) {
  return isCmd(event) && isKey(KEYS_COPY, event);
}

/**
 * @param {KeyboardEvent} event
 */
function isPaste(event) {
  return isCmd(event) && isKey(KEYS_PASTE, event);
}

/**
 * @param {KeyboardEvent} event
 */
function isUndo(event) {
  return isCmd(event) && !isShift(event) && isKey(KEYS_UNDO, event);
}

/**
 * @param {KeyboardEvent} event
 */
function isRedo(event) {
  return isCmd(event) && (
    isKey(KEYS_REDO, event) || (
      isKey(KEYS_UNDO, event) && isShift(event)
    )
  );
}

var LOW_PRIORITY = 500;


/**
 * Adds default keyboard bindings.
 *
 * This does not pull in any features will bind only actions that
 * have previously been registered against the editorActions component.
 *
 * @param {EventBus} eventBus
 * @param {Keyboard} keyboard
 */
function KeyboardBindings(eventBus, keyboard) {

  var self = this;

  eventBus.on('editorActions.init', LOW_PRIORITY, function(event) {

    var editorActions = event.editorActions;

    self.registerBindings(keyboard, editorActions);
  });
}

KeyboardBindings.$inject = [
  'eventBus',
  'keyboard'
];


/**
 * Register available keyboard bindings.
 *
 * @param {Keyboard} keyboard
 * @param {EditorActions} editorActions
 */
KeyboardBindings.prototype.registerBindings = function(keyboard, editorActions) {

  /**
   * Add keyboard binding if respective editor action
   * is registered.
   *
   * @param {string} action name
   * @param {Function} fn that implements the key binding
   */
  function addListener(action, fn) {

    if (editorActions.isRegistered(action)) {
      keyboard.addListener(fn);
    }
  }


  // undo
  // (CTRL|CMD) + Z
  addListener('undo', function(context) {

    var event = context.keyEvent;

    if (isUndo(event)) {
      editorActions.trigger('undo');

      return true;
    }
  });

  // redo
  // CTRL + Y
  // CMD + SHIFT + Z
  addListener('redo', function(context) {

    var event = context.keyEvent;

    if (isRedo(event)) {
      editorActions.trigger('redo');

      return true;
    }
  });

  // copy
  // CTRL/CMD + C
  addListener('copy', function(context) {

    var event = context.keyEvent;

    if (isCopy(event)) {
      editorActions.trigger('copy');

      return true;
    }
  });

  // paste
  // CTRL/CMD + V
  addListener('paste', function(context) {

    var event = context.keyEvent;

    if (isPaste(event)) {
      editorActions.trigger('paste');

      return true;
    }
  });

  // zoom in one step
  // CTRL/CMD + +
  addListener('stepZoom', function(context) {

    var event = context.keyEvent;

    // quirk: it has to be triggered by `=` as well to work on international keyboard layout
    // cf: https://github.com/bpmn-io/bpmn-js/issues/1362#issuecomment-722989754
    if (isKey([ '+', 'Add', '=' ], event) && isCmd(event)) {
      editorActions.trigger('stepZoom', { value: 1 });

      return true;
    }
  });

  // zoom out one step
  // CTRL + -
  addListener('stepZoom', function(context) {

    var event = context.keyEvent;

    if (isKey([ '-', 'Subtract' ], event) && isCmd(event)) {
      editorActions.trigger('stepZoom', { value: -1 });

      return true;
    }
  });

  // zoom to the default level
  // CTRL + 0
  addListener('zoom', function(context) {

    var event = context.keyEvent;

    if (isKey('0', event) && isCmd(event)) {
      editorActions.trigger('zoom', { value: 1 });

      return true;
    }
  });

  // delete selected element
  // DEL
  addListener('removeSelection', function(context) {

    var event = context.keyEvent;

    if (isKey([ 'Backspace', 'Delete', 'Del' ], event)) {
      editorActions.trigger('removeSelection');

      return true;
    }
  });
};

/**
 * BPMN 2.0 specific keyboard bindings.
 *
 * @param {Injector} injector
 */
function CreateAppendKeyboardBindings(injector) {

  this._injector = injector;
  this._keyboard = this._injector.get('keyboard', false);
  this._editorActions = this._injector.get('editorActions', false);

  if (this._keyboard) {
    this._injector.invoke(KeyboardBindings, this);
  }
}

e(CreateAppendKeyboardBindings, KeyboardBindings);

CreateAppendKeyboardBindings.$inject = [
  'injector'
];


/**
 * Register available keyboard bindings.
 *
 * @param {Keyboard} keyboard
 * @param {EditorActions} editorActions
 */
CreateAppendKeyboardBindings.prototype.registerBindings = function() {

  const keyboard = this._keyboard;
  const editorActions = this._editorActions;

  // inherit default bindings
  KeyboardBindings.prototype.registerBindings.call(this, keyboard, editorActions);

  /**
   * Add keyboard binding if respective editor action
   * is registered.
   *
   * @param {string} action name
   * @param {Function} fn that implements the key binding
   */
  function addListener(action, fn) {

    if (editorActions && editorActions.isRegistered(action)) {
      keyboard && keyboard.addListener(fn);
    }
  }

  // activate append/create element
  // A
  addListener('appendElement', function(context) {

    const event = context.keyEvent;

    if (keyboard && keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard && keyboard.isKey([ 'a', 'A' ], event)) {

      editorActions && editorActions.trigger('appendElement', event);
      return true;
    }
  });

  // N
  addListener('createElement', function(context) {

    const event = context.keyEvent;

    if (keyboard && keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard && keyboard.isKey([ 'n', 'N' ], event)) {
      editorActions && editorActions.trigger('createElement', event);

      return true;
    }
  });

};

var KeyboardBindingsModule = {
  __depends__: [
    AppendMenuModule,
    CreateMenuModule
  ],
  __init__: [
    'createAppendKeyboardBindings'
  ],
  createAppendKeyboardBindings: [ 'type', CreateAppendKeyboardBindings ]
};

var index$1 = {
  __depends__: [
    AppendMenuModule,
    CreateMenuModule,
    EditorActionsModule,
    KeyboardBindingsModule
  ],
};

/**
 * A popup menu provider that allows to append elements with
 * element templates.
 */
function ElementTemplatesAppendProvider(
    popupMenu, translate, elementTemplates,
    autoPlace, create, mouse, rules) {

  this._popupMenu = popupMenu;
  this._translate = translate;
  this._elementTemplates = elementTemplates;
  this._autoPlace = autoPlace;
  this._create = create;
  this._mouse = mouse;
  this._rules = rules;

  this.register();
}

ElementTemplatesAppendProvider.$inject = [
  'popupMenu',
  'translate',
  'elementTemplates',
  'autoPlace',
  'create',
  'move',
  'rules'
];

/**
 * Register append menu provider in the popup menu
 */
ElementTemplatesAppendProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-append', this);
};

/**
 * Adds the element templates to the append menu.
 * @param {djs.model.Base} element
 *
 * @returns {Object}
 */
ElementTemplatesAppendProvider.prototype.getPopupMenuEntries = function(element) {
  return (entries) => {

    if (!this._rules.allowed('shape.append', { element: element })) {
      return [];
    }

    const filteredTemplates = this._filterTemplates(this._elementTemplates.getLatest());

    // add template entries
    assign(entries, this.getTemplateEntries(element, filteredTemplates));

    return entries;
  };
};

/**
 * Get all element templates.
 *
 * @param {djs.model.Base} element
 *
 * @return {Object} element templates as menu entries
 */
ElementTemplatesAppendProvider.prototype.getTemplateEntries = function(element, templates) {

  const templateEntries = {};

  templates.map(template => {

    const {
      icon = {},
      category,
    } = template;

    const entryId = `append.template-${template.id}`;

    const defaultGroup = {
      id: 'templates',
      name: this._translate('Templates')
    };

    templateEntries[entryId] = {
      label: template.name,
      description: template.description,
      documentationRef: template.documentationRef,
      imageUrl: icon.contents,
      group: category || defaultGroup,
      action: this._getEntryAction(element, template)
    };
  });

  return templateEntries;
};

/**
 * Filter out templates from the options.
 *
 * @param {Array<Object>} templates
 *
 * @returns {Array<Object>}
 */
ElementTemplatesAppendProvider.prototype._filterTemplates = function(templates) {
  return templates.filter(template => {
    const {
      appliesTo,
      elementType
    } = template;

    const type = (elementType && elementType.value) || appliesTo[0];

    // elements that can not be appended
    if ([
      'bpmn:StartEvent',
      'bpmn:Participant'
    ].includes(type)) {
      return false;
    }

    // sequence flow templates are supported
    // but connections are not appendable
    if ('bpmn:SequenceFlow' === type) {
      return false;
    }

    return true;
  });
};

/**
 * Create an action for a given template.
 *
 * @param {djs.model.Base} element
 * @param {Object} template
 *
 * @returns {Object}
 */
ElementTemplatesAppendProvider.prototype._getEntryAction = function(element, template) {
  return {

    click: () => {
      const newElement = this._elementTemplates.createElement(template);
      this._autoPlace.append(element, newElement);
    },

    dragstart: (event) => {
      const newElement = this._elementTemplates.createElement(template);

      if (event instanceof KeyboardEvent) {
        event = this._mouse.getLastMoveEvent();
      }

      this._create.start(event, newElement, {
        source: element
      });
    }
  };
};

var AppendElementTemplatesModule = {
  __init__: [ 'elementTemplatesAppendProvider' ],
  elementTemplatesAppendProvider: [ 'type', ElementTemplatesAppendProvider ]
};

/**
 * A popup menu provider that allows to create elements with
 * element templates.
 */
function ElementTemplatesCreateProvider(
    popupMenu, translate,
    elementTemplates, mouse, create) {

  this._popupMenu = popupMenu;
  this._translate = translate;
  this._elementTemplates = elementTemplates;
  this._mouse = mouse;
  this._create = create;

  this.register();
}

ElementTemplatesCreateProvider.$inject = [
  'popupMenu',
  'translate',
  'elementTemplates',
  'mouse',
  'create'
];

/**
 * Register create menu provider in the popup menu
 */
ElementTemplatesCreateProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-create', this);
};

/**
 * Adds the element templates to the create menu.
 * @param {djs.model.Base} element
 *
 * @returns {Object}
 */
ElementTemplatesCreateProvider.prototype.getPopupMenuEntries = function(element) {
  return (entries) => {

    // add template entries
    assign(entries, this.getTemplateEntries(element));

    return entries;
  };
};

/**
 * Get all element templates.
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of element templates as menu entries
 */
ElementTemplatesCreateProvider.prototype.getTemplateEntries = function() {

  const templates = this._elementTemplates.getLatest();
  const templateEntries = {};

  templates.map(template => {

    const {
      icon = {},
      category,
    } = template;

    const entryId = `create.template-${template.id}`;

    const defaultGroup = {
      id: 'templates',
      name: this._translate('Templates')
    };

    templateEntries[entryId] = {
      label: template.name,
      description: template.description,
      documentationRef: template.documentationRef,
      imageUrl: icon.contents,
      group: category || defaultGroup,
      action: {
        click: this._getEntryAction(template),
        dragstart: this._getEntryAction(template)
      }
    };
  });

  return templateEntries;
};


ElementTemplatesCreateProvider.prototype._getEntryAction = function(template) {
  const create = this._create;
  const popupMenu = this._popupMenu;
  const elementTemplates = this._elementTemplates;
  const mouse = this._mouse;

  return (event) => {

    popupMenu.close();

    // create the new element
    let newElement = elementTemplates.createElement(template);

    // use last mouse event if triggered via keyboard
    if (event instanceof KeyboardEvent) {
      event = mouse.getLastMoveEvent();
    }

    return create.start(event, newElement);
  };
};

var CreateElementTemplatesModule = {
  __init__: [ 'elementTemplatesCreateProvider' ],
  elementTemplatesCreateProvider: [ 'type', ElementTemplatesCreateProvider ]
};

/**
 * A replace menu provider that allows to replace elements with
 * element templates.
 */
function ElementTemplatesReplaceProvider(popupMenu, translate, elementTemplates) {

  this._popupMenu = popupMenu;
  this._translate = translate;
  this._elementTemplates = elementTemplates;

  this.register();
}

ElementTemplatesReplaceProvider.$inject = [
  'popupMenu',
  'translate',
  'elementTemplates'
];

/**
 * Register replace menu provider in the popup menu
 */
ElementTemplatesReplaceProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-replace', this);
};

/**
 * Adds the element templates to the replace menu.
 * @param {djs.model.Base} element
 *
 * @returns {Object}
 */
ElementTemplatesReplaceProvider.prototype.getPopupMenuEntries = function(element) {

  return (entries) => {

    // convert our entries into something sortable
    let entrySet = Object.entries(entries);

    // add template entries
    entrySet = [ ...entrySet, ...this.getTemplateEntries(element) ];

    // convert back to object
    return entrySet.reduce((entries, [ key, value ]) => {
      entries[key] = value;

      return entries;
    }, {});
  };
};

/**
 * Get all element templates that can be used to replace the given element.
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of element templates as menu entries
 */
ElementTemplatesReplaceProvider.prototype.getTemplateEntries = function(element) {

  const templates = this._getMatchingTemplates(element);
  return templates.map(template => {

    const {
      icon = {},
      category,
    } = template;

    const entryId = `replace.template-${template.id}`;

    const defaultGroup = {
      id: 'templates',
      name: this._translate('Templates')
    };

    return [ entryId, {
      label: template.name,
      description: template.description,
      documentationRef: template.documentationRef,
      imageUrl: icon.contents,
      group: category || defaultGroup,
      action: () => {
        this._elementTemplates.applyTemplate(element, template);
      }
    } ];
  });
};

/**
 * Returns the templates that can the element can be replaced with.
 *
 * @param  {djs.model.Base} element
 *
 * @return {Array<ElementTemplate>}
 */
ElementTemplatesReplaceProvider.prototype._getMatchingTemplates = function(element) {
  return this._elementTemplates.getLatest().filter(template => {
    return isAny(element, template.appliesTo) && !isTemplateApplied(element, template);
  });
};


// helpers ////////////
function isTemplateApplied(element, template) {
  const businessObject = getBusinessObject(element);

  if (businessObject) {
    return businessObject.get('zeebe:modelerTemplate') === template.id;
  }

  return false;
}

var ReplaceElementTemplatesModule = {
  __init__: [
    'elementTemplatesReplaceProvider'
  ],
  elementTemplatesReplaceProvider: [ 'type', ElementTemplatesReplaceProvider ]
};

/**
 * @typedef {import('../model/Types').Element} Element
 * @typedef {import('../model/Types').ModdleElement} ModdleElement
 */

/**
 * @param {Element} element
 * @param {ModdleElement} [di]
 *
 * @return {boolean}
 */
function isExpanded(element, di) {

  if (is(element, 'bpmn:CallActivity')) {
    return false;
  }

  if (is(element, 'bpmn:SubProcess')) {
    di = di || getDi(element);

    if (di && is(di, 'bpmndi:BPMNPlane')) {
      return true;
    }

    return di && !!di.isExpanded;
  }

  if (is(element, 'bpmn:Participant')) {
    return !!getBusinessObject(element).processRef;
  }

  return true;
}

/**
 * @typedef {import('../../../model/Types').Element} Element
 * @typedef {import('diagram-js/lib/features/popup-menu/PopupMenu').PopupMenuTarget} PopupMenuTarget
 *
 * @typedef {(entry: PopupMenuTarget) => boolean} DifferentTypeValidator
 */

/**
 * Returns true, if an element is from a different type
 * than a target definition. Takes into account the type,
 * event definition type and triggeredByEvent property.
 *
 * @param {Element} element
 *
 * @return {DifferentTypeValidator}
 */
function isDifferentType(element) {

  return function(entry) {
    var target = entry.target;

    var businessObject = getBusinessObject(element),
        eventDefinition = businessObject.eventDefinitions && businessObject.eventDefinitions[0];

    var isTypeEqual = businessObject.$type === target.type;

    var isEventDefinitionEqual = (
      (eventDefinition && eventDefinition.$type) === target.eventDefinitionType
    );

    var isTriggeredByEventEqual = (

      // coherse to <false>
      !!target.triggeredByEvent === !!businessObject.triggeredByEvent
    );

    var isExpandedEqual = (
      target.isExpanded === undefined ||
      target.isExpanded === isExpanded(element)
    );

    return !isTypeEqual || !isEventDefinitionEqual || !isTriggeredByEventEqual || !isExpandedEqual;
  };
}

/**
 * @typedef { () => string } LabelGetter
 *
 * @typedef { {
 *   label: string | LabelGetter;
 *   actionName: string;
 *   className: string;
 *   target?: {
 *     type: string;
 *     isExpanded?: boolean;
 *     isInterrupting?: boolean;
 *     triggeredByEvent?: boolean;
 *     cancelActivity?: boolean;
 *     eventDefinitionType?: string;
 *     eventDefinitionAttrs?: Record<string, any>
 *   };
 * } } ReplaceOption
 */

/**
 * @type {ReplaceOption[]}
 */
var START_EVENT = [
  {
    label: 'Start Event',
    actionName: 'replace-with-none-start',
    className: 'bpmn-icon-start-event-none',
    target: {
      type: 'bpmn:StartEvent'
    }
  },
  {
    label: 'Intermediate Throw Event',
    actionName: 'replace-with-none-intermediate-throwing',
    className: 'bpmn-icon-intermediate-event-none',
    target: {
      type: 'bpmn:IntermediateThrowEvent'
    }
  },
  {
    label: 'End Event',
    actionName: 'replace-with-none-end',
    className: 'bpmn-icon-end-event-none',
    target: {
      type: 'bpmn:EndEvent'
    }
  },
  {
    label: 'Message Start Event',
    actionName: 'replace-with-message-start',
    className: 'bpmn-icon-start-event-message',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Start Event',
    actionName: 'replace-with-timer-start',
    className: 'bpmn-icon-start-event-timer',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Conditional Start Event',
    actionName: 'replace-with-conditional-start',
    className: 'bpmn-icon-start-event-condition',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Signal Start Event',
    actionName: 'replace-with-signal-start',
    className: 'bpmn-icon-start-event-signal',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var START_EVENT_SUB_PROCESS = [
  {
    label: 'Start Event',
    actionName: 'replace-with-none-start',
    className: 'bpmn-icon-start-event-none',
    target: {
      type: 'bpmn:StartEvent'
    }
  },
  {
    label: 'Intermediate Throw Event',
    actionName: 'replace-with-none-intermediate-throwing',
    className: 'bpmn-icon-intermediate-event-none',
    target: {
      type: 'bpmn:IntermediateThrowEvent'
    }
  },
  {
    label: 'End Event',
    actionName: 'replace-with-none-end',
    className: 'bpmn-icon-end-event-none',
    target: {
      type: 'bpmn:EndEvent'
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var INTERMEDIATE_EVENT = [
  {
    label: 'Start Event',
    actionName: 'replace-with-none-start',
    className: 'bpmn-icon-start-event-none',
    target: {
      type: 'bpmn:StartEvent'
    }
  },
  {
    label: 'Intermediate Throw Event',
    actionName: 'replace-with-none-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-none',
    target: {
      type: 'bpmn:IntermediateThrowEvent'
    }
  },
  {
    label: 'End Event',
    actionName: 'replace-with-none-end',
    className: 'bpmn-icon-end-event-none',
    target: {
      type: 'bpmn:EndEvent'
    }
  },
  {
    label: 'Message Intermediate Catch Event',
    actionName: 'replace-with-message-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-message',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Message Intermediate Throw Event',
    actionName: 'replace-with-message-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-message',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Intermediate Catch Event',
    actionName: 'replace-with-timer-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-timer',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Escalation Intermediate Throw Event',
    actionName: 'replace-with-escalation-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-escalation',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Conditional Intermediate Catch Event',
    actionName: 'replace-with-conditional-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-condition',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Link Intermediate Catch Event',
    actionName: 'replace-with-link-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-link',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:LinkEventDefinition',
      eventDefinitionAttrs: {
        name: ''
      }
    }
  },
  {
    label: 'Link Intermediate Throw Event',
    actionName: 'replace-with-link-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-link',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:LinkEventDefinition',
      eventDefinitionAttrs: {
        name: ''
      }
    }
  },
  {
    label: 'Compensation Intermediate Throw Event',
    actionName: 'replace-with-compensation-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-compensation',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Signal Intermediate Catch Event',
    actionName: 'replace-with-signal-intermediate-catch',
    className: 'bpmn-icon-intermediate-event-catch-signal',
    target: {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Signal Intermediate Throw Event',
    actionName: 'replace-with-signal-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-throw-signal',
    target: {
      type: 'bpmn:IntermediateThrowEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var END_EVENT = [
  {
    label: 'Start Event',
    actionName: 'replace-with-none-start',
    className: 'bpmn-icon-start-event-none',
    target: {
      type: 'bpmn:StartEvent'
    }
  },
  {
    label: 'Intermediate Throw Event',
    actionName: 'replace-with-none-intermediate-throw',
    className: 'bpmn-icon-intermediate-event-none',
    target: {
      type: 'bpmn:IntermediateThrowEvent'
    }
  },
  {
    label: 'End Event',
    actionName: 'replace-with-none-end',
    className: 'bpmn-icon-end-event-none',
    target: {
      type: 'bpmn:EndEvent'
    }
  },
  {
    label: 'Message End Event',
    actionName: 'replace-with-message-end',
    className: 'bpmn-icon-end-event-message',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Escalation End Event',
    actionName: 'replace-with-escalation-end',
    className: 'bpmn-icon-end-event-escalation',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Error End Event',
    actionName: 'replace-with-error-end',
    className: 'bpmn-icon-end-event-error',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:ErrorEventDefinition'
    }
  },
  {
    label: 'Cancel End Event',
    actionName: 'replace-with-cancel-end',
    className: 'bpmn-icon-end-event-cancel',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:CancelEventDefinition'
    }
  },
  {
    label: 'Compensation End Event',
    actionName: 'replace-with-compensation-end',
    className: 'bpmn-icon-end-event-compensation',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Signal End Event',
    actionName: 'replace-with-signal-end',
    className: 'bpmn-icon-end-event-signal',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Terminate End Event',
    actionName: 'replace-with-terminate-end',
    className: 'bpmn-icon-end-event-terminate',
    target: {
      type: 'bpmn:EndEvent',
      eventDefinitionType: 'bpmn:TerminateEventDefinition'
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var GATEWAY = [
  {
    label: 'Exclusive Gateway',
    actionName: 'replace-with-exclusive-gateway',
    className: 'bpmn-icon-gateway-xor',
    target: {
      type: 'bpmn:ExclusiveGateway'
    }
  },
  {
    label: 'Parallel Gateway',
    actionName: 'replace-with-parallel-gateway',
    className: 'bpmn-icon-gateway-parallel',
    target: {
      type: 'bpmn:ParallelGateway'
    }
  },
  {
    label: 'Inclusive Gateway',
    actionName: 'replace-with-inclusive-gateway',
    className: 'bpmn-icon-gateway-or',
    target: {
      type: 'bpmn:InclusiveGateway'
    }
  },
  {
    label: 'Complex Gateway',
    actionName: 'replace-with-complex-gateway',
    className: 'bpmn-icon-gateway-complex',
    target: {
      type: 'bpmn:ComplexGateway'
    }
  },
  {
    label: 'Event based Gateway',
    actionName: 'replace-with-event-based-gateway',
    className: 'bpmn-icon-gateway-eventbased',
    target: {
      type: 'bpmn:EventBasedGateway',
      instantiate: false,
      eventGatewayType: 'Exclusive'
    }
  }

  // Gateways deactivated until https://github.com/bpmn-io/bpmn-js/issues/194
  // {
  //   label: 'Event based instantiating Gateway',
  //   actionName: 'replace-with-exclusive-event-based-gateway',
  //   className: 'bpmn-icon-exclusive-event-based',
  //   target: {
  //     type: 'bpmn:EventBasedGateway'
  //   },
  //   options: {
  //     businessObject: { instantiate: true, eventGatewayType: 'Exclusive' }
  //   }
  // },
  // {
  //   label: 'Parallel Event based instantiating Gateway',
  //   actionName: 'replace-with-parallel-event-based-instantiate-gateway',
  //   className: 'bpmn-icon-parallel-event-based-instantiate-gateway',
  //   target: {
  //     type: 'bpmn:EventBasedGateway'
  //   },
  //   options: {
  //     businessObject: { instantiate: true, eventGatewayType: 'Parallel' }
  //   }
  // }
];

/**
 * @type {ReplaceOption[]}
 */
var SUBPROCESS_EXPANDED = [
  {
    label: 'Transaction',
    actionName: 'replace-with-transaction',
    className: 'bpmn-icon-transaction',
    target: {
      type: 'bpmn:Transaction',
      isExpanded: true
    }
  },
  {
    label: 'Event Sub Process',
    actionName: 'replace-with-event-subprocess',
    className: 'bpmn-icon-event-subprocess-expanded',
    target: {
      type: 'bpmn:SubProcess',
      triggeredByEvent: true,
      isExpanded: true
    }
  },
  {
    label: 'Sub Process (collapsed)',
    actionName: 'replace-with-collapsed-subprocess',
    className: 'bpmn-icon-subprocess-collapsed',
    target: {
      type: 'bpmn:SubProcess',
      isExpanded: false
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var TRANSACTION = [
  {
    label: 'Transaction',
    actionName: 'replace-with-transaction',
    className: 'bpmn-icon-transaction',
    target: {
      type: 'bpmn:Transaction',
      isExpanded: true
    }
  },
  {
    label: 'Sub Process',
    actionName: 'replace-with-subprocess',
    className: 'bpmn-icon-subprocess-expanded',
    target: {
      type: 'bpmn:SubProcess',
      isExpanded: true
    }
  },
  {
    label: 'Event Sub Process',
    actionName: 'replace-with-event-subprocess',
    className: 'bpmn-icon-event-subprocess-expanded',
    target: {
      type: 'bpmn:SubProcess',
      triggeredByEvent: true,
      isExpanded: true
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var EVENT_SUB_PROCESS = TRANSACTION;

/**
 * @type {ReplaceOption[]}
 */
var TASK = [
  {
    label: 'Task',
    actionName: 'replace-with-task',
    className: 'bpmn-icon-task',
    target: {
      type: 'bpmn:Task'
    }
  },
  {
    label: 'User Task',
    actionName: 'replace-with-user-task',
    className: 'bpmn-icon-user',
    target: {
      type: 'bpmn:UserTask'
    }
  },
  {
    label: 'Service Task',
    actionName: 'replace-with-service-task',
    className: 'bpmn-icon-service',
    target: {
      type: 'bpmn:ServiceTask'
    }
  },
  {
    label: 'Send Task',
    actionName: 'replace-with-send-task',
    className: 'bpmn-icon-send',
    target: {
      type: 'bpmn:SendTask'
    }
  },
  {
    label: 'Receive Task',
    actionName: 'replace-with-receive-task',
    className: 'bpmn-icon-receive',
    target: {
      type: 'bpmn:ReceiveTask'
    }
  },
  {
    label: 'Manual Task',
    actionName: 'replace-with-manual-task',
    className: 'bpmn-icon-manual',
    target: {
      type: 'bpmn:ManualTask'
    }
  },
  {
    label: 'Business Rule Task',
    actionName: 'replace-with-rule-task',
    className: 'bpmn-icon-business-rule',
    target: {
      type: 'bpmn:BusinessRuleTask'
    }
  },
  {
    label: 'Script Task',
    actionName: 'replace-with-script-task',
    className: 'bpmn-icon-script',
    target: {
      type: 'bpmn:ScriptTask'
    }
  },
  {
    label: 'Call Activity',
    actionName: 'replace-with-call-activity',
    className: 'bpmn-icon-call-activity',
    target: {
      type: 'bpmn:CallActivity'
    }
  },
  {
    label: 'Sub Process (collapsed)',
    actionName: 'replace-with-collapsed-subprocess',
    className: 'bpmn-icon-subprocess-collapsed',
    target: {
      type: 'bpmn:SubProcess',
      isExpanded: false
    }
  },
  {
    label: 'Sub Process (expanded)',
    actionName: 'replace-with-expanded-subprocess',
    className: 'bpmn-icon-subprocess-expanded',
    target: {
      type: 'bpmn:SubProcess',
      isExpanded: true
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var DATA_OBJECT_REFERENCE = [
  {
    label: 'Data Store Reference',
    actionName: 'replace-with-data-store-reference',
    className: 'bpmn-icon-data-store',
    target: {
      type: 'bpmn:DataStoreReference'
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var DATA_STORE_REFERENCE = [
  {
    label: 'Data Object Reference',
    actionName: 'replace-with-data-object-reference',
    className: 'bpmn-icon-data-object',
    target: {
      type: 'bpmn:DataObjectReference'
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var BOUNDARY_EVENT = [
  {
    label: 'Message Boundary Event',
    actionName: 'replace-with-message-boundary',
    className: 'bpmn-icon-intermediate-event-catch-message',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Boundary Event',
    actionName: 'replace-with-timer-boundary',
    className: 'bpmn-icon-intermediate-event-catch-timer',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Escalation Boundary Event',
    actionName: 'replace-with-escalation-boundary',
    className: 'bpmn-icon-intermediate-event-catch-escalation',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Conditional Boundary Event',
    actionName: 'replace-with-conditional-boundary',
    className: 'bpmn-icon-intermediate-event-catch-condition',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Error Boundary Event',
    actionName: 'replace-with-error-boundary',
    className: 'bpmn-icon-intermediate-event-catch-error',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:ErrorEventDefinition'
    }
  },
  {
    label: 'Cancel Boundary Event',
    actionName: 'replace-with-cancel-boundary',
    className: 'bpmn-icon-intermediate-event-catch-cancel',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:CancelEventDefinition'
    }
  },
  {
    label: 'Signal Boundary Event',
    actionName: 'replace-with-signal-boundary',
    className: 'bpmn-icon-intermediate-event-catch-signal',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Compensation Boundary Event',
    actionName: 'replace-with-compensation-boundary',
    className: 'bpmn-icon-intermediate-event-catch-compensation',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Message Boundary Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-message-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-message',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Timer Boundary Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-timer-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-timer',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Escalation Boundary Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-escalation-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-escalation',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Conditional Boundary Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-conditional-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-condition',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition',
      cancelActivity: false
    }
  },
  {
    label: 'Signal Boundary Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-signal-boundary',
    className: 'bpmn-icon-intermediate-event-catch-non-interrupting-signal',
    target: {
      type: 'bpmn:BoundaryEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition',
      cancelActivity: false
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var EVENT_SUB_PROCESS_START_EVENT = [
  {
    label: 'Message Start Event',
    actionName: 'replace-with-message-start',
    className: 'bpmn-icon-start-event-message',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition'
    }
  },
  {
    label: 'Timer Start Event',
    actionName: 'replace-with-timer-start',
    className: 'bpmn-icon-start-event-timer',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition'
    }
  },
  {
    label: 'Conditional Start Event',
    actionName: 'replace-with-conditional-start',
    className: 'bpmn-icon-start-event-condition',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition'
    }
  },
  {
    label: 'Signal Start Event',
    actionName: 'replace-with-signal-start',
    className: 'bpmn-icon-start-event-signal',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition'
    }
  },
  {
    label: 'Error Start Event',
    actionName: 'replace-with-error-start',
    className: 'bpmn-icon-start-event-error',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:ErrorEventDefinition'
    }
  },
  {
    label: 'Escalation Start Event',
    actionName: 'replace-with-escalation-start',
    className: 'bpmn-icon-start-event-escalation',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition'
    }
  },
  {
    label: 'Compensation Start Event',
    actionName: 'replace-with-compensation-start',
    className: 'bpmn-icon-start-event-compensation',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:CompensateEventDefinition'
    }
  },
  {
    label: 'Message Start Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-message-start',
    className: 'bpmn-icon-start-event-non-interrupting-message',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:MessageEventDefinition',
      isInterrupting: false
    }
  },
  {
    label: 'Timer Start Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-timer-start',
    className: 'bpmn-icon-start-event-non-interrupting-timer',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:TimerEventDefinition',
      isInterrupting: false
    }
  },
  {
    label: 'Conditional Start Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-conditional-start',
    className: 'bpmn-icon-start-event-non-interrupting-condition',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:ConditionalEventDefinition',
      isInterrupting: false
    }
  },
  {
    label: 'Signal Start Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-signal-start',
    className: 'bpmn-icon-start-event-non-interrupting-signal',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:SignalEventDefinition',
      isInterrupting: false
    }
  },
  {
    label: 'Escalation Start Event (non-interrupting)',
    actionName: 'replace-with-non-interrupting-escalation-start',
    className: 'bpmn-icon-start-event-non-interrupting-escalation',
    target: {
      type: 'bpmn:StartEvent',
      eventDefinitionType: 'bpmn:EscalationEventDefinition',
      isInterrupting: false
    }
  }
];

/**
 * @type {ReplaceOption[]}
 */
var SEQUENCE_FLOW = [
  {
    label: 'Sequence Flow',
    actionName: 'replace-with-sequence-flow',
    className: 'bpmn-icon-connection'
  },
  {
    label: 'Default Flow',
    actionName: 'replace-with-default-flow',
    className: 'bpmn-icon-default-flow'
  },
  {
    label: 'Conditional Flow',
    actionName: 'replace-with-conditional-flow',
    className: 'bpmn-icon-conditional-flow'
  }
];

/**
 * @type {ReplaceOption[]}
 */
var PARTICIPANT = [
  {
    label: 'Expanded Pool',
    actionName: 'replace-with-expanded-pool',
    className: 'bpmn-icon-participant',
    target: {
      type: 'bpmn:Participant',
      isExpanded: true
    }
  },
  {
    label: function(element) {
      var label = 'Empty Pool';

      if (element.children && element.children.length) {
        label += ' (removes content)';
      }

      return label;
    },
    actionName: 'replace-with-collapsed-pool',

    // TODO(@janstuemmel): maybe design new icon
    className: 'bpmn-icon-lane',
    target: {
      type: 'bpmn:Participant',
      isExpanded: false
    }
  }
];

var replaceOptions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BOUNDARY_EVENT: BOUNDARY_EVENT,
  DATA_OBJECT_REFERENCE: DATA_OBJECT_REFERENCE,
  DATA_STORE_REFERENCE: DATA_STORE_REFERENCE,
  END_EVENT: END_EVENT,
  EVENT_SUB_PROCESS: EVENT_SUB_PROCESS,
  EVENT_SUB_PROCESS_START_EVENT: EVENT_SUB_PROCESS_START_EVENT,
  GATEWAY: GATEWAY,
  INTERMEDIATE_EVENT: INTERMEDIATE_EVENT,
  PARTICIPANT: PARTICIPANT,
  SEQUENCE_FLOW: SEQUENCE_FLOW,
  START_EVENT: START_EVENT,
  START_EVENT_SUB_PROCESS: START_EVENT_SUB_PROCESS,
  SUBPROCESS_EXPANDED: SUBPROCESS_EXPANDED,
  TASK: TASK,
  TRANSACTION: TRANSACTION
});

const ALL_OPTIONS = Object.values(replaceOptions);

function getReplaceOptionGroups() {
  return ALL_OPTIONS;
}

/**
 * A replace menu provider that allows to replace elements with
 * templates applied with the correspondent plain element.
 */
function RemoveTemplateReplaceProvider(popupMenu, translate, elementTemplates) {

  this._popupMenu = popupMenu;
  this._translate = translate;
  this._elementTemplates = elementTemplates;

  this.register();
}

RemoveTemplateReplaceProvider.$inject = [
  'popupMenu',
  'translate',
  'elementTemplates'
];

/**
 * Register replace menu provider in the popup menu
 */
RemoveTemplateReplaceProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-replace', this);
};

/**
 * Adds the element templates to the replace menu.
 * @param {djs.model.Base} element
 *
 * @returns {Object}
 */
RemoveTemplateReplaceProvider.prototype.getPopupMenuEntries = function(element) {

  return (entries) => {

    // convert our entries into something sortable
    let entrySet = Object.entries(entries);

    if (this._elementTemplates && this._elementTemplates.get(element)) {

      // add remove template option
      this.addPlainElementEntry(element, entrySet, this._translate, this._elementTemplates);
    }

    // convert back to object
    return entrySet.reduce((entries, [ key, value ]) => {
      entries[key] = value;

      return entries;
    }, {});
  };
};


/**
 * Adds the option to replace with plain element (remove template).
 *
 * @param {djs.model.Base} element
 * @param {Array<Object>} entries
 */
RemoveTemplateReplaceProvider.prototype.addPlainElementEntry = function(element, entries, translate, elementTemplates) {

  const replaceOption = this.getPlainEntry(element, entries, translate, elementTemplates);

  if (!replaceOption) {
    return;
  }

  const [
    insertIndex,
    entry
  ] = replaceOption;

  // insert remove entry
  entries.splice(insertIndex, 0, [ entry.id, entry ]);
};

/**
 * Returns the option to replace with plain element and the index where it should be inserted.
 *
 * @param {djs.model.Base} element
 * @param {Array<Object>} entries
 *
 * @returns {Array<Object, number>}
 */
RemoveTemplateReplaceProvider.prototype.getPlainEntry = function(element, entries, translate, elementTemplates) {

  const {
    options,
    option,
    optionIndex
  } = findReplaceOptions(element) || { };

  if (!options) {
    return null;
  }

  const entry = {
    id: 'replace-remove-element-template',
    action: () => {
      elementTemplates.removeTemplate(element);
    },
    label: translate(option.label),
    className: option.className
  };

  // insert after previous option, if it exists
  const previousIndex = getOptionIndex(options, optionIndex - 1, entries);

  if (previousIndex) {
    return [
      previousIndex + 1,
      entry
    ];
  }

  // insert before next option, if it exists
  const nextIndex = getOptionIndex(options, optionIndex + 1, entries);

  if (nextIndex) {
    return [
      nextIndex,
      entry
    ];
  }

  // fallback to insert at start
  return [
    0,
    entry
  ];
};


/**
 * @param {ModdleElement} element
 *
 * @return { { options: Array<any>, option: any, optionIndex: number } | null }
 */
function findReplaceOptions(element) {

  const isSameType = (element, option) => option.target && !isDifferentType(element)(option);

  return getReplaceOptionGroups().reduce((result, options) => {

    if (result) {
      return result;
    }

    const optionIndex = options.findIndex(option => isSameType(element, option));

    if (optionIndex === -1) {
      return;
    }

    return {
      options,
      option: options[optionIndex],
      optionIndex
    };
  }, null);
}

function getOptionIndex(options, index, entries) {
  const option = options[index];

  if (!option) {
    return false;
  }

  return entries.findIndex(
    ([ key ]) => key === option.actionName
  );
}

var RemoveTemplatesModule = {
  __init__: [ 'removeTemplateReplaceProvider' ],
  removeTemplateReplaceProvider: [ 'type', RemoveTemplateReplaceProvider ]
};

var index = {
  __depends__: [
    AppendElementTemplatesModule,
    CreateElementTemplatesModule,
    ReplaceElementTemplatesModule,
    RemoveTemplatesModule
  ]
};




/***/ }),

/***/ "./node_modules/diagram-js-grid/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/diagram-js-grid/dist/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-svg */ "./node_modules/tiny-svg/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/features/grid-snapping/GridUtil */ "./node_modules/diagram-js/lib/features/grid-snapping/GridUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "./node_modules/diagram-js/lib/layout/LayoutUtil.js");





/**
 * @typedef {import('diagram-js/lib/core/Canvas').default} Canvas
 * @typedef {import('diagram-js/lib/core/EventBus').default} EventBus
 */

var GRID_COLOR = '#ccc',
    LAYER_NAME = 'djs-grid';

var GRID_DIMENSIONS = {
  width: 100000,
  height: 100000
};

/**
 * @param {Canvas} canvas
 * @param {EventBus} eventBus
 */
function Grid(canvas, eventBus) {
  this._canvas = canvas;

  this._visible = false;

  var self = this;

  eventBus.on('diagram.init', function() {
    self._init();
  });

  eventBus.on('gridSnapping.toggle', function(event) {
    var active = event.active;

    self.toggle(active);

    self._centerGridAroundViewbox();
  });

  eventBus.on('canvas.viewbox.changed', function(context) {
    var viewbox = context.viewbox;

    self._centerGridAroundViewbox(viewbox);
  });
}

Grid.prototype._init = function() {
  var defs = (0,min_dom__WEBPACK_IMPORTED_MODULE_0__.query)('defs', this._canvas._svg);

  if (!defs) {
    defs = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.create)('defs');

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.append)(this._canvas._svg, defs);
  }

  var pattern = this._pattern = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.create)('pattern');

  var patternId = 'djs-grid-pattern-' + randomNumber();

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.attr)(pattern, {
    id: patternId,
    width: diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__.SPACING,
    height: diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__.SPACING,
    patternUnits: 'userSpaceOnUse'
  });

  var circle = this._circle = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.create)('circle');

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.attr)(circle, {
    cx: 0.5,
    cy: 0.5,
    r: 0.5,
    fill: GRID_COLOR
  });

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.append)(pattern, circle);

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.append)(defs, pattern);

  var grid = this._gfx = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.create)('rect');

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.attr)(grid, {
    x: -(GRID_DIMENSIONS.width / 2),
    y: -(GRID_DIMENSIONS.height / 2),
    width: GRID_DIMENSIONS.width,
    height: GRID_DIMENSIONS.height,
    fill: `url(#${ patternId })`
  });
};

Grid.prototype._centerGridAroundViewbox = function(viewbox) {
  if (!viewbox) {
    viewbox = this._canvas.viewbox();
  }

  var mid = (0,diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__.getMid)(viewbox);

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.attr)(this._gfx, {
    x: -(GRID_DIMENSIONS.width / 2) + (0,diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__.quantize)(mid.x, diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__.SPACING),
    y: -(GRID_DIMENSIONS.height / 2) + (0,diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__.quantize)(mid.y, diagram_js_lib_features_grid_snapping_GridUtil__WEBPACK_IMPORTED_MODULE_2__.SPACING)
  });
};

/**
 * Return the current grid visibility.
 *
 * @return {boolean}
 */
Grid.prototype.isVisible = function() {
  return this._visible;
};

/**
 * Toggle grid visibility.
 *
 * @param {boolean} [visible] new visible state
 */
Grid.prototype.toggle = function(visible) {

  if (typeof visible === 'undefined') {
    visible = !this._visible;
  }

  if (visible === this._visible) {
    return;
  }

  var parent = this._getParent();

  if (visible) {
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.append)(parent, this._gfx);
  } else {
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.clear)(parent);
  }

  this._visible = visible;
};

Grid.prototype._getParent = function() {
  return this._canvas.getLayer(LAYER_NAME, -2);
};

Grid.$inject = [
  'canvas',
  'eventBus'
];


// helpers ///////////////

function randomNumber() {
  return Math.trunc(Math.random() * 1000000);
}

var index = {
  __init__: [ 'grid' ],
  grid: [ 'type', Grid ]
};




/***/ }),

/***/ "./node_modules/diagram-js/lib/features/grid-snapping/GridUtil.js":
/*!************************************************************************!*\
  !*** ./node_modules/diagram-js/lib/features/grid-snapping/GridUtil.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPACING: () => (/* binding */ SPACING),
/* harmony export */   quantize: () => (/* binding */ quantize)
/* harmony export */ });
var SPACING = 10;

function quantize(value, quantum, fn) {
  if (!fn) {
    fn = 'round';
  }

  return Math[ fn ](value / quantum) * quantum;
}

/***/ }),

/***/ "./node_modules/diagram-js/lib/layout/LayoutUtil.js":
/*!**********************************************************!*\
  !*** ./node_modules/diagram-js/lib/layout/LayoutUtil.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asBounds: () => (/* binding */ asBounds),
/* harmony export */   asTRBL: () => (/* binding */ asTRBL),
/* harmony export */   filterRedundantWaypoints: () => (/* binding */ filterRedundantWaypoints),
/* harmony export */   getBoundsMid: () => (/* binding */ getBoundsMid),
/* harmony export */   getConnectionMid: () => (/* binding */ getConnectionMid),
/* harmony export */   getElementLineIntersection: () => (/* binding */ getElementLineIntersection),
/* harmony export */   getIntersections: () => (/* binding */ getIntersections),
/* harmony export */   getMid: () => (/* binding */ getMid),
/* harmony export */   getOrientation: () => (/* binding */ getOrientation),
/* harmony export */   roundBounds: () => (/* binding */ roundBounds),
/* harmony export */   roundPoint: () => (/* binding */ roundPoint)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _util_Geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Geometry */ "./node_modules/diagram-js/lib/util/Geometry.js");
/* harmony import */ var path_intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-intersection */ "./node_modules/path-intersection/intersect.js");
/* harmony import */ var path_intersection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_intersection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ModelUtil */ "./node_modules/diagram-js/lib/util/ModelUtil.js");








/**
 * @typedef {import('../core/Types').ElementLike} Element
 * @typedef {import('../core/Types').ConnectionLike} Connection
 *
 * @typedef {import('../util/Types').DirectionTRBL} DirectionTRBL
 * @typedef {import('../util/Types').Point} Point
 * @typedef {import('../util/Types').Rect} Rect
 * @typedef {import('../util/Types').RectTRBL} RectTRBL
 */

/**
 * @param {Rect} bounds
 *
 * @returns {Rect}
 */
function roundBounds(bounds) {
  return {
    x: Math.round(bounds.x),
    y: Math.round(bounds.y),
    width: Math.round(bounds.width),
    height: Math.round(bounds.height)
  };
}

/**
 * @param {Point} point
 *
 * @returns {Point}
 */
function roundPoint(point) {

  return {
    x: Math.round(point.x),
    y: Math.round(point.y)
  };
}


/**
 * Convert the given bounds to a { top, left, bottom, right } descriptor.
 *
 * @param {Point|Rect} bounds
 *
 * @return {RectTRBL}
 */
function asTRBL(bounds) {
  return {
    top: bounds.y,
    right: bounds.x + (bounds.width || 0),
    bottom: bounds.y + (bounds.height || 0),
    left: bounds.x
  };
}


/**
 * Convert a { top, left, bottom, right } to an objects bounds.
 *
 * @param {RectTRBL} trbl
 *
 * @return {Rect}
 */
function asBounds(trbl) {
  return {
    x: trbl.left,
    y: trbl.top,
    width: trbl.right - trbl.left,
    height: trbl.bottom - trbl.top
  };
}


/**
 * Get the mid of the given bounds or point.
 *
 * @param {Point|Rect} bounds
 *
 * @return {Point}
 */
function getBoundsMid(bounds) {
  return roundPoint({
    x: bounds.x + (bounds.width || 0) / 2,
    y: bounds.y + (bounds.height || 0) / 2
  });
}


/**
 * Get the mid of the given Connection.
 *
 * @param {Connection} connection
 *
 * @return {Point}
 */
function getConnectionMid(connection) {
  var waypoints = connection.waypoints;

  // calculate total length and length of each segment
  var parts = waypoints.reduce(function(parts, point, index) {

    var lastPoint = waypoints[index - 1];

    if (lastPoint) {
      var lastPart = parts[parts.length - 1];

      var startLength = lastPart && lastPart.endLength || 0;
      var length = distance(lastPoint, point);

      parts.push({
        start: lastPoint,
        end: point,
        startLength: startLength,
        endLength: startLength + length,
        length: length
      });
    }

    return parts;
  }, []);

  var totalLength = parts.reduce(function(length, part) {
    return length + part.length;
  }, 0);

  // find which segement contains middle point
  var midLength = totalLength / 2;

  var i = 0;
  var midSegment = parts[i];

  while (midSegment.endLength < midLength) {
    midSegment = parts[++i];
  }

  // calculate relative position on mid segment
  var segmentProgress = (midLength - midSegment.startLength) / midSegment.length;

  var midPoint = {
    x: midSegment.start.x + (midSegment.end.x - midSegment.start.x) * segmentProgress,
    y: midSegment.start.y + (midSegment.end.y - midSegment.start.y) * segmentProgress
  };

  return midPoint;
}


/**
 * Get the mid of the given Element.
 *
 * @param {Element} element
 *
 * @return {Point}
 */
function getMid(element) {
  if ((0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.isConnection)(element)) {
    return getConnectionMid(element);
  }

  return getBoundsMid(element);
}

// orientation utils //////////////////////

/**
 * Get orientation of the given rectangle with respect to
 * the reference rectangle.
 *
 * A padding (positive or negative) may be passed to influence
 * horizontal / vertical orientation and intersection.
 *
 * @param {Rect} rect
 * @param {Rect} reference
 * @param {Point|number} padding
 *
 * @return {DirectionTRBL} the orientation; one of top, top-left, left, ..., bottom, right or intersect.
 */
function getOrientation(rect, reference, padding) {

  padding = padding || 0;

  // make sure we can use an object, too
  // for individual { x, y } padding
  if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_2__.isObject)(padding)) {
    padding = { x: padding, y: padding };
  }


  var rectOrientation = asTRBL(rect),
      referenceOrientation = asTRBL(reference);

  var top = rectOrientation.bottom + padding.y <= referenceOrientation.top,
      right = rectOrientation.left - padding.x >= referenceOrientation.right,
      bottom = rectOrientation.top - padding.y >= referenceOrientation.bottom,
      left = rectOrientation.right + padding.x <= referenceOrientation.left;

  var vertical = top ? 'top' : (bottom ? 'bottom' : null),
      horizontal = left ? 'left' : (right ? 'right' : null);

  if (horizontal && vertical) {
    return vertical + '-' + horizontal;
  } else {
    return horizontal || vertical || 'intersect';
  }
}


// intersection utils //////////////////////

/**
 * Get intersection between an element and a line path.
 *
 * @param {string} elementPath
 * @param {string} linePath
 * @param {boolean} cropStart Whether to crop start or end.
 *
 * @return {Point}
 */
function getElementLineIntersection(elementPath, linePath, cropStart) {

  var intersections = getIntersections(elementPath, linePath);

  // recognize intersections
  // only one -> choose
  // two close together -> choose first
  // two or more distinct -> pull out appropriate one
  // none -> ok (fallback to point itself)
  if (intersections.length === 1) {
    return roundPoint(intersections[0]);
  } else if (intersections.length === 2 && (0,_util_Geometry__WEBPACK_IMPORTED_MODULE_3__.pointDistance)(intersections[0], intersections[1]) < 1) {
    return roundPoint(intersections[0]);
  } else if (intersections.length > 1) {

    // sort by intersections based on connection segment +
    // distance from start
    intersections = (0,min_dash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(intersections, function(i) {
      var distance = Math.floor(i.t2 * 100) || 1;

      distance = 100 - distance;

      distance = (distance < 10 ? '0' : '') + distance;

      // create a sort string that makes sure we sort
      // line segment ASC + line segment position DESC (for cropStart)
      // line segment ASC + line segment position ASC (for cropEnd)
      return i.segment2 + '#' + distance;
    });

    return roundPoint(intersections[cropStart ? 0 : intersections.length - 1]);
  }

  return null;
}


function getIntersections(a, b) {
  return path_intersection__WEBPACK_IMPORTED_MODULE_0___default()(a, b);
}


function filterRedundantWaypoints(waypoints) {

  // alter copy of waypoints, not original
  waypoints = waypoints.slice();

  var idx = 0,
      point,
      previousPoint,
      nextPoint;

  while (waypoints[idx]) {
    point = waypoints[idx];
    previousPoint = waypoints[idx - 1];
    nextPoint = waypoints[idx + 1];

    if ((0,_util_Geometry__WEBPACK_IMPORTED_MODULE_3__.pointDistance)(point, nextPoint) === 0 ||
        (0,_util_Geometry__WEBPACK_IMPORTED_MODULE_3__.pointsOnLine)(previousPoint, nextPoint, point)) {

      // remove point, if overlapping with {nextPoint}
      // or on line with {previousPoint} -> {point} -> {nextPoint}
      waypoints.splice(idx, 1);
    } else {
      idx++;
    }
  }

  return waypoints;
}

// helpers //////////////////////

function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/***/ }),

/***/ "./node_modules/diagram-js/lib/util/Elements.js":
/*!******************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/Elements.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   eachElement: () => (/* binding */ eachElement),
/* harmony export */   getBBox: () => (/* binding */ getBBox),
/* harmony export */   getClosure: () => (/* binding */ getClosure),
/* harmony export */   getEnclosedElements: () => (/* binding */ getEnclosedElements),
/* harmony export */   getParents: () => (/* binding */ getParents),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   isFrameElement: () => (/* binding */ isFrameElement),
/* harmony export */   selfAndAllChildren: () => (/* binding */ selfAndAllChildren),
/* harmony export */   selfAndChildren: () => (/* binding */ selfAndChildren),
/* harmony export */   selfAndDirectChildren: () => (/* binding */ selfAndDirectChildren)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef {import('../model/Types').Connection} Connection
 * @typedef {import('../model/Types').Element} Element
 * @typedef {import('../model/Types').Shape} Shape
 *
 * @typedef {import('../../type/Types').Rect} Rect
 *
 * @typedef { {
 *   allShapes: Record<string, Shape>,
 *   allConnections: Record<string, Connection>,
 *   topLevel: Record<string, Element>,
 *   enclosedConnections: Record<string, Connection>,
 *   enclosedElements: Record<string, Element>
 * } } Closure
 */

/**
 * Get parent elements.
 *
 * @param {Element[]} elements
 *
 * @return {Element[]}
 */
function getParents(elements) {

  // find elements that are not children of any other elements
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.filter)(elements, function(element) {
    return !(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.find)(elements, function(e) {
      return e !== element && getParent(element, e);
    });
  });
}


function getParent(element, parent) {
  if (!parent) {
    return;
  }

  if (element === parent) {
    return parent;
  }

  if (!element.parent) {
    return;
  }

  return getParent(element.parent, parent);
}


/**
 * Adds an element to a collection and returns true if the
 * element was added.
 *
 * @param {Object[]} elements
 * @param {Object} element
 * @param {boolean} [unique]
 */
function add(elements, element, unique) {
  var canAdd = !unique || elements.indexOf(element) === -1;

  if (canAdd) {
    elements.push(element);
  }

  return canAdd;
}


/**
 * Iterate over each element in a collection, calling the iterator function `fn`
 * with (element, index, recursionDepth).
 *
 * Recurse into all elements that are returned by `fn`.
 *
 * @param {Element|Element[]} elements
 * @param {(element: Element, index: number, depth: number) => Element[] | boolean | undefined} fn
 * @param {number} [depth] maximum recursion depth
 */
function eachElement(elements, fn, depth) {

  depth = depth || 0;

  if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(elements)) {
    elements = [ elements ];
  }

  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(elements, function(s, i) {
    var filter = fn(s, i, depth);

    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(filter) && filter.length) {
      eachElement(filter, fn, depth + 1);
    }
  });
}


/**
 * Collects self + child elements up to a given depth from a list of elements.
 *
 * @param {Element|Element[]} elements the elements to select the children from
 * @param {boolean} unique whether to return a unique result set (no duplicates)
 * @param {number} maxDepth the depth to search through or -1 for infinite
 *
 * @return {Element[]} found elements
 */
function selfAndChildren(elements, unique, maxDepth) {
  var result = [],
      processedChildren = [];

  eachElement(elements, function(element, i, depth) {
    add(result, element, unique);

    var children = element.children;

    // max traversal depth not reached yet
    if (maxDepth === -1 || depth < maxDepth) {

      // children exist && children not yet processed
      if (children && add(processedChildren, children, unique)) {
        return children;
      }
    }
  });

  return result;
}

/**
 * Return self + direct children for a number of elements
 *
 * @param {Element[]} elements to query
 * @param {boolean} [allowDuplicates] to allow duplicates in the result set
 *
 * @return {Element[]} the collected elements
 */
function selfAndDirectChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, 1);
}


/**
 * Return self + ALL children for a number of elements
 *
 * @param {Element[]} elements to query
 * @param {boolean} [allowDuplicates] to allow duplicates in the result set
 *
 * @return {Element[]} the collected elements
 */
function selfAndAllChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, -1);
}


/**
 * Gets the the closure for all selected elements,
 * their enclosed children and connections.
 *
 * @param {Element[]} elements
 * @param {boolean} [isTopLevel=true]
 * @param {Closure} [closure]
 *
 * @return {Closure} newClosure
 */
function getClosure(elements, isTopLevel, closure) {

  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(isTopLevel)) {
    isTopLevel = true;
  }

  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(isTopLevel)) {
    closure = isTopLevel;
    isTopLevel = true;
  }


  closure = closure || {};

  var allShapes = copyObject(closure.allShapes),
      allConnections = copyObject(closure.allConnections),
      enclosedElements = copyObject(closure.enclosedElements),
      enclosedConnections = copyObject(closure.enclosedConnections);

  var topLevel = copyObject(
    closure.topLevel,
    isTopLevel && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(elements, function(e) { return e.id; })
  );


  function handleConnection(c) {
    if (topLevel[c.source.id] && topLevel[c.target.id]) {
      topLevel[c.id] = [ c ];
    }

    // not enclosed as a child, but maybe logically
    // (connecting two moved elements?)
    if (allShapes[c.source.id] && allShapes[c.target.id]) {
      enclosedConnections[c.id] = enclosedElements[c.id] = c;
    }

    allConnections[c.id] = c;
  }

  function handleElement(element) {

    enclosedElements[element.id] = element;

    if (element.waypoints) {

      // remember connection
      enclosedConnections[element.id] = allConnections[element.id] = element;
    } else {

      // remember shape
      allShapes[element.id] = element;

      // remember all connections
      (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(element.incoming, handleConnection);

      (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(element.outgoing, handleConnection);

      // recurse into children
      return element.children;
    }
  }

  eachElement(elements, handleElement);

  return {
    allShapes: allShapes,
    allConnections: allConnections,
    topLevel: topLevel,
    enclosedConnections: enclosedConnections,
    enclosedElements: enclosedElements
  };
}

/**
 * Returns the surrounding bbox for all elements in
 * the array or the element primitive.
 *
 * @param {Element|Element[]} elements
 * @param {boolean} [stopRecursion=false]
 *
 * @return {Rect}
 */
function getBBox(elements, stopRecursion) {

  stopRecursion = !!stopRecursion;
  if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isArray)(elements)) {
    elements = [ elements ];
  }

  var minX,
      minY,
      maxX,
      maxY;

  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(elements, function(element) {

    // If element is a connection the bbox must be computed first
    var bbox = element;
    if (element.waypoints && !stopRecursion) {
      bbox = getBBox(element.waypoints, true);
    }

    var x = bbox.x,
        y = bbox.y,
        height = bbox.height || 0,
        width = bbox.width || 0;

    if (x < minX || minX === undefined) {
      minX = x;
    }
    if (y < minY || minY === undefined) {
      minY = y;
    }

    if ((x + width) > maxX || maxX === undefined) {
      maxX = x + width;
    }
    if ((y + height) > maxY || maxY === undefined) {
      maxY = y + height;
    }
  });

  return {
    x: minX,
    y: minY,
    height: maxY - minY,
    width: maxX - minX
  };
}


/**
 * Returns all elements that are enclosed from the bounding box.
 *
 *   * If bbox.(width|height) is not specified the method returns
 *     all elements with element.x/y > bbox.x/y
 *   * If only bbox.x or bbox.y is specified, method return all elements with
 *     e.x > bbox.x or e.y > bbox.y
 *
 * @param {Element[]} elements List of Elements to search through
 * @param {Rect} bbox the enclosing bbox.
 *
 * @return {Element[]} enclosed elements
 */
function getEnclosedElements(elements, bbox) {

  var filteredElements = {};

  (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.forEach)(elements, function(element) {

    var e = element;

    if (e.waypoints) {
      e = getBBox(e);
    }

    if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.y) && (e.x > bbox.x)) {
      filteredElements[element.id] = element;
    }
    if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.x) && (e.y > bbox.y)) {
      filteredElements[element.id] = element;
    }
    if (e.x > bbox.x && e.y > bbox.y) {
      if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.width) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.height) &&
          e.width + e.x < bbox.width + bbox.x &&
          e.height + e.y < bbox.height + bbox.y) {

        filteredElements[element.id] = element;
      } else if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.width) || !(0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(bbox.height)) {
        filteredElements[element.id] = element;
      }
    }
  });

  return filteredElements;
}

/**
 * Get the element's type
 *
 * @param {Element} element
 *
 * @return {'connection' | 'shape' | 'root'}
 */
function getType(element) {

  if ('waypoints' in element) {
    return 'connection';
  }

  if ('x' in element) {
    return 'shape';
  }

  return 'root';
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function isFrameElement(element) {
  return !!(element && element.isFrame);
}

// helpers ///////////////////////////////

function copyObject(src1, src2) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, src1 || {}, src2 || {});
}


/***/ }),

/***/ "./node_modules/diagram-js/lib/util/EscapeUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/EscapeUtil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeCSS: () => (/* binding */ escapeCSS),
/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML)
/* harmony export */ });
/**
 * @param {string} str
 *
 * @return {string}
 */
function escapeCSS(str) {
  return CSS.escape(str);
}

var HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};

/**
 * @param {string} str
 *
 * @return {string}
 */
function escapeHTML(str) {
  str = '' + str;

  return str && str.replace(/[&<>"']/g, function(match) {
    return HTML_ESCAPE_MAP[match];
  });
}


/***/ }),

/***/ "./node_modules/diagram-js/lib/util/Event.js":
/*!***************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/Event.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOriginal: () => (/* binding */ getOriginal),
/* harmony export */   stopPropagation: () => (/* binding */ stopPropagation),
/* harmony export */   toPoint: () => (/* binding */ toPoint)
/* harmony export */ });
/**
 * @typedef {import('../util/Types').Point} Point
 */

function __stopPropagation(event) {
  if (!event || typeof event.stopPropagation !== 'function') {
    return;
  }

  event.stopPropagation();
}

/**
 * @param {import('../core/EventBus').Event} event
 *
 * @return {Event}
 */
function getOriginal(event) {
  return event.originalEvent || event.srcEvent;
}

/**
 * @param {Event|import('../core/EventBus').Event} event
 */
function stopPropagation(event) {
  __stopPropagation(event);
  __stopPropagation(getOriginal(event));
}

/**
 * @param {Event} event
 *
 * @return {Point|null}
 */
function toPoint(event) {

  if (event.pointers && event.pointers.length) {
    event = event.pointers[0];
  }

  if (event.touches && event.touches.length) {
    event = event.touches[0];
  }

  return event ? {
    x: event.clientX,
    y: event.clientY
  } : null;
}

/***/ }),

/***/ "./node_modules/diagram-js/lib/util/Geometry.js":
/*!******************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/Geometry.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMidPoint: () => (/* binding */ getMidPoint),
/* harmony export */   pointDistance: () => (/* binding */ pointDistance),
/* harmony export */   pointInRect: () => (/* binding */ pointInRect),
/* harmony export */   pointsAligned: () => (/* binding */ pointsAligned),
/* harmony export */   pointsAlignedOnAxis: () => (/* binding */ pointsAlignedOnAxis),
/* harmony export */   pointsOnLine: () => (/* binding */ pointsOnLine)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef {import('../util/Types').Axis} Axis
 * @typedef {import('../util/Types').Point} Point
 * @typedef {import('../util/Types').Rect} Rect
 */

/**
 * Computes the distance between two points.
 *
 * @param {Point} a
 * @param {Point} b
 *
 * @return {number} The distance between the two points.
 */
function pointDistance(a, b) {
  if (!a || !b) {
    return -1;
  }

  return Math.sqrt(
    Math.pow(a.x - b.x, 2) +
    Math.pow(a.y - b.y, 2)
  );
}


/**
 * Returns true if the point r is on the line between p and q.
 *
 * @param {Point} p
 * @param {Point} q
 * @param {Point} r
 * @param {number} [accuracy=5] The accuracy with which to check (lower is better).
 *
 * @return {boolean}
 */
function pointsOnLine(p, q, r, accuracy) {

  if (typeof accuracy === 'undefined') {
    accuracy = 5;
  }

  if (!p || !q || !r) {
    return false;
  }

  var val = (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x),
      dist = pointDistance(p, q);

  // @see http://stackoverflow.com/a/907491/412190
  return Math.abs(val / dist) <= accuracy;
}


var ALIGNED_THRESHOLD = 2;

/**
 * Check whether two points are horizontally or vertically aligned.
 *
 * @param {Point[]|Point} a
 * @param {Point} [b]
 *
 * @return {string|boolean} If and how the two points are aligned ('h', 'v' or `false`).
 */
function pointsAligned(a, b) {
  var points = Array.from(arguments).flat();

  const axisMap = {
    'x': 'v',
    'y': 'h'
  };

  for (const [ axis, orientation ] of Object.entries(axisMap)) {
    if (pointsAlignedOnAxis(axis, points)) {
      return orientation;
    }
  }

  return false;
}

/**
 * @param {Axis} axis
 * @param {Point[]} points
 *
 * @return {boolean}
 */
function pointsAlignedOnAxis(axis, points) {
  const referencePoint = points[0];

  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.every)(points, function(point) {
    return Math.abs(referencePoint[axis] - point[axis]) <= ALIGNED_THRESHOLD;
  });
}

/**
 * Returns true if the point p is inside the rectangle rect
 *
 * @param {Point} p
 * @param {Rect} rect
 * @param {number} tolerance
 *
 * @return {boolean}
 */
function pointInRect(p, rect, tolerance) {
  tolerance = tolerance || 0;

  return p.x > rect.x - tolerance &&
         p.y > rect.y - tolerance &&
         p.x < rect.x + rect.width + tolerance &&
         p.y < rect.y + rect.height + tolerance;
}

/**
 * Returns a point in the middle of points p and q
 *
 * @param {Point} p
 * @param {Point} q
 *
 * @return {Point} The mid point between the two points.
 */
function getMidPoint(p, q) {
  return {
    x: Math.round(p.x + ((q.x - p.x) / 2.0)),
    y: Math.round(p.y + ((q.y - p.y) / 2.0))
  };
}


/***/ }),

/***/ "./node_modules/diagram-js/lib/util/ModelUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/ModelUtil.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isConnection: () => (/* binding */ isConnection),
/* harmony export */   isLabel: () => (/* binding */ isLabel),
/* harmony export */   isRoot: () => (/* binding */ isRoot)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * Checks whether a value is an instance of Connection.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isConnection(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.has)(value, 'waypoints');
}

/**
 * Checks whether a value is an instance of Label.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isLabel(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.has)(value, 'labelTarget');
}

/**
 * Checks whether a value is an instance of Root.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isRoot(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value.parent);
}

/***/ }),

/***/ "./node_modules/diagram-js/lib/util/Mouse.js":
/*!***************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/Mouse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasPrimaryModifier: () => (/* binding */ hasPrimaryModifier),
/* harmony export */   hasSecondaryModifier: () => (/* binding */ hasSecondaryModifier),
/* harmony export */   isAuxiliaryButton: () => (/* binding */ isAuxiliaryButton),
/* harmony export */   isButton: () => (/* binding */ isButton),
/* harmony export */   isMac: () => (/* reexport safe */ _Platform__WEBPACK_IMPORTED_MODULE_0__.isMac),
/* harmony export */   isPrimaryButton: () => (/* binding */ isPrimaryButton),
/* harmony export */   isSecondaryButton: () => (/* binding */ isSecondaryButton)
/* harmony export */ });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./node_modules/diagram-js/lib/util/Event.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform */ "./node_modules/diagram-js/lib/util/Platform.js");






/**
 * @param {MouseEvent} event
 * @param {string} button
 *
 * @return {boolean}
 */
function isButton(event, button) {
  return ((0,_Event__WEBPACK_IMPORTED_MODULE_1__.getOriginal)(event) || event).button === button;
}

/**
 * @param {MouseEvent} event
 *
 * @return {boolean}
 */
function isPrimaryButton(event) {

  // button === 0 -> left áka primary mouse button
  return isButton(event, 0);
}

/**
 * @param {MouseEvent} event
 *
 * @return {boolean}
 */
function isAuxiliaryButton(event) {

  // button === 1 -> auxiliary áka wheel button
  return isButton(event, 1);
}

/**
 * @param {MouseEvent} event
 *
 * @return {boolean}
 */
function isSecondaryButton(event) {

  // button === 2 -> right áka secondary button
  return isButton(event, 2);
}

/**
 * @param {MouseEvent} event
 *
 * @return {boolean}
 */
function hasPrimaryModifier(event) {
  var originalEvent = (0,_Event__WEBPACK_IMPORTED_MODULE_1__.getOriginal)(event) || event;

  if (!isPrimaryButton(event)) {
    return false;
  }

  // Use cmd as primary modifier key for mac OS
  if ((0,_Platform__WEBPACK_IMPORTED_MODULE_0__.isMac)()) {
    return originalEvent.metaKey;
  } else {
    return originalEvent.ctrlKey;
  }
}

/**
 * @param {MouseEvent} event
 *
 * @return {boolean}
 */
function hasSecondaryModifier(event) {
  var originalEvent = (0,_Event__WEBPACK_IMPORTED_MODULE_1__.getOriginal)(event) || event;

  return isPrimaryButton(event) && originalEvent.shiftKey;
}


/***/ }),

/***/ "./node_modules/diagram-js/lib/util/Platform.js":
/*!******************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/Platform.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMac: () => (/* binding */ isMac)
/* harmony export */ });
function isMac() {
  return (/mac/i).test(navigator.platform);
}

/***/ }),

/***/ "./node_modules/min-dom/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/min-dom/dist/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignStyle: () => (/* binding */ assign),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   classes: () => (/* binding */ classes),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   delegate: () => (/* binding */ delegate),
/* harmony export */   domify: () => (/* binding */ domify$1),
/* harmony export */   event: () => (/* binding */ event),
/* harmony export */   matches: () => (/* binding */ matches),
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   queryAll: () => (/* binding */ all),
/* harmony export */   remove: () => (/* binding */ remove)
/* harmony export */ });
function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Assigns style attributes in a style-src compliant way.
 *
 * @param {Element} element
 * @param {...Object} styleSources
 *
 * @return {Element} the element
 */
function assign(element, ...styleSources) {
  const target = element.style;

  forEach(styleSources, function(style) {
    if (!style) {
      return;
    }

    forEach(style, function(value, key) {
      target[key] = value;
    });
  });

  return element;
}

/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr(el, name, val) {

  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name) {
  return this.list.contains(name);
};

/**
 * Remove all children from the given element.
 */
function clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

/**
 * @param { HTMLElement } element
 * @param { String } selector
 *
 * @return { boolean }
 */
function matches(element, selector) {
  return element && typeof element.matches === 'function' && element.matches(selector);
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest(element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE &&
      currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matches(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matches(currentElem, selector) ? currentElem : null;
}

var componentEvent = {};

var bind$1, unbind$1, prefix;

function detect () {
  bind$1 = window.addEventListener ? 'addEventListener' : 'attachEvent';
  unbind$1 = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
  prefix = bind$1 !== 'addEventListener' ? 'on' : '';
}

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = componentEvent.bind = function(el, type, fn, capture){
  if (!bind$1) detect();
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = componentEvent.unbind = function(el, type, fn, capture){
  if (!unbind$1) detect();
  el[unbind$1](prefix + type, fn, capture || false);
  return fn;
};

var event = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  bind: bind_1,
  unbind: unbind_1,
  'default': componentEvent
}, [componentEvent]);

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = [ 'focus', 'blur' ];

function bind(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.bind(el, type, function(e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.unbind(el, type, fn, capture);
}

var delegate = {
  bind,
  unbind
};

/**
 * Expose `parse`.
 */

var domify = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = Object.prototype.hasOwnProperty.call(map, tag) ? map[tag] : map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

var domify$1 = domify;

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/path-intersection/intersect.js":
/*!*****************************************************!*\
  !*** ./node_modules/path-intersection/intersect.js ***!
  \*****************************************************/
/***/ ((module) => {



/**
 * This file contains source code adapted from Snap.svg (licensed Apache-2.0).
 *
 * @see https://github.com/adobe-webplatform/Snap.svg/blob/master/src/path.js
 */

/* eslint no-fallthrough: "off" */

var p2s = /,?([a-z]),?/gi,
    toFloat = parseFloat,
    math = Math,
    PI = math.PI,
    mmin = math.min,
    mmax = math.max,
    pow = math.pow,
    abs = math.abs,
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[-+]?\d+)?)[\s]*,?[\s]*/ig;

var isArray = Array.isArray || function(o) { return o instanceof Array; };

function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

function clone(obj) {

  if (typeof obj == 'function' || Object(obj) !== obj) {
    return obj;
  }

  var res = new obj.constructor;

  for (var key in obj) {
    if (hasProperty(obj, key)) {
      res[key] = clone(obj[key]);
    }
  }

  return res;
}

function repush(array, item) {
  for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
    return array.push(array.splice(i, 1)[0]);
  }
}

function cacher(f) {

  function newf() {

    var arg = Array.prototype.slice.call(arguments, 0),
        args = arg.join('\u2400'),
        cache = newf.cache = newf.cache || {},
        count = newf.count = newf.count || [];

    if (hasProperty(cache, args)) {
      repush(count, args);
      return cache[args];
    }

    count.length >= 1e3 && delete cache[count.shift()];
    count.push(args);
    cache[args] = f.apply(0, arg);

    return cache[args];
  }
  return newf;
}

function parsePathString(pathString) {

  if (!pathString) {
    return null;
  }

  var pth = paths(pathString);

  if (pth.arr) {
    return clone(pth.arr);
  }

  var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
      data = [];

  if (isArray(pathString) && isArray(pathString[0])) { // rough assumption
    data = clone(pathString);
  }

  if (!data.length) {

    String(pathString).replace(pathCommand, function(a, b, c) {
      var params = [],
          name = b.toLowerCase();

      c.replace(pathValues, function(a, b) {
        b && params.push(+b);
      });

      if (name == 'm' && params.length > 2) {
        data.push([b].concat(params.splice(0, 2)));
        name = 'l';
        b = b == 'm' ? 'l' : 'L';
      }

      while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
    });
  }

  data.toString = paths.toString;
  pth.arr = clone(data);

  return data;
}

function paths(ps) {
  var p = paths.ps = paths.ps || {};

  if (p[ps]) {
    p[ps].sleep = 100;
  } else {
    p[ps] = {
      sleep: 100
    };
  }

  setTimeout(function() {
    for (var key in p) {
      if (hasProperty(p, key) && key != ps) {
        p[key].sleep--;
        !p[key].sleep && delete p[key];
      }
    }
  });

  return p[ps];
}

function rectBBox(x, y, width, height) {

  if (arguments.length === 1) {
    y = x.y;
    width = x.width;
    height = x.height;
    x = x.x;
  }

  return {
    x: x,
    y: y,
    width: width,
    height: height,
    x2: x + width,
    y2: y + height
  };
}

function pathToString() {
  return this.join(',').replace(p2s, '$1');
}

function pathClone(pathArray) {
  var res = clone(pathArray);
  res.toString = pathToString;
  return res;
}

function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
  var t1 = 1 - t,
      t13 = pow(t1, 3),
      t12 = pow(t1, 2),
      t2 = t * t,
      t3 = t2 * t,
      x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
      y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;

  return {
    x: fixError(x),
    y: fixError(y)
  };
}

function bezierBBox(points) {

  var bbox = curveBBox.apply(null, points);

  return rectBBox(
    bbox.x0,
    bbox.y0,
    bbox.x1 - bbox.x0,
    bbox.y1 - bbox.y0
  );
}

function isPointInsideBBox(bbox, x, y) {
  return x >= bbox.x &&
    x <= bbox.x + bbox.width &&
    y >= bbox.y &&
    y <= bbox.y + bbox.height;
}

function isBBoxIntersect(bbox1, bbox2) {
  bbox1 = rectBBox(bbox1);
  bbox2 = rectBBox(bbox2);
  return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
    || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
    || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
    || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
    || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
    || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
    || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
    || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
    || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
        || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
    && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
        || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
}

function base3(t, p1, p2, p3, p4) {
  var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
      t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
  return t * t2 - 3 * p1 + 3 * p2;
}

function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {

  if (z == null) {
    z = 1;
  }

  z = z > 1 ? 1 : z < 0 ? 0 : z;

  var z2 = z / 2,
      n = 12,
      Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
      Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
      sum = 0;

  for (var i = 0; i < n; i++) {
    var ct = z2 * Tvalues[i] + z2,
        xbase = base3(ct, x1, x2, x3, x4),
        ybase = base3(ct, y1, y2, y3, y4),
        comb = xbase * xbase + ybase * ybase;

    sum += Cvalues[i] * math.sqrt(comb);
  }

  return z2 * sum;
}


function intersectLines(x1, y1, x2, y2, x3, y3, x4, y4) {

  if (
    mmax(x1, x2) < mmin(x3, x4) ||
      mmin(x1, x2) > mmax(x3, x4) ||
      mmax(y1, y2) < mmin(y3, y4) ||
      mmin(y1, y2) > mmax(y3, y4)
  ) {
    return;
  }

  var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
      ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
      denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (!denominator) {
    return;
  }

  var px = fixError(nx / denominator),
      py = fixError(ny / denominator),
      px2 = +px.toFixed(2),
      py2 = +py.toFixed(2);

  if (
    px2 < +mmin(x1, x2).toFixed(2) ||
      px2 > +mmax(x1, x2).toFixed(2) ||
      px2 < +mmin(x3, x4).toFixed(2) ||
      px2 > +mmax(x3, x4).toFixed(2) ||
      py2 < +mmin(y1, y2).toFixed(2) ||
      py2 > +mmax(y1, y2).toFixed(2) ||
      py2 < +mmin(y3, y4).toFixed(2) ||
      py2 > +mmax(y3, y4).toFixed(2)
  ) {
    return;
  }

  return { x: px, y: py };
}

function fixError(number) {
  return Math.round(number * 100000000000) / 100000000000;
}

function findBezierIntersections(bez1, bez2, justCount) {
  var bbox1 = bezierBBox(bez1),
      bbox2 = bezierBBox(bez2);

  if (!isBBoxIntersect(bbox1, bbox2)) {
    return justCount ? 0 : [];
  }

  // As an optimization, lines will have only 1 segment

  var l1 = bezlen.apply(0, bez1),
      l2 = bezlen.apply(0, bez2),
      n1 = isLine(bez1) ? 1 : ~~(l1 / 5) || 1,
      n2 = isLine(bez2) ? 1 : ~~(l2 / 5) || 1,
      dots1 = [],
      dots2 = [],
      xy = {},
      res = justCount ? 0 : [];

  for (var i = 0; i < n1 + 1; i++) {
    var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
    dots1.push({ x: p.x, y: p.y, t: i / n1 });
  }

  for (i = 0; i < n2 + 1; i++) {
    p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
    dots2.push({ x: p.x, y: p.y, t: i / n2 });
  }

  for (i = 0; i < n1; i++) {

    for (var j = 0; j < n2; j++) {
      var di = dots1[i],
          di1 = dots1[i + 1],
          dj = dots2[j],
          dj1 = dots2[j + 1],
          ci = abs(di1.x - di.x) < .01 ? 'y' : 'x',
          cj = abs(dj1.x - dj.x) < .01 ? 'y' : 'x',
          is = intersectLines(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y),
          key;

      if (is) {
        key = is.x.toFixed(9) + '#' + is.y.toFixed(9);

        if (xy[key]) {
          continue;
        }

        xy[key] = true;

        var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
            t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);

        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {

          if (justCount) {
            res++;
          } else {
            res.push({
              x: is.x,
              y: is.y,
              t1: t1,
              t2: t2
            });
          }
        }
      }
    }
  }

  return res;
}


/**
 * Find or counts the intersections between two SVG paths.
 *
 * Returns a number in counting mode and a list of intersections otherwise.
 *
 * A single intersection entry contains the intersection coordinates (x, y)
 * as well as additional information regarding the intersecting segments
 * on each path (segment1, segment2) and the relative location of the
 * intersection on these segments (t1, t2).
 *
 * The path may be an SVG path string or a list of path components
 * such as `[ [ 'M', 0, 10 ], [ 'L', 20, 0 ] ]`.
 *
 * @example
 *
 * var intersections = findPathIntersections(
 *   'M0,0L100,100',
 *   [ [ 'M', 0, 100 ], [ 'L', 100, 0 ] ]
 * );
 *
 * // intersections = [
 * //   { x: 50, y: 50, segment1: 1, segment2: 1, t1: 0.5, t2: 0.5 }
 * // ]
 *
 * @param {String|Array<PathDef>} path1
 * @param {String|Array<PathDef>} path2
 * @param {Boolean} [justCount=false]
 *
 * @return {Array<Intersection>|Number}
 */
function findPathIntersections(path1, path2, justCount) {
  path1 = pathToCurve(path1);
  path2 = pathToCurve(path2);

  var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
      res = justCount ? 0 : [];

  for (var i = 0, ii = path1.length; i < ii; i++) {
    var pi = path1[i];

    if (pi[0] == 'M') {
      x1 = x1m = pi[1];
      y1 = y1m = pi[2];
    } else {

      if (pi[0] == 'C') {
        bez1 = [x1, y1].concat(pi.slice(1));
        x1 = bez1[6];
        y1 = bez1[7];
      } else {
        bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
        x1 = x1m;
        y1 = y1m;
      }

      for (var j = 0, jj = path2.length; j < jj; j++) {
        var pj = path2[j];

        if (pj[0] == 'M') {
          x2 = x2m = pj[1];
          y2 = y2m = pj[2];
        } else {

          if (pj[0] == 'C') {
            bez2 = [x2, y2].concat(pj.slice(1));
            x2 = bez2[6];
            y2 = bez2[7];
          } else {
            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
            x2 = x2m;
            y2 = y2m;
          }

          var intr = findBezierIntersections(bez1, bez2, justCount);

          if (justCount) {
            res += intr;
          } else {

            for (var k = 0, kk = intr.length; k < kk; k++) {
              intr[k].segment1 = i;
              intr[k].segment2 = j;
              intr[k].bez1 = bez1;
              intr[k].bez2 = bez2;
            }

            res = res.concat(intr);
          }
        }
      }
    }
  }

  return res;
}


function pathToAbsolute(pathArray) {
  var pth = paths(pathArray);

  if (pth.abs) {
    return pathClone(pth.abs);
  }

  if (!isArray(pathArray) || !isArray(pathArray && pathArray[0])) { // rough assumption
    pathArray = parsePathString(pathArray);
  }

  if (!pathArray || !pathArray.length) {
    return [['M', 0, 0]];
  }

  var res = [],
      x = 0,
      y = 0,
      mx = 0,
      my = 0,
      start = 0,
      pa0;

  if (pathArray[0][0] == 'M') {
    x = +pathArray[0][1];
    y = +pathArray[0][2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }

  for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
    res.push(r = []);
    pa = pathArray[i];
    pa0 = pa[0];

    if (pa0 != pa0.toUpperCase()) {
      r[0] = pa0.toUpperCase();

      switch (r[0]) {
      case 'A':
        r[1] = pa[1];
        r[2] = pa[2];
        r[3] = pa[3];
        r[4] = pa[4];
        r[5] = pa[5];
        r[6] = +pa[6] + x;
        r[7] = +pa[7] + y;
        break;
      case 'V':
        r[1] = +pa[1] + y;
        break;
      case 'H':
        r[1] = +pa[1] + x;
        break;
      case 'M':
        mx = +pa[1] + x;
        my = +pa[2] + y;
      default:
        for (var j = 1, jj = pa.length; j < jj; j++) {
          r[j] = +pa[j] + ((j % 2) ? x : y);
        }
      }
    } else {
      for (var k = 0, kk = pa.length; k < kk; k++) {
        r[k] = pa[k];
      }
    }
    pa0 = pa0.toUpperCase();

    switch (r[0]) {
    case 'Z':
      x = +mx;
      y = +my;
      break;
    case 'H':
      x = r[1];
      break;
    case 'V':
      y = r[1];
      break;
    case 'M':
      mx = r[r.length - 2];
      my = r[r.length - 1];
    default:
      x = r[r.length - 2];
      y = r[r.length - 1];
    }
  }

  res.toString = pathToString;
  pth.abs = pathClone(res);

  return res;
}

function isLine(bez) {
  return (
    bez[0] === bez[2] &&
    bez[1] === bez[3] &&
    bez[4] === bez[6] &&
    bez[5] === bez[7]
  );
}

function lineToCurve(x1, y1, x2, y2) {
  return [
    x1, y1, x2,
    y2, x2, y2
  ];
}

function qubicToCurve(x1, y1, ax, ay, x2, y2) {
  var _13 = 1 / 3,
      _23 = 2 / 3;

  return [
    _13 * x1 + _23 * ax,
    _13 * y1 + _23 * ay,
    _13 * x2 + _23 * ax,
    _13 * y2 + _23 * ay,
    x2,
    y2
  ];
}

function arcToCurve(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {

  // for more information of where this math came from visit:
  // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
  var _120 = PI * 120 / 180,
      rad = PI / 180 * (+angle || 0),
      res = [],
      xy,
      rotate = cacher(function(x, y, rad) {
        var X = x * math.cos(rad) - y * math.sin(rad),
            Y = x * math.sin(rad) + y * math.cos(rad);

        return { x: X, y: Y };
      });

  if (!recursive) {
    xy = rotate(x1, y1, -rad);
    x1 = xy.x;
    y1 = xy.y;
    xy = rotate(x2, y2, -rad);
    x2 = xy.x;
    y2 = xy.y;

    var x = (x1 - x2) / 2,
        y = (y1 - y2) / 2;

    var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);

    if (h > 1) {
      h = math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }

    var rx2 = rx * rx,
        ry2 = ry * ry,
        k = (large_arc_flag == sweep_flag ? -1 : 1) *
            math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
        cx = k * rx * y / ry + (x1 + x2) / 2,
        cy = k * -ry * x / rx + (y1 + y2) / 2,
        f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
        f2 = math.asin(((y2 - cy) / ry).toFixed(9));

    f1 = x1 < cx ? PI - f1 : f1;
    f2 = x2 < cx ? PI - f2 : f2;
    f1 < 0 && (f1 = PI * 2 + f1);
    f2 < 0 && (f2 = PI * 2 + f2);

    if (sweep_flag && f1 > f2) {
      f1 = f1 - PI * 2;
    }
    if (!sweep_flag && f2 > f1) {
      f2 = f2 - PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }

  var df = f2 - f1;

  if (abs(df) > _120) {
    var f2old = f2,
        x2old = x2,
        y2old = y2;

    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * math.cos(f2);
    y2 = cy + ry * math.sin(f2);
    res = arcToCurve(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }

  df = f2 - f1;

  var c1 = math.cos(f1),
      s1 = math.sin(f1),
      c2 = math.cos(f2),
      s2 = math.sin(f2),
      t = math.tan(df / 4),
      hx = 4 / 3 * rx * t,
      hy = 4 / 3 * ry * t,
      m1 = [x1, y1],
      m2 = [x1 + hx * s1, y1 - hy * c1],
      m3 = [x2 + hx * s2, y2 - hy * c2],
      m4 = [x2, y2];

  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];

  if (recursive) {
    return [m2, m3, m4].concat(res);
  } else {
    res = [m2, m3, m4].concat(res).join().split(',');
    var newres = [];

    for (var i = 0, ii = res.length; i < ii; i++) {
      newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }

    return newres;
  }
}

// Returns bounding box of cubic bezier curve.
// Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
// Original version: NISHIO Hirokazu
// Modifications: https://github.com/timo22345
function curveBBox(x0, y0, x1, y1, x2, y2, x3, y3) {
  var tvalues = [],
      bounds = [[], []],
      a, b, c, t, t1, t2, b2ac, sqrtb2ac;

  for (var i = 0; i < 2; ++i) {

    if (i == 0) {
      b = 6 * x0 - 12 * x1 + 6 * x2;
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
      c = 3 * x1 - 3 * x0;
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }

    if (abs(a) < 1e-12) {

      if (abs(b) < 1e-12) {
        continue;
      }

      t = -c / b;

      if (0 < t && t < 1) {
        tvalues.push(t);
      }

      continue;
    }

    b2ac = b * b - 4 * c * a;
    sqrtb2ac = math.sqrt(b2ac);

    if (b2ac < 0) {
      continue;
    }

    t1 = (-b + sqrtb2ac) / (2 * a);

    if (0 < t1 && t1 < 1) {
      tvalues.push(t1);
    }

    t2 = (-b - sqrtb2ac) / (2 * a);

    if (0 < t2 && t2 < 1) {
      tvalues.push(t2);
    }
  }

  var j = tvalues.length,
      jlen = j,
      mt;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
    bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
  }

  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  bounds[0].length = bounds[1].length = jlen + 2;

  return {
    x0: mmin.apply(0, bounds[0]),
    y0: mmin.apply(0, bounds[1]),
    x1: mmax.apply(0, bounds[0]),
    y1: mmax.apply(0, bounds[1])
  };
}

function pathToCurve(path) {

  var pth = paths(path);

  // return cached curve, if existing
  if (pth.curve) {
    return pathClone(pth.curve);
  }

  var curvedPath = pathToAbsolute(path),
      attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
      processPath = function(path, d, pathCommand) {
        var nx, ny;

        if (!path) {
          return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
        }

        !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);

        switch (path[0]) {
        case 'M':
          d.X = path[1];
          d.Y = path[2];
          break;
        case 'A':
          path = ['C'].concat(arcToCurve.apply(0, [d.x, d.y].concat(path.slice(1))));
          break;
        case 'S':
          if (pathCommand == 'C' || pathCommand == 'S') {

            // In 'S' case we have to take into account, if the previous command is C/S.
            nx = d.x * 2 - d.bx;

            // And reflect the previous
            ny = d.y * 2 - d.by;

            // command's control point relative to the current point.
          }
          else {

            // or some else or nothing
            nx = d.x;
            ny = d.y;
          }
          path = ['C', nx, ny].concat(path.slice(1));
          break;
        case 'T':
          if (pathCommand == 'Q' || pathCommand == 'T') {

            // In 'T' case we have to take into account, if the previous command is Q/T.
            d.qx = d.x * 2 - d.qx;

            // And make a reflection similar
            d.qy = d.y * 2 - d.qy;

            // to case 'S'.
          }
          else {

            // or something else or nothing
            d.qx = d.x;
            d.qy = d.y;
          }
          path = ['C'].concat(qubicToCurve(d.x, d.y, d.qx, d.qy, path[1], path[2]));
          break;
        case 'Q':
          d.qx = path[1];
          d.qy = path[2];
          path = ['C'].concat(qubicToCurve(d.x, d.y, path[1], path[2], path[3], path[4]));
          break;
        case 'L':
          path = ['C'].concat(lineToCurve(d.x, d.y, path[1], path[2]));
          break;
        case 'H':
          path = ['C'].concat(lineToCurve(d.x, d.y, path[1], d.y));
          break;
        case 'V':
          path = ['C'].concat(lineToCurve(d.x, d.y, d.x, path[1]));
          break;
        case 'Z':
          path = ['C'].concat(lineToCurve(d.x, d.y, d.X, d.Y));
          break;
        }

        return path;
      },

      fixArc = function(pp, i) {

        if (pp[i].length > 7) {
          pp[i].shift();
          var pi = pp[i];

          while (pi.length) {
            pathCommands[i] = 'A'; // if created multiple C:s, their original seg is saved
            pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)));
          }

          pp.splice(i, 1);
          ii = curvedPath.length;
        }
      },

      pathCommands = [], // path commands of original path p
      pfirst = '', // temporary holder for original path command
      pathCommand = ''; // holder for previous path command of original path

  for (var i = 0, ii = curvedPath.length; i < ii; i++) {
    curvedPath[i] && (pfirst = curvedPath[i][0]); // save current path command

    if (pfirst != 'C') // C is not saved yet, because it may be result of conversion
    {
      pathCommands[i] = pfirst; // Save current path command
      i && (pathCommand = pathCommands[i - 1]); // Get previous path command pathCommand
    }
    curvedPath[i] = processPath(curvedPath[i], attrs, pathCommand); // Previous path command is inputted to processPath

    if (pathCommands[i] != 'A' && pfirst == 'C') pathCommands[i] = 'C'; // A is the only command
    // which may produce multiple C:s
    // so we have to make sure that C is also C in original path

    fixArc(curvedPath, i); // fixArc adds also the right amount of A:s to pathCommands

    var seg = curvedPath[i],
        seglen = seg.length;

    attrs.x = seg[seglen - 2];
    attrs.y = seg[seglen - 1];
    attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
    attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
  }

  // cache curve
  pth.curve = pathClone(curvedPath);

  return curvedPath;
}

module.exports = findPathIntersections;


/***/ }),

/***/ "./node_modules/tiny-svg/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tiny-svg/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   appendTo: () => (/* binding */ appendTo),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   classes: () => (/* binding */ classes),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   createMatrix: () => (/* binding */ createMatrix),
/* harmony export */   createPoint: () => (/* binding */ createPoint),
/* harmony export */   createTransform: () => (/* binding */ createTransform),
/* harmony export */   innerSVG: () => (/* binding */ innerSVG),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prependTo: () => (/* binding */ prependTo),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   transform: () => (/* binding */ transform)
/* harmony export */ });
function ensureImported(element, target) {

  if (element.ownerDocument !== target.ownerDocument) {
    try {

      // may fail on webkit
      return target.ownerDocument.importNode(element, true);
    } catch (e) {

      // ignore
    }
  }

  return element;
}

/**
 * appendTo utility
 */

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the appended node
 */
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}

/**
 * append utility
 */

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
function append(target, node) {
  appendTo(node, target);
  return target;
}

/**
 * attribute accessor utility
 */

var LENGTH_ATTR = 2;

var CSS_PROPERTIES = {
  'alignment-baseline': 1,
  'baseline-shift': 1,
  'clip': 1,
  'clip-path': 1,
  'clip-rule': 1,
  'color': 1,
  'color-interpolation': 1,
  'color-interpolation-filters': 1,
  'color-profile': 1,
  'color-rendering': 1,
  'cursor': 1,
  'direction': 1,
  'display': 1,
  'dominant-baseline': 1,
  'enable-background': 1,
  'fill': 1,
  'fill-opacity': 1,
  'fill-rule': 1,
  'filter': 1,
  'flood-color': 1,
  'flood-opacity': 1,
  'font': 1,
  'font-family': 1,
  'font-size': LENGTH_ATTR,
  'font-size-adjust': 1,
  'font-stretch': 1,
  'font-style': 1,
  'font-variant': 1,
  'font-weight': 1,
  'glyph-orientation-horizontal': 1,
  'glyph-orientation-vertical': 1,
  'image-rendering': 1,
  'kerning': 1,
  'letter-spacing': 1,
  'lighting-color': 1,
  'marker': 1,
  'marker-end': 1,
  'marker-mid': 1,
  'marker-start': 1,
  'mask': 1,
  'opacity': 1,
  'overflow': 1,
  'pointer-events': 1,
  'shape-rendering': 1,
  'stop-color': 1,
  'stop-opacity': 1,
  'stroke': 1,
  'stroke-dasharray': 1,
  'stroke-dashoffset': 1,
  'stroke-linecap': 1,
  'stroke-linejoin': 1,
  'stroke-miterlimit': 1,
  'stroke-opacity': 1,
  'stroke-width': LENGTH_ATTR,
  'text-anchor': 1,
  'text-decoration': 1,
  'text-rendering': 1,
  'unicode-bidi': 1,
  'visibility': 1,
  'word-spacing': 1,
  'writing-mode': 1
};


function getAttribute(node, name) {
  if (CSS_PROPERTIES[name]) {
    return node.style[name];
  } else {
    return node.getAttributeNS(null, name);
  }
}

function setAttribute(node, name, value) {
  var hyphenated = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  var type = CSS_PROPERTIES[hyphenated];

  if (type) {

    // append pixel unit, unless present
    if (type === LENGTH_ATTR && typeof value === 'number') {
      value = String(value) + 'px';
    }

    node.style[hyphenated] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}

function setAttributes(node, attrs) {

  var names = Object.keys(attrs), i, name;

  for (i = 0, name; (name = names[i]); i++) {
    setAttribute(node, name, attrs[name]);
  }
}

/**
 * Gets or sets raw attributes on a node.
 *
 * @param  {SVGElement} node
 * @param  {Object} [attrs]
 * @param  {String} [name]
 * @param  {String} [value]
 *
 * @return {String}
 */
function attr(node, name, value) {
  if (typeof name === 'string') {
    if (value !== undefined) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }

  return node;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
  * Wrap `el` in a `ClassList`.
  *
  * @param {Element} el
  * @return {ClassList}
  * @api public
  */

function classes(el) {
  return new ClassList(el);
}

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
  * Add class `name` if not already present.
  *
  * @param {String} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
  * Remove class `name` when present, or
  * pass a regular expression to remove
  * any which match.
  *
  * @param {String|RegExp} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
  * Remove all classes matching `re`.
  *
  * @param {RegExp} re
  * @return {ClassList}
  * @api private
  */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
  * Toggle class `name`, can force state via `force`.
  *
  * For browsers that support classList, but do not support `force` yet,
  * the mistake will be detected and corrected.
  *
  * @param {String} name
  * @param {Boolean} force
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
  * Return an array of classes.
  *
  * @return {Array}
  * @api public
  */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
  * Check if class `name` is present.
  *
  * @param {String} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.has =
 ClassList.prototype.contains = function(name) {
   return this.list.contains(name);
 };

function remove(element) {
  var parent = element.parentNode;

  if (parent) {
    parent.removeChild(element);
  }

  return element;
}

/**
 * Clear utility
 */

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    remove(child);
  }

  return element;
}

function clone(element) {
  return element.cloneNode(true);
}

var ns = {
  svg: 'http://www.w3.org/2000/svg'
};

/**
 * DOM parsing utility
 */

var SVG_START = '<svg xmlns="' + ns.svg + '"';

function parse(svg) {

  var unwrap = false;

  // ensure we import a valid svg document
  if (svg.substring(0, 4) === '<svg') {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {

    // namespace svg
    svg = SVG_START + '>' + svg + '</svg>';
    unwrap = true;
  }

  var parsed = parseDocument(svg);

  if (!unwrap) {
    return parsed;
  }

  var fragment = document.createDocumentFragment();

  var parent = parsed.firstChild;

  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }

  return fragment;
}

function parseDocument(svg) {

  var parser;

  // parse
  parser = new DOMParser();
  parser.async = false;

  return parser.parseFromString(svg, 'text/xml');
}

/**
 * Create utility for SVG elements
 */


/**
 * Create a specific type from name or SVG markup.
 *
 * @param {String} name the name or markup of the element
 * @param {Object} [attrs] attributes to set on the element
 *
 * @returns {SVGElement}
 */
function create(name, attrs) {
  var element;

  if (name.charAt(0) === '<') {
    element = parse(name).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name);
  }

  if (attrs) {
    attr(element, attrs);
  }

  return element;
}

/**
 * Events handling utility
 */

function on(node, event, listener, useCapture) {
  node.addEventListener(event, listener, useCapture);
}

function off(node, event, listener, useCapture) {
  node.removeEventListener(event, listener, useCapture);
}

/**
 * Geometry helpers
 */

// fake node used to instantiate svg geometry elements
var node = null;

function getNode() {
  if (node === null) {
    node = create('svg');
  }

  return node;
}

function extend(object, props) {
  var i, k, keys = Object.keys(props);

  for (i = 0; (k = keys[i]); i++) {
    object[k] = props[k];
  }

  return object;
}


function createPoint(x, y) {
  var point = getNode().createSVGPoint();

  switch (arguments.length) {
  case 0:
    return point;
  case 2:
    x = {
      x: x,
      y: y
    };
    break;
  }

  return extend(point, x);
}

/**
 * Create matrix via args.
 *
 * @example
 *
 * createMatrix({ a: 1, b: 1 });
 * createMatrix();
 * createMatrix(1, 2, 0, 0, 30, 20);
 *
 * @return {SVGMatrix}
 */
function createMatrix(a, b, c, d, e, f) {
  var matrix = getNode().createSVGMatrix();

  switch (arguments.length) {
  case 0:
    return matrix;
  case 1:
    return extend(matrix, a);
  case 6:
    return extend(matrix, {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    });
  }
}

function createTransform(matrix) {
  if (matrix) {
    return getNode().createSVGTransformFromMatrix(matrix);
  } else {
    return getNode().createSVGTransform();
  }
}

/**
 * Serialization util
 */

var TEXT_ENTITIES = /([&<>]{1})/g;
var ATTR_ENTITIES = /([\n\r"]{1})/g;

var ENTITY_REPLACEMENT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '\''
};

function escape(str, pattern) {

  function replaceFn(match, entity) {
    return ENTITY_REPLACEMENT[entity] || entity;
  }

  return str.replace(pattern, replaceFn);
}

function serialize(node, output) {

  var i, len, attrMap, attrNode, childNodes;

  switch (node.nodeType) {

  // TEXT
  case 3:

    // replace special XML characters
    output.push(escape(node.textContent, TEXT_ENTITIES));
    break;

  // ELEMENT
  case 1:
    output.push('<', node.tagName);

    if (node.hasAttributes()) {
      attrMap = node.attributes;
      for (i = 0, len = attrMap.length; i < len; ++i) {
        attrNode = attrMap.item(i);
        output.push(' ', attrNode.name, '="', escape(attrNode.value, ATTR_ENTITIES), '"');
      }
    }

    if (node.hasChildNodes()) {
      output.push('>');
      childNodes = node.childNodes;
      for (i = 0, len = childNodes.length; i < len; ++i) {
        serialize(childNodes.item(i), output);
      }
      output.push('</', node.tagName, '>');
    } else {
      output.push('/>');
    }
    break;

  // COMMENT
  case 8:
    output.push('<!--', escape(node.nodeValue, TEXT_ENTITIES), '-->');
    break;

  // CDATA
  case 4:
    output.push('<![CDATA[', node.nodeValue, ']]>');
    break;

  default:
    throw new Error('unable to handle node ' + node.nodeType);
  }

  return output;
}

/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */


function set(element, svg) {

  var parsed = parse(svg);

  // clear element contents
  clear(element);

  if (!svg) {
    return;
  }

  if (!isFragment(parsed)) {

    // extract <svg> from parsed document
    parsed = parsed.documentElement;
  }

  var nodes = slice(parsed.childNodes);

  // import + append each node
  for (var i = 0; i < nodes.length; i++) {
    appendTo(nodes[i], element);
  }

}

function get(element) {
  var child = element.firstChild,
      output = [];

  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }

  return output.join('');
}

function isFragment(node) {
  return node.nodeName === '#document-fragment';
}

function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch (e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}


function slice(arr) {
  return Array.prototype.slice.call(arr);
}

/**
 * Selection utilities
 */

function select(node, selector) {
  return node.querySelector(selector);
}

function selectAll(node, selector) {
  var nodes = node.querySelectorAll(selector);

  return [].map.call(nodes, function(element) {
    return element;
  });
}

/**
 * prependTo utility
 */

/**
 * Prepend a node to a target element and return the prepended node.
 *
 * @param  {SVGElement} node
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the prepended node
 */
function prependTo(node, target) {
  return target.insertBefore(ensureImported(node, target), target.firstChild || null);
}

/**
 * prepend utility
 */

/**
 * Prepend a node to a target element
 *
 * @param  {SVGElement} target
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the target element
 */
function prepend(target, node) {
  prependTo(node, target);
  return target;
}

/**
 * Replace utility
 */

function replace(element, replacement) {
  element.parentNode.replaceChild(ensureImported(replacement, element), element);
  return replacement;
}

/**
 * transform accessor utility
 */

function wrapMatrix(transformList, transform) {
  if (transform instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform);
  }

  return transform;
}


function setTransforms(transformList, transforms) {
  var i, t;

  transformList.clear();

  for (i = 0; (t = transforms[i]); i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }
}

/**
 * Get or set the transforms on the given node.
 *
 * @param {SVGElement} node
 * @param  {SVGTransform|SVGMatrix|Array<SVGTransform|SVGMatrix>} [transforms]
 *
 * @return {SVGTransform} the consolidated transform
 */
function transform(node, transforms) {
  var transformList = node.transform.baseVal;

  if (transforms) {

    if (!Array.isArray(transforms)) {
      transforms = [ transforms ];
    }

    setTransforms(transformList, transforms);
  }

  return transformList.consolidate();
}




/***/ }),

/***/ "../bpmn-io/bpmn-js-color-picker/node_modules/min-dash/dist/index.esm.js":
/*!*******************************************************************************!*\
  !*** ../bpmn-io/bpmn-js-color-picker/node_modules/min-dash/dist/index.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   groupBy: () => (/* binding */ groupBy),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   matchPattern: () => (/* binding */ matchPattern),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sortBy: () => (/* binding */ sortBy),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   unionBy: () => (/* binding */ unionBy),
/* harmony export */   uniqueBy: () => (/* binding */ uniqueBy),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  matcher = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matcher(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */
function findIndex(collection, matcher) {

  matcher = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matcher(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */
function filter(collection, matcher) {

  let result = [];

  forEach(collection, function(val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  matcher = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matcher(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : (e) => {
    return e[extractor];
  };
}


function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}




/***/ }),

/***/ "../bpmn-io/bpmn-js/node_modules/min-dash/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ../bpmn-io/bpmn-js/node_modules/min-dash/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   groupBy: () => (/* binding */ groupBy),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   matchPattern: () => (/* binding */ matchPattern),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sortBy: () => (/* binding */ sortBy),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   unionBy: () => (/* binding */ unionBy),
/* harmony export */   uniqueBy: () => (/* binding */ uniqueBy),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][]} arr
 *
 * @return {T[]}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {number}
 */
function findIndex(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Filter elements in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {T[]} result
 */
function filter(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let result = [];

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @template T
 * @param {ArrayCollection<T>} arr
 * @param {Matcher<T>} matcher
 *
 * @return {T[]}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  const matchFn = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matchFn(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @template T
 * @template V
 *
 * @param {Collection<T>} collection
 * @param {(result: V, entry: T, index: any) => V} iterator
 * @param {V} result
 *
 * @return {V} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param {Object|Array} collection
 * @param {Extractor} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @template T
 *
 * @param {Collection<T>} collection
 * @param {Extractor<T, number | string>} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * ```javascript
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 * ```
 *
 * @template T
 *
 * @param {T} pattern
 *
 * @return { (el: any) =>  boolean } matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


/**
 * @param {string | ((e: any) => any) } extractor
 *
 * @return { (e: any) => any }
 */
function toExtractor(extractor) {

  /**
   * @satisfies { (e: any) => any }
   */
  return isFunction(extractor) ? extractor : (e) => {

    // @ts-ignore: just works
    return e[extractor];
  };
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/* global setTimeout clearTimeout */

/**
 * @typedef { {
 *   (...args: any[]): any;
 *   flush: () => void;
 *   cancel: () => void;
 * } } DebouncedFunction
 */

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {DebouncedFunction} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  /**
   * @type { DebouncedFunction }
   */
  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @template T
 *
 * @param {T} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 *
 * @return {T}
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 *
 * @return {any}
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick properties from the given target.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return Pick<T, V>
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return {Omit<T, V>} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}




/***/ }),

/***/ "../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ../bpmn-io/diagram-js/node_modules/min-dash/dist/index.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   groupBy: () => (/* binding */ groupBy),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   matchPattern: () => (/* binding */ matchPattern),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sortBy: () => (/* binding */ sortBy),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   unionBy: () => (/* binding */ unionBy),
/* harmony export */   uniqueBy: () => (/* binding */ uniqueBy),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][]} arr
 *
 * @return {T[]}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {number}
 */
function findIndex(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Filter elements in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {T[]} result
 */
function filter(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let result = [];

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @template T
 * @param {ArrayCollection<T>} arr
 * @param {Matcher<T>} matcher
 *
 * @return {T[]}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  const matchFn = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matchFn(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @template T
 * @template V
 *
 * @param {Collection<T>} collection
 * @param {(result: V, entry: T, index: any) => V} iterator
 * @param {V} result
 *
 * @return {V} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param {Object|Array} collection
 * @param {Extractor} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @template T
 *
 * @param {Collection<T>} collection
 * @param {Extractor<T, number | string>} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * ```javascript
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 * ```
 *
 * @template T
 *
 * @param {T} pattern
 *
 * @return { (el: any) =>  boolean } matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


/**
 * @param {string | ((e: any) => any) } extractor
 *
 * @return { (e: any) => any }
 */
function toExtractor(extractor) {

  /**
   * @satisfies { (e: any) => any }
   */
  return isFunction(extractor) ? extractor : (e) => {

    // @ts-ignore: just works
    return e[extractor];
  };
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/* global setTimeout clearTimeout */

/**
 * @typedef { {
 *   (...args: any[]): any;
 *   flush: () => void;
 *   cancel: () => void;
 * } } DebouncedFunction
 */

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {DebouncedFunction} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  /**
   * @type { DebouncedFunction }
   */
  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @template T
 *
 * @param {T} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 *
 * @return {T}
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 *
 * @return {any}
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick properties from the given target.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return Pick<T, V>
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return {Omit<T, V>} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}




/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   groupBy: () => (/* binding */ groupBy),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   matchPattern: () => (/* binding */ matchPattern),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sortBy: () => (/* binding */ sortBy),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   unionBy: () => (/* binding */ unionBy),
/* harmony export */   uniqueBy: () => (/* binding */ uniqueBy),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][]} arr
 *
 * @return {T[]}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {number}
 */
function findIndex(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Filter elements in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {T[]} result
 */
function filter(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let result = [];

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @template T
 * @param {ArrayCollection<T>} arr
 * @param {Matcher<T>} matcher
 *
 * @return {T[]}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  const matchFn = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matchFn(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @template T
 * @template V
 *
 * @param {Collection<T>} collection
 * @param {(result: V, entry: T, index: any) => V} iterator
 * @param {V} result
 *
 * @return {V} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param {Object|Array} collection
 * @param {Extractor} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @template T
 *
 * @param {Collection<T>} collection
 * @param {Extractor<T, number | string>} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * ```javascript
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 * ```
 *
 * @template T
 *
 * @param {T} pattern
 *
 * @return { (el: any) =>  boolean } matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


/**
 * @param {string | ((e: any) => any) } extractor
 *
 * @return { (e: any) => any }
 */
function toExtractor(extractor) {

  /**
   * @satisfies { (e: any) => any }
   */
  return isFunction(extractor) ? extractor : (e) => {

    // @ts-ignore: just works
    return e[extractor];
  };
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/* global setTimeout clearTimeout */

/**
 * @typedef { {
 *   (...args: any[]): any;
 *   flush: () => void;
 *   cancel: () => void;
 * } } DebouncedFunction
 */

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {DebouncedFunction} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  /**
   * @type { DebouncedFunction }
   */
  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @template T
 *
 * @param {T} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 *
 * @return {T}
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 *
 * @return {any}
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick properties from the given target.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return Pick<T, V>
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return {Omit<T, V>} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}




/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/features/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppendNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppendNode */ "./src/features/AppendNode.js");
/* harmony import */ var _AppendNodeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppendNodeProvider */ "./src/features/AppendNodeProvider.js");
/* harmony import */ var _BoundaryEventAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoundaryEventAppender */ "./src/features/BoundaryEventAppender.js");
/* harmony import */ var _BoundaryEventAppenderProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoundaryEventAppenderProvider */ "./src/features/BoundaryEventAppenderProvider.js");
/* harmony import */ var _ContextPad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextPad */ "./src/features/ContextPad.js");
/* harmony import */ var _ContextPadProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContextPadProvider */ "./src/features/ContextPadProvider.js");
/* harmony import */ var bpmn_js_create_append_anything__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bpmn-js-create-append-anything */ "./node_modules/bpmn-js-create-append-anything/dist/index.es.js");
/* harmony import */ var _CustomAppendMenuProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomAppendMenuProvider */ "./src/features/CustomAppendMenuProvider.js");
/* harmony import */ var bpmn_js_lib_features_append_preview_AppendPreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bpmn-js/lib/features/append-preview/AppendPreview */ "../bpmn-io/bpmn-js/lib/features/append-preview/AppendPreview.js");
/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Connect */ "./src/features/Connect.js");
/* harmony import */ var bpmn_js_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bpmn-js-color-picker */ "../bpmn-io/bpmn-js-color-picker/index.js");
/* harmony import */ var diagram_js_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! diagram-js-grid */ "./node_modules/diagram-js-grid/dist/index.esm.js");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __init__: ['contextPad', 'contextPadProvider', 'appendNode', 'appendNodeProvider', 'boundaryEventAppender', 'boundaryEventAppenderProvider', 'appendMenuProvider', 'appendPreview', 'connect'],
  __depends__: [bpmn_js_create_append_anything__WEBPACK_IMPORTED_MODULE_6__.CreateAppendAnythingModule, bpmn_js_color_picker__WEBPACK_IMPORTED_MODULE_9__["default"], diagram_js_grid__WEBPACK_IMPORTED_MODULE_10__["default"]],
  contextPad: ['type', _ContextPad__WEBPACK_IMPORTED_MODULE_4__["default"]],
  contextPadProvider: ['type', _ContextPadProvider__WEBPACK_IMPORTED_MODULE_5__["default"]],
  appendNode: ['type', _AppendNode__WEBPACK_IMPORTED_MODULE_0__["default"]],
  appendNodeProvider: ['type', _AppendNodeProvider__WEBPACK_IMPORTED_MODULE_1__["default"]],
  boundaryEventAppender: ['type', _BoundaryEventAppender__WEBPACK_IMPORTED_MODULE_2__["default"]],
  boundaryEventAppenderProvider: ['type', _BoundaryEventAppenderProvider__WEBPACK_IMPORTED_MODULE_3__["default"]],
  appendMenuProvider: ['type', _CustomAppendMenuProvider__WEBPACK_IMPORTED_MODULE_7__["default"]],
  appendContextPadProvider: ['value', null],
  appendPreview: ['type', bpmn_js_lib_features_append_preview_AppendPreview__WEBPACK_IMPORTED_MODULE_11__["default"]],
  connect: ['type', _Connect__WEBPACK_IMPORTED_MODULE_8__["default"]]
});
})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
