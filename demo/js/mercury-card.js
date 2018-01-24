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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: tamamadesu
* @Date:   2017-08-02 13:50:42
* @Last Modified by:   tamamadesu
* @Last Modified time: 2018-01-24 21:18:59
*/



var _fontfaceobserver = __webpack_require__(4);

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

var _common = __webpack_require__(5);

var _qrcode = __webpack_require__(6);

var _qrcode2 = _interopRequireDefault(_qrcode);

var _bridge = __webpack_require__(7);

var _bridge2 = _interopRequireDefault(_bridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLocation = function getLocation(href) {
    var l = document.createElement('a');
    l.href = href;
    return l;
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var url = document.location.href;
var loc = getLocation(url);
var school = getParameterByName('school', url);
var parsedURL = loc.protocol + '//' + loc.hostname + loc.pathname;
if (school) {
    parsedURL = loc.protocol + '//' + loc.hostname + loc.pathname + '?school=' + school;
}

console.log(url);
console.log(parsedURL);

new _qrcode2.default(document.querySelector("#qrcode"), {
    text: parsedURL,
    width: 300,
    height: 300,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: _qrcode2.default.CorrectLevel.L
});

__webpack_require__(8);

document.body.addEventListener('touchstart', function () {
    return null;
});

var Font = new _fontfaceobserver2.default('tongxin');
var loading = document.querySelector('.loading');
var welceomSection = document.querySelector('.wrapper .welcome');
var resultSection = document.querySelector('.wrapper .capture');
var previewSection = document.querySelector('.wrapper .preview');
var captureBtn = document.querySelector('.share-tip');

var Post = function Post(url, data, success, error) {

    var xmlhttp = null;
    error = error || function () {};
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/json;charset=UTF-8'); //www-form-urlencoded
    xmlhttp.timeout = 10000;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                success(xmlhttp.responseText);
            } else {
                error();
                xmlhttp.abort();
            }
            xmlhttp = null;
        }
    };
    xmlhttp.ontimeout = function () {
        error();
    };
    xmlhttp.send(data);
};
var Alert = {
    ele: document.querySelector('#g-tip'),
    timer: null,
    show: function show(txt) {
        var _this = this;

        clearTimeout(this.timer);
        this.ele.classList.remove('fn-hide');
        this.timer = setTimeout(function () {
            _this.hide();
        }, 2000);
    },
    hide: function hide() {
        this.ele.classList.add('fn-hide');
    }
};

var showImg = function showImg(data) {

    welceomSection.style.opacity = 0;
    loading.classList.add('fn-hide');
    welceomSection.classList.add('fn-hide');
    resultSection.classList.remove('fn-hide');

    setTimeout(function () {
        drawRune(data);
    }, 0);

    setTimeout(function () {
        resultSection.querySelector('.img').src = canvas.toDataURL();
        resultSection.classList.add('blink');
        setTimeout(function () {
            resultSection.classList.remove('blink');
            captureBtn.classList.remove('fn-hide');
        }, 1000);
    }, 3000);

    setTimeout(function () {
        document.querySelector('.wave-download-bar').style.display = 'flex';
    }, 5000);
};

var userName = '';

document.querySelector('input[name="username"]').addEventListener('input', function () {
    var _this2 = this;

    var GetLength = function GetLength(str) {
        return str.replace(/[^\x00-\xff]/g, 'aa').length;
    };

    setTimeout(function () {
        if (GetLength(_this2.value.trim()) > 8) {
            _this2.value = userName;
        } else {
            userName = _this2.value.trim();
        }
    }, 100);
}, false);

var sendUserInfo = function sendUserInfo(e) {

    var name = document.querySelector('input[name="username"]').value.trim();
    var horo = document.querySelector('select[name="horo"]').value * 1;
    var gender = document.querySelector('input[name="gender"]:checked').value * 1;

    if (!name || horo == -1) {
        Alert.show('请填写完整信息');
        return false;
    }
    userName = name;
    if (typeof wx !== 'undefined') {
        window.wx.ready(function () {
            var shareHandler = {
                title: window.wxInfo.title, // 分享标题
                desc: name + window.wxInfo.desc, // 分享描述
                imgUrl: window.wxInfo.img, // 分享图标
                link: window.wxInfo.link, // 分享链接
                success: function success() {
                    if (typeof wxCallBack !== 'undefined') {
                        window.wxCallBack();
                    }
                },
                cancel: function cancel() {}
            };
            window.wx.onMenuShareTimeline(shareHandler);
            window.wx.onMenuShareAppMessage(shareHandler);
            window.wx.onMenuShareQQ(shareHandler);
            window.wx.onMenuShareWeibo(shareHandler);
        });
    }

    loading.classList.add('send-wrap');
    loading.classList.remove('fn-hide');
    loading.style.opacity = 1;

    setTimeout(function () {
        showImg({ "name": name, "horo": horo, "Alert": ["房间天花板漏水严重", "打游戏被人挂机", "抢不到爱豆演出票"], "BreakVerb": "和", "BreakSign": "摩羯座", "BreakAction": "好兄弟同睡一张床" });
    }, 1000);return false;

    document.querySelector('.welcome .begin').removeEventListener('click', sendUserInfo);

    // Post('/campaign/mercury_retrograde/',JSON.stringify({
    //     Name:name,
    //     Gender: gender,
    //     Sign:horo
    // }),function(data){
    //     let jsonData = JSON.parse(data);
    //     if(!jsonData.ErrorCode){
    //         let json = jsonData.Data;
    //         json.name = name;
    //         json.horo = horo;
    //         setTimeout(function() {
    //             showImg(json);
    //         }, 1000);
    //     }else{
    //         alert(data.Message);
    //         window.location.reload();
    //     }
    // });
};

var drawRune = function drawRune(data) {

    var HeadSvg = '<svg viewBox="0 0 329 87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M.243.025l328.254 4.52-3.637 81.594H198.997l1.603-6.405H4.327z"/></defs><g fill="none" fill-rule="evenodd"><g><use fill="#FEFF04" xlink:href="#a"/><path stroke="#000" stroke-width="5" d="M2.876 2.56l3.826 74.675h197.1L202.2 83.64h120.27l3.414-76.63L2.876 2.56z"/></g><g fill="#000"><path d="M41.08 16.064l-.096 39.024-10.752.576-.24-5.712 3.504.096.144-34.464 7.44.48zm15.792 38.352l-7.488-.288c-.608-1.44-1.216-3.064-1.824-4.872-.608-1.808-1.192-3.68-1.752-5.616-.56-1.936-1.056-3.896-1.488-5.88-.432-1.984-.76-3.856-.984-5.616l5.568-11.616 6.336 2.784-4.992 9.552 4.08 16.08 2.928.096-.384 5.376zM17.416 25.28l14.16-.528c-.736 3.712-1.392 7.096-1.968 10.152-.576 3.056-1.152 5.776-1.728 8.16-.576 2.384-1.184 4.424-1.824 6.12-.64 1.696-1.4 3.032-2.28 4.008-.88.976-1.912 1.592-3.096 1.848-1.184.256-2.608.144-4.272-.336l.192-5.712 2.784.336 4.272-19.488-5.904.864-.336-5.424zm76.896 14.4l-.144 2.736c-.128 2.048-.528 3.736-1.2 5.064-.672 1.328-1.544 2.312-2.616 2.952-1.072.64-2.336.92-3.792.84-1.456-.08-3.032-.52-4.728-1.32v-5.664l4.896.576.192-5.328-9.984-.144-.048-13.968 7.2.24-.576 9.456 3.6.048.48-12.576-12.24-.048v-4.8l5.04.096v-3.504l7.008.144.192 3.456 7.92.096.048-4.176 7.968-.096.096 4.32 3.552.048-.288 4.56-11.472-.048-.816 12.624 3.888.048-.24-9.12h7.248l-.768 13.632-10.416-.144zm-21.12-15.888l-1.248 29.232 34.848-.576-.096 5.472-31.776.048c-1.856 0-3.408-.088-4.656-.264-1.248-.176-2.24-.592-2.976-1.248-.736-.656-1.248-1.624-1.536-2.904-.288-1.28-.4-3.024-.336-5.232l.624-19.104h-3.168l.48-5.472 9.84.048zm.048-10.224v7.056h-7.248l.048-6.96 7.2-.096zm42.096 35.856l36.384-.672-.048 4.08c0 .704-.2 1.336-.6 1.896-.4.56-1.16 1.04-2.28 1.44-1.12.4-2.696.704-4.728.912-2.032.208-4.696.328-7.992.36l-20.16.144-.576-8.16zM140.2 22.112l4.656 2.352 2.208-1.728-.096-3.696-4.032-.144-.864 2.592-5.664-.576 2.064-7.824 6.24.384-.672 1.968 11.328-.528.24 4.416-2.592-.096.192 4.176c-.928 1.28-1.968 2.528-3.12 3.744l5.472 2.736-3.072 4.272-6.432-3.504c-2.016 1.44-3.92 2.36-5.712 2.76-1.792.4-3.2.12-4.224-.84l-.192-4.08 3.504.24 1.296-1.008-3.84-2.112 3.312-3.504zm-26.112-1.584l6.288.48-.816 1.152 14.64.336-.336 10.848-7.68.576-.336-3.216 1.776-.24.336-5.472-10.416-.048-.864 1.248c.608-.096 1.248-.144 1.92-.144.96 0 1.856.088 2.688.264.832.176 1.56.424 2.184.744.624.32 1.112.72 1.464 1.2.352.48.528 1.008.528 1.584 0 .512-.176.992-.528 1.44-.352.448-.84.832-1.464 1.152-.624.32-1.352.568-2.184.744-.832.176-1.728.264-2.688.264-1.92 0-3.512-.312-4.776-.936-1.264-.624-1.976-1.528-2.136-2.712-.064-.704.192-1.328.768-1.872.576-.544 1.36-.976 2.352-1.296l-4.368-.432 3.648-5.664zm15.84 15.36l-.096-1.632 7.104-.192-.144 1.68 18.576-.336v3.888l-43.44-.24-.288-2.88 18.288-.288zm2.592-22.704v1.536l3.456-.096.048 3.984h-3.504l.048 1.968-7.008-.048.096-1.92h-5.04L120.52 20l-6.096.048-.048-1.44h-3.072l-.144-3.504 3.168-.048v-1.728h6.624l-.096 1.584 5.04-.096.096-1.632h6.528zm19.44 31.392l-.192 3.072-36.912.096-.096-3.024 37.2-.144zm.24-3.936l-.384 2.736-36.624.144.192-3.312 36.816.432zm-8.064 13.776l.192-2.448h-21.36l-.24 2.4 21.408.048zm-27.6-23.376h4.032v-2.784l-4.032.192v2.592zm73.776 9.312L193 43.04l2.496-4.08-11.232.624.48 17.52-8.16.048V14.768l25.344-.432v17.376l-13.104.192v-5.76l6.192-.432v-4.896l-11.232-.048.336 13.872 17.136-1.056.96 6.096-4.56 8.016 5.664 5.664-5.472 3.648-3.408-3.696-2.112 3.792-6.864-1.776 4.32-7.056-4.56-5.04 5.088-2.88zm-15.984-19.536l-.192 6.288h-3.648l-.096 9.12 3.936-.096v5.424l-3.984.336-.096 14.16-10.416.672-.192-5.424L163 51.2v-8.736l-4.224.336-.144-6.24 4.368-.096v-9.36h-4.368v-5.328l4.368-.24.048-8.16h7.584l-.096 7.68 3.792-.24zM16.95 59.5h3.124l1.43 6.44 1.393-6.44h3.124V70h-1.96v-9.064L22.084 70h-1.196l-1.976-9.064V70H16.95V59.5zm13.496 6.932v1.134c0 .43.073.743.22.944.15.2.39.3.717.3.57 0 .854-.36.854-1.08v-.37h1.82c0 1.897-.842 2.845-2.524 2.845-1.007 0-1.743-.248-2.208-.745-.465-.497-.697-1.317-.697-2.46v-2.14c0-1.96.89-2.94 2.673-2.94.908 0 1.594.203 2.058.608.465.406.698 1.304.698 2.694v1.21h-3.61zm0-1.395h1.79v-.745c0-.365-.072-.618-.217-.76-.143-.145-.382-.218-.72-.218-.34 0-.57.096-.683.288-.114.19-.17.51-.17.957v.477zM36.744 70v-7.875h1.764v1.395c.196-.493.446-.882.752-1.17.305-.287.692-.43 1.162-.43v2.14c-.137-.014-.267-.02-.39-.02-.98 0-1.47.44-1.47 1.325V70h-1.818zm8.663-3.076h1.82v.73c0 1.7-.833 2.55-2.497 2.55-1.663 0-2.495-.958-2.495-2.877V64.71c0-1.86.818-2.79 2.454-2.79.843 0 1.476.21 1.9.63.424.414.636.97.636 1.667v.656h-1.82v-.854c0-.47-.218-.706-.655-.706-.464 0-.696.424-.696 1.272v2.98c0 .83.24 1.245.724 1.245.42 0 .63-.414.63-1.244v-.642zm4.186-4.8h1.818v5.593c0 .73.245 1.094.733 1.094.56 0 .84-.47.84-1.408v-5.277h1.82V70h-1.738v-1.217c-.296.948-.87 1.422-1.722 1.422-.634 0-1.085-.164-1.354-.492-.265-.333-.397-.852-.397-1.56v-6.028zM57.62 70v-7.875h1.764v1.395c.196-.493.446-.882.752-1.17.305-.287.692-.43 1.162-.43v2.14c-.137-.014-.267-.02-.39-.02-.98 0-1.47.44-1.47 1.325V70H57.62zm5.9 2.646V71.23c.11.014.232.02.364.02.278 0 .47-.03.574-.088.105-.064.157-.17.157-.314 0-.2-.04-.45-.116-.745l-1.963-7.978h1.907l1.087 5.66 1.068-5.66h1.845l-2.078 8.805c-.155.638-.376 1.093-.663 1.367-.287.273-.734.41-1.34.41-.187 0-.467-.02-.84-.06zM77.56 70H75.41c-.14-.365-.21-1.22-.21-2.57 0-.843-.11-1.38-.33-1.614-.218-.237-.765-.355-1.64-.355h-.71V70h-1.962V59.5h3.746c1.048 0 1.795.226 2.242.677.45.45.677 1.068.677 1.852 0 1.53-.552 2.37-1.655 2.522.52.077.91.278 1.17.6.26.325.39.774.39 1.348v.82c0 1.404.143 2.233.43 2.49V70zm-2.386-7.588c0-.515-.094-.873-.28-1.073-.183-.202-.5-.302-.95-.302H72.52v2.885h1.42c.822 0 1.232-.504 1.232-1.51zm6.578 4.02v1.134c0 .43.073.743.22.944.15.2.388.3.717.3.57 0 .854-.36.854-1.08v-.37h1.82c0 1.897-.84 2.845-2.523 2.845-1.007 0-1.743-.248-2.208-.745-.466-.497-.698-1.317-.698-2.46v-2.14c0-1.96.89-2.94 2.672-2.94.907 0 1.593.203 2.058.608.465.406.697 1.304.697 2.694v1.21h-3.61zm0-1.395h1.79v-.745c0-.365-.072-.618-.218-.76-.14-.145-.38-.218-.718-.218-.34 0-.57.096-.683.288-.113.19-.17.51-.17.957v.477zm5.642-1.58v-1.332h.738v-2.187h1.818v2.187h.766v1.333h-.766v4.724c0 .104.023.212.07.32.044.11.19.165.436.165.078 0 .164-.007.26-.02v1.415c-.3.04-.618.06-.95.06-.534 0-.94-.106-1.217-.32-.278-.214-.417-.577-.417-1.087v-5.257h-.738zM92.938 70v-7.875H94.7v1.395c.197-.493.448-.882.753-1.17.305-.287.693-.43 1.162-.43v2.14c-.136-.014-.266-.02-.39-.02-.98 0-1.47.44-1.47 1.325V70H92.94zm5.545-3.418v-.91c0-1.562.23-2.58.69-3.048.46-.47 1.16-.704 2.1-.704.98 0 1.68.246 2.105.738.428.492.643 1.43.643 2.817v.943c0 1.513-.195 2.522-.587 3.028-.392.506-1.112.76-2.16.76-1.085 0-1.82-.256-2.21-.767-.386-.516-.58-1.468-.58-2.858zm1.82-2.003v2.898c0 .55.07.91.21 1.08.142.168.397.253.766.253.382 0 .63-.093.744-.28.12-.187.178-.537.178-1.052v-2.906c0-.838-.3-1.258-.902-1.258-.35 0-.606.098-.766.294-.155.196-.232.52-.232.97zm6.433 6.31h1.82c.02.295.233.443.634.443h.082c.57 0 .855-.412.855-1.237v-.97c-.35.72-.92 1.08-1.71 1.08-1.193 0-1.79-.908-1.79-2.722V64.64c0-.984.153-1.683.458-2.098.31-.415.784-.622 1.422-.622.765 0 1.278.367 1.538 1.1v-.895h1.9v7.636c0 .95-.214 1.666-.642 2.154-.43.483-1.083.725-1.962.725-.956 0-1.622-.15-1.995-.446-.374-.3-.577-.736-.61-1.305zm1.71-6.557v3.117c0 .907.252 1.36.758 1.36.56 0 .84-.52.84-1.565v-2.468c0-.975-.275-1.463-.826-1.463-.515 0-.773.34-.773 1.02zM114.6 70v-7.875h1.763v1.395c.196-.493.447-.882.752-1.17.306-.287.693-.43 1.162-.43v2.14c-.136-.014-.266-.02-.39-.02-.98 0-1.47.44-1.47 1.325V70H114.6zm5.457-5.564c0-.935.225-1.586.676-1.956.456-.373 1.153-.56 2.092-.56.92 0 1.584.173 1.99.52.41.346.615.92.615 1.722v4.765c0 .392.048.75.143 1.073h-1.736c-.073-.173-.11-.38-.11-.622 0-.068.01-.157.028-.267-.264.398-.536.68-.814.85-.272.163-.557.245-.853.245-1.39 0-2.085-.78-2.085-2.345 0-.71.175-1.248.526-1.613.356-.365.955-.72 1.798-1.066.465-.177.8-.34 1.005-.485.206-.15.31-.367.31-.65 0-.268-.058-.457-.172-.566-.11-.11-.326-.166-.65-.166-.405 0-.68.078-.82.233-.137.155-.205.45-.205.89h-1.736zm3.554 1.42l-1.072.706c-.296.186-.49.36-.58.52-.092.154-.138.393-.138.717 0 .673.29 1.01.868 1.01.616 0 .923-.407.923-1.223v-1.73zm8.036-2.952V59.5h1.818V70h-1.818v-.89c-.32.73-.84 1.095-1.56 1.095-.623 0-1.104-.198-1.44-.595-.334-.396-.5-1.105-.5-2.126V64.79c0-1.07.164-1.815.492-2.234.332-.424.793-.636 1.38-.636.803 0 1.345.328 1.628.984zm-1.682 1.47v3.2c0 .824.26 1.237.78 1.237.6 0 .902-.52.902-1.565V64.73c0-.944-.294-1.416-.882-1.416-.534 0-.8.354-.8 1.06zm8 2.058v1.134c0 .43.073.743.22.944.15.2.388.3.716.3.57 0 .855-.36.855-1.08v-.37h1.818c0 1.897-.84 2.845-2.522 2.845-1.006 0-1.742-.248-2.207-.745-.465-.497-.697-1.317-.697-2.46v-2.14c0-1.96.89-2.94 2.672-2.94.907 0 1.593.203 2.058.608.465.406.697 1.304.697 2.694v1.21h-3.61zm0-1.395h1.79v-.745c0-.365-.072-.618-.218-.76-.14-.145-.38-.218-.718-.218-.34 0-.57.096-.683.288-.114.19-.17.51-.17.957v.477zM148.92 70V59.5h4.032c.62 0 1.178.242 1.675.725.355.332.604.81.745 1.435.14.62.212 1.61.212 2.967 0 1.344-.087 2.37-.26 3.076-.173.707-.474 1.27-.902 1.69-.424.404-1.044.607-1.86.607h-3.643zm1.96-1.538h.91c.734 0 1.212-.246 1.436-.738.223-.497.335-1.507.335-3.03 0-1.443-.1-2.414-.3-2.91-.2-.498-.586-.746-1.156-.746h-1.223v7.424zm7.228-4.026c0-.935.226-1.586.677-1.956.456-.373 1.153-.56 2.092-.56.92 0 1.584.173 1.99.52.41.346.614.92.614 1.722v4.765c0 .392.05.75.145 1.073h-1.736c-.074-.173-.11-.38-.11-.622 0-.068.008-.157.027-.267-.265.398-.536.68-.814.85-.273.163-.558.245-.854.245-1.39 0-2.086-.78-2.086-2.345 0-.71.175-1.248.526-1.613.356-.365.955-.72 1.798-1.066.465-.177.8-.34 1.005-.485.205-.15.307-.367.307-.65 0-.268-.057-.457-.17-.566-.11-.11-.326-.166-.65-.166-.405 0-.68.078-.82.233-.137.155-.205.45-.205.89h-1.737zm3.555 1.42l-1.073.706c-.296.186-.49.36-.58.52-.092.154-.138.393-.138.717 0 .673.29 1.01.868 1.01.615 0 .923-.407.923-1.223v-1.73zm4.82-3.73h1.82V70h-1.82v-7.875zm0-2.647h1.82v1.66h-1.82v-1.66zm4.89 10.52V59.5h1.82V70h-1.82zm4.96 2.646V71.23c.108.014.23.02.36.02.28 0 .47-.03.576-.088.103-.064.156-.17.156-.314 0-.2-.04-.45-.116-.745l-1.962-7.978h1.907l1.087 5.66 1.066-5.66h1.846l-2.078 8.805c-.155.638-.376 1.093-.663 1.367-.287.273-.734.41-1.34.41-.187 0-.467-.02-.84-.06z"/></g></g></svg>';
    var NoticeSvg = '<svg viewBox="0 0 319 25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#D2568F" d="M.446 5.632L318.996 1v23.618H2"/><path fill="#D2568F" d="M14.298 3.097v21.096h102.334V.118"/><circle fill="#FFF" cx="9.5" cy="14.5" r="2.5"/></g></svg>';
    var WaysSvg = '<svg viewBox="0 0 329 102" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#FEFF04" d="M6.3 3.803L3.887 97.36l320.947-8.728-8.442-76.785"/><path d="M315.137 13.304L8.8 5.644l-2.82 90.31 316.8-8.335-7.643-74.316zM3.957.52L319.66 8.417l8.647 84.06-327.49 8.616L3.958.522z" fill="#000" fill-rule="nonzero"/><path d="M103.52 20.232l-.638-9.005-4.47 7.77c-13.975-4.25-22.976 3.41-22.976 3.41s4.053-7.18-7.79-9.42c-20.033-3.787-17.807 9.42-17.807 9.42L32.09 6.252l10.725 16.155s-12.784-7.14-27.078 2.118C1.82 33.538 6.62 51.745 9.587 60.177c1.808 5.13 4.57 9.86 9.63 11.828 7.115 2.766 14.51.68 17.827-1.507-11.482 10.687 1.89 19.318 12.29 21.188 19.303 3.47 20.65-7.41 20.65-7.41l2.847 9.52v-9.52c43.855 23.54 63.507-38.527 35.79-61.188-2.42-1.98-2.734-1.77-5.1-2.856z" fill="#000"/><path d="M62.944 49.04l-3.648 2.208-3.072-3.264-2.272 3.488-4.128-1.632 3.328-5.12-3.264-3.456c-.128 1.963-.33 3.627-.608 4.992-.277 1.365-.65 2.42-1.12 3.168-.47.747-1.06 1.19-1.776 1.328-.715.14-1.584-.037-2.608-.528l-.16-4.352 1.6.064.576-20.384 6.4-.096-.064-3.648 4.992-.192-.096 3.776 5.888-.096-.096 6.272-4.256.032.16-3.584h-1.792l-.16 5.952 5.312-.288.608 4.416L58.56 44.4l4.384 4.64zm-19.04-24.864l.064 3.584-4.16-.032c-.107.832-.267 1.7-.48 2.608-.213.907-.47 1.808-.768 2.704l5.248-.224-.032 9.632c0 .853-.133 1.573-.4 2.16-.267.587-.608 1.06-1.024 1.424-.416.363-.864.624-1.344.784-.48.16-.944.24-1.392.24l-4.768-.128-.096-8.704c-.576.17-1.195.096-1.856-.224l.032-4.448 1.664.192.704-6.048-2.304-.032.032-3.2 10.88-.288zM58.08 37.104l-8 .256-.096 2.56 2.88-1.536 2.592 2.752 2.624-4.032zm-7.904-2.752l2.176-.128-.128-6.24H50.24l-.064 6.368zm-11.584 1.664l-.128 8.032 1.632.064.064-8.096h-1.568zm41.6-6.272L79.808 50.8H75.36l.064-3.008 1.056-.032.032-4-1.664-.032-.096 6.112-3.648.032.096-6.24-1.632-.032-.032 1.344c-.064 1.792-.256 3.147-.576 4.064-.32.917-.71 1.54-1.168 1.872-.46.33-.95.443-1.472.336-.523-.107-1.02-.3-1.488-.576l.16-3.328.992-.032V30.032l7.008-.128 1.152-2.72h-4.256l-.768 1.792-4.096-.352 2.112-6.432 4.768.16-.768 1.856 7.424-.192v3.2l-1.152 2.592 2.784-.064zm14.752 14.144l.096 3.616-4.288.032v4l-4.608.096.032-4.064-5.152.032v-3.392l5.184-.096.032-3.232h-1.632l-.256 1.792-3.488-.128.672-7.104 3.808.224-.288 1.888 1.216-.032.032-2.72 4.48-.032v2.624l3.552-.096.096 3.616h-3.68v3.072l4.192-.096zM88.48 33.456l-.224-3.424 2.08-.096-.096-3.648-2.688.096-2.016 7.84-4.096-.672 1.728-7.008-2.4.064-.032-3.712 13.632-.224c.064.683.128 1.54.192 2.576.064 1.035.096 2.08.096 3.136s-.06 2.027-.176 2.912c-.117.885-.315 1.51-.592 1.872l-5.408.288zm-13.568 7.296l1.6-.032.032-2.784-1.6.032-.032 2.784zm-5.248.096l1.6-.032.032-2.816-1.504.032-.128 2.816zm6.912-8.16h-1.504l-.064 2.336h1.536l.032-2.336zm-6.688 2.368l1.472-.032.064-2.368h-1.44l-.096 2.4zm-26.56 25.568l1.28-6.464 5.248.736-.896 5.536 11.424-.416.48 4.768-6.24-.032L56.928 76.4l3.744-.16-.064 4.832-7.232-.128c-.32-.533-.63-1.216-.928-2.048-.3-.832-.58-1.744-.848-2.736-.267-.992-.517-2.027-.752-3.104s-.453-2.128-.656-3.152-.38-1.984-.528-2.88l-.384-2.304-1.056-.032c-.555 3.03-1.093 5.61-1.616 7.744-.523 2.133-1.06 3.9-1.616 5.296-.555 1.397-1.136 2.46-1.744 3.184-.608.725-1.27 1.184-1.984 1.376-.715.192-1.504.155-2.368-.112-.864-.267-1.82-.7-2.864-1.296l.32-4.352 3.712.704 2.464-12.576-6.656-.064-.288-3.712 7.744-.256zm49.152-3.328l-.064 4-6.176-.064-.096 4.8 8.032-.224-.128 4.032-11.264-.032-2.592 8.96 8.032-.384-1.28-4.928 5.024-.8 1.696 9.44-19.616.128 3.328-12.448-4.384-.032-.16-3.328 8.192-.224-.032-5.024-6.048-.096-.256-3.36 6.272-.128v-4.096l5.44.16-.096 3.808 6.176-.16zM70.752 82.352l-4.992-.064.32-7.584 5.056.128-.384 7.52zm.48-21.344h-5.024l-.064-6.144 5.024.128.064 6.016zm-.032 9.44l-5.056-.064.096-5.504 4.896.128.064 5.44z" fill="#FFF"/></g></svg>';
    var ShareSvg = '<svg width="138" height="14" viewBox="0 0 138 14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="app-a" width="13.781" height="13.781" rx="3"/><linearGradient x1="53.135%" y1="15.529%" x2="53.135%" y2="100%" id="app-d"><stop stop-color="#FF5372" offset="0%"/><stop stop-color="#E76C9D" offset="24.965%"/><stop stop-color="#A491D5" offset="56.159%"/><stop stop-color="#38C1F3" offset="100%"/></linearGradient><path id="app-c" d="M0 0h13.95v13.95H0z"/><path id="app-f" d="M.06 11.343h9.306V.055H.06v11.288z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(.49 .077)"><mask id="app-b" fill="#fff"><use xlink:href="#app-a"/></mask><use fill="#D8D8D8" xlink:href="#app-a"/><g transform="translate(-.17)" mask="url(#app-b)"><mask id="app-e" fill="#fff"><use xlink:href="#app-c"/></mask><use fill="url(#app-d)" xlink:href="#app-c"/><path fill="#FFFF32" mask="url(#app-e)" d="M9.325 0L4.652 6.976h4.673L4.652 13.95l-6.51.617L-2.01 5.4l-.19-6.8h8.78"/></g></g><path d="M20.416 2.695c-.602 0-1.09.492-1.09 1.097v4.15c0 .605.488 1.097 1.09 1.097h7.337c.602 0 1.092-.493 1.092-1.098v-4.15c0-.605-.49-1.097-1.092-1.097h-7.337zm7.337 7.417h-7.337c-1.193 0-2.164-.974-2.164-2.17v-4.15c0-1.197.97-2.17 2.164-2.17h7.337c1.194 0 2.165.973 2.165 2.17v4.15c0 1.196-.97 2.17-2.165 2.17z" fill="#2B2B2B"/><path d="M26.75 6.28h-5.314c-.296 0-.536-.24-.536-.535 0-.297.24-.537.536-.537h5.313c.295 0 .535.24.535.537 0 .296-.24.536-.536.536M33.423 6.633c-.174 0-.344-.084-.447-.24L31.86 4.72c-.165-.247-.098-.58.148-.744.247-.165.58-.098.744.15l1.117 1.675c.163.246.097.58-.15.743-.09.06-.195.09-.297.09M33.423 3.212c-.174 0-.344-.084-.447-.24L31.86 1.298c-.165-.247-.098-.58.148-.744.247-.164.58-.098.744.15l1.117 1.675c.163.247.097.58-.15.744-.09.06-.195.09-.297.09M32.14 12.81c-.05 0-.1-.006-.15-.02-.284-.083-.448-.38-.365-.665l1.26-4.324c.082-.283.38-.447.664-.364.283.083.447.38.364.665l-1.26 4.325c-.067.234-.28.386-.513.386M38.927 5.636c-.297 0-.537-.24-.537-.537V.943c0-.296.24-.536.537-.536.296 0 .536.24.536.536V5.1c0 .296-.24.536-.536.536" fill="#2B2B2B"/><g transform="translate(34.193 1.566)"><mask id="app-g" fill="#fff"><use xlink:href="#app-f"/></mask><path d="M1.555 4.624l-.378 5.545c.37-.087.73-.214 1.075-.382C6.035 7.95 7.405 5.7 7.868 4.624H1.555zm-.96 6.72c-.137 0-.27-.054-.37-.15-.116-.11-.176-.265-.165-.424l.452-6.618C.51 4.13.508 4.11.508 4.087c0-.047.006-.093.017-.136l.128-1.875C.73.942 1.68.055 2.813.055H7.2c1.195 0 2.166.974 2.166 2.17 0 .297-.24.543-.537.543-.297 0-.537-.234-.537-.53 0-.618-.49-1.11-1.092-1.11H2.813c-.57 0-1.05.45-1.088 1.02l-.096 1.403h6.986c.16 0 .31.07.41.193.103.122.146.282.118.44-.027.153-.74 3.81-6.42 6.57-.635.308-1.307.503-2 .58l-.067.007-.06.003z" fill="#2B2B2B" mask="url(#app-g)"/></g><path d="M42.89 12.91c-.113 0-.225-.036-.322-.107L36.344 8.16c-.238-.176-.287-.512-.11-.75.178-.237.514-.287.75-.11l6.226 4.642c.237.178.286.514.11.75-.106.143-.268.217-.43.217M21.436 6.29c-.106 0-.213-.03-.307-.095-.243-.17-.303-.504-.133-.747l3.59-5.142c.17-.243.504-.302.747-.133.243.17.302.504.132.747l-3.59 5.142c-.104.15-.27.23-.44.23M28.944 12.726h-6.46c-.2 0-.382-.11-.474-.287-.093-.178-.08-.392.034-.556l4.266-6.17c.17-.243.503-.303.747-.135.243.168.304.502.136.746l-3.685 5.327h5.436c.296 0 .537.24.537.537 0 .296-.24.536-.536.536" fill="#2B2B2B"/><path d="M53 1v11.004" stroke="#2B2B2B"/><path d="M70.788.856l.204 1.332-4.716.108-.252.516 4.044-.072-.036 1.272-4.596-.06-.276.516 6.252-.096-.084 1.284-6.84-.012c-.056.096-.112.188-.168.276l-.168.264 6.516-.036-.084 2.568c-.024.552-.082 1.008-.174 1.368-.092.36-.216.65-.372.87-.156.22-.346.382-.57.486-.224.104-.474.174-.75.21-.276.036-.58.052-.912.048-.332-.004-.686-.002-1.062.006l-3.996.096-.084-3.6c-.864.888-1.556 1.02-2.076.396l-.096-1.476 1.032.012.84-1.488-1.716-.012-.144-1.092 2.508-.036.324-.576-1.38-.024-.084-1.032 2.076-.036.288-.504-2.844.06-.096-1.092 9.492-.444zm-6.132 6.3l-.024.492 3.984-.084.012-.492-3.972.084zm3.912 3.264v-.432l-4.032.168-.012.528 4.044-.264zm-3.984-1.296l4.008-.18v-.348l-3.996.096-.012.432zm13.16 1.212L77.73 9.7l-3.323-.012-.096-1.236 3.397-.084-.024-.72h-2.388l-.24.612-1.5-.396.54-2.004 1.824.252-.157.372 1.896-.048-.013-.444 2.136-.06v.444l3.42-.096-.144 1.368h-3.29v.672l3.085-.084-.132 1.464H79.77v.576l3.745-.108-.072 1.476-9.588.108-.144-1.284 4.033-.132zm5.22-9.3c0 .776-.01 1.424-.03 1.944-.02.52-.073.948-.157 1.284-.084.336-.208.592-.372.768-.164.176-.384.302-.66.378-.276.076-.616.12-1.02.132-.404.012-.894.022-1.47.03l-4.788.036-.132-4.548 8.628-.024zm-2.125 2.82l-4.453.06.012.624 4.44-.204v-.48zm-4.465-1.56V2.8l4.476-.06.013-.576-4.488.132zm10.364-.492l4.21-.072.013-.672 2.004.036.012.6 3.455-.072.084 1.488-7.933-.132c-.048 1.544-.106 2.84-.174 3.888-.068 1.048-.156 1.904-.264 2.568-.11.664-.24 1.166-.39 1.506-.153.34-.33.57-.535.69-.204.12-.438.16-.702.12-.264-.04-.56-.108-.888-.204V9.784l.78.024.324-8.004zm4.93 8.34l-.01-.888-2.33-.012-.01-1.116 2.34-.108-.025-4.452 1.812.036.084 4.332 2.317-.108.012 1.428h-2.305l.012.852 2.928-.06.036 1.5-7.955-.048-.048-1.296 3.144-.06zm2.797-6.396l1.272.204c-.04.504-.093.932-.157 1.284s-.14.656-.228.912l.852.012-.012 1.104-1.092.024-.012-.6c-.183.28-.395.448-.635.504-.24.056-.492.064-.756.024l.035-1.464.48.072.252-2.076zm-4.86 0l1.272.204c-.033.504-.08.932-.145 1.284-.064.352-.14.656-.228.912l.852.012-.025 1.104-1.08.024-.012-.612c-.184.28-.396.45-.636.51s-.492.07-.756.03l.037-1.464.48.072.24-2.076zM111.044 6.688c-.416.432-.85.856-1.302 1.272-.452.416-.91.816-1.374 1.2.256.184.514.366.774.546l.786.546 1.908.036-.06 1.656-2.22.036c-.096 0-.238-.038-.426-.114-.188-.076-.404-.184-.648-.324s-.514-.308-.81-.504c-.296-.196-.604-.414-.924-.654l-.318.228c-.1.072-.202.14-.306.204-.248.16-.53.324-.846.492-.316.168-.656.308-1.02.42-.364.112-.746.184-1.146.216-.4.032-.804-.004-1.212-.108l-.072-1.668 1.572.168 1.824-1.176c-.472-.408-.922-.83-1.35-1.266-.428-.436-.806-.874-1.134-1.314l1.764-.6c.376.36.76.71 1.152 1.05.392.34.796.674 1.212 1.002.408-.296.812-.61 1.212-.942.4-.332.808-.702 1.224-1.11l1.74.708zm-5.016-5.208V.832l2.1.012.012.576 3.804-.108.036 1.548-9.636-.06-.036-1.212 3.72-.108zm-.444 1.884c-.256.744-.51 1.298-.762 1.662-.252.364-.514.608-.786.732s-.562.162-.87.114c-.308-.048-.65-.116-1.026-.204l.084-1.428 1.032.06.3-1.164 2.028.228zm4.704-.252l.564 1.116h.84l-.036 1.476-2.016-.012c-.336-.28-.602-.626-.798-1.038-.196-.412-.354-.834-.474-1.266l1.92-.276zm14.695-1.992l-.132 10.68h-2.435l.024-1.284.6-.012.01-2.424-1.09.012c-.033.608-.077 1.12-.133 1.536-.056.416-.126.756-.21 1.02-.084.264-.186.466-.306.606-.12.14-.257.24-.413.3-.156.06-.336.088-.54.084-.204-.004-.43-.014-.678-.03l-.025-1.596.468-.012.12-8.784 4.74-.096zm-5.628 0l-.144 10.68h-2.423l.024-1.284.6-.012.013-2.424-1.092.012c-.03.608-.075 1.12-.13 1.536-.057.416-.127.756-.21 1.02-.085.264-.187.466-.307.606-.12.14-.258.24-.414.3-.157.06-.337.088-.54.084-.205-.004-.43-.014-.68-.03l-.023-1.596.468-.012.108-8.784 4.752-.096zm-1.896 1.524l-1.033-.012v.822c0 .26-.004.518-.012.774h1.032l.012-1.584zm5.627 0l-1.02-.012v.828c0 .264-.004.52-.012.768h1.02l.012-1.584zm-5.664 4.188l.012-1.476-1.032.048c0 .256-.002.504-.006.744s-.01.468-.018.684h1.043zm4.584 0h1.044l.013-1.476-1.02.048-.036 1.428zm4.688 1.836l2.376-5.028-2.327-.012-.048-1.5 3.12-.072.564-1.188 2.003.288-.42.852 5.34-.12.024 1.788-6.168-.024-.565 1.164 5.856-.108.23 2.184c-.45.384-.877.752-1.285 1.104-.408.352-.804.68-1.188.984l1.656 1.14h1.548v1.68h-2.255l-2.436-1.692c-.545.392-1.055.722-1.53.99-.477.268-.92.464-1.333.588-.412.124-.796.174-1.152.15-.356-.024-.682-.132-.978-.324l-.024-1.728 1.2.276c.36-.136.718-.298 1.074-.486.356-.188.714-.398 1.074-.63l-1.847-1.284-.744 1.536-1.765-.528zm3.66-2.364l2.244 1.56c.32-.248.63-.498.935-.75.304-.252.608-.506.912-.762l-4.092-.048z" fill="#2B2B2B"/></g></svg>';

    // const canvasW = resultSection.clientWidth;
    // const canvasH = resultSection.clientHeight;

    var orginW = 335;
    var orginH = 478;

    var canvasW = 350;
    var canvasH = canvasW * 478 / orginW;
    var screenBorder = 5;
    var screenRadius = 8;
    var innerW = canvasW - screenBorder * 2;
    var innerH = canvasH - screenBorder * 2;

    var gW = function gW(px) {
        return px * orginW / innerW;
    };
    var gH = function gH(px) {
        return px * orginH / innerH;
    };

    var loadSvg = function loadSvg(svg, callback) {
        fabric.loadSVGFromString(svg, callback);
    };

    var renderWord = function renderWord(txt, order) {
        var info = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


        var Rect = new fabric.Rect({
            radius: 100,
            fill: '#000',
            selection: false,
            selectable: false,
            originX: 'center',
            originY: 'center'
        });

        var text = new fabric.Text(txt, {
            fontSize: order == 2 ? 28 : 22,
            fill: '#fff',
            selection: false,
            selectable: false,
            padding: 10,
            fontFamily: 'tongxin',
            originX: 'center',
            originY: 'center'
        });

        Rect.set({ width: text.width + (info.w || 0), height: info.h || 41 });

        var RectGroup = new fabric.Group([Rect, text]);

        return RectGroup;
    };

    window.canvas = new fabric.Canvas('rune', {
        selection: false,
        selectable: false,
        allowTouchScrolling: true,
        enableRetinaScaling: true,
        width: canvasW,
        height: canvasH
    });

    // 背景白
    canvas.add(new fabric.Rect({
        left: 0,
        top: 0,
        fill: '#fff',
        selection: false,
        selectable: false,
        width: canvasW,
        rx: screenRadius,
        height: canvasH
    }));

    var pink = new fabric.Rect({
        left: screenBorder,
        top: screenBorder,
        selection: false,
        selectable: false,
        fill: '#FFEAF4',
        width: innerW,
        height: innerH,
        angle: 90,
        opacity: 0,
        rx: screenRadius
    });
    // 背景粉
    canvas.add(pink);

    pink.animate({
        opacity: 1,
        angle: 0
    }, {
        easing: fabric.util.ease.easeInExpo,
        duration: 800,
        onChange: canvas.renderAll.bind(canvas)
    });

    // header
    loadSvg(HeadSvg, function (svgs) {

        var group = new fabric.Group(svgs, {
            width: gW(329),
            selection: false,
            selectable: false,
            zIndex: 1
        });
        // canvas.add(group);

        // qrcode

        fabric.util.loadImage('https://si00.fatepair.com/7f55f585809b980019ae40865bd72ded.png', function (oImg) {

            fabric.util.loadImage(document.querySelector('#qrcode img').src, function (code) {

                var object = new fabric.Image(oImg);
                object.set({
                    width: 100,
                    height: 64,
                    selection: false,
                    selectable: false,
                    left: gW(215) + 0.5,
                    top: gH(15),
                    zIndex: 4
                });

                var qrcode = new fabric.Image(code);
                qrcode.set({
                    width: 51,
                    height: 51,
                    selection: false,
                    selectable: false,
                    left: gW(223),
                    top: gH(22)
                });

                window.Head = new fabric.Group([group, object, qrcode], {
                    top: -100,
                    opacity: 0,
                    selection: false,
                    selectable: false
                });

                canvas.add(Head);
                Head.viewportCenterH();

                Head.animate({
                    opacity: 1,
                    top: gH(8)
                }, {
                    easing: fabric.util.ease.easeInOutBack,
                    duration: 600,
                    onChange: canvas.renderAll.bind(canvas)
                });
            }, null, { crossOrigin: 'Anonymous' });
        }, null, { crossOrigin: 'Anonymous' });
    });

    // notice
    loadSvg(NoticeSvg, function (svgs) {

        var text = new fabric.Text('8月13日-9月6日', {
            fontFamily: 'tongxin',
            fontSize: 14,
            left: 0,
            selection: false,
            selectable: false,
            fill: '#fff',
            top: gH(106)
        });

        var text2 = new fabric.Text('有重大水逆，请仔细阅读警报！', {
            fontFamily: 'tongxin',
            fontSize: 12,
            left: text.width + 1,
            selection: false,
            selectable: false,
            fill: '#fff',
            top: gH(108)
        });
        var groupTxt = new fabric.Group([text, text2], {
            // left:'center',
            width: gW(317),
            left: -200,
            top: gH(106),
            selection: false,
            selectable: false,
            zIndex: 1,
            opacity: 0,
            originY: 'top'

        });
        var group = new fabric.Group(svgs, {
            // left:'center',
            width: gW(317),
            top: gH(100),
            selection: false,
            selectable: false,
            zIndex: 1,
            opacity: 0,
            originY: 'top'

        });
        canvas.add(group, groupTxt);
        group.viewportCenterH();

        setTimeout(function () {
            group.animate({
                opacity: 1
            }, {
                easing: fabric.util.ease.easeInQuad,
                duration: 500,
                onChange: canvas.renderAll.bind(canvas)
            });
            groupTxt.animate({
                left: gW(15),
                opacity: 1
            }, {
                easing: fabric.util.ease.easeInOutBack,
                duration: 800,
                onChange: canvas.renderAll.bind(canvas)
            });
        }, 500);
    });

    // 星座名字
    var horoName = new fabric.Text(_common.HoroModel[data.horo].cn + '座', {
        fontFamily: 'tongxin',
        fontSize: 43,
        left: gW(7),
        angle: -11,
        selection: false,
        selectable: false,
        fill: '#D2568F'
    });

    // 的
    var DeTxt = new fabric.Text('的', {
        fontFamily: 'tongxin',
        fontSize: 25,
        left: gW(115),
        top: gH(26),
        selection: false,
        selectable: false,
        fill: '#000'
    });

    // 欧阳娜娜
    var NameTxt = new fabric.Text(data.name, {
        fontFamily: 'tongxin',
        fontSize: 48,
        left: gW(145),
        top: gH(2),
        selection: false,
        selectable: false,
        fill: '#000'
    });

    // 你要小心
    var CareTxt = new fabric.Text('在水逆的某天要小心', {
        fontFamily: 'tongxin',
        fontSize: 25,
        left: gH(115),
        selection: false,
        selectable: false,
        top: gH(60),
        fill: '#000'
    });

    var TxtGroup = new fabric.Group([horoName, DeTxt, NameTxt, CareTxt], {
        top: gH(125),
        opacity: 0,
        selection: false,
        selectable: false
    });
    canvas.add(TxtGroup);
    setTimeout(function () {
        TxtGroup.animate({
            opacity: 1
        }, {
            easing: fabric.util.ease.easeInOutQuad,
            onChange: canvas.renderAll.bind(canvas)
        });
    }, 1500);

    // word1
    var g1 = renderWord(data.Alert[0], 1, {
        w: gW(50)
    });

    g1.set({
        left: innerW - g1.width
    });

    // word2
    var g2 = renderWord(data.Alert[1], 2, {
        w: gW(40)
    });
    g2.set({
        left: (innerW - g2.width) / 2,
        top: g1.height / 2 + 1
    });

    // word3
    var g3 = renderWord(data.Alert[2], 3, {
        w: gW(50)
    });

    g3.set({
        left: (innerW - g3.width) / 2,
        top: g1.height + g2.height / 2 + 2
    });

    var gGroup = new fabric.Group([g1, g2, g3], {
        top: gH(245),
        opacity: 0,
        selection: false,
        selectable: false
    });

    canvas.add(gGroup);

    setTimeout(function () {
        gGroup.animate({
            opacity: 1
        }, {
            easing: fabric.util.ease.easeInOutQuad,
            onChange: canvas.renderAll.bind(canvas)
        });
    }, 1800);

    loadSvg(WaysSvg, function (svgs) {

        var act = new fabric.Text(data.BreakVerb, {
            fontFamily: 'tongxin',
            fontSize: 18,
            left: gW(145),
            selection: false,
            selectable: false,
            fill: '#000'
        });

        var horo = new fabric.Text(data.BreakSign, {
            fontFamily: 'tongxin',
            fontSize: 34,
            left: gW(145) + act.width + 2,
            top: gH(18),
            selection: false,
            selectable: false,
            fill: '#000'
        });

        act.set({
            top: horo.height / 2 + gH(18) / 2
        });

        var desc = new fabric.Text(data.BreakAction, {
            fontFamily: 'tongxin',
            fontSize: 18,
            left: gW(145),
            top: act.height + act.top + gH(10),
            selection: false,
            selectable: false,
            fill: '#000'
        });

        var group = new fabric.Group(svgs, {
            // left:'center',
            left: 14,
            selection: false,
            selectable: false,
            zIndex: 1,
            originY: 'bottom'

        });
        var wayGs = new fabric.Group([group, act, horo, desc], {
            top: gGroup.top + gGroup.height,
            selection: false,
            selectable: false
        });

        setTimeout(function () {
            canvas.add(wayGs);
            wayGs.animate({
                top: gGroup.top + gGroup.height
            }, {
                easing: fabric.util.ease.easeInOutBack,
                duration: 800,
                onChange: canvas.renderAll.bind(canvas)
            });
        }, 1900);
    });

    fabric.util.loadImage('https://si00.fatepair.com/c3b452ff2be7c06e7665ae5ad6a40dad.png', function (oImg) {
        var object = new fabric.Image(oImg);
        object.set({
            top: innerH - object.height / 2,
            left: 14,
            selection: false,
            selectable: false,
            zIndex: 1
        });
        object.set({
            selection: false,
            selectable: false,
            width: object.width / 2,
            height: object.height / 2
        });
        canvas.add(object);
        object.viewportCenterH();
    }, null, { crossOrigin: 'Anonymous' });

    canvas.setZoom(resultSection.clientWidth / canvasW);
    canvas.setWidth(resultSection.clientWidth);
    canvas.setHeight(resultSection.clientWidth * canvasH / canvasW);
};

window.onload = function () {

    Font.load('tongxin').then(function () {
        loading.style.opacity = 0;
        setTimeout(function () {
            loading.classList.add('fn-hide');
            document.querySelector('.welcome .begin').addEventListener('click', sendUserInfo, false);
            //document.querySelector('.wrapper .capture-btn').addEventListener('click',captureImg);
        }, 500);
    }, function () {
        console.log('Font is not available');
    });
};

(0, _bridge2.default)(function (bridge) {

    (0, _common.sharePage)(bridge, {
        'type': 'normal',
        'url': document.location.href,
        'cropImg': false,
        'title': window.wxInfo.title,
        'desc': userName + window.wxInfo.desc,
        'img': window.wxInfo.img
    });
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})}; true?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: tamamadesu
 * @Date: 2017-06-23 14:42:44
 * @Last Modified by: tamamadesu
 * @Last Modified time: 2017-06-23 14:50:04
 * @Description: generate qrcode by https://github.com/davidshimjs/qrcodejs
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var QRCode = null;
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];
    // Added to support UTF-8 Characters
    for (var i = 0, l = this.data.length; i < l; i++) {
        var byteArray = [];
        var code = this.data.charCodeAt(i);
        if (code > 0x10000) {
            byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
            byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
            byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[3] = 0x80 | code & 0x3F;
        } else if (code > 0x800) {
            byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
            byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[2] = 0x80 | code & 0x3F;
        } else if (code > 0x80) {
            byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
            byteArray[1] = 0x80 | code & 0x3F;
        } else {
            byteArray[0] = code;
        }
        this.parsedData.push(byteArray);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData);
    if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
    }
}
QR8bitByte.prototype = {
    getLength: function getLength(buffer) {
        return this.parsedData.length;
    },
    write: function write(buffer) {
        for (var i = 0, l = this.parsedData.length; i < l; i++) {
            buffer.put(this.parsedData[i], 8);
        }
    }
};
function QRCodeModel(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
}
QRCodeModel.prototype = {
    addData: function addData(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
    },
    isDark: function isDark(row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
            throw new Error(row + "," + col);
        }
        return this.modules[row][col];
    },
    getModuleCount: function getModuleCount() {
        return this.moduleCount;
    },
    make: function make() {
        this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for (var row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);
            for (var col = 0; col < this.moduleCount; col++) {
                this.modules[row][col] = null;
            }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this.typeNumber >= 7) {
            this.setupTypeNumber(test);
        }
        if (this.dataCache == null) {
            this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        }
        this.mapData(this.dataCache, maskPattern);
    },
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
        for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r) continue;
            for (var c = -1; c <= 7; c++) {
                if (col + c <= -1 || this.moduleCount <= col + c) continue;
                if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                    this.modules[row + r][col + c] = true;
                } else {
                    this.modules[row + r][col + c] = false;
                }
            }
        }
    },
    getBestMaskPattern: function getBestMaskPattern() {
        var minLostPoint = 0;
        var pattern = 0;
        for (var i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(this);
            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }
        return pattern;
    },
    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for (var row = 0; row < this.modules.length; row++) {
            var y = row * cs;
            for (var col = 0; col < this.modules[row].length; col++) {
                var x = col * cs;
                var dark = this.modules[row][col];
                if (dark) {
                    qr_mc.beginFill(0, 100);
                    qr_mc.moveTo(x, y);
                    qr_mc.lineTo(x + cs, y);
                    qr_mc.lineTo(x + cs, y + cs);
                    qr_mc.lineTo(x, y + cs);
                    qr_mc.endFill();
                }
            }
        }
        return qr_mc;
    },
    setupTimingPattern: function setupTimingPattern() {
        for (var r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
                continue;
            }
            this.modules[r][6] = r % 2 == 0;
        }
        for (var c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
                continue;
            }
            this.modules[6][c] = c % 2 == 0;
        }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for (var i = 0; i < pos.length; i++) {
            for (var j = 0; j < pos.length; j++) {
                var row = pos[i];
                var col = pos[j];
                if (this.modules[row][col] != null) {
                    continue;
                }
                for (var r = -2; r <= 2; r++) {
                    for (var c = -2; c <= 2; c++) {
                        if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                            this.modules[row + r][col + c] = true;
                        } else {
                            this.modules[row + r][col + c] = false;
                        }
                    }
                }
            }
        }
    },
    setupTypeNumber: function setupTypeNumber(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (var i = 0; i < 18; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        }
        for (var i = 0; i < 18; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
        }
    },
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
        var data = this.errorCorrectLevel << 3 | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for (var i = 0; i < 15; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            if (i < 6) {
                this.modules[i][8] = mod;
            } else if (i < 8) {
                this.modules[i + 1][8] = mod;
            } else {
                this.modules[this.moduleCount - 15 + i][8] = mod;
            }
        }
        for (var i = 0; i < 15; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            if (i < 8) {
                this.modules[8][this.moduleCount - i - 1] = mod;
            } else if (i < 9) {
                this.modules[8][15 - i - 1 + 1] = mod;
            } else {
                this.modules[8][15 - i - 1] = mod;
            }
        }
        this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function mapData(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) col--;
            while (true) {
                for (var c = 0; c < 2; c++) {
                    if (this.modules[row][col - c] == null) {
                        var dark = false;
                        if (byteIndex < data.length) {
                            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                        }
                        var mask = QRUtil.getMask(maskPattern, row, col - c);
                        if (mask) {
                            dark = !dark;
                        }
                        this.modules[row][col - c] = dark;
                        bitIndex--;
                        if (bitIndex == -1) {
                            byteIndex++;
                            bitIndex = 7;
                        }
                    }
                }
                row += inc;
                if (row < 0 || this.moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                }
            }
        }
    }
};
QRCodeModel.PAD0 = 0xEC;
QRCodeModel.PAD1 = 0x11;
QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
    }
    var totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
    }
    while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
        }
        buffer.put(QRCodeModel.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
        }
        buffer.put(QRCodeModel.PAD1, 8);
    }
    return QRCodeModel.createBytes(buffer, rsBlocks);
};
QRCodeModel.createBytes = function (buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
            dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
    }
    var totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
        totalCodeCount += rsBlocks[i].totalCount;
    }
    var data = new Array(totalCodeCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
            if (i < dcdata[r].length) {
                data[index++] = dcdata[r][i];
            }
        }
    }
    for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
            if (i < ecdata[r].length) {
                data[index++] = ecdata[r][i];
            }
        }
    }
    return data;
};
var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
};
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
var QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    getBCHTypeInfo: function getBCHTypeInfo(data) {
        var d = data << 10;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
        }
        return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(data) {
        var d = data << 12;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
        }
        return data << 12 | d;
    },
    getBCHDigit: function getBCHDigit(data) {
        var digit = 0;
        while (data != 0) {
            digit++;
            data >>>= 1;
        }
        return digit;
    },
    getPatternPosition: function getPatternPosition(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function getMask(maskPattern, i, j) {
        switch (maskPattern) {
            case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return i % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return j % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return i * j % 2 + i * j % 3 == 0;
            case QRMaskPattern.PATTERN110:
                return (i * j % 2 + i * j % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return (i * j % 3 + (i + j) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + maskPattern);
        }
    },
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
        var a = new QRPolynomial([1], 0);
        for (var i = 0; i < errorCorrectLength; i++) {
            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
        }
        return a;
    },
    getLengthInBits: function getLengthInBits(mode, type) {
        if (1 <= type && type < 10) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + mode);
            }
        } else if (type < 27) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + mode);
            }
        } else if (type < 41) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + mode);
            }
        } else {
            throw new Error("type:" + type);
        }
    },
    getLostPoint: function getLostPoint(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var dark = qrCode.isDark(row, col);
                for (var r = -1; r <= 1; r++) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue;
                    }
                    for (var c = -1; c <= 1; c++) {
                        if (col + c < 0 || moduleCount <= col + c) {
                            continue;
                        }
                        if (r == 0 && c == 0) {
                            continue;
                        }
                        if (dark == qrCode.isDark(row + r, col + c)) {
                            sameCount++;
                        }
                    }
                }
                if (sameCount > 5) {
                    lostPoint += 3 + sameCount - 5;
                }
            }
        }
        for (var row = 0; row < moduleCount - 1; row++) {
            for (var col = 0; col < moduleCount - 1; col++) {
                var count = 0;
                if (qrCode.isDark(row, col)) count++;
                if (qrCode.isDark(row + 1, col)) count++;
                if (qrCode.isDark(row, col + 1)) count++;
                if (qrCode.isDark(row + 1, col + 1)) count++;
                if (count == 0 || count == 4) {
                    lostPoint += 3;
                }
            }
        }
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount - 6; col++) {
                if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
                    lostPoint += 40;
                }
            }
        }
        for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount - 6; row++) {
                if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
                    lostPoint += 40;
                }
            }
        }
        var darkCount = 0;
        for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount; row++) {
                if (qrCode.isDark(row, col)) {
                    darkCount++;
                }
            }
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    }
};
var QRMath = {
    glog: function glog(n) {
        if (n < 1) {
            throw new Error("glog(" + n + ")");
        }
        return QRMath.LOG_TABLE[n];
    },
    gexp: function gexp(n) {
        while (n < 0) {
            n += 255;
        }
        while (n >= 256) {
            n -= 255;
        }
        return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
function QRPolynomial(num, shift) {
    if (num.length == undefined) {
        throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
        offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
        this.num[i] = num[i + offset];
    }
}
QRPolynomial.prototype = {
    get: function get(index) {
        return this.num[index];
    },
    getLength: function getLength() {
        return this.num.length;
    },
    multiply: function multiply(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for (var i = 0; i < this.getLength(); i++) {
            for (var j = 0; j < e.getLength(); j++) {
                num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
            }
        }
        return new QRPolynomial(num, 0);
    },
    mod: function mod(e) {
        if (this.getLength() - e.getLength() < 0) {
            return this;
        }
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for (var i = 0; i < this.getLength(); i++) {
            num[i] = this.get(i);
        }
        for (var i = 0; i < e.getLength(); i++) {
            num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        return new QRPolynomial(num, 0).mod(e);
    }
};
function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
}
QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var list = [];
    for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
            list.push(new QRRSBlock(totalCount, dataCount));
        }
    }
    return list;
};
QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
            return undefined;
    }
};
function QRBitBuffer() {
    this.buffer = [];
    this.length = 0;
}
QRBitBuffer.prototype = {
    get: function get(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function put(num, length) {
        for (var i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) == 1);
        }
    },
    getLengthInBits: function getLengthInBits() {
        return this.length;
    },
    putBit: function putBit(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }
        this.length++;
    }
};
var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function _isSupportCanvas() {
    return typeof CanvasRenderingContext2D != "undefined";
}
// android 2.x doesn't support Data-URI spec
function _getAndroid() {
    var android = false;
    var sAgent = navigator.userAgent;
    if (/android/i.test(sAgent)) {
        // android
        android = true;
        var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
        if (aMat && aMat[1]) {
            android = parseFloat(aMat[1]);
        }
    }
    return android;
}
var svgDrawer = function () {
    var Drawing = function Drawing(el, htOption) {
        this._el = el;
        this._htOption = htOption;
    };
    Drawing.prototype.draw = function (oQRCode) {
        var _htOption = this._htOption;
        var _el = this._el;
        var nCount = oQRCode.getModuleCount();
        var nWidth = Math.floor(_htOption.width / nCount);
        var nHeight = Math.floor(_htOption.height / nCount);
        this.clear();
        function makeSVG(tag, attrs) {
            var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
            for (var k in attrs) {
                if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
            }return el;
        }
        var svg = makeSVG("svg", {
            'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),
            'width': '100%',
            'height': '100%',
            'fill': _htOption.colorLight
        });
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        _el.appendChild(svg);
        svg.appendChild(makeSVG("rect", {
            "fill": _htOption.colorLight,
            "width": "100%",
            "height": "100%"
        }));
        svg.appendChild(makeSVG("rect", {
            "fill": _htOption.colorDark,
            "width": "1",
            "height": "1",
            "id": "template"
        }));
        for (var row = 0; row < nCount; row++) {
            for (var col = 0; col < nCount; col++) {
                if (oQRCode.isDark(row, col)) {
                    var child = makeSVG("use", {
                        "x": String(col),
                        "y": String(row)
                    });
                    child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
                    svg.appendChild(child);
                }
            }
        }
    };
    Drawing.prototype.clear = function () {
        while (this._el.hasChildNodes()) {
            this._el.removeChild(this._el.lastChild);
        }
    };
    return Drawing;
}();
var useSVG = document.documentElement.tagName.toLowerCase() === "svg";
// Drawing in DOM by using Table tag
var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? function () {
    var Drawing = function Drawing(el, htOption) {
        this._el = el;
        this._htOption = htOption;
    };
    /**
     * Draw the QRCode
     *
     * @param {QRCode} oQRCode
     */
    Drawing.prototype.draw = function (oQRCode) {
        var _htOption = this._htOption;
        var _el = this._el;
        var nCount = oQRCode.getModuleCount();
        var nWidth = Math.floor(_htOption.width / nCount);
        var nHeight = Math.floor(_htOption.height / nCount);
        var aHTML = ['<table style="border:0;border-collapse:collapse;">'];
        for (var row = 0; row < nCount; row++) {
            aHTML.push('<tr>');
            for (var col = 0; col < nCount; col++) {
                aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
            }
            aHTML.push('</tr>');
        }
        aHTML.push('</table>');
        _el.innerHTML = aHTML.join('');
        // Fix the margin values as real size.
        var elTable = _el.childNodes[0];
        var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
        var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
        if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
            elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
        }
    };
    /**
     * Clear the QRCode
     */
    Drawing.prototype.clear = function () {
        this._el.innerHTML = '';
    };
    return Drawing;
}() : function () {
    // Drawing in Canvas
    function _onMakeImage() {
        this._elImage.src = this._elCanvas.toDataURL("image/png");
        this._elImage.style.display = "block";
        this._elCanvas.style.display = "none";
    }
    /**
     * Check whether the user's browser supports Data URI or not
     *
     * @private
     * @param {Function} fSuccess Occurs if it supports Data URI
     * @param {Function} fFail Occurs if it doesn't support Data URI
     */
    function _safeSetDataURI(fSuccess, fFail) {
        var self = this;
        self._fFail = fFail;
        self._fSuccess = fSuccess;
        // Check it just once
        if (self._bSupportDataURI === null) {
            var el = document.createElement("img");
            var fOnError = function fOnError() {
                self._bSupportDataURI = false;
                if (self._fFail) {
                    self._fFail.call(self);
                }
            };
            var fOnSuccess = function fOnSuccess() {
                self._bSupportDataURI = true;
                if (self._fSuccess) {
                    self._fSuccess.call(self);
                }
            };
            el.onabort = fOnError;
            el.onerror = fOnError;
            el.onload = fOnSuccess;
            el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
            return;
        } else if (self._bSupportDataURI === true && self._fSuccess) {
            self._fSuccess.call(self);
        } else if (self._bSupportDataURI === false && self._fFail) {
            self._fFail.call(self);
        }
    };
    /**
     * Drawing QRCode by using canvas
     *
     * @constructor
     * @param {HTMLElement} el
     * @param {Object} htOption QRCode Options
     */
    var Drawing = function Drawing(el, htOption) {
        this._bIsPainted = false;
        this._android = _getAndroid();
        this._htOption = htOption;
        this._elCanvas = document.createElement("canvas");
        this._elCanvas.width = htOption.width;
        this._elCanvas.height = htOption.height;
        el.appendChild(this._elCanvas);
        this._el = el;
        this._oContext = this._elCanvas.getContext("2d");
        this._bIsPainted = false;
        this._elImage = document.createElement("img");
        this._elImage.alt = "Scan me!";
        this._elImage.style.display = "none";
        this._el.appendChild(this._elImage);
        this._bSupportDataURI = null;
    };
    /**
     * Draw the QRCode
     *
     * @param {QRCode} oQRCode
     */
    Drawing.prototype.draw = function (oQRCode) {
        var _elImage = this._elImage;
        var _oContext = this._oContext;
        var _htOption = this._htOption;
        var nCount = oQRCode.getModuleCount();
        var nWidth = _htOption.width / nCount;
        var nHeight = _htOption.height / nCount;
        var nRoundedWidth = Math.round(nWidth);
        var nRoundedHeight = Math.round(nHeight);
        _elImage.style.display = "none";
        this.clear();
        for (var row = 0; row < nCount; row++) {
            for (var col = 0; col < nCount; col++) {
                var bIsDark = oQRCode.isDark(row, col);
                var nLeft = col * nWidth;
                var nTop = row * nHeight;
                _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                _oContext.lineWidth = 1;
                _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                _oContext.fillRect(nLeft, nTop, nWidth, nHeight);
                // 안티 앨리어싱 방지 처리
                _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);
                _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
            }
        }
        this._bIsPainted = true;
    };
    /**
     * Make the image from Canvas if the browser supports Data URI.
     */
    Drawing.prototype.makeImage = function () {
        if (this._bIsPainted) {
            _safeSetDataURI.call(this, _onMakeImage);
        }
    };
    /**
     * Return whether the QRCode is painted or not
     *
     * @return {Boolean}
     */
    Drawing.prototype.isPainted = function () {
        return this._bIsPainted;
    };
    /**
     * Clear the QRCode
     */
    Drawing.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
        this._bIsPainted = false;
    };
    /**
     * @private
     * @param {Number} nNumber
     */
    Drawing.prototype.round = function (nNumber) {
        if (!nNumber) {
            return nNumber;
        }
        return Math.floor(nNumber * 1000) / 1000;
    };
    return Drawing;
}();
/**
 * Get the type by string length
 *
 * @private
 * @param {String} sText
 * @param {Number} nCorrectLevel
 * @return {Number} type
 */
function _getTypeNumber(sText, nCorrectLevel) {
    var nType = 1;
    var length = _getUTF8Length(sText);
    for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
        var nLimit = 0;
        switch (nCorrectLevel) {
            case QRErrorCorrectLevel.L:
                nLimit = QRCodeLimitLength[i][0];
                break;
            case QRErrorCorrectLevel.M:
                nLimit = QRCodeLimitLength[i][1];
                break;
            case QRErrorCorrectLevel.Q:
                nLimit = QRCodeLimitLength[i][2];
                break;
            case QRErrorCorrectLevel.H:
                nLimit = QRCodeLimitLength[i][3];
                break;
        }
        if (length <= nLimit) {
            break;
        } else {
            nType++;
        }
    }
    if (nType > QRCodeLimitLength.length) {
        throw new Error("Too long data");
    }
    return nType;
}
function _getUTF8Length(sText) {
    var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
    return replacedText.length + (replacedText.length != sText ? 3 : 0);
}
/**
 * @class QRCode
 * @constructor
 * @example
 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
 *
 * @example
 * var oQRCode = new QRCode("test", {
 *    text : "http://naver.com",
 *    width : 128,
 *    height : 128
 * });
 *
 * oQRCode.clear(); // Clear the QRCode.
 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
 *
 * @param {HTMLElement|String} el target element or 'id' attribute of element.
 * @param {Object|String} vOption
 * @param {String} vOption.text QRCode link data
 * @param {Number} [vOption.width=256]
 * @param {Number} [vOption.height=256]
 * @param {String} [vOption.colorDark="#000000"]
 * @param {String} [vOption.colorLight="#ffffff"]
 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
 */
QRCode = function QRCode(el, vOption) {
    this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRErrorCorrectLevel.H
    };
    if (typeof vOption === 'string') {
        vOption = {
            text: vOption
        };
    }
    // Overwrites options
    if (vOption) {
        for (var i in vOption) {
            this._htOption[i] = vOption[i];
        }
    }
    if (typeof el == "string") {
        el = document.getElementById(el);
    }
    if (this._htOption.useSVG) {
        Drawing = svgDrawer;
    }
    this._android = _getAndroid();
    this._el = el;
    this._oQRCode = null;
    this._oDrawing = new Drawing(this._el, this._htOption);
    if (this._htOption.text) {
        this.makeCode(this._htOption.text);
    }
};
/**
 * Make the QRCode
 *
 * @param {String} sText link data
 */
QRCode.prototype.makeCode = function (sText) {
    this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
    this._oQRCode.addData(sText);
    this._oQRCode.make();
    this._el.title = sText;
    this._oDrawing.draw(this._oQRCode);
    this.makeImage();
};
/**
 * Make the Image from Canvas element
 * - It occurs automatically
 * - Android below 3 doesn't support Data-URI spec.
 *
 * @private
 */
QRCode.prototype.makeImage = function () {
    if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
        this._oDrawing.makeImage();
    }
};
/**
 * Clear the QRCode
 */
QRCode.prototype.clear = function () {
    this._oDrawing.clear();
};
/**
 * @name QRCode.CorrectLevel
 */
QRCode.CorrectLevel = QRErrorCorrectLevel;

exports.default = QRCode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(window.WebViewJavascriptBridge);
        }, false);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    if (window.PageInfo.isApp) {
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe);
        }, 0);
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=../sourceMap/js/mercury-card.js.map