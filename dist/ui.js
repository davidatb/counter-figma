/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ui.js":
/*!***************!*\
  !*** ./ui.js ***!
  \***************/
/***/ (() => {

eval("// ui.js\n\nconsole.log('ui.js loaded'); // Agregar esta l�nea al comienzo de ui.js\n\n// Funci�n para recibir mensajes desde code.js\nfunction handleMessage(event) {\n  console.log('Message received from code.js:', event.data.pluginMessage); // Agregar esta l�nea\n  if (event.data.pluginMessage.type === 'update-counter') {\n    document.getElementById('counter').innerText = event.data.pluginMessage.payload;\n  }\n}\n\n// A�adir el evento \"message\" al objeto window para escuchar los mensajes\nwindow.addEventListener('message', handleMessage);\n\n// Este c�digo es necesario para que Figma sepa que el archivo ui.js se ha cargado correctamente\nparent.postMessage({\n  pluginMessage: {\n    type: 'ready'\n  }\n}, '*');\n\n//# sourceURL=webpack:///./ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ui.js"]();
/******/ 	
/******/ })()
;