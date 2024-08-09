"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = unclipArea;
exports.B = exports.A = void 0;
exports.C = _isPointInArea;
exports.D = getAngleFromPoint;
exports.E = toPadding;
exports.F = each;
exports.G = getMaximumSize;
exports.H = void 0;
exports.I = _getParentNode;
exports.J = readUsedSize;
exports.K = void 0;
exports.L = throttled;
exports.M = _isDomSupported;
exports.N = _factorize;
exports.O = finiteOrDefault;
exports.P = void 0;
exports.Q = callback;
exports.R = _addGrace;
exports.S = _limitValue;
exports.T = void 0;
exports.U = toDegrees;
exports.V = _measureText;
exports.W = _int16Range;
exports.X = _alignPixel;
exports.Y = clipArea;
exports.Z = renderText;
exports._ = _arrayUnique;
exports.a = resolve;
exports.a$ = fontString;
exports.a0 = toFont;
exports.a3 = exports.a2 = exports.a1 = void 0;
exports.a4 = merge;
exports.a5 = _capitalize;
exports.a7 = exports.a6 = void 0;
exports.a8 = _attachContext;
exports.a9 = _createResolver;
exports.aA = overrideTextDirection;
exports.aB = void 0;
exports.aC = restoreTextDirection;
exports.aD = drawPointLegend;
exports.aE = distanceBetweenPoints;
exports.aF = noop;
exports.aG = _setMinAndMaxByKey;
exports.aH = niceNum;
exports.aI = almostWhole;
exports.aJ = almostEquals;
exports.aK = _decimalPlaces;
exports.aM = exports.aL = void 0;
exports.aN = _longestText;
exports.aO = _filterBetween;
exports.aP = _lookup;
exports.aQ = isPatternOrGradient;
exports.aR = getHoverColor;
exports.aS = clone;
exports.aT = _merger;
exports.aU = _mergerIf;
exports.aV = _deprecated;
exports.aW = _splitKey;
exports.aX = toFontString;
exports.aY = splineCurve;
exports.aZ = splineCurveMonotone;
exports.a_ = getStyle;
exports.aa = _descriptors;
exports.ab = mergeIf;
exports.ac = void 0;
exports.ad = debounce;
exports.ae = retinaScale;
exports.af = clearCanvas;
exports.ag = void 0;
exports.ah = _elementsEqual;
exports.ai = _isClickEvent;
exports.aj = _isBetween;
exports.ak = _readValueToProps;
exports.al = _updateBezierControlPoints;
exports.am = _computeSegments;
exports.an = _boundSegments;
exports.ao = _steppedInterpolation;
exports.ap = _bezierInterpolation;
exports.aq = _pointInLine;
exports.ar = _steppedLineTo;
exports.as = _bezierCurveTo;
exports.at = drawPoint;
exports.au = addRoundedRectPath;
exports.av = toTRBL;
exports.aw = toTRBLCorners;
exports.ax = _boundSegment;
exports.ay = _normalizeAngle;
exports.az = getRtlAdapter;
exports.b = isArray;
exports.b0 = toLineHeight;
exports.b5 = exports.b4 = exports.b3 = exports.b2 = exports.b1 = void 0;
exports.b6 = _angleDiff;
exports.c = color;
exports.e = exports.d = void 0;
exports.f = resolveObjectKey;
exports.g = isNumberFinite;
exports.h = void 0;
exports.i = isObject;
exports.j = createContext;
exports.k = isNullOrUndef;
exports.l = listenArrayEvents;
exports.n = exports.m = void 0;
exports.o = formatNumber;
exports.p = _angleBetween;
exports.q = _getStartAndCountOfVisiblePoints;
exports.s = exports.r = void 0;
exports.t = toRadians;
exports.u = unlistenArrayEvents;
exports.v = valueOrDefault;
exports.w = _scaleRangesChanged;
exports.x = isNumber;
exports.y = _parseObjectDataRadialScale;
exports.z = getRelativePosition;
var _color = require("@kurkle/color");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } /*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
/**
 * @namespace Chart.helpers
 */ /**
    * An empty function that can be used, for example, for optional callback.
    */
function noop() {
  /* noop */}
/**
 * Returns a unique id, sequentially generated from a global variable.
 */
var uid = exports.ac = function () {
  var id = 0;
  return function () {
    return id++;
  };
}();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  var type = Object.prototype.toString.call(value);
  if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') {
    return true;
  }
  return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */
function isNumberFinite(value) {
  return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
var toPercentage = exports.m = function toPercentage(value, dimension) {
  return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
};
var toDimension = exports.n = function toDimension(value, dimension) {
  return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
};
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  var i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */
function _elementsEqual(a0, a1) {
  var i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */
function clone(source) {
  if (isArray(source)) {
    return source.map(clone);
  }
  if (isObject(source)) {
    var target = Object.create(null);
    var keys = Object.keys(source);
    var klen = keys.length;
    var k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  var tval = target[key];
  var sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
  } else {
    target[key] = clone(sval);
  }
}
function merge(target, source, options) {
  var sources = isArray(source) ? source : [source];
  var ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  var merger = options.merger || _merger;
  var current;
  for (var i = 0; i < ilen; ++i) {
    current = sources[i];
    if (!isObject(current)) {
      continue;
    }
    var keys = Object.keys(current);
    for (var k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, current, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return merge(target, source, {
    merger: _mergerIf
  });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  var tval = target[key];
  var sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone(sval);
  }
}
/**
 * @private
 */
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
  }
}
// resolveObjectKey resolver cache
var keyResolvers = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  '': function _(v) {
    return v;
  },
  // default resolvers
  x: function x(o) {
    return o.x;
  },
  y: function y(o) {
    return o.y;
  }
};
/**
 * @private
 */
function _splitKey(key) {
  var parts = key.split('.');
  var keys = [];
  var tmp = '';
  var _iterator = _createForOfIteratorHelper(parts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;
      tmp += part;
      if (tmp.endsWith('\\')) {
        tmp = tmp.slice(0, -1) + '.';
      } else {
        keys.push(tmp);
        tmp = '';
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return keys;
}
function _getKeyResolver(key) {
  var keys = _splitKey(key);
  return function (obj) {
    var _iterator2 = _createForOfIteratorHelper(keys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var k = _step2.value;
        if (k === '') {
          break;
        }
        obj = obj && obj[k];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return obj;
  };
}
function resolveObjectKey(obj, key) {
  var resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
  return resolver(obj);
}
/**
 * @private
 */
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var defined = exports.h = function defined(value) {
  return typeof value !== 'undefined';
};
var isFunction = exports.a7 = function isFunction(value) {
  return typeof value === 'function';
};
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
var setsEqual = exports.ag = function setsEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  var _iterator3 = _createForOfIteratorHelper(a),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      if (!b.has(item)) {
        return false;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return true;
};
/**
 * @param e - The event
 * @private
 */
function _isClickEvent(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

/**
 * @alias Chart.helpers.math
 * @namespace
 */
var PI = exports.P = Math.PI;
var TAU = exports.T = 2 * PI;
var PITAU = exports.b1 = TAU + PI;
var INFINITY = exports.b2 = Number.POSITIVE_INFINITY;
var RAD_PER_DEG = exports.b3 = PI / 180;
var HALF_PI = exports.H = PI / 2;
var QUARTER_PI = exports.b4 = PI / 4;
var TWO_THIRDS_PI = exports.b5 = PI * 2 / 3;
var log10 = exports.aM = Math.log10;
var sign = exports.s = Math.sign;
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */
function niceNum(range) {
  var roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  var niceRange = Math.pow(10, Math.floor(log10(range)));
  var fraction = range / niceRange;
  var niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */
function _factorize(value) {
  var result = [];
  var sqrt = Math.sqrt(value);
  var i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort(function (a, b) {
    return a - b;
  }).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
  var rounded = Math.round(x);
  return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */
function _setMinAndMaxByKey(array, target, property) {
  var i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  var e = 1;
  var p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
  var distanceFromXCenter = anglePoint.x - centrePoint.x;
  var distanceFromYCenter = anglePoint.y - centrePoint.y;
  var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < -0.5 * PI) {
    angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
  }
  return {
    angle: angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  var a = _normalizeAngle(angle);
  var s = _normalizeAngle(start);
  var e = _normalizeAngle(end);
  var angleToStart = _normalizeAngle(s - a);
  var angleToEnd = _normalizeAngle(e - a);
  var startToAngle = _normalizeAngle(a - s);
  var endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */
function _isBetween(value, start, end) {
  var epsilon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
  cmp = cmp || function (index) {
    return table[index] < value;
  };
  var hi = table.length - 1;
  var lo = 0;
  var mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {
    lo: lo,
    hi: hi
  };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */
var _lookupByKey = exports.B = function _lookupByKey(table, key, value, last) {
  return _lookup(table, value, last ? function (index) {
    var ti = table[index][key];
    return ti < value || ti === value && table[index + 1][key] === value;
  } : function (index) {
    return table[index][key] < value;
  });
};
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */
var _rlookupByKey = exports.A = function _rlookupByKey(table, key, value) {
  return _lookup(table, value, function (index) {
    return table[index][key] >= value;
  });
};
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */
function _filterBetween(values, min, max) {
  var start = 0;
  var end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length ? values.slice(start, end) : values;
}
var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(function (key) {
    var method = '_onData' + _capitalize(key);
    var base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value: function value() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var res = base.apply(this, args);
        array._chartjs.listeners.forEach(function (object) {
          if (typeof object[method] === 'function') {
            object[method].apply(object, args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  var stub = array._chartjs;
  if (!stub) {
    return;
  }
  var listeners = stub.listeners;
  var index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach(function (key) {
    delete array[key];
  });
  delete array._chartjs;
}
/**
 * @param items
 */
function _arrayUnique(items) {
  var set = new Set(items);
  if (set.size === items.length) {
    return items;
  }
  return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/
var requestAnimFrame = exports.r = function () {
  if (typeof window === 'undefined') {
    return function (callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */
function throttled(fn, thisArg) {
  var argsToUse = [];
  var ticking = false;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    // Save the args for use later
    argsToUse = args;
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, function () {
        ticking = false;
        fn.apply(thisArg, argsToUse);
      });
    }
  };
}
/**
 * Debounces calling `fn` for `delay` ms
 */
function debounce(fn, delay) {
  var timeout;
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */
var _toLeftRightCenter = exports.a1 = function _toLeftRightCenter(align) {
  return align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
};
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */
var _alignStartEnd = exports.a2 = function _alignStartEnd(align, start, end) {
  return align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
};
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */
var _textX = exports.aB = function _textX(align, left, right, rtl) {
  var check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */
function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  var pointCount = points.length;
  var start = 0;
  var count = pointCount;
  if (meta._sorted) {
    var iScale = meta.iScale,
      _parsed = meta._parsed;
    var axis = iScale.axis;
    var _iScale$getUserBounds = iScale.getUserBounds(),
      min = _iScale$getUserBounds.min,
      max = _iScale$getUserBounds.max,
      minDefined = _iScale$getUserBounds.minDefined,
      maxDefined = _iScale$getUserBounds.maxDefined;
    if (minDefined) {
      start = _limitValue(Math.min(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, axis, min).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(Math.max(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {
    start: start,
    count: count
  };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */
function _scaleRangesChanged(meta) {
  var xScale = meta.xScale,
    yScale = meta.yScale,
    _scaleRanges = meta._scaleRanges;
  var newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  var changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}
var atEdge = function atEdge(t) {
  return t === 0 || t === 1;
};
var elasticIn = function elasticIn(t, s, p) {
  return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
};
var elasticOut = function elasticOut(t, s, p) {
  return Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
};
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */
var effects = exports.e = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return -t * (t - 2);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return (t -= 1) * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return -((t -= 1) * t * t * t - 1);
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return (t -= 1) * t * t * t * t + 1;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  easeInSine: function easeInSine(t) {
    return -Math.cos(t * HALF_PI) + 1;
  },
  easeOutSine: function easeOutSine(t) {
    return Math.sin(t * HALF_PI);
  },
  easeInOutSine: function easeInOutSine(t) {
    return -0.5 * (Math.cos(PI * t) - 1);
  },
  easeInExpo: function easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  },
  easeOutExpo: function easeOutExpo(t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  },
  easeInOutExpo: function easeInOutExpo(t) {
    return atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2);
  },
  easeInCirc: function easeInCirc(t) {
    return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
  },
  easeOutCirc: function easeOutCirc(t) {
    return Math.sqrt(1 - (t -= 1) * t);
  },
  easeInOutCirc: function easeInOutCirc(t) {
    return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  easeInElastic: function easeInElastic(t) {
    return atEdge(t) ? t : elasticIn(t, 0.075, 0.3);
  },
  easeOutElastic: function easeOutElastic(t) {
    return atEdge(t) ? t : elasticOut(t, 0.075, 0.3);
  },
  easeInOutElastic: function easeInOutElastic(t) {
    var s = 0.1125;
    var p = 0.45;
    return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack: function easeInBack(t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack: function easeOutBack(t) {
    var s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack: function easeInOutBack(t) {
    var s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },
  easeInBounce: function easeInBounce(t) {
    return 1 - effects.easeOutBounce(1 - t);
  },
  easeOutBounce: function easeOutBounce(t) {
    var m = 7.5625;
    var d = 2.75;
    if (t < 1 / d) {
      return m * t * t;
    }
    if (t < 2 / d) {
      return m * (t -= 1.5 / d) * t + 0.75;
    }
    if (t < 2.5 / d) {
      return m * (t -= 2.25 / d) * t + 0.9375;
    }
    return m * (t -= 2.625 / d) * t + 0.984375;
  },
  easeInOutBounce: function easeInOutBounce(t) {
    return t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
};
function isPatternOrGradient(value) {
  if (value && _typeof(value) === 'object') {
    var type = value.toString();
    return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
  }
  return false;
}
function color(value) {
  return isPatternOrGradient(value) ? value : new _color.Color(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value) ? value : new _color.Color(value).saturate(0.5).darken(0.1).hexString();
}
var numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
var colors = ['color', 'borderColor', 'backgroundColor'];
function applyAnimationsDefaults(defaults) {
  defaults.set('animation', {
    delay: undefined,
    duration: 1000,
    easing: 'easeOutQuart',
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  defaults.describe('animation', {
    _fallback: false,
    _indexable: false,
    _scriptable: function _scriptable(name) {
      return name !== 'onProgress' && name !== 'onComplete' && name !== 'fn';
    }
  });
  defaults.set('animations', {
    colors: {
      type: 'color',
      properties: colors
    },
    numbers: {
      type: 'number',
      properties: numbers
    }
  });
  defaults.describe('animations', {
    _fallback: 'animation'
  });
  defaults.set('transitions', {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: 'transparent'
        },
        visible: {
          type: 'boolean',
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: 'transparent'
        },
        visible: {
          type: 'boolean',
          easing: 'linear',
          fn: function fn(v) {
            return v | 0;
          }
        }
      }
    }
  });
}
function applyLayoutsDefaults(defaults) {
  defaults.set('layout', {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
var intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  var cacheKey = locale + JSON.stringify(options);
  var formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}
var formatters = {
  values: function values(value) {
    return isArray(value) ? value : '' + value;
  },
  numeric: function numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    var locale = this.chart.options.locale;
    var notation;
    var delta = tickValue;
    if (ticks.length > 1) {
      var maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    var logDelta = log10(Math.abs(delta));
    var numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    var options = {
      notation: notation,
      minimumFractionDigits: numDecimal,
      maximumFractionDigits: numDecimal
    };
    Object.assign(options, this.options.ticks.format);
    return formatNumber(tickValue, locale, options);
  },
  logarithmic: function logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    var remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
    if ([1, 2, 3, 5, 10, 15].includes(remain) || index > 0.8 * ticks.length) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  var delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = exports.aL = {
  formatters: formatters
};
function applyScaleDefaults(defaults) {
  defaults.set('scale', {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: 'ticks',
    clip: true,
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: function tickWidth(_ctx, options) {
        return options.lineWidth;
      },
      tickColor: function tickColor(_ctx, options) {
        return options.color;
      },
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0.0,
      width: 1
    },
    title: {
      display: false,
      text: '',
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ticks.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: false,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2
    }
  });
  defaults.route('scale.ticks', 'color', '', 'color');
  defaults.route('scale.grid', 'color', '', 'borderColor');
  defaults.route('scale.border', 'color', '', 'borderColor');
  defaults.route('scale.title', 'color', '', 'color');
  defaults.describe('scale', {
    _fallback: false,
    _scriptable: function _scriptable(name) {
      return !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser';
    },
    _indexable: function _indexable(name) {
      return name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash';
    }
  });
  defaults.describe('scales', {
    _fallback: 'scale'
  });
  defaults.describe('scale.ticks', {
    _scriptable: function _scriptable(name) {
      return name !== 'backdropPadding' && name !== 'callback';
    },
    _indexable: function _indexable(name) {
      return name !== 'backdropPadding';
    }
  });
}
var overrides = exports.a3 = Object.create(null);
var descriptors = exports.a6 = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  var keys = key.split('.');
  for (var i = 0, n = keys.length; i < n; ++i) {
    var k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function _set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
var Defaults = /*#__PURE__*/function () {
  function Defaults(_descriptors, _appliers) {
    _classCallCheck(this, Defaults);
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = function (context) {
      return context.chart.platform.getDevicePixelRatio();
    };
    this.elements = {};
    this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = function (ctx, options) {
      return getHoverColor(options.backgroundColor);
    };
    this.hoverBorderColor = function (ctx, options) {
      return getHoverColor(options.borderColor);
    };
    this.hoverColor = function (ctx, options) {
      return getHoverColor(options.color);
    };
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_descriptors);
    this.apply(_appliers);
  }
  return _createClass(Defaults, [{
    key: "set",
    value: function set(scope, values) {
      return _set(this, scope, values);
    }
  }, {
    key: "get",
    value: function get(scope) {
      return getScope$1(this, scope);
    }
  }, {
    key: "describe",
    value: function describe(scope, values) {
      return _set(descriptors, scope, values);
    }
  }, {
    key: "override",
    value: function override(scope, values) {
      return _set(overrides, scope, values);
    }
  }, {
    key: "route",
    value: function route(scope, name, targetScope, targetName) {
      var scopeObject = getScope$1(this, scope);
      var targetScopeObject = getScope$1(this, targetScope);
      var privateName = '_' + name;
      Object.defineProperties(scopeObject, _defineProperty(_defineProperty({}, privateName, {
        value: scopeObject[name],
        writable: true
      }), name, {
        enumerable: true,
        get: function get() {
          var local = this[privateName];
          var target = targetScopeObject[targetName];
          if (isObject(local)) {
            return Object.assign({}, target, local);
          }
          return valueOrDefault(local, target);
        },
        set: function set(value) {
          this[privateName] = value;
        }
      }));
    }
  }, {
    key: "apply",
    value: function apply(appliers) {
      var _this = this;
      appliers.forEach(function (apply) {
        return apply(_this);
      });
    }
  }]);
}();
var defaults = exports.d = /* #__PURE__ */new Defaults({
  _scriptable: function _scriptable(name) {
    return !name.startsWith('on');
  },
  _indexable: function _indexable(name) {
    return name !== 'events';
  },
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [applyAnimationsDefaults, applyLayoutsDefaults, applyScaleDefaults]);

/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */
function _measureText(ctx, data, gc, longest, string) {
  var textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  var data = cache.data = cache.data || {};
  var gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  var longest = 0;
  var ilen = arrayOfThings.length;
  var i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    // Undefined strings and arrays should not be measured
    if (thing !== undefined && thing !== null && !isArray(thing)) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      // if it is an array lets measure each element
      // to do maybe simplify this function a bit so we can do this more recursively?
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        // Undefined strings and arrays should not be measured
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  var gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */
function _alignPixel(chart, pixel, width) {
  var devicePixelRatio = chart.currentDevicePixelRatio;
  var halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */
function clearCanvas(canvas, ctx) {
  if (!ctx && !canvas) {
    return;
  }
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  // canvas.width and canvas.height do not consider the canvas transform,
  // while clearRect does
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  drawPointLegend(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function drawPointLegend(ctx, options, x, y, w) {
  var type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
  var style = options.pointStyle;
  var rotation = options.rotation;
  var radius = options.radius;
  var rad = (rotation || 0) * RAD_PER_DEG;
  if (style && _typeof(style) === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
    // Default includes circle
    default:
      if (w) {
        ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
      } else {
        ctx.arc(x, y, radius, 0, TAU);
      }
      ctx.closePath();
      break;
    case 'triangle':
      width = w ? w / 2 : radius;
      ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;
    case 'rectRounded':
      // NOTE: the rounded rect implementation changed to use `arc` instead of
      // `quadraticCurveTo` since it generates better results when rect is
      // almost a circle. 0.516 (instead of 0.5) produces results with visually
      // closer proportion to the previous impl and it is inscribed in the
      // circle with `radius`. For more details, see the following PRs:
      // https://github.com/chartjs/Chart.js/issues/5597
      // https://github.com/chartjs/Chart.js/issues/5858
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + QUARTER_PI) * size;
      xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      yOffset = Math.sin(rad + QUARTER_PI) * size;
      yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
      ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
      ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
      ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
      ctx.closePath();
      break;
    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        width = w ? w / 2 : size;
        ctx.rect(x - width, y - size, 2 * width, 2 * size);
        break;
      }
      rad += QUARTER_PI;
    /* falls through */
    case 'rectRot':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      ctx.closePath();
      break;
    case 'crossRot':
      rad += QUARTER_PI;
    /* falls through */
    case 'cross':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'star':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      rad += QUARTER_PI;
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'line':
      xOffset = w ? w / 2 : Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;
    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
      break;
    case false:
      ctx.closePath();
      break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5; // margin - default is to match rounded decimals
  return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
/**
 * @private
 */
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    var midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    /**
    * Now that IE11 support has been dropped, we can use more
    * of the TextMetrics object. The actual bounding boxes
    * are unflagged in Chrome, Firefox, Edge, and Safari so they
    * can be safely used.
    * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
    */
    var metrics = ctx.measureText(line);
    var left = x - metrics.actualBoundingBoxLeft;
    var right = x + metrics.actualBoundingBoxRight;
    var top = y - metrics.actualBoundingBoxAscent;
    var bottom = y + metrics.actualBoundingBoxDescent;
    var yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function drawBackdrop(ctx, opts) {
  var oldColor = ctx.fillStyle;
  ctx.fillStyle = opts.color;
  ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
  ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */
function renderText(ctx, text, x, y, font) {
  var opts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var lines = isArray(text) ? text : [text];
  var stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  var i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (opts.backdrop) {
      drawBackdrop(ctx, opts.backdrop);
    }
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += Number(font.lineHeight);
  }
  ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */
function addRoundedRectPath(ctx, rect) {
  var x = rect.x,
    y = rect.y,
    w = rect.w,
    h = rect.h,
    radius = rect.radius;
  // top left arc
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
  // line from top left to bottom left
  ctx.lineTo(x, y + h - radius.bottomLeft);
  // bottom left arc
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  // line from bottom left to bottom right
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  // bottom right arc
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  // line from bottom right to top right
  ctx.lineTo(x + w, y + radius.topRight);
  // top right arc
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  // line from top right to top left
  ctx.lineTo(x + radius.topLeft, y);
}
var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
    * Converts the given line height `value` in pixels for a specific font `size`.
    * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
    * @param size - The font size (in pixels) used to resolve relative `value`.
    * @returns The effective line height in pixels (size * 1.2 if value is invalid).
    * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
    * @since 2.7.0
    */
function toLineHeight(value, size) {
  var matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
    case 'px':
      return value;
    case '%':
      value /= 100;
      break;
  }
  return size * value;
}
var numberOrZero = function numberOrZero(v) {
  return +v || 0;
};
function _readValueToProps(value, props) {
  var ret = {};
  var objProps = isObject(props);
  var keys = objProps ? Object.keys(props) : props;
  var read = isObject(value) ? objProps ? function (prop) {
    return valueOrDefault(value[prop], value[props[prop]]);
  } : function (prop) {
    return value[prop];
  } : function () {
    return value;
  };
  var _iterator4 = _createForOfIteratorHelper(keys),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var prop = _step4.value;
      ret[prop] = numberOrZero(read(prop));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */
function toTRBL(value) {
  return _readValueToProps(value, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x'
  });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */
function toPadding(value) {
  var obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  var size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  var style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = undefined;
  }
  var font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size: size,
    style: style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */
function resolve(inputs, context, index, info) {
  var cacheable = true;
  var i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */
function _addGrace(minmax, grace, beginAtZero) {
  var min = minmax.min,
    max = minmax.max;
  var change = toDimension(grace, (max - min) / 2);
  var keepZero = function keepZero(value, add) {
    return beginAtZero && value === 0 ? 0 : value + add;
  };
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}

/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */
function _createResolver(scopes) {
  var prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [''];
  var rootScopes = arguments.length > 2 ? arguments[2] : undefined;
  var fallback = arguments.length > 3 ? arguments[3] : undefined;
  var getTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
    return scopes[0];
  };
  var finalRootScopes = rootScopes || scopes;
  if (typeof fallback === 'undefined') {
    fallback = _resolve('_fallback', scopes);
  }
  var cache = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, 'Object'), "_cacheable", true), "_scopes", scopes), "_rootScopes", finalRootScopes), "_fallback", fallback), "_getTarget", getTarget), "override", function override(scope) {
    return _createResolver([scope].concat(_toConsumableArray(scopes)), prefixes, finalRootScopes, fallback);
  });
  return new Proxy(cache, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty: function deleteProperty(target, prop) {
      delete target[prop]; // remove from cache
      delete target._keys; // remove cached keys
      delete scopes[0][prop]; // remove from top level scope
      return true;
    },
    /**
    * A trap for getting property values.
    */
    get: function get(target, prop) {
      return _cached(target, prop, function () {
        return _resolveWithPrefixes(prop, prefixes, scopes, target);
      });
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf: function getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    /**
    * A trap for the in operator.
    */
    has: function has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys: function ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    /**
    * A trap for setting property values.
    */
    set: function set(target, prop, value) {
      var storage = target._storage || (target._storage = getTarget());
      target[prop] = storage[prop] = value; // set to top level scope + cache
      delete target._keys; // remove cached keys
      return true;
    }
  });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  var cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: function setContext(ctx) {
      return _attachContext(proxy, ctx, subProxy, descriptorDefaults);
    },
    override: function override(scope) {
      return _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults);
    }
  };
  return new Proxy(cache, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty: function deleteProperty(target, prop) {
      delete target[prop]; // remove from cache
      delete proxy[prop]; // remove from proxy
      return true;
    },
    /**
    * A trap for getting property values.
    */
    get: function get(target, prop, receiver) {
      return _cached(target, prop, function () {
        return _resolveWithContext(target, prop, receiver);
      });
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
        enumerable: true,
        configurable: true
      } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf: function getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    /**
    * A trap for the in operator.
    */
    has: function has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys: function ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    /**
    * A trap for setting property values.
    */
    set: function set(target, prop, value) {
      proxy[prop] = value; // set to proxy
      delete target[prop]; // remove from cache
      return true;
    }
  });
}
/**
 * @private
 */
function _descriptors(proxy) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    scriptable: true,
    indexable: true
  };
  var _proxy$_scriptable = proxy._scriptable,
    _scriptable = _proxy$_scriptable === void 0 ? defaults.scriptable : _proxy$_scriptable,
    _proxy$_indexable = proxy._indexable,
    _indexable = _proxy$_indexable === void 0 ? defaults.indexable : _proxy$_indexable,
    _proxy$_allKeys = proxy._allKeys,
    _allKeys = _proxy$_allKeys === void 0 ? defaults.allKeys : _proxy$_allKeys;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : function () {
      return _scriptable;
    },
    isIndexable: isFunction(_indexable) ? _indexable : function () {
      return _indexable;
    }
  };
}
var readKey = function readKey(prefix, name) {
  return prefix ? prefix + _capitalize(name) : name;
};
var needsSubResolver = function needsSubResolver(prop, value) {
  return isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
};
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop) || prop === 'constructor') {
    return target[prop];
  }
  var value = resolve();
  // cache the resolved value
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  var _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    descriptors = target._descriptors;
  var value = _proxy[prop]; // resolve from proxy
  // resolve with context
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    // if the resolved value is an object, create a sub resolver for it
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
  var _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    _stack = target._stack;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  var value = getValue(_context, _subProxy || receiver);
  _stack["delete"](prop);
  if (needsSubResolver(prop, value)) {
    // When scriptable option returns an object, create a resolver on that.
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  var _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    descriptors = target._descriptors;
  if (typeof _context.index !== 'undefined' && isIndexable(prop)) {
    return value[_context.index % value.length];
  } else if (isObject(value[0])) {
    // Array of objects, return array or resolvers
    var arr = value;
    var scopes = _proxy._scopes.filter(function (s) {
      return s !== arr;
    });
    value = [];
    var _iterator5 = _createForOfIteratorHelper(arr),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var item = _step5.value;
        var resolver = createSubResolver(scopes, _proxy, prop, item);
        value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
var getScope = function getScope(key, parent) {
  return key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
};
function addScopes(set, parentScopes, key, parentFallback, value) {
  var _iterator6 = _createForOfIteratorHelper(parentScopes),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var parent = _step6.value;
      var scope = getScope(key, parent);
      if (scope) {
        set.add(scope);
        var fallback = resolveFallback(scope._fallback, key, value);
        if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) {
          // When we reach the descriptor that defines a new _fallback, return that.
          // The fallback will resume to that new scope.
          return fallback;
        }
      } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) {
        // Fallback to `false` results to `false`, when falling back to different key.
        // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
        return null;
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  var rootScopes = resolver._rootScopes;
  var fallback = resolveFallback(resolver._fallback, prop, value);
  var allScopes = [].concat(_toConsumableArray(parentScopes), _toConsumableArray(rootScopes));
  var set = new Set();
  set.add(value);
  var key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
  if (key === null) {
    return false;
  }
  if (typeof fallback !== 'undefined' && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key, value);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback, function () {
    return subGetTarget(resolver, prop, value);
  });
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback, item);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  var parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  var target = parent[prop];
  if (isArray(target) && isObject(value)) {
    // For array of objects, the object is used to store updated values
    return value;
  }
  return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  var value;
  var _iterator7 = _createForOfIteratorHelper(prefixes),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var prefix = _step7.value;
      value = _resolve(readKey(prefix, prop), scopes);
      if (typeof value !== 'undefined') {
        return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function _resolve(key, scopes) {
  var _iterator8 = _createForOfIteratorHelper(scopes),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var scope = _step8.value;
      if (!scope) {
        continue;
      }
      var value = scope[key];
      if (typeof value !== 'undefined') {
        return value;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}
function getKeysFromAllScopes(target) {
  var keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  var set = new Set();
  var _iterator9 = _createForOfIteratorHelper(scopes),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var scope = _step9.value;
      var _iterator10 = _createForOfIteratorHelper(Object.keys(scope).filter(function (k) {
          return !k.startsWith('_');
        })),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var key = _step10.value;
          set.add(key);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
  var iScale = meta.iScale;
  var _this$_parsing$key = this._parsing.key,
    key = _this$_parsing$key === void 0 ? 'r' : _this$_parsing$key;
  var parsed = new Array(count);
  var i, ilen, index, item;
  for (i = 0, ilen = count; i < ilen; ++i) {
    index = i + start;
    item = data[index];
    parsed[i] = {
      r: iScale.parse(resolveObjectKey(item, key), index)
    };
  }
  return parsed;
}
var EPSILON = Number.EPSILON || 1e-14;
var getPoint = function getPoint(points, i) {
  return i < points.length && !points[i].skip && points[i];
};
var getValueAxis = function getValueAxis(indexAxis) {
  return indexAxis === 'x' ? 'y' : 'x';
};
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  // Props to Rob Spencer at scaled innovation for his post on splining between points
  // http://scaledinnovation.com/analytics/splines/aboutSplines.html
  // This function must also respect "skipped" points
  var previous = firstPoint.skip ? middlePoint : firstPoint;
  var current = middlePoint;
  var next = afterPoint.skip ? middlePoint : afterPoint;
  var d01 = distanceBetweenPoints(current, previous);
  var d12 = distanceBetweenPoints(next, current);
  var s01 = d01 / (d01 + d12);
  var s12 = d12 / (d01 + d12);
  // If all points are the same, s01 & s02 will be inf
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  var fa = t * s01; // scaling factor for triangle Ta
  var fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
/**
 * Adjust tangents to ensure monotonic properties
 */
function monotoneAdjust(points, deltaK, mK) {
  var pointsLen = points.length;
  var alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  var pointAfter = getPoint(points, 0);
  for (var i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK) {
  var indexAxis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
  var valueAxis = getValueAxis(indexAxis);
  var pointsLen = points.length;
  var delta, pointBefore, pointCurrent;
  var pointAfter = getPoint(points, 0);
  for (var i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    var iPixel = pointCurrent[indexAxis];
    var vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent["cp1".concat(indexAxis)] = iPixel - delta;
      pointCurrent["cp1".concat(valueAxis)] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent["cp2".concat(indexAxis)] = iPixel + delta;
      pointCurrent["cp2".concat(valueAxis)] = vPixel + delta * mK[i];
    }
  }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */
function splineCurveMonotone(points) {
  var indexAxis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
  var valueAxis = getValueAxis(indexAxis);
  var pointsLen = points.length;
  var deltaK = Array(pointsLen).fill(0);
  var mK = Array(pointsLen);
  // Calculate slopes (deltaK) and initialize tangents (mK)
  var i, pointBefore, pointCurrent;
  var pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      var slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  var i, ilen, point, inArea, inAreaPrev;
  var inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
/**
 * @private
 */
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  var i, ilen, point, controlPoints;
  // Only consider points that are drawn in case the spanGaps option is used
  if (options.spanGaps) {
    points = points.filter(function (pt) {
      return !pt.skip;
    });
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    var prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
    * @private
    */
function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */
function _getParentNode(domNode) {
  var parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */
function parseMaxStyle(styleValue, node, parentProperty) {
  var valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      // percentage * size in dimension
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
var getComputedStyle = function getComputedStyle(element) {
  return element.ownerDocument.defaultView.getComputedStyle(element, null);
};
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
var positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  var result = {};
  suffix = suffix ? '-' + suffix : '';
  for (var i = 0; i < 4; i++) {
    var pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
var useOffsetPos = function useOffsetPos(x, y, target) {
  return (x > 0 || y > 0) && (!target || !target.shadowRoot);
};
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */
function getCanvasPosition(e, canvas) {
  var touches = e.touches;
  var source = touches && touches.length ? touches[0] : e;
  var offsetX = source.offsetX,
    offsetY = source.offsetY;
  var box = false;
  var x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    var rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {
    x: x,
    y: y,
    box: box
  };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */
function getRelativePosition(event, chart) {
  if ('native' in event) {
    return event;
  }
  var canvas = chart.canvas,
    currentDevicePixelRatio = chart.currentDevicePixelRatio;
  var style = getComputedStyle(canvas);
  var borderBox = style.boxSizing === 'border-box';
  var paddings = getPositionedStyle(style, 'padding');
  var borders = getPositionedStyle(style, 'border', 'width');
  var _getCanvasPosition = getCanvasPosition(event, canvas),
    x = _getCanvasPosition.x,
    y = _getCanvasPosition.y,
    box = _getCanvasPosition.box;
  var xOffset = paddings.left + (box && borders.left);
  var yOffset = paddings.top + (box && borders.top);
  var width = chart.width,
    height = chart.height;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  var maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    var container = canvas && _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      var rect = container.getBoundingClientRect(); // this is the border box of the container
      var containerStyle = getComputedStyle(container);
      var containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      var containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width: width,
    height: height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
var round1 = function round1(v) {
  return Math.round(v * 10) / 10;
};
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  var style = getComputedStyle(canvas);
  var margins = getPositionedStyle(style, 'margin');
  var maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  var maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  var containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  var width = containerSize.width,
    height = containerSize.height;
  if (style.boxSizing === 'content-box') {
    var borders = getPositionedStyle(style, 'border', 'width');
    var paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
  }
  var maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
  if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
    height = containerSize.height;
    width = round1(Math.floor(height * aspectRatio));
  }
  return {
    width: width,
    height: height
  };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */
function retinaScale(chart, forceRatio, forceStyle) {
  var pixelRatio = forceRatio || 1;
  var deviceHeight = Math.floor(chart.height * pixelRatio);
  var deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = Math.floor(chart.height);
  chart.width = Math.floor(chart.width);
  var canvas = chart.canvas;
  // If no style has been set on the canvas, the render size is used as display size,
  // making the chart visually bigger, so let's enforce it to the "correct" values.
  // See https://github.com/chartjs/Chart.js/issues/3575
  if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
    canvas.style.height = "".concat(chart.height, "px");
    canvas.style.width = "".concat(chart.width, "px");
  }
  if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = exports.K = function () {
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    if (_isDomSupported()) {
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    }
  } catch (e) {
    // continue regardless of error
  }
  return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
  var value = getStyle(element, property);
  var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

/**
 * @private
 */
function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
/**
 * @private
 */
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
  };
}
/**
 * @private
 */
function _bezierInterpolation(p1, p2, t, mode) {
  var cp1 = {
    x: p1.cp2x,
    y: p1.cp2y
  };
  var cp2 = {
    x: p2.cp1x,
    y: p2.cp1y
  };
  var a = _pointInLine(p1, cp1, t);
  var b = _pointInLine(cp1, cp2, t);
  var c = _pointInLine(cp2, p2, t);
  var d = _pointInLine(a, b, t);
  var e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}
var getRightToLeftAdapter = function getRightToLeftAdapter(rectX, width) {
  return {
    x: function x(_x) {
      return rectX + rectX + width - _x;
    },
    setWidth: function setWidth(w) {
      width = w;
    },
    textAlign: function textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus: function xPlus(x, value) {
      return x - value;
    },
    leftForLtr: function leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }
  };
};
var getLeftToRightAdapter = function getLeftToRightAdapter() {
  return {
    x: function x(_x2) {
      return _x2;
    },
    setWidth: function setWidth(w) {},
    textAlign: function textAlign(align) {
      return align;
    },
    xPlus: function xPlus(x, value) {
      return x + value;
    },
    leftForLtr: function leftForLtr(x, _itemWidth) {
      return x;
    }
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  var style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}
function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle
    };
  }
  return {
    between: _isBetween,
    compare: function compare(a, b) {
      return a - b;
    },
    normalize: function normalize(x) {
      return x;
    }
  };
}
function normalizeSegment(_ref) {
  var start = _ref.start,
    end = _ref.end,
    count = _ref.count,
    loop = _ref.loop,
    style = _ref.style;
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style: style
  };
}
function getSegment(segment, points, bounds) {
  var property = bounds.property,
    startBound = bounds.start,
    endBound = bounds.end;
  var _propertyFn = propertyFn(property),
    between = _propertyFn.between,
    normalize = _propertyFn.normalize;
  var count = points.length;
  var start = segment.start,
    end = segment.end,
    loop = segment.loop;
  var i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {
    start: start,
    end: end,
    loop: loop,
    style: segment.style
  };
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  var property = bounds.property,
    startBound = bounds.start,
    endBound = bounds.end;
  var count = points.length;
  var _propertyFn2 = propertyFn(property),
    compare = _propertyFn2.compare,
    between = _propertyFn2.between,
    normalize = _propertyFn2.normalize;
  var _getSegment = getSegment(segment, points, bounds),
    start = _getSegment.start,
    end = _getSegment.end,
    loop = _getSegment.loop,
    style = _getSegment.style;
  var result = [];
  var inside = false;
  var subStart = null;
  var value, point, prevValue;
  var startIsBefore = function startIsBefore() {
    return between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  };
  var endIsBefore = function endIsBefore() {
    return compare(endBound, value) === 0 || between(endBound, prevValue, value);
  };
  var shouldStart = function shouldStart() {
    return inside || startIsBefore();
  };
  var shouldStop = function shouldStop() {
    return !inside || endIsBefore();
  };
  for (var i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({
        start: subStart,
        end: i,
        loop: loop,
        count: count,
        style: style
      }));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({
      start: subStart,
      end: end,
      loop: loop,
      count: count,
      style: style
    }));
  }
  return result;
}
function _boundSegments(line, bounds) {
  var result = [];
  var segments = line.segments;
  for (var i = 0; i < segments.length; i++) {
    var sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push.apply(result, _toConsumableArray(sub));
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  var start = 0;
  var end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {
    start: start,
    end: end
  };
}
function solidSegments(points, start, max, loop) {
  var count = points.length;
  var result = [];
  var last = start;
  var prev = points[start];
  var end;
  for (end = start + 1; end <= max; ++end) {
    var cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({
          start: start % count,
          end: (end - 1) % count,
          loop: loop
        });
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({
      start: start % count,
      end: last % count,
      loop: loop
    });
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  var points = line.points;
  var spanGaps = line.options.spanGaps;
  var count = points.length;
  if (!count) {
    return [];
  }
  var loop = !!line._loop;
  var _findStartAndEnd = findStartAndEnd(points, count, loop, spanGaps),
    start = _findStartAndEnd.start,
    end = _findStartAndEnd.end;
  if (spanGaps === true) {
    return splitByStyles(line, [{
      start: start,
      end: end,
      loop: loop
    }], points, segmentOptions);
  }
  var max = end < start ? end + count : end;
  var completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  var chartContext = line._chart.getContext();
  var baseStyle = readStyle(line.options);
  var datasetIndex = line._datasetIndex,
    spanGaps = line.options.spanGaps;
  var count = points.length;
  var result = [];
  var prevStyle = baseStyle;
  var start = segments[0].start;
  var i = start;
  function addStyle(s, e, l, st) {
    var dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({
        start: s % count,
        end: e % count,
        loop: l,
        style: st
      });
      prevStyle = st;
      start = e % count;
    }
  }
  var _iterator11 = _createForOfIteratorHelper(segments),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var segment = _step11.value;
      start = spanGaps ? start : segment.start;
      var prev = points[start % count];
      var style = void 0;
      for (i = start + 1; i <= segment.end; i++) {
        var pt = points[i % count];
        style = readStyle(segmentOptions.setContext(createContext(chartContext, {
          type: 'segment',
          p0: prev,
          p1: pt,
          p0DataIndex: (i - 1) % count,
          p1DataIndex: i % count,
          datasetIndex: datasetIndex
        })));
        if (styleChanged(style, prevStyle)) {
          addStyle(start, i - 1, segment.loop, prevStyle);
        }
        prev = pt;
        prevStyle = style;
      }
      if (start < i - 1) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  if (!prevStyle) {
    return false;
  }
  var cache = [];
  var replacer = function replacer(key, value) {
    if (!isPatternOrGradient(value)) {
      return value;
    }
    if (!cache.includes(value)) {
      cache.push(value);
    }
    return cache.indexOf(value);
  };
  return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}