/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index/app.js":
/*!**********************!*\
  !*** ./index/app.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_6_3_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js */ \"https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_6_3_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__]);\n([https_www_gstatic_com_firebasejs_9_6_3_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n\r\n  apiKey: \"AIzaSyA-3s7IKA1ruwHg9MNf-lhtzY-chy4wbu4\",\r\n\r\n  authDomain: \"wakenya-tujibebe-party.firebaseapp.com\",\r\n\r\n  projectId: \"wakenya-tujibebe-party\",\r\n\r\n  storageBucket: \"wakenya-tujibebe-party.appspot.com\",\r\n\r\n  messagingSenderId: \"355806812974\",\r\n\r\n  appId: \"1:355806812974:web:fb001c145c2994175838bf\",\r\n\r\n  measurementId: \"G-JKT9NG1Q8L\"\r\n\r\n};\r\n\r\n\r\n\r\n// FORM FILEDS\r\nconst surname = document.getElementById('surname')\r\nconst othernames = document.getElementById('othernames')\r\nconst nationalid = document.getElementById('nationalid')\r\nconst email = document.getElementById('email')\r\nconst county = document.getElementById('county')\r\nconst required = document.querySelectorAll('#required')\r\nconst formbtn = document.getElementById('formbutton')\r\nconst modal= document.getElementById('modal')\r\nconst burgermenu = document.getElementById('burger')\r\nconst mobilemenu = document.getElementById('mobile')\r\n\r\nconst links = document.querySelectorAll('#links')\r\n\r\n// QUERY SELECTORS\r\nconst values_section=document.querySelectorAll('.title');\r\nconst cards =document.querySelectorAll('.card')\r\n\r\nconst animationcard = document.querySelectorAll('#cardanim')\r\nconst form = document.querySelector('#form')\r\nconst formtext = document.querySelector('#formtext');\r\n\r\n//firebase\r\n(0,https_www_gstatic_com_firebasejs_9_6_3_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst db = (0,https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getFirestore)()\r\nconst memberscollection =(0,https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db,'members')\r\n\r\n\r\nasync function  retrievedata(){\r\n\r\n    try {\r\n        const snapshot = await (0,https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getDocs)(memberscollection)\r\n        snapshot.forEach(doc=>{\r\n            console.log('retrieved data: ',doc.data())\r\n        \r\n            })\r\n        \r\n    } catch (error) {\r\n    console.log('firebase read error: ',error)\r\n\r\n        \r\n    }\r\n\r\n}\r\nretrievedata()\r\n\r\n\r\n\r\n\r\nfunction  formvalue (){\r\n//    surname.value='hello'\r\n//    console.log('surname: ',surname.value)\r\n    if(surname.value.trim()===''){\r\n\r\n\r\n \r\n        required[0].classList.remove('hidden')\r\n        \r\n    \r\n    }else{ required[0].classList.add('hidden') }\r\n    if(othernames.value.trim()===''){\r\n        required[1].classList.remove('hidden')\r\n \r\n        \r\n        \r\n    }else{ required[1].classList.add('hidden') }\r\n    if(nationalid.value.trim()===''){\r\n        required[2].classList.remove('hidden')\r\n \r\n        \r\n        \r\n    }else{ required[2].classList.add('hidden') }\r\n    if(email.value.trim()===''){\r\n        required[3].classList.remove('hidden')\r\n \r\n        \r\n        \r\n    }else{ required[3].classList.add('hidden') }\r\n    if(county.value==='select your county'){\r\n        required[4].classList.remove('hidden')\r\n \r\n    \r\n    }else{ required[4].classList.add('hidden') }\r\n\r\n\r\n    if(surname.value.trim()===''||othernames.value.trim()===''||nationalid.value.trim()===''||email.value.trim()===''||county.value==='select your county') return;\r\n\r\n    const data ={\r\n        surname:surname.value,\r\n        othernames:othernames.value,\r\n        nationalid:parseInt(nationalid.value),\r\n        email:email.value,\r\n        county:county.value\r\n\r\n\r\n    }\r\n    console.log('form validation complete',data)\r\n    postform(data)\r\n\r\n}\r\n\r\nasync function postform(formval){\r\n\r\n    const spinner = document.getElementById('spinner')\r\n    const submitting = document.getElementById('formsubmitting')\r\n    const submitted = document.getElementById('formsubmitted')\r\n    try {\r\n\r\n        modal.classList.remove('hidden')\r\n        modal.classList.add('flex')\r\nawait  (0,https_www_gstatic_com_firebasejs_9_6_3_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.addDoc)(memberscollection,formval)\r\n\r\nspinner.classList.add('hidden')\r\nsubmitting.classList.add('hidden')\r\nsubmitted.classList.remove('hidden')\r\n\r\nsurname.value=''\r\nothernames.value=''\r\nemail.value=''\r\nnationalid.value=''\r\ncounty.value='select your county'\r\n\r\nsetTimeout(() => {\r\n    console.log('timmer function ')\r\n modal.classList.add('hidden')\r\n modal.classList.remove('flex')\r\n\r\n spinner.classList.remove('hidden')\r\nsubmitting.classList.remove('hidden')\r\nsubmitted.classList.add('hidden')\r\n\r\n    \r\n}, 2000);\r\n        \r\n    } catch (error) {\r\n\r\n        console.log('firebase write error: ',error)\r\n\r\n        \r\n    }\r\n}\r\n\r\n\r\n    // console.log('email: ',email.value)\r\n\r\n\r\n    //FORM BUTTON SUBMIT\r\n\r\n    formbtn.addEventListener(\"click\",()=>{\r\n        formvalue()\r\n    })\r\n\r\n    burgermenu.addEventListener(\"click\",()=>{\r\n        console.log('menu clicked')\r\n        mobilemenu.classList.toggle('hidden')\r\n        mobilemenu.classList.toggle('flex')\r\n    })\r\n\r\n    console.log(links);\r\n\r\n    links.forEach(link=>{\r\n\r\n        link.addEventListener('click',()=>{\r\n            console.log('links beingclicked')\r\n            \r\n            mobilemenu.classList.remove('flex')\r\n            mobilemenu.classList.add('hidden')\r\n    \r\n    \r\n        })\r\n    \r\n\r\n    })\r\n  \r\n \r\nconst cardobserver = new IntersectionObserver(cards=>\r\n    {\r\n   cards.forEach(fstcard=>{\r\n\r\n    if (fstcard.isIntersecting) {\r\n        \r\n        fstcard.target.classList.add('cardanimation' );\r\n    }\r\n     \r\n   })\r\n\r\n             \r\n   \r\n        \r\n    })\r\n\r\n        animationcard.forEach(card=>{\r\n            // console.log('cards: ',card)\r\n            cardobserver.observe(card)\r\n        })\r\n        \r\n   \r\n\r\n const formobserver=new IntersectionObserver(forms=>{\r\n   const  form=forms[0]\r\n         if(form.isIntersecting){\r\n             form.target.classList.add('formanimation')\r\n         }\r\n     \r\n })\r\nformobserver.observe(form);\r\n\r\n\r\n\r\nconst formtextobserver = new IntersectionObserver(ftext=>{\r\n    const textform =ftext[0]\r\n    if(textform.isIntersecting){\r\n        textform.target.classList.add('formtextanimaton')\r\n    }\r\n})\r\n\r\nformtextobserver.observe(formtext)\r\n\r\n \r\n    const titleobserver=new IntersectionObserver(entries=>{\r\n   \r\n\r\n        entries.forEach(valuestitle=>{\r\n \r\n       \r\n             if (valuestitle.isIntersecting) {\r\n               \r\n                 valuestitle.target.classList.add('animate-fade-in-left');\r\n   \r\n\r\n             }\r\n\r\n           })\r\n  \r\n    })\r\n    \r\n    values_section.forEach(titlez=>{\r\n\r\n        titleobserver.observe(titlez);\r\n    })\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://tujibebe_party/./index/app.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index/app.js");
/******/ 	
/******/ })()
;