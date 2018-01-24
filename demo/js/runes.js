/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(17);
var toPrimitive = __webpack_require__(19);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;var require;

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringify = __webpack_require__(21);

var _stringify2 = _interopRequireDefault(_stringify);

var _common = __webpack_require__(23);

var _particles = __webpack_require__(24);

var _particles2 = _interopRequireDefault(_particles);

var _parallax = __webpack_require__(25);

var _parallax2 = _interopRequireDefault(_parallax);

var _vivus = __webpack_require__(26);

var _vivus2 = _interopRequireDefault(_vivus);

var _horoRender = __webpack_require__(27);

var _horoRender2 = _interopRequireDefault(_horoRender);

var _swiperJs = __webpack_require__(30);

var _swiperJs2 = _interopRequireDefault(_swiperJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(31);
__webpack_require__(32);

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({
    1: [function (require, module, exports) {
        /**
         * CrayonBrush class
         * @class fabric.CrayonBrush
         * @extends fabric.BaseBrush
         */
        (function (fabric) {

            fabric.CrayonBrush = fabric.util.createClass(fabric.BaseBrush, {

                color: "#000000",
                opacity: 0.6,
                width: 30,

                _baseWidth: 20,
                _inkAmount: 10,
                _latestStrokeLength: 0,
                _point: null,
                _sep: 5,
                _size: 0,

                initialize: function initialize(canvas, opt) {
                    opt = opt || {};

                    this.canvas = canvas;
                    this.width = opt.width || canvas.freeDrawingBrush.width;
                    this.color = opt.color || canvas.freeDrawingBrush.color;
                    this.opacity = opt.opacity || canvas.contextTop.globalAlpha;
                    this._point = new fabric.Point(0, 0);
                },

                changeColor: function changeColor(color) {
                    this.color = color;
                },

                changeOpacity: function changeOpacity(value) {
                    this.opacity = value;
                },

                onMouseDown: function onMouseDown(pointer) {
                    this.canvas.contextTop.globalAlpha = this.opacity;
                    this._size = this.width / 2 + this._baseWidth;
                    this.set(pointer);
                },

                onMouseMove: function onMouseMove(pointer) {
                    this.update(pointer);
                    this.draw(this.canvas.contextTop);
                },

                onMouseUp: function onMouseUp(pointer) {},

                set: function set(p) {
                    if (this._latest) {
                        this._latest.setFromPoint(this._point);
                    } else {
                        this._latest = new fabric.Point(p.x, p.y);
                    }
                    fabric.Point.prototype.setFromPoint.call(this._point, p);
                },

                update: function update(p) {
                    this.set(p);
                    this._latestStrokeLength = this._point.subtract(this._latest).distanceFrom({ x: 0, y: 0 });
                },

                draw: function draw(ctx) {
                    var i, j, p, r, c, x, y, w, h, v, s, stepNum, dotSize, dotNum, range;

                    v = this._point.subtract(this._latest);
                    s = Math.ceil(this._size / 2);
                    stepNum = Math.floor(v.distanceFrom({ x: 0, y: 0 }) / s) + 1;
                    v.normalize(s);

                    dotSize = this._sep * fabric.util.clamp(this._inkAmount / this._latestStrokeLength * 3, 1, 0.5);
                    dotNum = Math.ceil(this._size * this._sep);

                    range = this._size / 2;

                    ctx.save();
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    for (i = 0; i < dotNum; i++) {
                        for (j = 0; j < stepNum; j++) {
                            p = this._latest.add(v.multiply(j));
                            r = fabric.util.getRandom(range);
                            c = fabric.util.getRandom(Math.PI * 2);
                            w = fabric.util.getRandom(dotSize, dotSize / 2);
                            h = fabric.util.getRandom(dotSize, dotSize / 2);
                            x = p.x + r * Math.sin(c) - w / 2;
                            y = p.y + r * Math.cos(c) - h / 2;
                            ctx.rect(x, y, w, h);
                        }
                    }
                    ctx.fill();
                    ctx.restore();
                }
            });
        })(fabric);
    }, {}],
    2: [function (require, module, exports) {
        /**
         * Drip class
         * @class fabric.Drip
         * @extends fabric.Object
         */
        (function (fabric) {

            fabric.Drip = fabric.util.createClass(fabric.Object, {
                rate: 0,
                color: "#000000",
                amount: 10,
                life: 10,
                _point: null,
                _lastPoint: null,
                _strokeId: 0,
                _interval: 20,

                initialize: function initialize(ctx, pointer, amount, color, _strokeId) {
                    this.ctx = ctx;
                    this._point = pointer;
                    this._strokeId = _strokeId;
                    this.amount = fabric.util.getRandom(amount, amount * 0.5);
                    this.color = color;
                    this.life = this.amount * 1.5;
                    ctx.lineCap = ctx.lineJoin = "round";

                    this._render();
                },

                _update: function _update(brush) {
                    this._lastPoint = fabric.util.object.clone(this._point);
                    this._point.addEquals({
                        x: this.life * this.rate,
                        y: fabric.util.getRandom(this.life * this.amount / 30)
                    });

                    this.life -= 0.05;

                    if (fabric.util.getRandom() < 0.03) {
                        this.rate += fabric.util.getRandom(0.03, -0.03);
                    } else if (fabric.util.getRandom() < 0.05) {
                        this.rate *= 0.01;
                    }
                },

                _draw: function _draw() {
                    this.ctx.save();
                    this.line(this.ctx, this._lastPoint, this._point, this.color, this.amount * 0.8 + this.life * 0.2);
                    this.ctx.restore();
                },

                _render: function _render() {
                    var context = this;

                    setTimeout(draw, this._interval);

                    function draw() {
                        context._update();
                        context._draw();
                        if (context.life > 0) {
                            setTimeout(draw, context._interval);
                        }
                    }
                },

                line: function line(ctx, point1, point2, color, lineWidth) {
                    ctx.strokeStyle = color;
                    ctx.lineWidth = lineWidth;
                    ctx.beginPath();
                    ctx.moveTo(point1.x, point1.y);
                    ctx.lineTo(point2.x, point2.y);

                    ctx.stroke();
                }
            });
        })(fabric);
    }, {}],
    3: [function (require, module, exports) {
        /**
         * InkBrush class
         * @class fabric.InkBrush
         * @extends fabric.BaseBrush
         */
        (function (fabric) {

            fabric.InkBrush = fabric.util.createClass(fabric.BaseBrush, {

                color: "#000000",
                opacity: 1,
                width: 30,

                _baseWidth: 20,
                _dripCount: 0,
                _drips: [],
                _inkAmount: 2,
                _lastPoint: null,
                _point: null,
                _range: 1,
                _strokeCount: 0,
                _strokeId: null,
                _strokeNum: 1,
                _strokes: null,

                initialize: function initialize(canvas, opt) {
                    opt = opt || {};

                    this.canvas = canvas;
                    this.width = opt.width || canvas.freeDrawingBrush.width;
                    this.color = opt.color || canvas.freeDrawingBrush.color;
                    this.opacity = opt.opacity || canvas.contextTop.globalAlpha;

                    this._point = new fabric.Point();
                },

                changeColor: function changeColor(color) {
                    this.color = color;
                },

                changeOpacity: function changeOpacity(value) {
                    this.opacity = value;
                    this.canvas.contextTop.globalAlpha = value;
                },

                _render: function _render(pointer) {
                    var subtractPoint, distance, point, i, len, strokes, stroke;
                    this._strokeCount++;
                    if (this._strokeCount % 240 === 0 && this._dripCount < 10) {
                        this._dripCount++;
                    }

                    point = this.setPointer(pointer);
                    subtractPoint = point.subtract(this._lastPoint);
                    distance = point.distanceFrom(this._lastPoint);
                    strokes = this._strokes;

                    for (i = 0, len = strokes.length; i < len; i++) {
                        stroke = strokes[i];
                        stroke.update(point, subtractPoint, distance);
                        stroke.draw();
                    }

                    if (distance > 30) {
                        this.drawSplash(point, this._inkAmount);
                    } else if (distance < 10 && fabric.util.getRandom() < 0.085 && this._dripCount) {
                        // this._drips.push(new fabric.Drip(this.canvas.contextTop, point, fabric.util.getRandom(this.size * 0.25, this.size * 0.1), this.color, this._strokeId));
                        // this._dripCount--;
                    }
                },

                onMouseDown: function onMouseDown(pointer) {
                    this._resetTip(pointer);
                    this._strokeId = +new Date();
                    // this._dripCount = fabric.util.getRandom(0, 2) | 0;
                    this._dripCount = 0;

                    document.querySelector('.drawing .tip').classList.add('fn-hide');
                },

                onMouseMove: function onMouseMove(pointer) {
                    if (this.canvas._isCurrentlyDrawing) {
                        this._render(pointer);
                    }
                },

                onMouseUp: function onMouseUp() {
                    this._strokeCount = 0;
                    this._dripCount = 0;
                    this._strokeId = null;
                },

                drawSplash: function drawSplash(pointer, maxSize) {
                    var c,
                        r,
                        i,
                        point,
                        ctx = this.canvas.contextTop,
                        num = fabric.util.getRandom(12),
                        range = maxSize * 10,
                        color = this.color;

                    ctx.save();
                    for (i = 0; i < num; i++) {
                        r = fabric.util.getRandom(range, 1);
                        c = fabric.util.getRandom(Math.PI * 2);
                        point = new fabric.Point(pointer.x + r * Math.sin(c), pointer.y + r * Math.cos(c));

                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(point.x, point.y, fabric.util.getRandom(maxSize) / 2, 0, Math.PI * 2, false);
                        ctx.fill();
                    }
                    ctx.restore();
                },

                setPointer: function setPointer(pointer) {
                    var point = new fabric.Point(pointer.x, pointer.y);

                    this._lastPoint = fabric.util.object.clone(this._point);
                    this._point = point;

                    return point;
                },

                _resetTip: function _resetTip(pointer) {
                    var strokes, point, len, i;

                    point = this.setPointer(pointer);
                    strokes = this._strokes = [];
                    this.size = this.width / 5 + this._baseWidth;
                    // this._strokeNum = this.size;
                    this.width = 10;
                    this.size = 10;
                    this._strokeNum = this.size;
                    this._range = this.size / 2;

                    for (i = 0, len = this._strokeNum; i < len; i++) {
                        strokes[i] = new fabric.Stroke(this.canvas.contextTop, point, this._range, this.color, this.width, this._inkAmount);
                    }
                }
            });
        })(fabric);
    }, {}],
    4: [function (require, module, exports) {
        /**
         * MarkerBrush class
         * @class fabric.MarkerBrush
         * @extends fabric.BaseBrush
         */
        (function (fabric) {

            fabric.MarkerBrush = fabric.util.createClass(fabric.BaseBrush, {

                color: "#000000",
                opacity: 1,
                width: 30,

                _baseWidth: 10,
                _lastPoint: null,
                _lineWidth: 3,
                _point: null,
                _size: 0,

                initialize: function initialize(canvas, opt) {
                    opt = opt || {};

                    this.canvas = canvas;
                    this.width = opt.width || canvas.freeDrawingBrush.width;
                    this.color = opt.color || canvas.freeDrawingBrush.color;
                    this.opacity = opt.opacity || canvas.contextTop.globalAlpha;
                    this._point = new fabric.Point();

                    this.canvas.contextTop.lineJoin = 'round';
                    this.canvas.contextTop.lineCap = 'round';
                },

                changeColor: function changeColor(color) {
                    this.color = color;
                },

                changeOpacity: function changeOpacity(value) {
                    this.opacity = value;
                },

                _render: function _render(pointer) {
                    var ctx, lineWidthDiff, i;

                    ctx = this.canvas.contextTop;

                    ctx.beginPath();

                    for (i = 0, len = this._size / this._lineWidth / 2; i < len; i++) {
                        lineWidthDiff = (this._lineWidth - 1) * i;

                        ctx.globalAlpha = 0.8 * this.opacity;
                        ctx.moveTo(this._lastPoint.x + lineWidthDiff, this._lastPoint.y + lineWidthDiff);
                        ctx.lineTo(pointer.x + lineWidthDiff, pointer.y + lineWidthDiff);
                        ctx.stroke();
                    }

                    this._lastPoint = new fabric.Point(pointer.x, pointer.y);
                },

                onMouseDown: function onMouseDown(pointer) {
                    this._lastPoint = pointer;
                    this.canvas.contextTop.strokeStyle = this.color;
                    this.canvas.contextTop.lineWidth = this._lineWidth;
                    this._size = this.width + this._baseWidth;
                },

                onMouseMove: function onMouseMove(pointer) {
                    if (this.canvas._isCurrentlyDrawing) {
                        this._render(pointer);
                    }
                },

                onMouseUp: function onMouseUp() {
                    this.canvas.contextTop.globalAlpha = this.opacity;
                }
            });
        })(fabric);
    }, {}],
    5: [function (require, module, exports) {
        /**
         * SprayBrush class
         * @class fabric.SprayBrush
         * @extends fabric.BaseBrush
         */
        (function (fabric) {

            fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, {

                color: "#000000",
                opacity: 1,
                width: 30,

                _baseWidth: 40,
                _drips: [],
                _dripThreshold: 15,
                _inkAmount: 0,
                _interval: 20,
                _lastPoint: null,
                _point: null,
                _strokeId: 0,
                brush: null,
                sprayBrushDataUrl: "data:image/png;base64,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",

                initialize: function initialize(canvas, opt) {
                    var context = this;
                    opt = opt || {};

                    this.canvas = canvas;
                    this.width = opt.width || canvas.freeDrawingBrush.width;
                    this.opacity = opt.opacity || canvas.contextTop.globalAlpha;
                    this.color = opt.color || canvas.freeDrawingBrush.color;

                    this.canvas.contextTop.lineJoin = "round";
                    this.canvas.contextTop.lineCap = "round";

                    this._reset();

                    fabric.Image.fromURL(this.sprayBrushDataUrl, function (brush) {
                        context.brush = brush;
                        context.brush.filters = [];
                        context.changeColor(context.color || this.color);
                    }, { crossOrigin: "anonymous" });
                },

                changeColor: function changeColor(color) {
                    this.color = color;
                    this.brush.filters[0] = new fabric.Image.filters.Tint({ color: color });
                    this.brush.applyFilters(this.canvas.renderAll.bind(this.canvas));
                },

                changeOpacity: function changeOpacity(value) {
                    this.opacity = value;
                    this.canvas.contextTop.globalAlpha = value;
                },

                onMouseDown: function onMouseDown(pointer) {
                    this._point = new fabric.Point(pointer.x, pointer.y);
                    this._lastPoint = this._point;

                    this.size = this.width + this._baseWidth;
                    this._strokeId = +new Date();
                    this._inkAmount = 0;

                    this.changeColor(this.color);
                    this._render();
                },

                onMouseMove: function onMouseMove(pointer) {
                    this._lastPoint = this._point;
                    this._point = new fabric.Point(pointer.x, pointer.y);
                },

                onMouseUp: function onMouseUp(pointer) {},

                _render: function _render() {
                    var context = this;

                    setTimeout(draw, this._interval);

                    function draw() {
                        var point, distance, angle, amount, x, y;

                        point = new fabric.Point(context._point.x || 0, context._point.y || 0);
                        distance = point.distanceFrom(context._lastPoint);
                        angle = point.angleBetween(context._lastPoint);
                        amount = 100 / context.size / (Math.pow(distance, 2) + 1);

                        context._inkAmount += amount;
                        context._inkAmount = Math.max(context._inkAmount - distance / 10, 0);
                        if (context._inkAmount > context._dripThreshold) {
                            context._drips.push(new fabric.Drip(context.canvas.contextTop, point, context._inkAmount / 2, context.color, context._strokeId));
                            context._inkAmount = 0;
                        }

                        x = context._lastPoint.x + Math.sin(angle) - context.size / 2;
                        y = context._lastPoint.y + Math.cos(angle) - context.size / 2;
                        context.canvas.contextTop.drawImage(context.brush._element, x, y, context.size, context.size);

                        if (context.canvas._isCurrentlyDrawing) {
                            setTimeout(draw, context._interval);
                        } else {
                            context._reset();
                        }
                    }
                },

                _reset: function _reset() {
                    this._drips.length = 0;
                    this._point = null;
                    this._lastPoint = null;
                }
            });
        })(fabric);
    }, {}],
    6: [function (require, module, exports) {
        /**
         * Stroke class
         * @class fabric.Stroke
         * @extends fabric.Object
         */
        (function (fabric) {

            fabric.Stroke = fabric.util.createClass(fabric.Object, {
                color: null,
                inkAmount: null,
                lineWidth: null,
                _point: null,
                _lastPoint: null,
                _currentLineWidth: null,

                initialize: function initialize(ctx, pointer, range, color, lineWidth, inkAmount) {

                    var rx = fabric.util.getRandom(range),
                        c = fabric.util.getRandom(Math.PI * 2),
                        c0 = fabric.util.getRandom(Math.PI * 2),
                        x0 = rx * Math.sin(c0),
                        y0 = rx / 2 * Math.cos(c0),
                        cos = Math.cos(c),
                        sin = Math.sin(c);

                    this.ctx = ctx;
                    this.color = color;
                    this._point = new fabric.Point(pointer.x + x0 * cos - y0 * sin, pointer.y + x0 * sin + y0 * cos);
                    this.lineWidth = lineWidth;
                    this.inkAmount = inkAmount;
                    this._currentLineWidth = lineWidth;

                    ctx.lineCap = "round";
                },

                update: function update(pointer, subtractPoint, distance) {
                    this._lastPoint = fabric.util.object.clone(this._point);
                    this._point = this._point.addEquals({ x: subtractPoint.x, y: subtractPoint.y });

                    var n = this.inkAmount / (distance + 1);
                    var per = n > 0.3 ? 0.2 : n < 0 ? 0 : n;
                    this._currentLineWidth = this.lineWidth * per;
                },

                draw: function draw() {
                    var ctx = this.ctx;
                    ctx.save();
                    this.line(ctx, this._lastPoint, this._point, this.color, this._currentLineWidth);
                    ctx.restore();
                },

                line: function line(ctx, point1, point2, color, lineWidth) {
                    ctx.strokeStyle = color;
                    ctx.lineWidth = lineWidth;
                    ctx.beginPath();
                    ctx.moveTo(point1.x, point1.y);
                    ctx.lineTo(point2.x, point2.y);

                    ctx.stroke();
                }
            });
        })(fabric);
    }, {}],
    7: [function (require, module, exports) {
        (function (fabric) {

            fabric.Point.prototype.angleBetween = function (that) {
                return Math.atan2(this.x - that.x, this.y - that.y);
            };

            fabric.Point.prototype.normalize = function (thickness) {
                if (null === thickness || undefined === thickness) {
                    thickness = 1;
                }

                var length = this.distanceFrom({ x: 0, y: 0 });

                if (length > 0) {
                    this.x = this.x / length * thickness;
                    this.y = this.y / length * thickness;
                }

                return this;
            };
        })(fabric);
    }, {}],
    8: [function (require, module, exports) {
        (function (fabric) {

            fabric.util.getRandom = function (max, min) {
                min = min ? min : 0;
                return Math.random() * ((max ? max : 1) - min) + min;
            };

            fabric.util.clamp = function (n, max, min) {
                if (typeof min !== 'number') min = 0;
                return n > max ? max : n < min ? min : n;
            };
        })(fabric);
    }, {}]
}, {}, [1, 2, 3, 4, 5, 6, 7, 8]);

var mySwiper = null;
var doc = document;
var fromUser = JSON.parse(decodeURIComponent(document.querySelector('input[name="fromUser"]').value));
var toUser = JSON.parse(decodeURIComponent(document.querySelector('input[name="toUser"]').value));
var saving = false;

doc.body.addEventListener('touchstart', function () {
    return null;
});

function initBg() {
    function drawing() {
        window.particlesJS("stars", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": true
                    }
                },
                "size": {
                    "value": 1.5,
                    // "value": 10,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "size_min": 0.5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 0.1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                }
                // "modes": {
                //     "grab": {
                //         "distance": 140,
                //         "line_linked": {
                //             "opacity": 0
                //         }
                //     },
                //     "bubble": {
                //         "distance": 400,
                //         "size": 40,
                //         "duration": 2,
                //         "opacity": 8,
                //         "speed": 3
                //     },
                //     "repulse": {
                //         "distance": 200,
                //         "duration": 0.4
                //     },
                //     "push": {
                //         "particles_nb": 4
                //     },
                //     "remove": {
                //         "particles_nb": 2
                //     }
                // }
            },
            "retina_detect": true
        });
    }
    drawing();
    new window.Parallax(doc.querySelector('#scene'));
}
initBg();

var drawHoroSwiper = function drawHoroSwiper() {

    if (mySwiper) {
        return false;
    }

    mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        effect: 'slide',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping1',
        cube: {
            slideShadows: false,
            shadow: false
        },
        onInit: function onInit(swiper) {
            // canvas.classList.add('canvas-show');
        },
        onTouchStart: function onTouchStart() {},
        onTouchMove: function onTouchMove() {
            // canvas.classList.remove('canvas-show');
        },
        onTouchEnd: function onTouchEnd() {},
        onSlideChangeEnd: function onSlideChangeEnd(swiper) {
            // setTimeout(function(){
            // canvas.classList.remove('canvas-show');
            // drawHoroLine(swiper.realIndex,canvas);
            // canvas.classList.add('canvas-show');
            // },1000);
        }
    });
};

var Svg = {
    group1: ['<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 412"><linearGradient id="SVGID_1" gradientUnits="userSpaceOnUse" x1="-50" y1="0" x2="50" y2="0"><stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity: 0"/><stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity: 0.1"/></linearGradient><circle id="path" cx="0" cy="0" r="50" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_1); fill-rule: nonzero; opacity: 1;" transform="translate(50.5 50.5) "/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 412"><path fill="none" stroke="#231815" stroke-miterlimit="10" d="M251.7 287.5c-36.3 36.8-95.5 37.3-132.3 1s-37.3-95.5-1-132.3 95.5-37.3 132.3-1"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 412"><path fill="none" stroke="#231815" stroke-miterlimit="10" d="M227.8 145.9c41.8 23.9 56.3 77.1 32.5 118.9s-77.1 56.3-118.9 32.5c-41.8-23.9-56.3-77.1-32.5-118.9"/><path fill="none" stroke="#231815" stroke-miterlimit="10" d="M274.6 220.8c.4 49.8-39.6 90.5-89.3 90.9-49.8.4-90.5-39.6-90.9-89.3-.4-49.8 39.6-90.5 89.3-90.9"/><path fill="none" stroke="#231815" stroke-miterlimit="10" d="M251.7 287.5c-36.3 36.8-95.5 37.3-132.3 1s-37.3-95.5-1-132.3 95.5-37.3 132.3-1"/></svg>'],
    group2: ['<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 258"><path fill="#231815" d="M90.1 166.2L194 79.6l-56.4 120.8"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 258"><path fill="#231815" d="M232.7 65.7L42 221.6 159.2 37.5"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 258"><path fill="#231815" d="M193 125.5L84.8 192.1l-.3-121.6"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 662.9"><path d="M129.285 108.716l1.204-.714 244.805 413.116-1.204.714z"/><path d="M166.045 198.023l1.124-.834 265.71 358.057-1.123.834z"/><path d="M131.288 215.098l.827-1.003L435.43 464.288l-.827 1.003z"/></svg>'],
    group3: ['<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 662.9"><path fill="#231815" d="M299.6 434.5c-6.7 0-13.5-.5-20.3-1.4-80.8-11-137.6-85.7-126.6-166.5 4.8-34.8 20.2-65.3 44.6-88.1 24.3-22.7 55.1-35.7 89.2-37.6.4 0 .7.2.7.6 0 .4-.2.7-.6.7-33.8 1.9-64.4 14.8-88.5 37.2-24.2 22.6-39.5 52.8-44.2 87.4C143 346.9 199.3 421 279.4 431.9c38.8 5.3 77.3-4.8 108.5-28.5 31.2-23.7 51.3-58.1 56.6-96.9 1.3-9.9 1.7-19.9 1-29.8 0-.4.2-.7.6-.7.3 0 .7.2.7.6.7 9.9.3 20-1 30-5.3 39.1-25.6 73.9-57 97.8-26 19.7-57.1 30.1-89.2 30.1z"/><path fill="#231815" d="M283.2 445c-6.3 0-12.6-.4-19-1.3-76.4-10.4-130.1-81.1-119.7-157.5 4.4-32 20.8-61.7 46.3-83.7 24.7-21.3 56.1-34 88.5-35.9.3 0 .7.2.7.6 0 .4-.2.7-.6.7-32.1 1.8-63.2 14.4-87.7 35.6-25.2 21.8-41.5 51.2-45.8 82.9-10.3 75.7 42.9 145.7 118.6 156 75.7 10.3 145.7-42.9 156-118.6 1.3-9.3 1.6-18.8 1-28.1 0-.4.2-.7.6-.7.3 0 .7.2.7.6.6 9.4.3 19-1 28.4-9.7 70.1-69.9 121-138.6 121z"/><path fill="#231815" d="M275.4 431.1c-62.5 0-119.6-42.3-135.6-105.7-16.3-64.8 15.6-132.4 76-160.8.3-.2.7 0 .8.3.1.3 0 .7-.3.8-59.8 28.1-91.5 95.1-75.3 159.3 15.8 62.8 72.4 104.7 134.4 104.7 11.2 0 22.6-1.4 33.9-4.2 74.1-18.7 119.2-94.2 100.5-168.3-2.3-9.1-5.5-18-9.6-26.5-.2-.3 0-.7.3-.8.3-.2.7 0 .8.3 4.1 8.5 7.4 17.5 9.7 26.7 18.9 74.8-26.6 151-101.4 169.8-11.4 3-22.9 4.4-34.2 4.4z"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 258"><path fill="#231815" d="M186.8 135.9c-31.7 44.5-82.1 63.1-112.5 41.5-22.8-16.2-27.9-50.5-15.6-85.4-25.5 48.2-22.7 100.3 9.1 122.9 36.1 25.7 95.8 3.6 133.4-49.2 37.6-52.8 38.9-116.5 2.8-142.1-4.5-3.2-9.4-5.7-14.6-7.4 30.1 21.7 29 75.2-2.6 119.7z"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 258"><path fill="#231815" d="M155.1 150.6c-25.7 14.7-54.7 12.3-64.7-5.2-7.5-13.2 0-41.8 14-56.2-23.5 17.9-34 44.1-23.5 62.4 11.9 20.8 46.2 23.6 76.7 6.2 30.5-17.4 45.6-48.4 33.7-69.2-1.5-2.6-3.3-4.9-5.5-7 9.9 17.6-5.1 54.3-30.7 69z"/></svg>'],
    group4: ['<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 662.9"><path d="M308.8 432.4L142.6 336 239 169.8l166.2 96.4-96.4 166.2zm-163.7-97l163 94.5 94.5-163-163-94.5-94.5 163z"/><path d="M316.2 462.9L150 366.5l96.4-166.2 166.2 96.4-96.4 166.2zm-163.7-97l163 94.5 94.5-163-163-94.5-94.5 163z"/><path d="M326.7 493.8l-166.2-96.4 96.4-166.2L423 327.6l-96.3 166.2zm-163.7-97l163 94.5 94.5-163-163-94.5-94.5 163z"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 662.9"><path d="M160.944 275.362l1.1-1.906 230.755 133.12-1.1 1.906zM167.913 265.16l1.1-1.906 230.755 133.12-1.1 1.906zM172.36 256.218l1.1-1.905 230.754 133.12-1.1 1.905z"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 662.9"><path d="M324.1 485.7L128.5 372.4l113.4-195.6 195.6 113.4-113.4 195.5zM131.5 371.6l191.8 111.2L434.5 291 242.7 179.8 131.5 371.6z"/></svg>', '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 662.9"><path d="M260.614 246.536L368.837 309.5l-62.963 108.222L197.65 354.76z"/></svg>']
};

var HSBtoRGB = function HSBtoRGB(hsv) {

    var h = parseFloat(hsv[0]);
    var s = parseFloat(hsv[1]);
    var v = parseFloat(hsv[2]);

    if (h < 0) h = 0;
    if (s < 0) s = 0;
    if (v < 0) v = 0;
    if (h >= 360) h = 359;
    if (s > 100) s = 100;
    if (v > 100) v = 100;
    s /= 100;
    v /= 100;
    var C = v * s;
    var hh = h / 60;
    var X = C * (1 - Math.abs(hh % 2 - 1));
    var r = 0,
        g = 0,
        b = 0;
    if (hh >= 0 && hh < 1) {
        r = C;
        g = X;
    } else if (hh >= 1 && hh < 2) {
        r = X;
        g = C;
    } else if (hh >= 2 && hh < 3) {
        g = C;
        b = X;
    } else if (hh >= 3 && hh < 4) {
        g = X;
        b = C;
    } else if (hh >= 4 && hh < 5) {
        r = X;
        b = C;
    } else {
        r = C;
        b = X;
    }
    var m = v - C;
    r += m;
    g += m;
    b += m;
    r *= 255.0;
    g *= 255.0;
    b *= 255.0;
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

var weiboHandle = function weiboHandle(callback) {

    var picHash = window.imgHash;
    var xhr = new XMLHttpRequest();

    var params = {
        'WeiboContent': '水逆好可怕，我刚刚守护了 @' + toUser.Name + '，快点击链接为我守护吧！ https://fatepair.com/weibo/retrograde/mercury/internal_guard/' + fromUser.Id + '/landing @电波',
        'PicHash': picHash,
        'FromEphUserID': fromUser.Id,
        'ToUserID': toUser.Id,
        'ToUserType': 0
    };

    if (window.PageInfo.isWeiboBrowser && location.href.indexOf('internal_guard') !== -1) {
        params.ToUserType = 2;
    }

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            callback(JSON.parse(xhr.responseText));
        } else {
            callback(false);
        }
    };
    xhr.open('POST', '/api/weibo_retrograde/pub_weibo_status', true);
    xhr.setRequestHeader('Content-Type', "application/json; charset=utf-8");
    xhr.send((0, _stringify2.default)(params));
};

var Canvas = function () {
    function Canvas() {
        (0, _classCallCheck3.default)(this, Canvas);


        this.screenW = window.innerWidth;
        this.screenH = window.innerHeight;

        window.firshCanvas = this.canvas = new fabric.Canvas('bgCanvas', {
            border: 0,
            containerClass: 'canvas-container main-canvas'
        });

        window.b = this.drawCanvas = new fabric.Canvas('drawCanvas', {
            border: 0,
            selection: false,
            selectable: false,
            width: this.screenW,
            height: this.screenH
        });

        window.c = this.bgCanvas = new fabric.Canvas('drawBg', {
            border: 0,
            containerClass: 'canvas-container bg-canvas',
            width: this.screenW,
            height: this.screenH
            // top:bgT
        });

        this.drawCanvas.on('mouse:down', function () {
            doc.querySelector('.drawing .tip').classList.add('fn-hide');
        });

        this.layoutW = 750;
        this.layoutH = 1334;

        this.canvas.setWidth(this.screenW);
        this.canvas.setHeight(this.screenH);

        this.coords = {
            lineColor: 'rgba(133,255,221,0.4)',
            limit: {},
            rect: {
                w: this.screenW * 360 / this.layoutW,
                h: this.screenH * 120 / this.layoutH,
                t: this.screenH * 20 / this.layoutH,
                tt: this.screenH * 120 / this.layoutH * 0.45,
                tb: this.screenH * 120 / this.layoutH * 0.55
            },
            circle: {
                config: {},
                radius: this.screenW * 80 / this.layoutW
            },
            lineLT: {
                w: this.screenW * 64 / this.layoutW
            },
            lineLS: {
                w: this.screenW * 38 / this.layoutW
            }
        };

        this.welcome = doc.querySelector('.welcome');
        this.horoList = this.welcome.querySelector('.horo-list');
        this.pickBg = doc.querySelector('.pick-bg');
        this.changeBg = doc.getElementById('changeBg');
        this.drawing = doc.querySelector('.drawing');
        this.preview = doc.getElementById('preview');
        this.clear = doc.getElementById('clear');
        this.create = doc.querySelector('.creating');
        this.saveCon = doc.querySelector('.save-control');
    }

    (0, _createClass3.default)(Canvas, [{
        key: 'hideEle',
        value: function hideEle(ele) {
            ele.classList.add('fn-hide');
            ele.style.opacity = 0;
        }
    }, {
        key: 'randomNum',
        value: function randomNum(m, n) {
            return parseInt(Math.random() * (n - m) + m);
        }
    }, {
        key: 'setBgLinesStyle',
        value: function setBgLinesStyle() {
            var bgLineData = this.canvas.getObjects();
            for (var i = 0; i < bgLineData.length; i++) {
                var bgLine = bgLineData[i];
                if (bgLine.type == "rect" || bgLine.type == "circle") {
                    bgLine.set({
                        stroke: '#fff',
                        opacity: 0.5
                    });
                    bgLine.setShadow({
                        'color': '#fff',
                        'offsetX': 0,
                        'offsetY': 0,
                        'blur': 3
                    });
                }
                this.canvas.renderAll();
            }
        }
    }, {
        key: 'recoveBgLinesStyle',
        value: function recoveBgLinesStyle() {
            var bgLineData = this.canvas.getObjects();
            for (var i = 0; i < bgLineData.length; i++) {
                var bgLine = bgLineData[i];
                if (bgLine.type == "rect" || bgLine.type == "circle") {
                    bgLine.set({
                        stroke: this.coords.lineColor,
                        opacity: 1
                    });
                    bgLine.setShadow({
                        'color': '#fff',
                        'offsetX': 0,
                        'offsetY': 0,
                        'blur': 0
                    });
                }
                this.canvas.renderAll();
            }
        }
    }, {
        key: 'initWelcome',
        value: function initWelcome() {
            var _this = this;

            this.welcome.classList.remove('fn-hide');

            setTimeout(function () {
                _this.welcome.style.opacity = 1;
                new _vivus2.default('bg-horo-svg', { duration: 100 }, function () {
                    _this.horoList.classList.remove('fn-hide');
                    setTimeout(function () {
                        _this.horoList.style.opacity = 1;
                        drawHoroSwiper();
                    }, 100);
                });
            }, 100);
        }
    }, {
        key: 'initDrawing',
        value: function initDrawing() {

            this.drawCanvas.clear();
            this.drawCanvas.isDrawingMode = true;

            // this.drawCanvas.freeDrawingBrush = new fabric.PencilBrush(this.drawCanvas);
            // this.drawCanvas.freeDrawingBrush.color = '#DBFDD1';
            // this.drawCanvas.freeDrawingBrush.width = 8;
            // this.drawCanvas.freeDrawingBrush.setShadow('0px 0px 13px #DBFDD1');

            // this.drawCanvas.freeDrawingBrush = new fabric.PencilBrush({
            //     color: '#f00'
            // });

            this.drawCanvas.freeDrawingBrush = new fabric.InkBrush(this.drawCanvas, {
                width: 5,
                opacity: 1,
                inkAmount: 20,
                color: "#DBFDD1"
            });
        }
    }, {
        key: 'initPreview',
        value: function initPreview() {
            var _this2 = this;

            this.drawing.style.opacity = 0;

            if (!window.PageInfo.isWeiboBrowser) {
                this.bgCanvas.item(0).set({
                    rx: 20,
                    ry: 20
                });
                this.bgCanvas.renderAll();
            }

            var bgCardData = this.bgCanvas.toDataURL();
            // let drawData = this.drawCanvas.toDataURL();
            var drawData = this.drawCanvas.contextTop.canvas.toDataURL();

            this.initCreating();

            setTimeout(function () {

                _this2.setBgLinesStyle();

                _this2.canvas.setBackgroundImage(bgCardData, _this2.canvas.renderAll.bind(_this2.canvas), {
                    width: _this2.canvas.width,
                    height: _this2.canvas.height
                });

                fabric.Image.fromURL(drawData, function (img) {
                    img.set({
                        selectable: false,
                        hasControls: false,
                        hasBorders: false
                    });
                    // this.drawCanvas.add(img);
                    _this2.canvas.add(img);
                });
            }, 1000);
        }
    }, {
        key: 'initCreating',
        value: function initCreating() {
            var _this3 = this;

            this.create.classList.remove('fn-hide');
            this.create.style.opacity = 1;
            setTimeout(function () {
                _this3.create.style.opacity = 0;
                _this3.create.classList.add('fn-hide');
                _this3.initResult();
            }, 3000);
        }
    }, {
        key: 'initResult',
        value: function initResult() {
            var _this4 = this;

            var mainCanvas = doc.querySelector('.main-canvas');
            mainCanvas.classList.add('scale-canvas');

            setTimeout(function () {
                _this4.saveCon.classList.remove('fn-hide');
                _this4.saveCon.style.opacity = 1;
            }, 1000);
        }
    }, {
        key: 'finish',
        value: function finish() {

            var main = doc.querySelector('.main');

            main.style.padding = '0.5rem';

            if (window.PageInfo.isWeiboBrowser) {
                main.classList.add('weibo-result');
                main.innerHTML = '<div class="inner"><p class="title">守护完成</p><a class="send btn">发微博告诉Ta</a></div><a class="index-page" href="https://fatepair.com"></a>';
            } else {

                var num = parseInt(this.randomNum(1, 3));
                var pic = doc.querySelector('.succ-img' + num).src;
                var img = '<img class="succ-img" src="' + pic + '"/>';

                if (num == 2) {
                    img = '<a href="https://fatepair.com/wechat/synastry/' + toUser.Id + '/landing/">' + img + '</a>';
                }
                main.innerHTML = img;
                setTimeout(function () {
                    doc.querySelector('.succ-img').style.opacity = 1;
                });
            }
        }
    }, {
        key: 'saveCard',
        value: function saveCard(imgInfo) {

            var request = new XMLHttpRequest();
            var self = this;

            var params = {
                "FromUserHoroscope": mySwiper.realIndex,
                "FromUserID": fromUser.Id,
                "FromUserName": fromUser.Name,
                "FromUserType": fromUser.UserType,
                "Img": imgInfo,
                "ToUserHoroscope": toUser.Horoscope,
                "ToUserID": toUser.Id,
                "ToUserName": toUser.Name,
                "ToUserType": 0
            };

            if (window.PageInfo.isWeiboBrowser && location.href.indexOf('internal_guard') !== -1) {
                params.ToUserType = 2;
            }

            request.open('POST', '/api/retrograde/mercury/create_new_card', true);
            request.setRequestHeader('Content-Type', "application/json; charset=utf-8");
            request.onload = function () {
                self.finish();
                // if (request.status >= 200 && request.status < 400) {
                //     let resp = JSON.parse(request.responseText);
                //     if (!resp.ErrorCode) {
                //         self.finish();
                //     }
                // } else {
                //     alert('保存失败');
                //     saving = false;
                // }
            };
            request.send((0, _stringify2.default)(params));
        }
    }, {
        key: 'saveToQiniu',
        value: function saveToQiniu() {

            var base64 = this.canvas.toDataURL().split(';base64,')[1];
            var request = new XMLHttpRequest();
            var self = this;

            saving = true;

            request.open('POST', 'https://up.qbox.me/putb64/-1', true);
            request.setRequestHeader('Content-Type', "application/octet-stream; charset=utf-8");
            request.setRequestHeader('Authorization', 'UpToken ' + document.querySelector('input[name="upToken"]').value);
            request.onload = function () {
                self.saveCard(imgInfo);
                if (request.status >= 200 && request.status < 400) {
                    var resp = JSON.parse(request.responseText);
                    var _imgInfo = {
                        URL: 'https://si00.fatepair.com/' + resp.key,
                        Width: resp.w * 1,
                        Height: resp.h * 1,
                        Format: resp.mime_type.replace('image/', '')
                    };
                    window.imgHash = resp.key;
                    self.saveCard(_imgInfo);
                } else {
                    alert('保存失败');
                    saving = false;
                }
            };
            request.send(base64);
        }
    }, {
        key: 'renderBgImgs',
        value: function renderBgImgs(rectBg) {
            var _this5 = this;

            var bgIndex = parseInt(this.randomNum(1, 5), 10);
            // let bgIndex = 1;

            var getLimit = function getLimit(group) {

                var limitW = _this5.coords.limit.r - _this5.coords.limit.l;
                var limitH = _this5.coords.limit.b - _this5.coords.limit.t;

                return {
                    // left:this.randomNum(this.coords.limit.l + group.width*2, this.coords.limit.l + limitW - group.width*2),
                    left: group.width / 2,
                    top: _this5.randomNum(_this5.coords.limit.t + group.height / 2, limitH + _this5.coords.limit.t - group.height)
                };
            };

            var loadSvg = function loadSvg(svg) {
                fabric.loadSVGFromString(svg, function (svgs) {

                    var group = new fabric.Group(svgs, {
                        canvas: _this5.canvas,
                        angle: 0,
                        opacity: 0.2,
                        strokeWidth: 0,
                        left: _this5.randomNum(0, rectBg.width),
                        top: _this5.randomNum(0, rectBg.width)
                    });
                    group.setGradient('fill', {
                        x1: group.width,
                        y1: 0,
                        x2: 0,
                        y2: group.height,
                        colorStops: {
                            0: HSBtoRGB([_this5.randomNum(0, 360), 20, 100]),
                            1: 'transparent'
                        }
                    });
                    group.setGradient('stroke', {
                        x1: group.width,
                        y1: 0,
                        x2: 0,
                        y2: group.height,
                        colorStops: {
                            0: HSBtoRGB([_this5.randomNum(0, 360), 20, 100]),
                            1: 'transparent'
                        }
                    });
                    _this5.bgCanvas.add(group);
                    group.animate({
                        // angle : this.randomNum(0,180),
                        left: getLimit(group).left,
                        top: getLimit(group).top
                    }, {
                        easing: fabric.util.ease.easeOutBack,
                        onChange: _this5.bgCanvas.renderAll.bind(_this5.bgCanvas)
                    });
                });
            };

            switch (bgIndex) {
                case 1:

                    var circle1 = new fabric.Circle({
                        left: this.randomNum(0, rectBg.width),
                        top: this.randomNum(0, rectBg.height),
                        selectable: false,
                        hasControls: false,
                        hasBorders: false,
                        id: 'path',
                        opacity: 0.15,
                        radius: 100
                    });

                    circle1.setGradient('fill', {
                        x1: 0,
                        y1: circle1.height / 2,
                        x2: circle1.width,
                        y2: circle1.height / 2,
                        colorStops: {
                            0: 'transparent',
                            1: HSBtoRGB([this.randomNum(10, 255), 20, 100])
                        }
                    });

                    this.bgCanvas.add(circle1);

                    circle1.animate({
                        'left': getLimit(circle1).left,
                        'top': getLimit(circle1).top
                    }, {
                        easing: fabric.util.ease.easeOutBack,
                        onChange: this.bgCanvas.renderAll.bind(this.bgCanvas)
                    });

                    fabric.loadSVGFromString(Svg.group1[1], function (svgs) {

                        var group = new fabric.Group(svgs, {
                            angle: 0,
                            opacity: 0.2,
                            left: _this5.randomNum(0, rectBg.width),
                            top: _this5.randomNum(0, rectBg.width)
                        });
                        group.setGradient('stroke', {
                            x1: group.width,
                            y1: 0,
                            x2: 0,
                            y2: group.height,
                            colorStops: {
                                0: 'transparent',
                                1: HSBtoRGB([_this5.randomNum(10, 255), 20, 100])
                            }
                        });
                        _this5.bgCanvas.add(group);
                        group.animate({
                            // angle : this.randomNum(0,180),
                            left: getLimit(group).left,
                            top: getLimit(group).top
                        }, {
                            easing: fabric.util.ease.easeOutBack,
                            onChange: _this5.bgCanvas.renderAll.bind(_this5.bgCanvas)
                        });
                    });

                    fabric.loadSVGFromString(Svg.group1[2], function (svgs) {

                        var group = new fabric.Group(svgs, {
                            angle: 0,
                            opacity: 0.2,
                            left: _this5.randomNum(0, rectBg.width),
                            top: _this5.randomNum(0, rectBg.width)
                        });
                        group.setGradient('stroke', {
                            x1: group.width,
                            y1: 0,
                            x2: 0,
                            y2: group.height,
                            colorStops: {
                                0: 'transparent',
                                1: HSBtoRGB([_this5.randomNum(10, 255), 20, 100])
                            }
                        });
                        _this5.bgCanvas.add(group);
                        group.scale(1.5);
                        group.animate({
                            // angle : this.randomNum(0,180),
                            left: getLimit(group).left,
                            top: getLimit(group).top
                        }, {
                            easing: fabric.util.ease.easeOutBack,
                            onChange: _this5.bgCanvas.renderAll.bind(_this5.bgCanvas)
                        });
                    });
                    break;
                default:
                    console.log('default');
                    for (var i = 0; i < Svg['group' + bgIndex].length; i++) {
                        loadSvg(Svg['group' + bgIndex][i]);
                    }
            }
        }
    }, {
        key: 'drawRandomBg',
        value: function drawRandomBg() {

            this.bgCanvas.clear();

            window.rectBg = new fabric.Rect({
                id: 'bg',
                width: this.bgCanvas.width,
                height: this.bgCanvas.height,
                left: 0,
                top: 0,
                selectable: false,
                hasControls: false,
                hasBorders: false,
                opacity: 0.5
            });

            var rectGradColor = HSBtoRGB([parseInt(this.randomNum(140, 338)), 46, 40]);

            rectBg.setGradient('fill', {
                x1: rectBg.width / 2,
                y1: 0,
                x2: rectBg.width / 2,
                y2: rectBg.height,
                colorStops: {
                    0: HSBtoRGB([220, 77, 30]),
                    1: rectGradColor
                }
            });
            this.bgCanvas.add(rectBg);
            rectBg.animate({ opacity: 1 });

            for (var i = 50; i >= 0; i--) {
                var dot = new fabric.Circle({
                    left: this.randomNum(0, this.bgCanvas.width),
                    top: this.randomNum(0, this.bgCanvas.width),
                    opacity: 0.05,
                    radius: 1.5,
                    fill: HSBtoRGB([parseInt(this.randomNum(0, 360)), 20, 100])
                });
                this.bgCanvas.add(dot);
            }

            // fabric.loadSVGFromString(Svg.star,(svgs)=>{
            //     let group = new fabric.Group(svgs, {
            //         angle: 0,
            //         fill: HSBtoRGB([this.randomNum(10,255),20,100]),
            //         opacity: 0.05,
            //         left:0,
            //         top:0
            //         // left: this.randomNum(0,rectBg.width),
            //         // top:  this.randomNum(0,rectBg.width)
            //     });
            //     this.bgCanvas.add(group);
            //     group.viewportCenter();
            // });


            this.renderBgImgs(rectBg);
        }
    }, {
        key: 'selectBg',
        value: function selectBg() {
            var _this6 = this;

            this.welcome.style.opacity = 0;
            this.drawing.classList.remove('fn-hide');

            setTimeout(function () {
                _this6.drawing.style.opacity = 1;
                doc.querySelector('.bg-canvas').classList.remove('fn-hide');
                _this6.drawing.querySelector('.tip').classList.remove('fn-hide');

                _this6.drawRandomBg();
                _this6.initDrawing();
            }, 1000);
        }
    }, {
        key: 'drawScene',
        value: function drawScene() {
            var _this7 = this;

            var offsetTop = 15;
            var self = this,
                rectText = void 0,
                rectTextName = void 0,
                leftTopCircle = void 0,
                leftTopLineS = void 0,
                leftTopLineL = void 0,
                leftLineS = void 0,
                leftLineL = void 0,
                leftBottomCircle = void 0,
                leftBottomLine = void 0,
                rightTopCircle = void 0,
                rightTopLineS = void 0,
                rightTopLineL = void 0,
                rightLineS = void 0,
                rightLineL = void 0,
                rightBottomCircle = void 0,
                rightBottomLine = void 0;

            // 中间文字框
            rectText = function () {
                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    strokeWidth: 0.8,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: _this7.coords.rect.t,
                    width: _this7.coords.rect.w,
                    height: _this7.coords.rect.h,
                    opacity: 0
                });
                _this7.canvas.add(rect);
                rect.viewportCenterH();
                rect.animate({ opacity: 1 });
                _this7.coords.limit.t = rect.top;
                return rect;
            }();

            // 左侧圆弧
            leftTopCircle = function () {

                var radius = _this7.coords.circle.radius;
                var clipRadius = Math.PI / 2;

                var circle = new fabric.Circle({
                    radius: radius,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    originX: 'center',
                    originY: 'center',
                    opacity: 0,
                    strokeWidth: 2,
                    stroke: _this7.coords.lineColor,
                    clipTo: function clipTo(ctx) {
                        ctx.arc(0, 0, radius, clipRadius, Math.PI * 2, true);
                    }
                });

                setTimeout(function () {
                    circle.set({ 'opacity': 1 });
                }, 100);

                fabric.util.animate({
                    startValue: 0,
                    endValue: clipRadius,
                    duration: 1000,
                    onChange: function onChange(value) {
                        clipRadius = value;
                        _this7.canvas.renderAll();
                    },
                    onComplete: function onComplete() {}
                });
                _this7.canvas.add(circle);

                return circle;
            }();

            // 左侧顶部长横线
            leftTopLineL = function () {

                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: rectText.top + rectText.height / 2,
                    left: rectText.left,
                    height: 0
                });
                _this7.canvas.add(rect);

                rect.animate({ width: _this7.coords.lineLT.w, left: rectText.left - _this7.coords.lineLT.w });

                leftTopCircle.set({
                    top: rectText.top + rectText.height / 2,
                    left: rectText.left - _this7.coords.lineLT.w - _this7.coords.circle.radius + 1
                });

                return rect;
            }();

            // 左侧短竖线
            leftLineS = function () {

                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftTopCircle.top + _this7.coords.circle.radius - 1,
                    left: leftTopCircle.left,
                    height: 0
                });

                _this7.canvas.add(rect);

                rect.animate({ height: _this7.screenH - (leftTopCircle.top + _this7.coords.circle.radius) * 2 + 1 - offsetTop }, {
                    duration: 1000,
                    onComplete: function onComplete() {
                        leftBottomCircle = leftBottomCircleFunc();
                    }
                });

                return rect;
            }();

            // 左侧顶部短横线
            leftTopLineS = function () {

                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftTopLineL.top + _this7.screenH * 14 / _this7.layoutH,
                    left: leftLineS.left + _this7.screenW * 23 / _this7.layoutW,
                    height: 0
                });
                _this7.canvas.add(rect);

                rect.animate({ width: _this7.coords.lineLS.w }, {
                    duration: 1000
                });
                return rect;
            }();

            // 左侧长竖线
            leftLineL = function () {
                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftTopLineS.top,
                    left: leftTopLineS.left,
                    height: 0
                });
                _this7.canvas.add(rect);

                rect.animate({ height: _this7.screenH - leftTopLineS.top * 2 - offsetTop }, {
                    duration: 2000,
                    onComplete: function onComplete() {
                        leftBottomLine = leftBottomLineFunc();
                    }
                });

                _this7.coords.limit.l = rect.left;
                return rect;
            }();

            // 左侧底部短线
            function leftBottomLineFunc() {
                var rect = new fabric.Rect({
                    stroke: self.coords.lineColor,
                    width: leftTopLineS.width,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftLineL.top + leftLineL.height,
                    left: leftLineL.left,
                    height: 0
                });
                self.canvas.add(rect);
                return rect;
            }

            // 左侧底部圆弧
            function leftBottomCircleFunc() {

                var radius = self.coords.circle.radius;
                var clipRadius = Math.PI * 1.5;

                var circle = new fabric.Circle({
                    radius: radius,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    originX: 'center',
                    originY: 'center',
                    left: leftLineS.left,
                    top: leftLineS.height + leftLineS.top + radius,
                    opacity: 0,
                    strokeWidth: 2,
                    stroke: self.coords.lineColor,
                    clipTo: function clipTo(ctx) {
                        ctx.arc(0, 0, radius, 0, clipRadius, true);
                    }
                });

                setTimeout(function () {
                    circle.set({ 'opacity': 1 });
                }, 100);

                fabric.util.animate({
                    startValue: Math.PI * 2,
                    endValue: clipRadius,
                    duration: 1000,
                    onChange: function onChange(value) {
                        clipRadius = value;
                        self.canvas.renderAll();
                    },
                    onComplete: function onComplete() {
                        window.centerBottomLine = centerBottomLineFunc();
                    }
                });
                self.canvas.add(circle);

                return circle;
            }

            // 右侧顶部长横线
            rightTopLineL = function () {
                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftTopLineL.top,
                    left: leftTopLineL.left + rectText.width,
                    height: 0
                });
                _this7.canvas.add(rect);

                rect.animate({ width: _this7.coords.lineLT.w }, {
                    onComplete: function onComplete() {
                        rightTopCircle = rightTopCircleFunc();
                        rightLineS = rightLineSFunc();
                    }
                });
                return rect;
            }();

            // 右侧圆弧
            function rightTopCircleFunc() {

                var radius = self.coords.circle.radius;
                var clipRadius = -Math.PI;

                var circle = new fabric.Circle({
                    radius: radius,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    originY: 'center',
                    opacity: 0,
                    strokeWidth: 2,
                    stroke: self.coords.lineColor,
                    clipTo: function clipTo(ctx) {
                        ctx.arc(0, 0, radius, clipRadius, Math.PI / 2, true);
                    }
                });

                setTimeout(function () {
                    circle.set({ 'opacity': 1 });
                }, 100);

                fabric.util.animate({
                    startValue: -Math.PI * 1.5,
                    endValue: clipRadius,
                    duration: 1000,
                    onChange: function onChange(value) {
                        clipRadius = value;
                        self.canvas.renderAll();
                    },
                    onComplete: function onComplete() {}
                });

                self.canvas.add(circle);

                circle.set({
                    left: rightTopLineL.left + rightTopLineL.width - 1,
                    top: rightTopLineL.top
                });
                return circle;
            }

            // 右侧短竖线
            function rightLineSFunc() {

                var rect = new fabric.Rect({
                    stroke: self.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftLineS.top,
                    left: rightTopCircle.left + self.coords.circle.radius,
                    height: 0
                });

                self.canvas.add(rect);

                rect.animate({ height: self.screenH - leftLineS.top * 2 - offsetTop }, {
                    duration: 1000,
                    onComplete: function onComplete() {
                        rightBottomCircle = rightBottomCircleFunc();
                        rightTopLineS = rightTopLineSFunc();
                        rightLineL = rightLineLFunc();
                    }
                });
                return rect;
            }

            // 右侧顶部短横线
            function rightTopLineSFunc() {

                var rect = new fabric.Rect({
                    stroke: self.coords.lineColor,
                    width: self.coords.lineLS.w,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftTopLineS.top,
                    left: rightTopLineL.left + self.screenW * 23 / self.layoutW + rightTopLineL.width,
                    height: 0
                });
                self.canvas.add(rect);
                return rect;
            }

            // 右侧长竖线
            function rightLineLFunc() {

                var rect = new fabric.Rect({
                    stroke: self.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: rightTopLineS.top,
                    left: rightTopLineS.left + rightTopLineS.width,
                    height: 0
                });
                self.canvas.add(rect);

                rect.animate({ height: self.screenH - leftTopLineS.top * 2 - offsetTop }, {
                    duration: 1000,
                    onComplete: function onComplete() {
                        rightBottomLine = rightBottomLineFunc();
                        self.initWelcome();
                    }
                });

                self.coords.limit.r = rect.left;

                return rect;
            }

            // 右侧底部短线
            function rightBottomLineFunc() {
                var rect = new fabric.Rect({
                    stroke: self.coords.lineColor,
                    width: rightTopLineS.width,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: rightLineL.top + rightLineL.height,
                    left: rightTopLineS.left,
                    height: 0
                });
                self.canvas.add(rect);
                return rect;
            }

            // 右侧底部圆弧
            function rightBottomCircleFunc() {

                var radius = self.coords.circle.radius;
                var clipRadius = -Math.PI / 2;

                var circle = new fabric.Circle({
                    radius: radius,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    originY: 'center',
                    opacity: 0,
                    strokeWidth: 2,
                    stroke: self.coords.lineColor,
                    clipTo: function clipTo(ctx) {
                        ctx.arc(0, 0, radius, clipRadius, Math.PI, true);
                    }
                });

                setTimeout(function () {
                    circle.set({ 'opacity': 1 });
                }, 100);

                fabric.util.animate({
                    startValue: -Math.PI,
                    endValue: clipRadius,
                    duration: 1000,
                    onChange: function onChange(value) {
                        clipRadius = value;
                        self.canvas.renderAll();
                    },
                    onComplete: function onComplete() {}
                });

                self.canvas.add(circle);

                circle.set({
                    left: rightLineS.left - radius,
                    top: rightLineS.top + rightLineS.height + radius
                });
                return circle;
            }

            // 底部中心横线
            function centerBottomLineFunc() {

                var rect = new fabric.Rect({
                    stroke: self.coords.lineColor,
                    width: 0,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: leftBottomCircle.top - 1,
                    left: leftBottomCircle.left + leftTopCircle.radius - 1,
                    height: 0
                });

                self.canvas.add(rect);

                rect.animate({ width: self.screenW - (leftTopCircle.left + leftTopCircle.radius) * 2 + 1 }, {
                    duration: 200
                });

                self.coords.limit.b = rect.top;

                return rect;
            }

            rectText.set({
                top: rectText.top + 15
            });

            // 中间文字横线
            rectTextName = function () {
                var rect = new fabric.Rect({
                    stroke: _this7.coords.lineColor,
                    strokeWidth: 0.8,
                    fill: 'transparent',
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    top: rectText.top + _this7.coords.rect.tt,
                    left: _this7.coords.rect.l,
                    width: _this7.coords.rect.w,
                    height: 0,
                    opacity: 0
                });
                _this7.canvas.add(rect);
                rect.viewportCenterH();
                rect.animate({ opacity: 1 });
                return rect;
            }();

            window.rectTitle = function () {

                var text = new fabric.Text(fromUser.Name, {
                    fontFamily: 'PingFangSC-light',
                    width: rectText.width,
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    fontSize: 16,
                    opacity: 0,
                    fill: '#85FFDD'
                });

                _this7.canvas.add(text);
                text.viewportCenterH();
                text.animate({
                    opacity: 1,
                    top: rectTextName.top + _this7.coords.rect.tb / 2 - text.height / 2
                }, {
                    duration: 500,
                    onComplete: function onComplete() {}
                });

                window.textHoro = new fabric.Text('水逆守护者', {
                    fontFamily: 'PingFangSC-light',
                    width: rectText.width,
                    selectable: false,
                    hasControls: false,
                    hasBorders: false,
                    fontSize: 12,
                    opacity: 0.42,
                    fill: '#85FFDD'
                });
                textHoro.set({
                    top: rectText.top + _this7.coords.rect.tt / 2 - textHoro.height / 2
                });

                _this7.canvas.add(textHoro);
                textHoro.viewportCenterH();
                return text;
            }();

            // fabric.loadSVGFromString(Svg.badge,(svgs)=>{

            //     let group = new fabric.Group(svgs, {
            //         canvas      : self.canvas,
            //         hasControls : false,
            //         hasBorders  : false,
            //         top: rectText.top + this.screenH * 149 / this.layoutH + rectText.height
            //     });
            //     console.log(group);
            //     this.canvas.add(group);
            //     group.scale(0.5);
            //     group.viewportCenterH();
            // });
        }
    }, {
        key: 'addBottonIcon',
        value: function addBottonIcon() {
            var _this8 = this;

            var line = window.centerBottomLine;

            var radius = this.screenW * 170 / this.layoutW / 2;
            var lineW = line.width / 2 - radius;

            var rectLeft = new fabric.Rect({
                stroke: this.coords.lineColor,
                strokeWidth: 0.8,
                fill: 'transparent',
                selectable: false,
                hasControls: false,
                hasBorders: false,
                top: line.top,
                left: line.left,
                width: lineW,
                height: 0
            });
            this.canvas.add(rectLeft);

            var rectRight = new fabric.Rect({
                stroke: this.coords.lineColor,
                strokeWidth: 0.8,
                fill: 'transparent',
                selectable: false,
                hasControls: false,
                hasBorders: false,
                top: rectLeft.top,
                left: rectLeft.left + lineW + radius * 2,
                width: lineW,
                height: 0
            });
            this.canvas.add(rectRight);

            var circle = new fabric.Circle({
                radius: radius,
                fill: 'transparent',
                left: rectLeft.left + lineW,
                top: rectLeft.top,
                selectable: false,
                hasControls: false,
                hasBorders: false,
                originY: 'center',
                strokeWidth: 1,
                stroke: this.coords.lineColor
            });
            this.canvas.add(circle);

            fabric.util.loadImage(document.querySelector('#load-img').src, function (img) {

                var object = new fabric.Image(img);

                object.set({
                    left: circle.left,
                    top: circle.top - (circle.height - 15) / 2,
                    width: circle.width - 15,
                    height: circle.height - 15
                });

                _this8.canvas.add(object);
                object.viewportCenterH();
            }, null, { crossOrigin: 'Anonymous' });

            this.canvas.remove(line);
            this.canvas.renderAll();
        }
    }, {
        key: 'backWelcome',
        value: function backWelcome() {

            doc.querySelector('.main-canvas').classList.remove('scale-canvas');

            this.recoveBgLinesStyle();

            this.bgCanvas.clear();
            this.canvas.clear();

            this.drawCanvas.clearContext(this.drawCanvas.contextTop);

            this.hideEle(this.saveCon);
            this.hideEle(this.create);
            this.hideEle(this.drawing);

            this.drawScene();
        }
    }, {
        key: 'setTitle',
        value: function setTitle() {
            window.textHoro.setText(_common.HoroModel[mySwiper.realIndex].cn + '座守护者');
            window.textHoro.viewportCenterH();
            this.canvas.renderAll();
        }
    }, {
        key: 'init',
        value: function init() {
            var _this9 = this;

            if (history.pushState) {
                window.history.pushState({ page: 'index' }, '', '#welcome');
            }
            this.drawScene();

            this.welcome.querySelector('.btn').addEventListener('click', function () {

                _this9.selectBg();
                _this9.setTitle();

                if (history.pushState) {
                    window.history.pushState({ page: 'step' }, '', '#step');
                }
            });

            doc.querySelector('#redo').addEventListener('click', function () {
                window.history.back();
            });

            doc.querySelector('#save').addEventListener('click', function () {
                if (!saving) {
                    doc.querySelector('.main-canvas').classList.add('slideRotate');

                    setTimeout(function () {
                        _this9.saveCon.classList.add('fn-hide');
                        _this9.create.querySelector('.load').innerHTML = '发送中...';
                        _this9.create.classList.remove('fn-hide');
                        _this9.create.style.opacity = 1;
                        _this9.finish();
                        // this.saveToQiniu();
                    }, 1000);
                }
            });

            this.clear.addEventListener('click', function () {
                _this9.drawCanvas.clearContext(_this9.drawCanvas.contextTop);
                // this.drawCanvas.clear();
                _this9.drawing.querySelector('.tip').classList.add('fn-hide');
            }, false);

            this.preview.addEventListener('click', function () {

                // this.drawCanvas.isDrawingMode = false;

                doc.querySelector('.bg-canvas').classList.add('fn-hide');

                if (!window.PageInfo.isWeiboBrowser) {
                    window.rectBg.set({
                        rx: 20,
                        ry: 20
                    });
                }

                _this9.addBottonIcon(window.centerBottomLine);
                _this9.bgCanvas.renderAll();
                _this9.initPreview();
            }, false);

            var self = this;

            doc.querySelector('#changeBg').addEventListener('click', function () {
                var _this10 = this;

                self.drawRandomBg();
                this.classList.add('active');
                setTimeout(function () {
                    _this10.classList.remove('active');
                }, 1000);
            });

            doc.querySelector('.main').addEventListener('click', function (e) {

                if (e.target.classList.contains('send')) {

                    var btn = this.querySelector('.send');

                    btn.className = 'succ';
                    btn.innerHTML = '发送中...';

                    weiboHandle(function (data) {
                        btn.innerHTML = '发送成功！';
                        setTimeout(function () {
                            window.location.href = 'https://fatepair.com/';
                        }, 1000);
                    });
                }
            });

            doc.querySelector('.welcome .intro .txt').innerHTML = 'Hi\uFF01\u5B88\u62A4\u8005<br/>\u8BF7\u4F60\u6DF1\u547C\u5438\uFF0C\u51DD\u805A\u80FD\u91CF<br/>\u5E76\u9009\u62E9\u4F60\u7684\u661F\u5EA7';
        }
    }]);
    return Canvas;
}();

window.onload = function () {

    setTimeout(function () {
        document.getElementById('loading').classList.add('fn-hide');
        window.canvas = new Canvas();
        window.canvas.init();
    }, 1000);
};

window.addEventListener("popstate", function (e) {

    var state = e.state;
    if (state.page == 'index') {
        window.canvas.backWelcome();
        if (history.pushState) {
            window.history.replaceState({ page: 'index' }, '', '#welcome');
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(9);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var ctx = __webpack_require__(13);
var hide = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getToken = function getToken() {
    var ajax = $.ajax({
        url: '/api/common/qiniutoken',
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
    return ajax;
};

var getVideoToken = function getVideoToken() {
    var ajax = $.ajax({
        url: '/api/common/live_token',
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
    return ajax;
};

var formatDate = function formatDate(val, fmt) {

    var date = new Date(val);
    var o = {
        "M+": date.getMonth() + 1, //月份
        "D+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getFullYear() + "");
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};

Date.prototype.ago = function () {
    if (!arguments.length) return '';
    var arg = arguments,
        now = this.getTime(),
        past = !isNaN(arg[0]) ? arg[0] : new Date(arg[0]).getTime(),
        diffValue = now - past,
        result = '',
        minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        halfamonth = day * 15,
        month = day * 30,
        year = month * 12,
        _year = diffValue / year,
        _month = diffValue / month,
        _week = diffValue / (7 * day),
        _day = diffValue / day,
        _hour = diffValue / hour,
        _min = diffValue / minute;

    if (_year >= 1) result = parseInt(_year) + "年前";else if (_month >= 1) result = parseInt(_month) + "个月前";else if (_week >= 1) result = parseInt(_week) + "周前";else if (_day >= 1) result = parseInt(_day) + "天前";else if (_hour >= 1) result = parseInt(_hour) + "小时前";else if (_min >= 1) result = parseInt(_min) + "分钟前";else result = "刚刚";
    return result;
};

var formatTimeAgo = function formatTimeAgo(time) {
    return new Date().ago(time);
};

var HoroModel = [{
    index: 0,
    en: 'Aries',
    color: '#FF8E8E',
    cn: '白羊'

}, {
    index: 1,
    en: 'Taurus',
    color: '#FEDC62',
    cn: '金牛'
}, {
    index: 2,
    en: 'Gemini',
    color: '#44CB84',
    cn: '双子'
}, {
    index: 3,
    en: 'Cancer',
    color: '#8EDDFF',
    cn: '巨蟹'
}, {
    index: 4,
    en: 'Leo',
    color: '#FF8E8E',
    cn: '狮子'
}, {
    index: 5,
    en: 'Virgo',
    color: '#FEDC62',
    cn: '处女'
}, {
    index: 6,
    en: 'Libra',
    color: '#44CB84',
    cn: '天秤'
}, {
    index: 7,
    en: 'Scorpio',
    color: '#8EDDFF',
    cn: '天蝎'
}, {
    index: 8,
    en: 'Sagittarius',
    color: '#FF8E8E',
    cn: '射手'
}, {
    index: 9,
    en: 'Capricorn',
    color: '#FEDC62',
    cn: '摩羯'
}, {
    index: 10,
    en: 'Aquarius',
    color: '#44CB84',
    cn: '水瓶'
}, {
    index: 11,
    en: 'Pisces',
    color: '#8EDDFF',
    cn: '双鱼'
}];

var PlanetModel = [{
    index: 0,
    en: 'Sun',
    cn: '太阳',
    s_cn: '日'
}, {
    index: 1,
    en: 'Moon',
    cn: '月亮',
    s_cn: '月'
}, {
    index: 2,
    en: 'Mercury',
    cn: '水星',
    s_cn: '水'
}, {
    index: 3,
    en: 'Venus',
    cn: '金星',
    s_cn: '金'
}, {
    index: 4,
    en: 'Mars',
    cn: '火星',
    s_cn: '火'
}, {
    index: 5,
    en: 'Jupiter',
    cn: '木星',
    s_cn: '木'
}, {
    index: 6,
    en: 'Saturn',
    cn: '土星',
    s_cn: '土'
}, {
    index: 7,
    en: 'Uranus',
    cn: '天王星',
    s_cn: '天'

}, {
    index: 8,
    en: 'Neptune',
    cn: '海王星',
    s_cn: '海'
}, {
    index: 9,
    en: 'Pluto',
    cn: '冥王星',
    s_cn: '冥'
}];

PlanetModel[23] = {
    index: 23,
    en: 'Asc',
    cn: '上升',
    s_cn: '升'
};
PlanetModel[24] = {
    index: 24,
    en: 'Mc',
    cn: '中天',
    s_cn: '顶'
};

PlanetModel[25] = {
    index: 25,
    en: 'Dsc',
    cn: '下降',
    s_cn: '降'
};
PlanetModel[26] = {
    index: 26,
    en: 'Ic',
    cn: '天底',
    s_cn: '底'
};

var QuadModel = ['启动', '固定', '变动'];

var ElementModel = [{
    index: 0,
    en: 'fire',
    color: '#FE6262',
    cn: '火'
}, {
    index: 1,
    en: 'earth',
    color: '#FEDC62',
    cn: '土'
}, {
    index: 2,
    en: 'air',
    color: '#32AF9E',
    cn: '风'
}, {
    index: 3,
    en: 'water',
    color: '#22A0CD',
    cn: '水'
}];

var LineColors = {
    0: '#855DFF',
    3: '#22A0CD',
    5: '#FF7474',
    6: '#32AF9E',
    10: '#FF7474'
};

var AspectModel = {
    0: {
        s_cn: '合',
        cn: '合',
        color: LineColors[0],
        intro: '有利影响',
        info: '默契点',
        num: 0,
        cls: 'good'
    },
    3: {
        s_cn: '六合',
        cn: '六合',
        color: LineColors[3],
        intro: '有利影响',
        info: '默契点',
        num: 60,
        cls: 'good'
    },
    5: {
        s_cn: '刑',
        cn: '刑',
        color: LineColors[5],
        intro: '不利影响',
        num: 90,
        info: '小摩擦',
        cls: 'bad'
    },
    6: {
        s_cn: '拱',
        cn: '拱',
        num: 120,
        color: LineColors[6],
        intro: '有利影响',
        info: '默契点',
        cls: 'good'
    },
    10: {
        s_cn: '冲',
        cn: '冲',
        num: 180,
        color: LineColors[10],
        info: '小摩擦',
        intro: '不利影响',
        cls: 'bad'
    }
};

var sharePage = function sharePage(bridge, info) {

    if (bridge) {
        bridge.registerHandler('prepareSharePage', function (data, response) {

            var page = document.querySelector('body');
            page.classList.add('share-page');

            bridge.callHandler('sharePage', info, function (data) {
                page.classList.remove('share-page');

                if (!window.PageInfo.oldShareBridge) {
                    bridge.callHandler('leavePage', function (data) {});
                }
            });
            response(true);
        });
    }
};

var sharePageCallback = function sharePageCallback(bridge, info, prepareCallback, callCallback) {

    if (bridge) {
        bridge.registerHandler('prepareSharePage', function (data, response) {

            var page = document.querySelector('body');
            page.classList.add('share-page');
            prepareCallback();

            bridge.callHandler('sharePage', info, function (data) {
                page.classList.remove('share-page');
                callCallback();
            });
            response(true);
        });
    }
};

var HoroSvg = function HoroSvg(index, width, height, color) {

    width = width || 16;
    height = height || 16;
    color = color || '#fff';

    switch (index) {

        case 0:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 34 26\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-409 -96)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"><path d=\"M425.507 120.733l-.73-15.173c-.596-10.004-8.454-8.867-11.23-6.804-3.498 2.6-3.566 7.866-1.028 10.45M425.507 120.733l.732-15.173c.594-10.004 8.45-8.867 11.227-6.804 3.498 2.6 3.567 7.866 1.03 10.45\"/></g></svg>";

        //- 金牛座 Taurus  04/20 - 05/20
        case 1:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 31 29\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-571 -142)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"><path d=\"M595.615 160.694c0 4.887-3.966 8.848-8.858 8.848s-8.858-3.96-8.858-8.848c0-4.886 3.965-8.847 8.857-8.847 4.892 0 8.858 3.96 8.858 8.847zM586.757 151.847c-5.287 0-8.406-8.982-13.083-8.644M586.486 151.847c5.288 0 8.406-8.982 13.083-8.644\"/></g></svg>";

        //- 双子座 Gemini  05/21 - 06/21
        case 2:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 23 27\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-685 -253)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"><path d=\"M687.808 278.146c4.905-5.1 12.856-5.1 17.76 0M705.568 254.153c-4.904 5.1-12.855 5.1-17.76 0M692.814 257.537v17.222M699.822 257.537v17.222\"/></g></svg>";

        //- 巨蟹座 Cancer  06/22 - 07/22
        case 3:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 31 25\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-728 -415)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M738.968 431.03c0 2.512-2.04 4.55-4.555 4.55-2.516 0-4.555-2.038-4.555-4.55 0-2.514 2.04-4.55 4.555-4.55 2.516 0 4.555 2.036 4.555 4.55zM732.126 434.96c4.93 3.025 13.51 6.01 23.634-3.14M746.76 423.028c0-2.513 2.04-4.55 4.555-4.55 2.516 0 4.556 2.037 4.556 4.55s-2.04 4.55-4.555 4.55c-2.515 0-4.555-2.037-4.555-4.55zM753.603 419.097c-4.93-3.025-13.51-6.01-23.634 3.138\"/></g></svg>";

        //- 獅子座 Leo 07/23 - 08/22
        case 4:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 30 32\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-684 -565)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M695.66 584.672c0 2.718-2.205 4.922-4.926 4.922-2.722 0-4.928-2.204-4.928-4.922 0-2.718 2.206-4.922 4.928-4.922 2.72 0 4.927 2.204 4.927 4.922z\"/><path d=\"M694.638 581.675c-.802-2.914-3.383-9.826 1.023-13.576 3.686-3.138 11.96-2.934 12.607 5.198.624 7.818-3.213 7.61-5.343 12.193-3.09 6.656-.17 10.51 3.427 10.51 4.38 0 5.107-3.54 5.007-5\"/></g></svg>";

        //- 处女座 Virgo   08/23 - 09/22
        case 5:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 34 25\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-568 -685)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M576.81 703.275v-13.648c0-2.275 1.597-3.627 3.57-3.627 1.97 0 3.568 1.352 3.568 3.627v13.648M583.948 703.275v-13.648c0-2.275 1.6-3.627 3.57-3.627 1.972 0 3.57 1.352 3.57 3.627v11.19c0 2.273 1.846 6.208 6.278 6.208\"/><path d=\"M569.67 689.627c0-2.275 1.598-3.627 3.57-3.627 1.97 0 3.57 1.352 3.57 3.627M591.704 693.008c3.508-3.504 8.266-3.054 7.508 2.336-.984 7.008-6.524 11.066-11.817 13.28\"/></g></svg>";

        //- 天秤座 Libra   09/23 - 10/23
        case 6:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 34 21\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-409 -732)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M410.482 750.68h29.857M410.482 743.268h6.986c-.15-.617-.237-1.258-.237-1.92 0-4.512 3.663-8.17 8.18-8.17 4.518 0 8.18 3.658 8.18 8.17 0 .663-.088 1.303-.237 1.92h6.986\"/></g></svg>";

        //- 天蝎座 Scorpio 10/24 - 11/22
        case 7:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 34 25\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-252 -690)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M260.21 708.096V694.88c0-2.2 1.548-3.51 3.457-3.51 1.91 0 3.456 1.31 3.456 3.51v13.216M267.123 708.096V694.88c0-2.2 1.548-3.51 3.457-3.51 1.91 0 3.456 1.31 3.456 3.51v9.743c0 3.473 1.71 6.19 8.94 5.615\"/><path d=\"M253.298 694.88c0-2.2 1.547-3.51 3.456-3.51 1.91 0 3.457 1.31 3.457 3.51M279.354 706.62l3.623 3.618-3.623 3.62\"/></g></svg>";

        //- 射手座 Sagittarius 11/23 - 12/21
        case 8:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 29 27\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-137 -568)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M154.5 569.383h8.308v8.298M162.808 569.383L139.164 593M145.7 578.174l8.307 8.297\"/></g></svg>";

        //- 摩羯座 Capricorn   12/22 - 01/19
        case 9:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 35 26\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><path d=\"M3 321.192c2.517-1.886 6.397-1.676 7.026 3.037.63 4.713.525 9.217.525 9.217.91-8.066.642-7.4 1.364-10.37.908-3.734 6.607-4.714 7.55.733.945 5.447 3.045 13.676 7.97 13.418 3.2-.167 4.762-1.957 4.762-4.366 0-2.41-1.667-4.967-4.45-4.903-5.345.12-4.663 9.31-8.28 11.877-2.944 2.087-4.406 1.676-5.98 1.885\" transform=\"translate(-.888 -318)\" filter=\"url(#a)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";

        //- 水瓶座 Aquarius    01/20 - 02/18
        case 10:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 34 18\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-136 -257)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"><path d=\"M137.41 261.998c3.255 0 2.588-3.708 5.34-3.916 3.038-.23 4.096 3.88 6.35 3.88 2.25 0 3.414-3.87 6.25-3.87 2.838 0 3.17 3.906 6.256 3.906 3.088 0 3.755-3.916 5.507-3.916M137.41 273.75c3.255 0 2.588-3.71 5.34-3.916 3.038-.23 4.096 3.88 6.35 3.88 2.25 0 3.414-3.87 6.25-3.87 2.838 0 3.17 3.906 6.256 3.906 3.088 0 3.755-3.916 5.507-3.916\"/></g></svg>";
        //- 双魚座 Pisces  02/19 - 03/20
        case 11:
            return "<svg class=\"svg\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 29 26\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"/><feMerge><feMergeNode in=\"shadowMatrixOuter1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><g filter=\"url(#a)\" transform=\"translate(-249 -140)\" stroke=\"" + color + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"><path d=\"M272.533 164.94c-6.876-6.595-6.876-17.29 0-23.884M253.208 141.055c6.876 6.596 6.876 17.29 0 23.886M250.59 152.586h24.56\"/></g></svg>";
        default:
    }
};

exports.getToken = getToken;
exports.getVideoToken = getVideoToken;
exports.formatDate = formatDate;
exports.HoroModel = HoroModel;
exports.PlanetModel = PlanetModel;
exports.ElementModel = ElementModel;
exports.LineColors = LineColors;
exports.QuadModel = QuadModel;
exports.AspectModel = AspectModel;
exports.formatTimeAgo = formatTimeAgo;
exports.sharePage = sharePage;
exports.sharePageCallback = sharePageCallback;
exports.HoroSvg = HoroSvg;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

//============================================================
//
// The MIT License
//
// Copyright (C) 2014 Matthew Wagerfield - @wagerfield
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
// OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
//============================================================

/**
 * Parallax.js
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 */
;(function(window, document, undefined) {

  // Strict Mode
  'use strict';

  // Constants
  var NAME = 'Parallax';
  var MAGIC_NUMBER = 30;
  var DEFAULTS = {
    relativeInput: false,
    clipRelativeInput: false,
    calibrationThreshold: 100,
    calibrationDelay: 500,
    supportDelay: 500,
    calibrateX: false,
    calibrateY: true,
    invertX: true,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 10.0,
    scalarY: 10.0,
    frictionX: 0.1,
    frictionY: 0.1,
    originX: 0.5,
    originY: 0.5
  };

  function Parallax(element, options) {

    // DOM Context
    this.element = element;
    this.layers = element.getElementsByClassName('layer');

    // Data Extraction
    var data = {
      calibrateX: this.data(this.element, 'calibrate-x'),
      calibrateY: this.data(this.element, 'calibrate-y'),
      invertX: this.data(this.element, 'invert-x'),
      invertY: this.data(this.element, 'invert-y'),
      limitX: this.data(this.element, 'limit-x'),
      limitY: this.data(this.element, 'limit-y'),
      scalarX: this.data(this.element, 'scalar-x'),
      scalarY: this.data(this.element, 'scalar-y'),
      frictionX: this.data(this.element, 'friction-x'),
      frictionY: this.data(this.element, 'friction-y'),
      originX: this.data(this.element, 'origin-x'),
      originY: this.data(this.element, 'origin-y')
    };

    // Delete Null Data Values
    for (var key in data) {
      if (data[key] === null) delete data[key];
    }

    // Compose Settings Object
    this.extend(this, DEFAULTS, options, data);

    // States
    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depths = [];
    this.raf = null;

    // Element Bounds
    this.bounds = null;
    this.ex = 0;
    this.ey = 0;
    this.ew = 0;
    this.eh = 0;

    // Element Center
    this.ecx = 0;
    this.ecy = 0;

    // Element Range
    this.erx = 0;
    this.ery = 0;

    // Calibration
    this.cx = 0;
    this.cy = 0;

    // Input
    this.ix = 0;
    this.iy = 0;

    // Motion
    this.mx = 0;
    this.my = 0;

    // Velocity
    this.vx = 0;
    this.vy = 0;

    // Callbacks
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    // Initialise
    this.initialise();
  }

  Parallax.prototype.extend = function() {
    if (arguments.length > 1) {
      var master = arguments[0];
      for (var i = 1, l = arguments.length; i < l; i++) {
        var object = arguments[i];
        for (var key in object) {
          master[key] = object[key];
        }
      }
    }
  };

  Parallax.prototype.data = function(element, name) {
    return this.deserialize(element.getAttribute('data-'+name));
  };

  Parallax.prototype.deserialize = function(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return value;
    }
  };

  Parallax.prototype.camelCase = function(value) {
    return value.replace(/-+(.)?/g, function(match, character){
      return character ? character.toUpperCase() : '';
    });
  };

  Parallax.prototype.transformSupport = function(value) {
    var element = document.createElement('div');
    var propertySupport = false;
    var propertyValue = null;
    var featureSupport = false;
    var cssProperty = null;
    var jsProperty = null;
    for (var i = 0, l = this.vendors.length; i < l; i++) {
      if (this.vendors[i] !== null) {
        cssProperty = this.vendors[i][0] + 'transform';
        jsProperty = this.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch(value) {
      case '2D':
        featureSupport = propertySupport;
        break;
      case '3D':
        if (propertySupport) {
          var body = document.body || document.createElement('body');
          var documentElement = document.documentElement;
          var documentOverflow = documentElement.style.overflow;
          if (!document.body) {
            documentElement.style.overflow = 'hidden';
            documentElement.appendChild(body);
            body.style.overflow = 'hidden';
            body.style.background = '';
          }
          body.appendChild(element);
          element.style[jsProperty] = 'translate3d(1px,1px,1px)';
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
          documentElement.style.overflow = documentOverflow;
          body.removeChild(element);
        }
        break;
    }
    return featureSupport;
  };

  Parallax.prototype.ww = null;
  Parallax.prototype.wh = null;
  Parallax.prototype.wcx = null;
  Parallax.prototype.wcy = null;
  Parallax.prototype.wrx = null;
  Parallax.prototype.wry = null;
  Parallax.prototype.portrait = null;
  Parallax.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
  Parallax.prototype.vendors = [null,['-webkit-','webkit'],['-moz-','Moz'],['-o-','O'],['-ms-','ms']];
  Parallax.prototype.motionSupport = !!window.DeviceMotionEvent;
  Parallax.prototype.orientationSupport = !!window.DeviceOrientationEvent;
  Parallax.prototype.orientationStatus = 0;
  Parallax.prototype.propertyCache = {};

  Parallax.prototype.initialise = function() {

    if (Parallax.prototype.transform2DSupport === undefined) {
      Parallax.prototype.transform2DSupport = Parallax.prototype.transformSupport('2D');
      Parallax.prototype.transform3DSupport = Parallax.prototype.transformSupport('3D');
    }

    // Configure Context Styles
    if (this.transform3DSupport) this.accelerate(this.element);
    var style = window.getComputedStyle(this.element);
    if (style.getPropertyValue('position') === 'static') {
      this.element.style.position = 'relative';
    }

    // Setup
    this.updateLayers();
    this.updateDimensions();
    this.enable();
    this.queueCalibration(this.calibrationDelay);
  };

  Parallax.prototype.updateLayers = function() {

    // Cache Layer Elements
    this.layers = this.element.getElementsByClassName('layer');
    this.depths = [];

    // Configure Layer Styles
    for (var i = 0, l = this.layers.length; i < l; i++) {
      var layer = this.layers[i];
      if (this.transform3DSupport) this.accelerate(layer);
      layer.style.position = i ? 'absolute' : 'relative';
      layer.style.display = 'block';
      layer.style.left = 0;
      layer.style.top = 0;

      // Cache Layer Depth
      this.depths.push(this.data(layer, 'depth') || 0);
    }
  };

  Parallax.prototype.updateDimensions = function() {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;
    this.wcx = this.ww * this.originX;
    this.wcy = this.wh * this.originY;
    this.wrx = Math.max(this.wcx, this.ww - this.wcx);
    this.wry = Math.max(this.wcy, this.wh - this.wcy);
  };

  Parallax.prototype.updateBounds = function() {
    this.bounds = this.element.getBoundingClientRect();
    this.ex = this.bounds.left;
    this.ey = this.bounds.top;
    this.ew = this.bounds.width;
    this.eh = this.bounds.height;
    this.ecx = this.ew * this.originX;
    this.ecy = this.eh * this.originY;
    this.erx = Math.max(this.ecx, this.ew - this.ecx);
    this.ery = Math.max(this.ecy, this.eh - this.ecy);
  };

  Parallax.prototype.queueCalibration = function(delay) {
    clearTimeout(this.calibrationTimer);
    this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
  };

  Parallax.prototype.enable = function() {
    if (!this.enabled) {
      this.enabled = true;
      if (this.orientationSupport) {
        this.portrait = null;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        setTimeout(this.onOrientationTimer, this.supportDelay);
      } else {
        this.cx = 0;
        this.cy = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
      }
      window.addEventListener('resize', this.onWindowResize);
      this.raf = requestAnimationFrame(this.onAnimationFrame);
    }
  };

  Parallax.prototype.disable = function() {
    if (this.enabled) {
      this.enabled = false;
      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }
      window.removeEventListener('resize', this.onWindowResize);
      cancelAnimationFrame(this.raf);
    }
  };

  Parallax.prototype.calibrate = function(x, y) {
    this.calibrateX = x === undefined ? this.calibrateX : x;
    this.calibrateY = y === undefined ? this.calibrateY : y;
  };

  Parallax.prototype.invert = function(x, y) {
    this.invertX = x === undefined ? this.invertX : x;
    this.invertY = y === undefined ? this.invertY : y;
  };

  Parallax.prototype.friction = function(x, y) {
    this.frictionX = x === undefined ? this.frictionX : x;
    this.frictionY = y === undefined ? this.frictionY : y;
  };

  Parallax.prototype.scalar = function(x, y) {
    this.scalarX = x === undefined ? this.scalarX : x;
    this.scalarY = y === undefined ? this.scalarY : y;
  };

  Parallax.prototype.limit = function(x, y) {
    this.limitX = x === undefined ? this.limitX : x;
    this.limitY = y === undefined ? this.limitY : y;
  };

  Parallax.prototype.origin = function(x, y) {
    this.originX = x === undefined ? this.originX : x;
    this.originY = y === undefined ? this.originY : y;
  };

  Parallax.prototype.clamp = function(value, min, max) {
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value;
  };

  Parallax.prototype.css = function(element, property, value) {
    var jsProperty = this.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = this.vendors.length; i < l; i++) {
        if (this.vendors[i] !== null) {
          jsProperty = this.camelCase(this.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          this.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  };

  Parallax.prototype.accelerate = function(element) {
    this.css(element, 'transform', 'translate3d(0,0,0)');
    this.css(element, 'transform-style', 'preserve-3d');
    this.css(element, 'backface-visibility', 'hidden');
  };

  Parallax.prototype.setPosition = function(element, x, y) {
    x += 'px';
    y += 'px';
    if (this.transform3DSupport) {
      this.css(element, 'transform', 'translate3d('+x+','+y+',0)');
    } else if (this.transform2DSupport) {
      this.css(element, 'transform', 'translate('+x+','+y+')');
    } else {
      element.style.left = x;
      element.style.top = y;
    }
  };

  Parallax.prototype.onOrientationTimer = function() {
    if (this.orientationSupport && this.orientationStatus === 0) {
      this.disable();
      this.orientationSupport = false;
      this.enable();
    }
  };

  Parallax.prototype.onCalibrationTimer = function() {
    this.calibrationFlag = true;
  };

  Parallax.prototype.onWindowResize = function() {
    this.updateDimensions();
  };

  Parallax.prototype.onAnimationFrame = function() {
    this.updateBounds();
    var dx = this.ix - this.cx;
    var dy = this.iy - this.cy;
    if ((Math.abs(dx) > this.calibrationThreshold) || (Math.abs(dy) > this.calibrationThreshold)) {
      this.queueCalibration(0);
    }
    if (this.portrait) {
      this.mx = this.calibrateX ? dy : this.iy;
      this.my = this.calibrateY ? dx : this.ix;
    } else {
      this.mx = this.calibrateX ? dx : this.ix;
      this.my = this.calibrateY ? dy : this.iy;
    }
    this.mx *= this.ew * (this.scalarX / 100);
    this.my *= this.eh * (this.scalarY / 100);
    if (!isNaN(parseFloat(this.limitX))) {
      this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
    }
    if (!isNaN(parseFloat(this.limitY))) {
      this.my = this.clamp(this.my, -this.limitY, this.limitY);
    }
    this.vx += (this.mx - this.vx) * this.frictionX;
    this.vy += (this.my - this.vy) * this.frictionY;
    for (var i = 0, l = this.layers.length; i < l; i++) {
      var layer = this.layers[i];
      var depth = this.depths[i];
      var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
      var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
      this.setPosition(layer, xOffset, yOffset);
    }
    this.raf = requestAnimationFrame(this.onAnimationFrame);
  };

  Parallax.prototype.onDeviceOrientation = function(event) {

    // Validate environment and event properties.
    if (!this.desktop && event.beta !== null && event.gamma !== null) {

      // Set orientation status.
      this.orientationStatus = 1;

      // Extract Rotation
      var x = (event.beta  || 0) / MAGIC_NUMBER; //  -90 :: 90
      var y = (event.gamma || 0) / MAGIC_NUMBER; // -180 :: 180

      // Detect Orientation Change
      var portrait = this.wh > this.ww;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }

      // Set Calibration
      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.cx = x;
        this.cy = y;
      }

      // Set Input
      this.ix = x;
      this.iy = y;
    }
  };

  Parallax.prototype.onMouseMove = function(event) {

    // Cache mouse coordinates.
    var clientX = event.clientX;
    var clientY = event.clientY;

    // Calculate Mouse Input
    if (!this.orientationSupport && this.relativeInput) {

      // Clip mouse coordinates inside element bounds.
      if (this.clipRelativeInput) {
        clientX = Math.max(clientX, this.ex);
        clientX = Math.min(clientX, this.ex + this.ew);
        clientY = Math.max(clientY, this.ey);
        clientY = Math.min(clientY, this.ey + this.eh);
      }

      // Calculate input relative to the element.
      this.ix = (clientX - this.ex - this.ecx) / this.erx;
      this.iy = (clientY - this.ey - this.ecy) / this.ery;

    } else {

      // Calculate input relative to the window.
      this.ix = (clientX - this.wcx) / this.wrx;
      this.iy = (clientY - this.wcy) / this.wry;
    }
  };

  // Expose Parallax
  window[NAME] = Parallax;

})(window, document);

/**
 * Request Animation Frame Polyfill.
 * @author Tino Zijdel
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
;(function() {

  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

}());


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.1
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */



(function () {

  'use strict';

/**
 * Pathformer
 * Beta version
 *
 * Take any SVG version 1.1 and transform
 * child elements to 'path' elements
 *
 * This code is purely forked from
 * https://github.com/Waest/SVGPathConverter
 */

/**
 * Class constructor
 *
 * @param {DOM|String} element Dom element of the SVG or id of it
 */
function Pathformer(element) {
  // Test params
  if (typeof element === 'undefined') {
    throw new Error('Pathformer [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  if (element instanceof window.SVGElement || 
      element instanceof window.SVGGElement ||
      /^svg$/i.test(element.nodeName)) {
    this.el = element;
  } else {
    throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
  }

  // Start
  this.scan(element);
}

/**
 * List of tags which can be transformed
 * to path elements
 *
 * @type {Array}
 */
Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];

/**
 * List of attribute names which contain
 * data. This array list them to check if
 * they contain bad values, like percentage.
 *
 * @type {Array}
 */
Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];

/**
 * Finds the elements compatible for transform
 * and apply the liked method
 *
 * @param  {object} options Object from the constructor
 */
Pathformer.prototype.scan = function (svg) {
  var fn, element, pathData, pathDom,
      elements = svg.querySelectorAll(this.TYPES.join(','));

  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    fn = this[element.tagName.toLowerCase() + 'ToPath'];
    pathData = fn(this.parseAttr(element.attributes));
    pathDom = this.pathMaker(element, pathData);
    element.parentNode.replaceChild(pathDom, element);
  }
};


/**
 * Read `line` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Line element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.lineToPath = function (element) {
  var newElement = {},
      x1 = element.x1 || 0,
      y1 = element.y1 || 0,
      x2 = element.x2 || 0,
      y2 = element.y2 || 0;

  newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
  return newElement;
};

/**
 * Read `rect` element to extract and transform
 * data, to make it ready for a `path` object.
 * The radius-border is not taken in charge yet.
 * (your help is more than welcomed)
 *
 * @param  {DOMelement} element Rect element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.rectToPath = function (element) {
  var newElement = {},
      x      = parseFloat(element.x)      || 0,
      y      = parseFloat(element.y)      || 0,
      width  = parseFloat(element.width)  || 0,
      height = parseFloat(element.height) || 0;

  newElement.d  = 'M' + x + ' ' + y + ' ';
  newElement.d += 'L' + (x + width) + ' ' + y + ' ';
  newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
  newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
  return newElement;
};

/**
 * Read `polyline` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Polyline element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.polylineToPath = function (element) {
  var newElement = {},
      points = element.points.trim().split(' '),
      i, path;

  // Reformatting if points are defined without commas
  if (element.points.indexOf(',') === -1) {
    var formattedPoints = [];
    for (i = 0; i < points.length; i+=2) {
      formattedPoints.push(points[i] + ',' + points[i+1]);
    }
    points = formattedPoints;
  }

  // Generate the path.d value
  path = 'M' + points[0];
  for(i = 1; i < points.length; i++) {
    if (points[i].indexOf(',') !== -1) {
      path += 'L' + points[i];
    }
  }
  newElement.d = path;
  return newElement;
};

/**
 * Read `polygon` element to extract and transform
 * data, to make it ready for a `path` object.
 * This method rely on polylineToPath, because the
 * logic is similar. The path created is just closed,
 * so it needs an 'Z' at the end.
 *
 * @param  {DOMelement} element Polygon element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.polygonToPath = function (element) {
  var newElement = Pathformer.prototype.polylineToPath(element);

  newElement.d += 'Z';
  return newElement;
};

/**
 * Read `ellipse` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element ellipse element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.ellipseToPath = function (element) {
  var newElement = {},
      rx = parseFloat(element.rx) || 0,
      ry = parseFloat(element.ry) || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - rx,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(rx),
      endY = cy;

  newElement.d = 'M' + startX + ',' + startY +
                 'A' + rx + ',' + ry + ' 0,1,1 ' + endX + ',' + endY +
                 'A' + rx + ',' + ry + ' 0,1,1 ' + startX + ',' + endY;
  return newElement;
};

/**
 * Read `circle` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Circle element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.circleToPath = function (element) {
  var newElement = {},
      r  = parseFloat(element.r)  || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - r,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(r),
      endY = cy;
      
  newElement.d =  'M' + startX + ',' + startY +
                  'A' + r + ',' + r + ' 0,1,1 ' + endX + ',' + endY +
                  'A' + r + ',' + r + ' 0,1,1 ' + startX + ',' + endY;
  return newElement;
};

/**
 * Create `path` elements form original element
 * and prepared objects
 *
 * @param  {DOMelement} element  Original element to transform
 * @param  {object} pathData     Path data (from `toPath` methods)
 * @return {DOMelement}          Path element
 */
Pathformer.prototype.pathMaker = function (element, pathData) {
  var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg','path');
  for(i = 0; i < element.attributes.length; i++) {
    attr = element.attributes[i];
    if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
      pathTag.setAttribute(attr.name, attr.value);
    }
  }
  for(i in pathData) {
    pathTag.setAttribute(i, pathData[i]);
  }
  return pathTag;
};

/**
 * Parse attributes of a DOM element to
 * get an object of attribute => value
 *
 * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
 * @return {object}                  Object of attributes
 */
Pathformer.prototype.parseAttr = function (element) {
  var attr, output = {};
  for (var i = 0; i < element.length; i++) {
    attr = element[i];
    // Check if no data attribute contains '%', or the transformation is impossible
    if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
      throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
    }
    output[attr.name] = attr.value;
  }
  return output;
};

  'use strict';

var setupEnv, requestAnimFrame, cancelAnimFrame, parsePositiveInt;

/**
 * Vivus
 * Beta version
 *
 * Take any SVG and make the animation
 * to give give the impression of live drawing
 *
 * This in more than just inspired from codrops
 * At that point, it's a pure fork.
 */

/**
 * Class constructor
 * option structure
 *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
 *   duration: <int> (in frames)
 *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
 *   delay: <int> (delay between the drawing of first and last path)
 *   dashGap <integer> whitespace extra margin between dashes
 *   pathTimingFunction <function> timing animation function for each path element of the SVG
 *   animTimingFunction <function> timing animation function for the complete SVG
 *   forceRender <boolean> force the browser to re-render all updated path items
 *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
 *
 * The attribute 'type' is by default on 'delayed'.
 *  - 'delayed'
 *    all paths are draw at the same time but with a
 *    little delay between them before start
 *  - 'sync'
 *    all path are start and finish at the same time
 *  - 'oneByOne'
 *    only one path is draw at the time
 *    the end of the first one will trigger the draw
 *    of the next one
 *
 * All these values can be overwritten individually
 * for each path item in the SVG
 * The value of frames will always take the advantage of
 * the duration value.
 * If you fail somewhere, an error will be thrown.
 * Good luck.
 *
 * @constructor
 * @this {Vivus}
 * @param {DOM|String}   element  Dom element of the SVG or id of it
 * @param {Object}       options  Options about the animation
 * @param {Function}     callback Callback for the end of the animation
 */
function Vivus (element, options, callback) {

  setupEnv();

  // Setup
  this.isReady = false;
  this.setElement(element, options);
  this.setOptions(options);
  this.setCallback(callback);

  if (this.isReady) {
    this.init();
  }
}

/**
 * Timing functions
 **************************************
 *
 * Default functions to help developers.
 * It always take a number as parameter (between 0 to 1) then
 * return a number (between 0 and 1)
 */
Vivus.LINEAR          = function (x) {return x;};
Vivus.EASE            = function (x) {return -Math.cos(x * Math.PI) / 2 + 0.5;};
Vivus.EASE_OUT        = function (x) {return 1 - Math.pow(1-x, 3);};
Vivus.EASE_IN         = function (x) {return Math.pow(x, 3);};
Vivus.EASE_OUT_BOUNCE = function (x) {
  var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
    rate = Math.pow(base,1.5),
    rateR = Math.pow(1 - x, 2),
    progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
  return (1- rateR) + (progress * rateR);
};


/**
 * Setters
 **************************************
 */

/**
 * Check and set the element in the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param {DOM|String}   element  SVG Dom element or id of it
 */
Vivus.prototype.setElement = function (element, options) {
  // Basic check
  if (typeof element === 'undefined') {
    throw new Error('Vivus [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  this.parentEl = element;

  // Create the object element if the property `file` exists in the options object
  if (options && options.file) {
    var objElm = document.createElement('object');
    objElm.setAttribute('type', 'image/svg+xml');
    objElm.setAttribute('data', options.file);
    objElm.setAttribute('built-by-vivus', 'true');
    element.appendChild(objElm);
    element = objElm;
  }

  switch (element.constructor) {
  case window.SVGSVGElement:
  case window.SVGElement:
  case window.SVGGElement:
    this.el = element;
    this.isReady = true;
    break;

  case window.HTMLObjectElement:
    // If we have to wait for it
    var onLoad, self;

    self = this;
    onLoad = function (e) {
      if (self.isReady) {
        return;
      }
      self.el = element.contentDocument && element.contentDocument.querySelector('svg');
      if (!self.el && e) {
        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
      }
      else if (self.el) {
        if (element.getAttribute('built-by-vivus')) {
          self.parentEl.insertBefore(self.el, element);
          self.parentEl.removeChild(element);
          self.el.setAttribute('width', '100%');
          self.el.setAttribute('height', '100%');
        }
        self.isReady = true;
        self.init();
        return true;
      }
    };

    if (!onLoad()) {
      element.addEventListener('load', onLoad);
    }
    break;

  default:
    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
  }
};

/**
 * Set up user option to the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {object} options Object from the constructor
 */
Vivus.prototype.setOptions = function (options) {
  var allowedTypes = ['delayed', 'sync', 'async', 'nsync', 'oneByOne', 'scenario', 'scenario-sync'];
  var allowedStarts =  ['inViewport', 'manual', 'autostart'];

  // Basic check
  if (options !== undefined && options.constructor !== Object) {
    throw new Error('Vivus [constructor]: "options" parameter must be an object');
  }
  else {
    options = options || {};
  }

  // Set the animation type
  if (options.type && allowedTypes.indexOf(options.type) === -1) {
    throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
  }
  else {
    this.type = options.type || allowedTypes[0];
  }

  // Set the start type
  if (options.start && allowedStarts.indexOf(options.start) === -1) {
    throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
  }
  else {
    this.start = options.start || allowedStarts[0];
  }

  this.isIE         = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1 );
  this.duration     = parsePositiveInt(options.duration, 120);
  this.delay        = parsePositiveInt(options.delay, null);
  this.dashGap      = parsePositiveInt(options.dashGap, 1);
  this.forceRender  = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
  this.reverseStack = !!options.reverseStack;
  this.selfDestroy  = !!options.selfDestroy;
  this.onReady      = options.onReady;
  this.map          = [];
  this.frameLength  = this.currentFrame = this.delayUnit = this.speed = this.handle = null;

  this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;

  this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
  this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;

  if (this.delay >= this.duration) {
    throw new Error('Vivus [constructor]: delay must be shorter than duration');
  }
};

/**
 * Set up callback to the instance
 * The method will not return enything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {Function} callback Callback for the animation end
 */
Vivus.prototype.setCallback = function (callback) {
  // Basic check
  if (!!callback && callback.constructor !== Function) {
    throw new Error('Vivus [constructor]: "callback" parameter must be a function');
  }
  this.callback = callback || function () {};
};


/**
 * Core
 **************************************
 */

/**
 * Map the svg, path by path.
 * The method return nothing, it just fill the
 * `map` array. Each item in this array represent
 * a path element from the SVG, with informations for
 * the animation.
 *
 * ```
 * [
 *   {
 *     el: <DOMobj> the path element
 *     length: <number> length of the path line
 *     startAt: <number> time start of the path animation (in frames)
 *     duration: <number> path animation duration (in frames)
 *   },
 *   ...
 * ]
 * ```
 *
 */
Vivus.prototype.mapping = function () {
  var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
  timePoint = totalLength = lengthMeter = 0;
  paths = this.el.querySelectorAll('path');

  for (i = 0; i < paths.length; i++) {
    path = paths[i];
    if (this.isInvisible(path)) {
      continue;
    }
    pathObj = {
      el: path,
      length: Math.ceil(path.getTotalLength())
    };
    // Test if the path length is correct
    if (isNaN(pathObj.length)) {
      if (window.console && console.warn) {
        console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
      }
      continue;
    }
    this.map.push(pathObj);
    path.style.strokeDasharray  = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
    path.style.strokeDashoffset = pathObj.length + this.dashGap;
    pathObj.length += this.dashGap;
    totalLength += pathObj.length;

    this.renderPath(i);
  }

  totalLength = totalLength === 0 ? 1 : totalLength;
  this.delay = this.delay === null ? this.duration / 3 : this.delay;
  this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);

  // Reverse stack if asked
  if (this.reverseStack) {
    this.map.reverse();
  }

  for (i = 0; i < this.map.length; i++) {
    pathObj = this.map[i];

    switch (this.type) {
    case 'delayed':
      pathObj.startAt = this.delayUnit * i;
      pathObj.duration = this.duration - this.delay;
      break;

    case 'oneByOne':
      pathObj.startAt = lengthMeter / totalLength * this.duration;
      pathObj.duration = pathObj.length / totalLength * this.duration;
      break;

    case 'sync':
    case 'async':
    case 'nsync':
      pathObj.startAt = 0;
      pathObj.duration = this.duration;
      break;

    case 'scenario-sync':
      path = pathObj.el;
      pAttrs = this.parseAttr(path);
      pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
      timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
      break;

    case 'scenario':
      path = pathObj.el;
      pAttrs = this.parseAttr(path);
      pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
      break;
    }
    lengthMeter += pathObj.length;
    this.frameLength = this.frameLength || this.duration;
  }
};

/**
 * Interval method to draw the SVG from current
 * position of the animation. It update the value of
 * `currentFrame` and re-trace the SVG.
 *
 * It use this.handle to store the requestAnimationFrame
 * and clear it one the animation is stopped. So this
 * attribute can be used to know if the animation is
 * playing.
 *
 * Once the animation at the end, this method will
 * trigger the Vivus callback.
 *
 */
Vivus.prototype.drawer = function () {
  var self = this;
  this.currentFrame += this.speed;

  if (this.currentFrame <= 0) {
    this.stop();
    this.reset();
  } else if (this.currentFrame >= this.frameLength) {
    this.stop();
    this.currentFrame = this.frameLength;
    this.trace();
    if (this.selfDestroy) {
      this.destroy();
    }
  } else {
    this.trace();
    this.handle = requestAnimFrame(function () {
      self.drawer();
    });
    return;
  }

  this.callback(this);
  if (this.instanceCallback) {
    this.instanceCallback(this);
    this.instanceCallback = null;
  }
};

/**
 * Draw the SVG at the current instant from the
 * `currentFrame` value. Here is where most of the magic is.
 * The trick is to use the `strokeDashoffset` style property.
 *
 * For optimisation reasons, a new property called `progress`
 * is added in each item of `map`. This one contain the current
 * progress of the path element. Only if the new value is different
 * the new value will be applied to the DOM element. This
 * method save a lot of resources to re-render the SVG. And could
 * be improved if the animation couldn't be played forward.
 *
 */
Vivus.prototype.trace = function () {
  var i, progress, path, currentFrame;
  currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
  for (i = 0; i < this.map.length; i++) {
    path = this.map[i];
    progress = (currentFrame - path.startAt) / path.duration;
    progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
    if (path.progress !== progress) {
      path.progress = progress;
      path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
      this.renderPath(i);
    }
  }
};

/**
 * Method forcing the browser to re-render a path element
 * from it's index in the map. Depending on the `forceRender`
 * value.
 * The trick is to replace the path element by it's clone.
 * This practice is not recommended because it's asking more
 * ressources, too much DOM manupulation..
 * but it's the only way to let the magic happen on IE.
 * By default, this fallback is only applied on IE.
 *
 * @param  {Number} index Path index
 */
Vivus.prototype.renderPath = function (index) {
  if (this.forceRender && this.map && this.map[index]) {
    var pathObj = this.map[index],
        newPath = pathObj.el.cloneNode(true);
    pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
    pathObj.el = newPath;
  }
};

/**
 * When the SVG object is loaded and ready,
 * this method will continue the initialisation.
 *
 * This this mainly due to the case of passing an
 * object tag in the constructor. It will wait
 * the end of the loading to initialise.
 *
 */
Vivus.prototype.init = function () {
  // Set object variables
  this.frameLength = 0;
  this.currentFrame = 0;
  this.map = [];

  // Start
  new Pathformer(this.el);
  this.mapping();
  this.starter();

  if (this.onReady) {
    this.onReady(this);
  }
};

/**
 * Trigger to start of the animation.
 * Depending on the `start` value, a different script
 * will be applied.
 *
 * If the `start` value is not valid, an error will be thrown.
 * Even if technically, this is impossible.
 *
 */
Vivus.prototype.starter = function () {
  switch (this.start) {
  case 'manual':
    return;

  case 'autostart':
    this.play();
    break;

  case 'inViewport':
    var self = this,
    listener = function () {
      if (self.isInViewport(self.parentEl, 1)) {
        self.play();
        window.removeEventListener('scroll', listener);
      }
    };
    window.addEventListener('scroll', listener);
    listener();
    break;
  }
};


/**
 * Controls
 **************************************
 */

/**
 * Get the current status of the animation between
 * three different states: 'start', 'progress', 'end'.
 * @return {string} Instance status
 */
Vivus.prototype.getStatus = function () {
  return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
};

/**
 * Reset the instance to the initial state : undraw
 * Be careful, it just reset the animation, if you're
 * playing the animation, this won't stop it. But just
 * make it start from start.
 *
 */
Vivus.prototype.reset = function () {
  return this.setFrameProgress(0);
};

/**
 * Set the instance to the final state : drawn
 * Be careful, it just set the animation, if you're
 * playing the animation on rewind, this won't stop it.
 * But just make it start from the end.
 *
 */
Vivus.prototype.finish = function () {
  return this.setFrameProgress(1);
};

/**
 * Set the level of progress of the drawing.
 *
 * @param {number} progress Level of progress to set
 */
Vivus.prototype.setFrameProgress = function (progress) {
  progress = Math.min(1, Math.max(0, progress));
  this.currentFrame = Math.round(this.frameLength * progress);
  this.trace();
  return this;
};

/**
 * Play the animation at the desired speed.
 * Speed must be a valid number (no zero).
 * By default, the speed value is 1.
 * But a negative value is accepted to go forward.
 *
 * And works with float too.
 * But don't forget we are in JavaScript, se be nice
 * with him and give him a 1/2^x value.
 *
 * @param  {number} speed Animation speed [optional]
 */
Vivus.prototype.play = function (speed, callback) {
  this.instanceCallback = null;

  if (speed && typeof speed === 'function') {
    this.instanceCallback = speed; // first parameter is actually the callback function
    speed = null;
  }
  else if (speed && typeof speed !== 'number') {
    throw new Error('Vivus [play]: invalid speed');
  }
  // if the first parameter wasn't the callback, check if the seconds was
  if (callback && typeof(callback) === 'function' && !this.instanceCallback) {
    this.instanceCallback = callback;
  }


  this.speed = speed || 1;
  if (!this.handle) {
    this.drawer();
  }
  return this;
};

/**
 * Stop the current animation, if on progress.
 * Should not trigger any error.
 *
 */
Vivus.prototype.stop = function () {
  if (this.handle) {
    cancelAnimFrame(this.handle);
    this.handle = null;
  }
  return this;
};

/**
 * Destroy the instance.
 * Remove all bad styling attributes on all
 * path tags
 *
 */
Vivus.prototype.destroy = function () {
  this.stop();
  var i, path;
  for (i = 0; i < this.map.length; i++) {
    path = this.map[i];
    path.el.style.strokeDashoffset = null;
    path.el.style.strokeDasharray = null;
    this.renderPath(i);
  }
};


/**
 * Utils methods
 * include methods from Codrops
 **************************************
 */

/**
 * Method to best guess if a path should added into
 * the animation or not.
 *
 * 1. Use the `data-vivus-ignore` attribute if set
 * 2. Check if the instance must ignore invisible paths
 * 3. Check if the path is visible
 *
 * For now the visibility checking is unstable.
 * It will be used for a beta phase.
 *
 * Other improvments are planned. Like detecting
 * is the path got a stroke or a valid opacity.
 */
Vivus.prototype.isInvisible = function (el) {
  var rect,
    ignoreAttr = el.getAttribute('data-ignore');

  if (ignoreAttr !== null) {
    return ignoreAttr !== 'false';
  }

  if (this.ignoreInvisible) {
    rect = el.getBoundingClientRect();
    return !rect.width && !rect.height;
  }
  else {
    return false;
  }
};

/**
 * Parse attributes of a DOM element to
 * get an object of {attributeName => attributeValue}
 *
 * @param  {object} element DOM element to parse
 * @return {object}         Object of attributes
 */
Vivus.prototype.parseAttr = function (element) {
  var attr, output = {};
  if (element && element.attributes) {
    for (var i = 0; i < element.attributes.length; i++) {
      attr = element.attributes[i];
      output[attr.name] = attr.value;
    }
  }
  return output;
};

/**
 * Reply if an element is in the page viewport
 *
 * @param  {object} el Element to observe
 * @param  {number} h  Percentage of height
 * @return {boolean}
 */
Vivus.prototype.isInViewport = function (el, h) {
  var scrolled   = this.scrollY(),
    viewed       = scrolled + this.getViewportH(),
    elBCR        = el.getBoundingClientRect(),
    elHeight     = elBCR.height,
    elTop        = scrolled + elBCR.top,
    elBottom     = elTop + elHeight;

  // if 0, the element is considered in the viewport as soon as it enters.
  // if 1, the element is considered in the viewport only when it's fully inside
  // value in percentage (1 >= h >= 0)
  h = h || 0;

  return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
};


/**
 * Get the viewport height in pixels
 *
 * @return {integer} Viewport height
 */
Vivus.prototype.getViewportH = function () {
  var client = this.docElem.clientHeight,
    inner = window.innerHeight;

  if (client < inner) {
    return inner;
  }
  else {
    return client;
  }
};

/**
 * Get the page Y offset
 *
 * @return {integer} Page Y offset
 */
Vivus.prototype.scrollY = function () {
  return window.pageYOffset || this.docElem.scrollTop;
};

setupEnv = function () {

  if (Vivus.prototype.docElem) {
    return;
  }

  /**
   * Alias for document element
   *
   * @type {DOMelement}
   */
  Vivus.prototype.docElem = window.document.documentElement;

  /**
   * Alias for `requestAnimationFrame` or
   * `setTimeout` function for deprecated browsers.
   *
   */
  requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(/* function */ callback){
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  /**
   * Alias for `cancelAnimationFrame` or
   * `cancelTimeout` function for deprecated browsers.
   *
   */
  cancelAnimFrame = (function () {
    return (
      window.cancelAnimationFrame       ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame    ||
      window.oCancelAnimationFrame      ||
      window.msCancelAnimationFrame     ||
      function(id){
        return window.clearTimeout(id);
      }
    );
  })();
};

/**
 * Parse string to integer.
 * If the number is not positive or null
 * the method will return the default value
 * or 0 if undefined
 *
 * @param {string} value String to parse
 * @param {*} defaultValue Value to return if the result parsed is invalid
 * @return {number}
 *
 */
parsePositiveInt = function (value, defaultValue) {
  var output = parseInt(value, 10);
  return (output >= 0) ? output : defaultValue;
};


  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return Vivus;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = Vivus;
  } else {
    // Browser globals
    window.Vivus = Vivus;
  }

}());


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(28);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (obj) {var width  = obj.width  || 30
var height = obj.height || 30
var color  = obj.color  || '#fff'
switch (obj.index){
case 0:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 34 26\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-409 -96)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\u003E\u003Cpath d=\"M425.507 120.733l-.73-15.173c-.596-10.004-8.454-8.867-11.23-6.804-3.498 2.6-3.566 7.866-1.028 10.45M425.507 120.733l.732-15.173c.594-10.004 8.45-8.867 11.227-6.804 3.498 2.6 3.567 7.866 1.03 10.45\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 1:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 31 29\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-571 -142)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\u003E\u003Cpath d=\"M595.615 160.694c0 4.887-3.966 8.848-8.858 8.848s-8.858-3.96-8.858-8.848c0-4.886 3.965-8.847 8.857-8.847 4.892 0 8.858 3.96 8.858 8.847zM586.757 151.847c-5.287 0-8.406-8.982-13.083-8.644M586.486 151.847c5.288 0 8.406-8.982 13.083-8.644\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 2:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 23 27\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-685 -253)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\u003E\u003Cpath d=\"M687.808 278.146c4.905-5.1 12.856-5.1 17.76 0M705.568 254.153c-4.904 5.1-12.855 5.1-17.76 0M692.814 257.537v17.222M699.822 257.537v17.222\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 3:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 31 25\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-728 -415)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003E\u003Cpath d=\"M738.968 431.03c0 2.512-2.04 4.55-4.555 4.55-2.516 0-4.555-2.038-4.555-4.55 0-2.514 2.04-4.55 4.555-4.55 2.516 0 4.555 2.036 4.555 4.55zM732.126 434.96c4.93 3.025 13.51 6.01 23.634-3.14M746.76 423.028c0-2.513 2.04-4.55 4.555-4.55 2.516 0 4.556 2.037 4.556 4.55s-2.04 4.55-4.555 4.55c-2.515 0-4.555-2.037-4.555-4.55zM753.603 419.097c-4.93-3.025-13.51-6.01-23.634 3.138\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 4:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 30 32\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-684 -565)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003E\u003Cpath d=\"M695.66 584.672c0 2.718-2.205 4.922-4.926 4.922-2.722 0-4.928-2.204-4.928-4.922 0-2.718 2.206-4.922 4.928-4.922 2.72 0 4.927 2.204 4.927 4.922z\"\u002F\u003E\u003Cpath d=\"M694.638 581.675c-.802-2.914-3.383-9.826 1.023-13.576 3.686-3.138 11.96-2.934 12.607 5.198.624 7.818-3.213 7.61-5.343 12.193-3.09 6.656-.17 10.51 3.427 10.51 4.38 0 5.107-3.54 5.007-5\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 5:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 34 25\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-568 -685)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003E\u003Cpath d=\"M576.81 703.275v-13.648c0-2.275 1.597-3.627 3.57-3.627 1.97 0 3.568 1.352 3.568 3.627v13.648M583.948 703.275v-13.648c0-2.275 1.6-3.627 3.57-3.627 1.972 0 3.57 1.352 3.57 3.627v11.19c0 2.273 1.846 6.208 6.278 6.208\"\u002F\u003E\u003Cpath d=\"M569.67 689.627c0-2.275 1.598-3.627 3.57-3.627 1.97 0 3.57 1.352 3.57 3.627M591.704 693.008c3.508-3.504 8.266-3.054 7.508 2.336-.984 7.008-6.524 11.066-11.817 13.28\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 6:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 34 21\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-409 -732)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003E\u003Cpath d=\"M410.482 750.68h29.857M410.482 743.268h6.986c-.15-.617-.237-1.258-.237-1.92 0-4.512 3.663-8.17 8.18-8.17 4.518 0 8.18 3.658 8.18 8.17 0 .663-.088 1.303-.237 1.92h6.986\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 7:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 34 25\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-252 -690)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003E\u003Cpath d=\"M260.21 708.096V694.88c0-2.2 1.548-3.51 3.457-3.51 1.91 0 3.456 1.31 3.456 3.51v13.216M267.123 708.096V694.88c0-2.2 1.548-3.51 3.457-3.51 1.91 0 3.456 1.31 3.456 3.51v9.743c0 3.473 1.71 6.19 8.94 5.615\"\u002F\u003E\u003Cpath d=\"M253.298 694.88c0-2.2 1.547-3.51 3.456-3.51 1.91 0 3.457 1.31 3.457 3.51M279.354 706.62l3.623 3.618-3.623 3.62\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 8:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 29 27\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-137 -568)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003E\u003Cpath d=\"M154.5 569.383h8.308v8.298M162.808 569.383L139.164 593M145.7 578.174l8.307 8.297\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 9:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 35 26\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cpath d=\"M3 321.192c2.517-1.886 6.397-1.676 7.026 3.037.63 4.713.525 9.217.525 9.217.91-8.066.642-7.4 1.364-10.37.908-3.734 6.607-4.714 7.55.733.945 5.447 3.045 13.676 7.97 13.418 3.2-.167 4.762-1.957 4.762-4.366 0-2.41-1.667-4.967-4.45-4.903-5.345.12-4.663 9.31-8.28 11.877-2.944 2.087-4.406 1.676-5.98 1.885\" transform=\"translate(-.888 -318)\" filter=\"url(#a)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 10:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 34 18\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-136 -257)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\u003E\u003Cpath d=\"M137.41 261.998c3.255 0 2.588-3.708 5.34-3.916 3.038-.23 4.096 3.88 6.35 3.88 2.25 0 3.414-3.87 6.25-3.87 2.838 0 3.17 3.906 6.256 3.906 3.088 0 3.755-3.916 5.507-3.916M137.41 273.75c3.255 0 2.588-3.71 5.34-3.916 3.038-.23 4.096 3.88 6.35 3.88 2.25 0 3.414-3.87 6.25-3.87 2.838 0 3.17 3.906 6.256 3.906 3.088 0 3.755-3.916 5.507-3.916\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
case 11:
pug_html = pug_html + "\u003Csvg class=\"svg\" width=\"" + (pug.escape(null == (pug_interp = width) ? "" : pug_interp)) + "\" height=\"" + (pug.escape(null == (pug_interp = height) ? "" : pug_interp)) + "\" viewBox=\"0 0 29 26\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cdefs\u003E\u003Cfilter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"a\"\u003E\u003CfeOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"\u002F\u003E\u003CfeGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"\u002F\u003E\u003CfeColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMerge\u003E\u003CfeMergeNode in=\"shadowMatrixOuter1\"\u002F\u003E\u003CfeMergeNode in=\"SourceGraphic\"\u002F\u003E\u003C\u002FfeMerge\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg filter=\"url(#a)\" transform=\"translate(-249 -140)\" stroke=\"" + (pug.escape(null == (pug_interp = color) ? "" : pug_interp)) + "\" stroke-width=\"2\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\u003E\u003Cpath d=\"M272.533 164.94c-6.876-6.595-6.876-17.29 0-23.884M253.208 141.055c6.876 6.596 6.876 17.29 0 23.886M250.59 152.586h24.56\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
  break;
}}.call(this,"obj" in locals_for_with?locals_for_with.obj:typeof obj!=="undefined"?obj:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(29).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
(function () {
    'use strict';
    var $;

    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);
    

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            flip: {
                slideShadows : true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Zoom
            zoom: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: 'container',
            // Hash Navigation
            hashnav: false,
            hashnavWatchState: false,
            // History
            history: false,
            // Commong Nav State
            replaceState: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            normalizeSlideIndex: true,
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-container-', // NEW
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            paginationClickableClass: 'swiper-pagination-clickable', // NEW
            paginationModifierClass: 'swiper-pagination-', // NEW
            lazyLoadingClass: 'swiper-lazy',
            lazyStatusLoadingClass: 'swiper-lazy-loading',
            lazyStatusLoadedClass: 'swiper-lazy-loaded',
            lazyPreloaderClass: 'swiper-lazy-preloader',
            notificationClass: 'swiper-notification',
            preloaderClass: 'preloader',
            zoomContainerClass: 'swiper-zoom-container',
        
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onBeforeResize: function (swiper)
            onAfterResize: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            onKeyPress: function (swiper, keyCode)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Params
        s.params = params;
        s.originalParams = originalParams;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if(needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push(s.params.containerModifierClass + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push(s.params.containerModifierClass + 'free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push(s.params.containerModifierClass + 'autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Max resistance when touchReleaseOnEdges
        if (s.params.touchReleaseOnEdges) {
            s.params.resistanceRatio = 0;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push(s.params.containerModifierClass + '3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push(s.params.containerModifierClass + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
        
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
            }
            else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        
        // Is Horizontal
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        // s.isH = isH;
        
        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push(s.params.containerModifierClass + 'rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push(s.params.containerModifierClass + 'multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push(s.params.containerModifierClass + 'android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
            if (s.params.grabCursor) s.unsetGrabCursor();
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
            if (s.params.grabCursor) s.setGrabCursor();
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        s.setGrabCursor = function(moving) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            s.container[0].style.cursor = moving ? 'grabbing': 'grab';
        };
        s.unsetGrabCursor = function () {
            s.container[0].style.cursor = '';
        };
        if (s.params.grabCursor) {
            s.setGrabCursor();
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) {
                        image.sizes = sizes;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null || !s) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            var autoplayDelay = s.params.autoplay;
            var activeSlide = s.slides.eq(s.activeIndex);
            if (activeSlide.attr('data-swiper-autoplay')) {
                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
            }
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, autoplayDelay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            var activeSlides = [];
            var newHeight = 0;
            var i;
        
            // Find slides currently in view
            if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
                    var index = s.activeIndex + i;
                    if(index > s.slides.length) break;
                    activeSlides.push(s.slides.eq(index)[0]);
                }
            } else {
                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
            }
        
            // Find new height from heighest slide in view
            for (i = 0; i < activeSlides.length; i++) {
                if (typeof activeSlides[i] !== 'undefined') {
                    var height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            }
        
            // Update Height
            if (newHeight) s.wrapper.css('height', newHeight + 'px');
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
        
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
        
            // Store values
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css(
                            'margin-' + (s.isHorizontal() ? 'top' : 'left'),
                            (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        )
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if(prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Dynamic Slides Per View
          ===========================*/
        s.currentSlidesPerView = function () {
            var spv = 1, i, j;
            if (s.params.centeredSlides) {
                var size = s.slides[s.activeIndex].swiperSlideSize;
                var breakLoop;
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slides[i] && !breakLoop) {
                        size += s.slides[i].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
                for (j = s.activeIndex - 1; j >= 0; j--) {
                    if (s.slides[j] && !breakLoop) {
                        size += s.slides[j].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
            }
            else {
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                        spv++;
                    }
                }
            }
            return spv;
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            }
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
            s.updateRealIndex();
        };
        s.updateRealIndex = function(){
            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
            }
            // Next Slide
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                nextSlide = s.slides.eq(0);
                nextSlide.addClass(s.params.slideNextClass);
            }
            // Prev Slide
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                prevSlide = s.slides.eq(-1);
                prevSlide.addClass(s.params.slidePrevClass);
            }
            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
            }
        
            // Pagination
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                // Current/Total
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    }
                    else {
                        current = s.activeIndex || 0;
                    }
                }
                // Types
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    }
                    else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    }
                    else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    }
                    else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                        }
                        else {
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }
                    else {
                        paginationHTML =
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + s.params.paginationTotalClass+'"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    }
                    else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            if (!s) return;
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            var newTranslate;
            function forceSetTranslate() {
                var translate = s.rtl ? -s.translate : s.translate;
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            if (s.params.onBeforeResize) s.params.onBeforeResize(s);
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
        
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
        
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
            if (s.params.onAfterResize) s.params.onAfterResize(s);
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides,
                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button, video',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
                if (!s.isHorizontal()) {
                    // Vertical
                    if (
                        (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
                else {
                    if (
                        (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle;
                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
                    isScrolling = false;
                }
                else {
                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
                }
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined') {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                    s.setGrabCursor(true);
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
        
            if (!s.params.followFinger) return;
        
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                s.setGrabCursor(false);
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                for (var i = 0; i < s.slidesGrid.length; i++) {
                    if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                        slideIndex = i;
                    }
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            s.updateRealIndex();
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
        
            if (speed === 0 || s.browser.lteIE9) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
        
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.history && s.history) {
                s.history.setHistory(s.params.history, s.activeIndex);
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        s.disableTouchControl = function () {
            s.params.onlyExternal = true;
            return true;
        };
        s.enableTouchControl = function () {
            s.params.onlyExternal = false;
            return true;
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
        
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
        
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = s.isHorizontal() ? x : y;
        
            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (s.rtl) {
                            rotateY = -rotateY;
                        }
        
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
        
                        if (s.params.flip.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
        
                        slide
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
        
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
        
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
        
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };
        

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
        
                var slide = s.slides.eq(index);
                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass(s.params.lazyStatusLoadingClass);
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset'),
                        sizes = _img.attr('data-sizes');
                    s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
                        if (typeof s === 'undefined' || s === null || !s) return;
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                _img.attr('sizes', sizes);
                                _img.removeAttr('data-sizes');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
        
                        }
        
                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
        
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
        
            },
            load: function () {
                var i;
                var slidesPerView = s.params.slidesPerView;
                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }
                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        // Next Slides
                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = minIndex; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
        
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
        
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
        
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            draggableEvents: (function () {
                if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
                else return s.touchEvents;
            })(),
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
                $(target).on(sb.draggableEvents.move, sb.dragMove);
                $(target).on(sb.draggableEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
                $(target).off(sb.draggableEvents.move, sb.dragMove);
                $(target).off(sb.draggableEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
        
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };
        

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
        
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (Array.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
        
                        });
                    }
                }
                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };
        

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            onHashCange: function (e, a) {
                var newHash = document.location.hash.replace('#', '');
                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
                if (newHash !== activeSlideHash) {
                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
                }
            },
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
                $(window)[action]('hashchange', s.hashnav.onHashCange);
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                if (s.params.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
                } else {
                    var slide = s.slides.eq(s.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                }
            },
            init: function () {
                if (!s.params.hashnav || s.params.history) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
            },
            destroy: function () {
                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
            }
        };
        

        /*=========================
          History Api with fallback to Hashnav
          ===========================*/
        s.history = {
            init: function () {
                if (!s.params.history) return;
                if (!window.history || !window.history.pushState) {
                    s.params.history = false;
                    s.params.hashnav = true;
                    return;
                }
                s.history.initialized = true;
                this.paths = this.getPathValues();
                if (!this.paths.key && !this.paths.value) return;
                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
                if (!s.params.replaceState) {
                    window.addEventListener('popstate', this.setHistoryPopState);
                }
            },
            setHistoryPopState: function() {
                s.history.paths = s.history.getPathValues();
                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
            },
            getPathValues: function() {
                var pathArray = window.location.pathname.slice(1).split('/');
                var total = pathArray.length;
                var key = pathArray[total - 2];
                var value = pathArray[total - 1];
                return { key: key, value: value };
            },
            setHistory: function (key, index) {
                if (!s.history.initialized || !s.params.history) return;
                var slide = s.slides.eq(index);
                var value = this.slugify(slide.attr('data-history'));
                if (!window.location.pathname.includes(key)) {
                    value = key + '/' + value;
                }
                if (s.params.replaceState) {
                    window.history.replaceState(null, null, value);
                } else {
                    window.history.pushState(null, null, value);
                }
            },
            slugify: function(text) {
                return text.toString().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            },
            scrollToSlide: function(speed, value, runCallbacks) {
                if (value) {
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHistory = this.slugify(slide.attr('data-history'));
                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    s.slideTo(0, speed, runCallbacks);
                }
            }
        };
        

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
            s.emit('onKeyPress', s, kc);
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        function isEventSupported() {
            var eventName = 'onwheel';
            var isSupported = eventName in document;
        
            if (!isSupported) {
                var element = document.createElement('div');
                element.setAttribute(eventName, 'return;');
                isSupported = typeof element[eventName] === 'function';
            }
        
            if (!isSupported &&
                document.implementation &&
                document.implementation.hasFeature &&
                    // always returns true in newer browsers as per the standard.
                    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
                document.implementation.hasFeature('', '') !== true ) {
                // This is the only way to test support for the `wheel` event in IE9+.
                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
            }
        
            return isSupported;
        }
        /**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */
        function normalizeWheel( /*object*/ event ) /*object*/ {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
        
            var sX = 0, sY = 0,       // spinX, spinY
                pX = 0, pY = 0;       // pixelX, pixelY
        
            // Legacy
            if( 'detail' in event ) {
                sY = event.detail;
            }
            if( 'wheelDelta' in event ) {
                sY = -event.wheelDelta / 120;
            }
            if( 'wheelDeltaY' in event ) {
                sY = -event.wheelDeltaY / 120;
            }
            if( 'wheelDeltaX' in event ) {
                sX = -event.wheelDeltaX / 120;
            }
        
            // side scrolling on FF with DOMMouseScroll
            if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
                sX = sY;
                sY = 0;
            }
        
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
        
            if( 'deltaY' in event ) {
                pY = event.deltaY;
            }
            if( 'deltaX' in event ) {
                pX = event.deltaX;
            }
        
            if( (pX || pY) && event.deltaMode ) {
                if( event.deltaMode === 1 ) {          // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {                             // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
        
            // Fall-back if spin cannot be determined
            if( pX && !sX ) {
                sX = (pX < 1) ? -1 : 1;
            }
            if( pY && !sY ) {
                sY = (pY < 1) ? -1 : 1;
            }
        
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        if (s.params.mousewheelControl) {
            /**
             * The best combination if you prefer spinX + spinY normalization.  It favors
             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
             * 'wheel' event, making spin speed determination impossible.
             */
            s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
                'DOMMouseScroll' :
                isEventSupported() ?
                    'wheel' : 'mousewheel';
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
        
            var data = normalizeWheel( e );
        
            if (s.params.mousewheelForceToAxis) {
                if (s.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
                    else return;
                }
                else {
                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
                    else return;
                }
            }
            else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
            }
        
            if (delta === 0) return;
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) {
                            s.slideNext();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
                            s.slidePrev();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
        
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
                else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                // Emit event
                s.emit('onScroll', s, e);
        
                // Stop autoplay
                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.off(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = false;
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.on(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = true;
            return true;
        };
        

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
        
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
        
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
        
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
        
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Zoom
          ===========================*/
        s.zoom = {
            // "Global" Props
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
                slide: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                image: undefined,
                imageWrap: undefined,
                zoomMax: s.params.zoomMax
            },
            image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
            },
            velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            },
            // Calc Scale From Multi-touches
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var x1 = e.targetTouches[0].pageX,
                    y1 = e.targetTouches[0].pageY,
                    x2 = e.targetTouches[1].pageX,
                    y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            },
            // Events
            onGestureStart: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.slide || !z.gesture.slide.length) {
                    z.gesture.slide = $(this);
                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
                    if (z.gesture.imageWrap.length === 0) {
                        z.gesture.image = undefined;
                        return;
                    }
                }
                z.gesture.image.transition(0);
                z.isScaling = true;
            },
            onGestureChange: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (s.support.gestures) {
                    z.scale = e.scale * z.currentScale;
                }
                else {
                    z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
                }
                if (z.scale > z.gesture.zoomMax) {
                    z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
                }
                if (z.scale < s.params.zoomMin) {
                    z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
                }
                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
            },
            onGestureEnd: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                        return;
                    }
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                z.currentScale = z.scale;
                z.isScaling = false;
                if (z.scale === 1) z.gesture.slide = undefined;
            },
            onTouchStart: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (z.image.isTouched) return;
                if (s.device.os === 'android') e.preventDefault();
                z.image.isTouched = true;
                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            },
            onTouchMove: function (e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                s.allowClick = false;
                if (!z.image.isTouched || !z.gesture.slide) return;
        
                if (!z.image.isMoved) {
                    z.image.width = z.gesture.image[0].offsetWidth;
                    z.image.height = z.gesture.image[0].offsetHeight;
                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
                    z.gesture.imageWrap.transition(0);
                    if (s.rtl) z.image.startX = -z.image.startX;
                    if (s.rtl) z.image.startY = -z.image.startY;
                }
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
        
                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
        
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
        
                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
                if (!z.image.isMoved && !z.isScaling) {
                    if (s.isHorizontal() &&
                        (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
                        (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                    else if (!s.isHorizontal() &&
                        (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
                        (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                }
                e.preventDefault();
                e.stopPropagation();
        
                z.image.isMoved = true;
                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
        
                if (z.image.currentX < z.image.minX) {
                    z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
                }
                if (z.image.currentX > z.image.maxX) {
                    z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
                }
        
                if (z.image.currentY < z.image.minY) {
                    z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
                }
                if (z.image.currentY > z.image.maxY) {
                    z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
                }
        
                //Velocity
                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
                z.velocity.prevPositionX = z.image.touchesCurrent.x;
                z.velocity.prevPositionY = z.image.touchesCurrent.y;
                z.velocity.prevTime = Date.now();
        
                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTouchEnd: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (!z.image.isTouched || !z.image.isMoved) {
                    z.image.isTouched = false;
                    z.image.isMoved = false;
                    return;
                }
                z.image.isTouched = false;
                z.image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = z.velocity.x * momentumDurationX;
                var newPositionX = z.image.currentX + momentumDistanceX;
                var momentumDistanceY = z.velocity.y * momentumDurationY;
                var newPositionY = z.image.currentY + momentumDistanceY;
        
                //Fix duration
                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        
                z.image.currentX = newPositionX;
                z.image.currentY = newPositionY;
        
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
        
                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTransitionEnd: function (s) {
                var z = s.zoom;
                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
                    z.scale = z.currentScale = 1;
                }
            },
            // Toggle Zoom
            toggleZoom: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.slide) {
                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
        
                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
        
                if (typeof z.image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                }
                else {
                    touchX = z.image.touchesStart.x;
                    touchY = z.image.touchesStart.y;
                }
        
                if (z.scale && z.scale !== 1) {
                    // Zoom Out
                    z.scale = z.currentScale = 1;
                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
                    z.gesture.slide = undefined;
                }
                else {
                    // Zoom In
                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                    if (e) {
                        slideWidth = z.gesture.slide[0].offsetWidth;
                        slideHeight = z.gesture.slide[0].offsetHeight;
                        offsetX = z.gesture.slide.offset().left;
                        offsetY = z.gesture.slide.offset().top;
                        diffX = offsetX + slideWidth/2 - touchX;
                        diffY = offsetY + slideHeight/2 - touchY;
        
                        imageWidth = z.gesture.image[0].offsetWidth;
                        imageHeight = z.gesture.image[0].offsetHeight;
                        scaledWidth = imageWidth * z.scale;
                        scaledHeight = imageHeight * z.scale;
        
                        translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
                        translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
                        translateMaxX = -translateMinX;
                        translateMaxY = -translateMinY;
        
                        translateX = diffX * z.scale;
                        translateY = diffY * z.scale;
        
                        if (translateX < translateMinX) {
                            translateX =  translateMinX;
                        }
                        if (translateX > translateMaxX) {
                            translateX = translateMaxX;
                        }
        
                        if (translateY < translateMinY) {
                            translateY =  translateMinY;
                        }
                        if (translateY > translateMaxY) {
                            translateY = translateMaxY;
                        }
                    }
                    else {
                        translateX = 0;
                        translateY = 0;
                    }
                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                }
            },
            // Attach/Detach Events
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
        
                if (s.params.zoom) {
                    var target = s.slides;
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    // Scale image
                    if (s.support.gestures) {
                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
                    }
                    else if (s.touchEvents.start === 'touchstart') {
                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
                    }
        
                    // Move image
                    s[action]('touchStart', s.zoom.onTouchStart);
                    s.slides.each(function (index, slide){
                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                        }
                    });
                    s[action]('touchEnd', s.zoom.onTouchEnd);
        
                    // Scale Out
                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
                    if (s.params.zoomToggle) {
                        s.on('doubleTap', s.zoom.toggleZoom);
                    }
                }
            },
            init: function () {
                s.zoom.attachEvents();
            },
            destroy: function () {
                s.zoom.attachEvents(true);
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };
        

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };
        

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.zoom && s.zoom) {
                s.zoom.init();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
            if (s.params.hashnavReplaceState) {
                s.params.replaceState = s.params.hashnavReplaceState;
            }
            if (s.params.history) {
                if (s.history) s.history.init();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        
            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
        
            // Destroy zoom
            if (s.params.zoom && s.zoom) {
                s.zoom.destroy();
            }
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Delete history popstate
            if (s.params.history && !s.params.replaceState) {
                window.removeEventListener('popstate', s.history.setHistoryPopState);
            }
            if (s.params.hashnav && s.hashnav)  {
                s.hashnav.destroy();
            }
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = window.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
            lteIE9: (function() {
                // create temporary DIV
                var div = document.createElement('div');
                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
                // return true / false value based on what will browser render
                return div.getElementsByTagName('i').length === 1;
            })()
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = window.navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })(),
    
            passiveListener: (function () {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            })(),
    
            gestures: (function () {
                return 'ongesturestart' in window;
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
    Dom7 Library
    ===========================*/
    var Dom7 = (function () {
        var Dom7 = function (arr) {
            var _this = this, i = 0;
            // Create array-like object
            for (i = 0; i < arr.length; i++) {
                _this[i] = arr[i];
            }
            _this.length = arr.length;
            // Return collection with methods
            return this;
        };
        var $ = function (selector, context) {
            var arr = [], i = 0;
            if (selector && !context) {
                if (selector instanceof Dom7) {
                    return selector;
                }
            }
            if (selector) {
                // String
                if (typeof selector === 'string') {
                    var els, tempParent, html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) toCreate = 'ul';
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
                        if (html.indexOf('<option') === 0) toCreate = 'select';
                        tempParent = document.createElement(toCreate);
                        tempParent.innerHTML = selector;
                        for (i = 0; i < tempParent.childNodes.length; i++) {
                            arr.push(tempParent.childNodes[i]);
                        }
                    }
                    else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                            // Pure ID selector
                            els = [document.getElementById(selector.split('#')[1])];
                        }
                        else {
                            // Other selectors
                            els = (context || document).querySelectorAll(selector);
                        }
                        for (i = 0; i < els.length; i++) {
                            if (els[i]) arr.push(els[i]);
                        }
                    }
                }
                // Node/element
                else if (selector.nodeType || selector === window || selector === document) {
                    arr.push(selector);
                }
                //Array of elements or instance of Dom
                else if (selector.length > 0 && selector[0].nodeType) {
                    for (i = 0; i < selector.length; i++) {
                        arr.push(selector[i]);
                    }
                }
            }
            return new Dom7(arr);
        };
        Dom7.prototype = {
            // Classes and attriutes
            addClass: function (className) {
                if (typeof className === 'undefined') {
                    return this;
                }
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.add(classes[i]);
                    }
                }
                return this;
            },
            removeClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.remove(classes[i]);
                    }
                }
                return this;
            },
            hasClass: function (className) {
                if (!this[0]) return false;
                else return this[0].classList.contains(className);
            },
            toggleClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.toggle(classes[i]);
                    }
                }
                return this;
            },
            attr: function (attrs, value) {
                if (arguments.length === 1 && typeof attrs === 'string') {
                    // Get attr
                    if (this[0]) return this[0].getAttribute(attrs);
                    else return undefined;
                }
                else {
                    // Set attrs
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            // String
                            this[i].setAttribute(attrs, value);
                        }
                        else {
                            // Object
                            for (var attrName in attrs) {
                                this[i][attrName] = attrs[attrName];
                                this[i].setAttribute(attrName, attrs[attrName]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function (attr) {
                for (var i = 0; i < this.length; i++) {
                    this[i].removeAttribute(attr);
                }
                return this;
            },
            data: function (key, value) {
                if (typeof value === 'undefined') {
                    // Get value
                    if (this[0]) {
                        var dataKey = this[0].getAttribute('data-' + key);
                        if (dataKey) return dataKey;
                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                        else return undefined;
                    }
                    else return undefined;
                }
                else {
                    // Set value
                    for (var i = 0; i < this.length; i++) {
                        var el = this[i];
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                        el.dom7ElementDataStorage[key] = value;
                    }
                    return this;
                }
            },
            // Transforms
            transform : function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            },
            transition: function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            },
            //Events
            on: function (eventName, targetSelector, listener, capture) {
                function handleLiveEvent(e) {
                    var target = e.target;
                    if ($(target).is(targetSelector)) listener.call(target, e);
                    else {
                        var parents = $(target).parents();
                        for (var k = 0; k < parents.length; k++) {
                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                        }
                    }
                }
                var events = eventName.split(' ');
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof targetSelector === 'function' || targetSelector === false) {
                        // Usual events
                        if (typeof targetSelector === 'function') {
                            listener = arguments[1];
                            capture = arguments[2] || false;
                        }
                        for (j = 0; j < events.length; j++) {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    }
                    else {
                        //Live events
                        for (j = 0; j < events.length; j++) {
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }
    
                return this;
            },
            off: function (eventName, targetSelector, listener, capture) {
                var events = eventName.split(' ');
                for (var i = 0; i < events.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof targetSelector === 'function' || targetSelector === false) {
                            // Usual events
                            if (typeof targetSelector === 'function') {
                                listener = arguments[1];
                                capture = arguments[2] || false;
                            }
                            this[j].removeEventListener(events[i], listener, capture);
                        }
                        else {
                            // Live event
                            if (this[j].dom7LiveListeners) {
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                    if (this[j].dom7LiveListeners[k].listener === listener) {
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            },
            once: function (eventName, targetSelector, listener, capture) {
                var dom = this;
                if (typeof targetSelector === 'function') {
                    targetSelector = false;
                    listener = arguments[1];
                    capture = arguments[2];
                }
                function proxy(e) {
                    listener(e);
                    dom.off(eventName, targetSelector, proxy, capture);
                }
                dom.on(eventName, targetSelector, proxy, capture);
            },
            trigger: function (eventName, eventData) {
                for (var i = 0; i < this.length; i++) {
                    var evt;
                    try {
                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
                    }
                    catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(eventName, true, true);
                        evt.detail = eventData;
                    }
                    this[i].dispatchEvent(evt);
                }
                return this;
            },
            transitionEnd: function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },
            // Sizing/Styles
            width: function () {
                if (this[0] === window) {
                    return window.innerWidth;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('width'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerWidth: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            },
            height: function () {
                if (this[0] === window) {
                    return window.innerHeight;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('height'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerHeight: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
                    else
                        return this[0].offsetHeight;
                }
                else return null;
            },
            offset: function () {
                if (this.length > 0) {
                    var el = this[0];
                    var box = el.getBoundingClientRect();
                    var body = document.body;
                    var clientTop  = el.clientTop  || body.clientTop  || 0;
                    var clientLeft = el.clientLeft || body.clientLeft || 0;
                    var scrollTop  = window.pageYOffset || el.scrollTop;
                    var scrollLeft = window.pageXOffset || el.scrollLeft;
                    return {
                        top: box.top  + scrollTop  - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                }
                else {
                    return null;
                }
            },
            css: function (props, value) {
                var i;
                if (arguments.length === 1) {
                    if (typeof props === 'string') {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                    }
                    else {
                        for (i = 0; i < this.length; i++) {
                            for (var prop in props) {
                                this[i].style[prop] = props[prop];
                            }
                        }
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === 'string') {
                    for (i = 0; i < this.length; i++) {
                        this[i].style[props] = value;
                    }
                    return this;
                }
                return this;
            },
    
            //Dom manipulation
            each: function (callback) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(this[i], i, this[i]);
                }
                return this;
            },
            html: function (html) {
                if (typeof html === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].innerHTML = html;
                    }
                    return this;
                }
            },
            text: function (text) {
                if (typeof text === 'undefined') {
                    if (this[0]) {
                        return this[0].textContent.trim();
                    }
                    else return null;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].textContent = text;
                    }
                    return this;
                }
            },
            is: function (selector) {
                if (!this[0]) return false;
                var compareWith, i;
                if (typeof selector === 'string') {
                    var el = this[0];
                    if (el === document) return selector === document;
                    if (el === window) return selector === window;
    
                    if (el.matches) return el.matches(selector);
                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                    else {
                        compareWith = $(selector);
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                }
                else if (selector === document) return this[0] === document;
                else if (selector === window) return this[0] === window;
                else {
                    if (selector.nodeType || selector instanceof Dom7) {
                        compareWith = selector.nodeType ? [selector] : selector;
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                    return false;
                }
    
            },
            index: function () {
                if (this[0]) {
                    var child = this[0];
                    var i = 0;
                    while ((child = child.previousSibling) !== null) {
                        if (child.nodeType === 1) i++;
                    }
                    return i;
                }
                else return undefined;
            },
            eq: function (index) {
                if (typeof index === 'undefined') return this;
                var length = this.length;
                var returnIndex;
                if (index > length - 1) {
                    return new Dom7([]);
                }
                if (index < 0) {
                    returnIndex = length + index;
                    if (returnIndex < 0) return new Dom7([]);
                    else return new Dom7([this[returnIndex]]);
                }
                return new Dom7([this[index]]);
            },
            append: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].appendChild(newChild[j]);
                        }
                    }
                    else {
                        this[i].appendChild(newChild);
                    }
                }
                return this;
            },
            prepend: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                        }
                        // this[i].insertAdjacentHTML('afterbegin', newChild);
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                        }
                    }
                    else {
                        this[i].insertBefore(newChild, this[i].childNodes[0]);
                    }
                }
                return this;
            },
            insertBefore: function (selector) {
                var before = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (before.length === 1) {
                        before[0].parentNode.insertBefore(this[i], before[0]);
                    }
                    else if (before.length > 1) {
                        for (var j = 0; j < before.length; j++) {
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                        }
                    }
                }
            },
            insertAfter: function (selector) {
                var after = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (after.length === 1) {
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    }
                    else if (after.length > 1) {
                        for (var j = 0; j < after.length; j++) {
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                        }
                    }
                }
            },
            next: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            nextAll: function (selector) {
                var nextEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.nextElementSibling) {
                    var next = el.nextElementSibling;
                    if (selector) {
                        if($(next).is(selector)) nextEls.push(next);
                    }
                    else nextEls.push(next);
                    el = next;
                }
                return new Dom7(nextEls);
            },
            prev: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            prevAll: function (selector) {
                var prevEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.previousElementSibling) {
                    var prev = el.previousElementSibling;
                    if (selector) {
                        if($(prev).is(selector)) prevEls.push(prev);
                    }
                    else prevEls.push(prev);
                    el = prev;
                }
                return new Dom7(prevEls);
            },
            parent: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    }
                    else {
                        parents.push(this[i].parentNode);
                    }
                }
                return $($.unique(parents));
            },
            parents: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    var parent = this[i].parentNode;
                    while (parent) {
                        if (selector) {
                            if ($(parent).is(selector)) parents.push(parent);
                        }
                        else {
                            parents.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                }
                return $($.unique(parents));
            },
            find : function (selector) {
                var foundElements = [];
                for (var i = 0; i < this.length; i++) {
                    var found = this[i].querySelectorAll(selector);
                    for (var j = 0; j < found.length; j++) {
                        foundElements.push(found[j]);
                    }
                }
                return new Dom7(foundElements);
            },
            children: function (selector) {
                var children = [];
                for (var i = 0; i < this.length; i++) {
                    var childNodes = this[i].childNodes;
    
                    for (var j = 0; j < childNodes.length; j++) {
                        if (!selector) {
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                        }
                        else {
                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }
                    }
                }
                return new Dom7($.unique(children));
            },
            remove: function () {
                for (var i = 0; i < this.length; i++) {
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                }
                return this;
            },
            add: function () {
                var dom = this;
                var i, j;
                for (i = 0; i < arguments.length; i++) {
                    var toAdd = $(arguments[i]);
                    for (j = 0; j < toAdd.length; j++) {
                        dom[dom.length] = toAdd[j];
                        dom.length++;
                    }
                }
                return dom;
            }
        };
        $.fn = Dom7.prototype;
        $.unique = function (arr) {
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
            }
            return unique;
        };
    
        return $;
    })();
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }
    

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
        if (!('outerWidth' in domLib.fn)) {
            domLib.fn.outerWidth = function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            };
        }
    }
    

    window.Swiper = Swiper;
})();

/*===========================
Swiper AMD Export
===========================*/
if (true)
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}

//# sourceMappingURL=maps/swiper.js.map


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=../sourceMap/js/runes.js.map