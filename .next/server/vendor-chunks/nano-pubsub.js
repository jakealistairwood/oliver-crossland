"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/dist/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/nano-pubsub/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPubSub)\n/* harmony export */ });\nfunction createPubSub() {\n    var subscribers = Object.create(null);\n    var nextId = 0;\n    function subscribe(subscriber) {\n        var id = nextId++;\n        subscribers[id] = subscriber;\n        return function unsubscribe() {\n            delete subscribers[id];\n        };\n    }\n    function publish(event) {\n        for(var id in subscribers){\n            subscribers[id](event);\n        }\n    }\n    return {\n        publish: publish,\n        subscribe: subscribe\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBO0lBQ3BCLElBQUlDLGNBQWNDLE9BQU9DLE1BQU0sQ0FBQztJQUNoQyxJQUFJQyxTQUFTO0lBQ2IsU0FBU0MsVUFBVUMsVUFBVTtRQUN6QixJQUFJQyxLQUFLSDtRQUNUSCxXQUFXLENBQUNNLEdBQUcsR0FBR0Q7UUFDbEIsT0FBTyxTQUFTRTtZQUNaLE9BQU9QLFdBQVcsQ0FBQ00sR0FBRztRQUMxQjtJQUNKO0lBQ0EsU0FBU0UsUUFBUUMsS0FBSztRQUNsQixJQUFLLElBQUlILE1BQU1OLFlBQWE7WUFDeEJBLFdBQVcsQ0FBQ00sR0FBRyxDQUFDRztRQUNwQjtJQUNKO0lBQ0EsT0FBTztRQUNIRCxTQUFTQTtRQUNUSixXQUFXQTtJQUNmO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbGktY3Jvc3NsYW5kLXZpZGVvZ3JhcGh5Ly4vbm9kZV9tb2R1bGVzL25hbm8tcHVic3ViL2Rpc3QvZXNtL2luZGV4LmpzPzI1ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHViU3ViKCkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIG5leHRJZCA9IDA7XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dElkKys7XG4gICAgICAgIHN1YnNjcmliZXJzW2lkXSA9IHN1YnNjcmliZXI7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdWJzY3JpYmVyc1tpZF07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgaWQgaW4gc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzW2lkXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaDogcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVQdWJTdWIiLCJzdWJzY3JpYmVycyIsIk9iamVjdCIsImNyZWF0ZSIsIm5leHRJZCIsInN1YnNjcmliZSIsInN1YnNjcmliZXIiLCJpZCIsInVuc3Vic2NyaWJlIiwicHVibGlzaCIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/dist/esm/index.js\n");

/***/ })

};
;