/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('maimmm/flarum-ext-starrating', function () {
  console.log('[maimmm/flarum-ext-starrating] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/components/Stars.js":
/*!***************************************!*\
  !*** ./src/forum/components/Stars.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stars)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__);





// modified from https://github.com/kilowhat/flarum-ext-ratings/blob/master/js/src/forum/components/Stars.js
var Stars = /*#__PURE__*/function (_Component) {
  function Stars() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Stars, _Component);
  var _proto = Stars.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.tooltip = null; // Initialize a reference for Tooltip
  };
  _proto.view = function view() {
    var _this = this;
    return m('.Stars',
    // hoverToViewValueTooltip(optional): whether to show a tooltip when hovering over the stars to show the value
    m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
      text: this.attrs.hoverToViewValueTooltip ? this.attrs.value.toFixed(2) : '',
      position: 'bottom',
      onupdate: function onupdate(vnode) {
        // console.log(vnode)

        // if the value of the stars has changed, recreate the tooltip
        vnode.state.shouldRecreateTooltip = true;
      }
    }, m('.Stars',
    // Attributes passed to components are available throughout the class via this.attrs.
    // editable: whether the stars are clickable
    // size(optional): 'small' to make the stars smaller
    {
      className: "\n                    " + (this.attrs.editable ? 'editable' : '') + "  \n                    " + (this.attrs.size === 'small' ? 'smallStar' : '')
    }, [1, 2, 3, 4, 5].map(function (rating) {
      var stars = _this.attrs.value;
      var active = stars + 0.29 >= rating;
      var isHalf = rating - stars >= 0.39 && rating - stars < 0.71;
      // console.log(isHalf)
      // rating might be a float
      // if difference is 0-0.3, show same number of star
      // if difference is 0.4-0.6, show half star
      // if difference is 0.7-1, show next star
      return flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()("fa" + (active || isHalf ? 's' : 'r') + " fa-star" + (isHalf ? '-half-alt' : ''), {
        onclick: function onclick() {
          // if not editable, do nothing
          if (!_this.attrs.editable) {
            return;
          }
          // if click on the same star, set value to 0
          if (_this.attrs.value === rating) {
            _this.attrs.onchange(0);
          } else {
            _this.attrs.onchange(rating);
          }
        }
      });
    }))));
  };
  return Stars;
}((flarum_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Stars */ "./src/forum/components/Stars.js");
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/ReplyComposer */ "flarum/forum/components/ReplyComposer");
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/DiscussionHero */ "flarum/forum/components/DiscussionHero");
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/EditPostComposer */ "flarum/forum/components/EditPostComposer");
/* harmony import */ var flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8__);









flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('maimmm/flarum-ext-starrating', function () {
  // -------------------------------------------------------------------------
  // extend(ReplyComposer, 'initAttrs', function (_nothing, attrs) {
  //   attrs.rating = 3;
  // });

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'headerItems', function (items) {
    var _this = this;
    // Two restrictions fore rendering Stars components 
    // 1. discussion has either tag (Product Discussion) or (Bike Shed)
    // 2. author of the post has not rated the post yet

    var isProductDiscussion = this.attrs.discussion.tags().some(function (tag) {
      return tag.slug() === 'product-discussion';
    });
    var isBikeShed = this.attrs.discussion.tags().some(function (tag) {
      return tag.slug() === 'bike-shed';
    });

    // if failed to meet the restrictions, return without next check
    if (!isProductDiscussion && !isBikeShed) {
      return;
    }
    var posts = this.attrs.discussion.posts();
    var currentUserId = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session.user.id();

    // iterate throught posts, first make sure post isn't null or undefined,
    // then check post.data.attributes.maimmm_rating isn't 0
    // finally check post.data.relationships.user.data.id is equal to currentUserId
    var hasRated = posts.some(function (post) {
      return post && post.data.attributes.maimmm_rating !== 0 && post.data.relationships.user.data.id === currentUserId;
    });

    // if user has rated, return without rendering Stars component
    if (hasRated) {
      return;
    }

    // if user hasn't rated, render Stars component

    // ----------------------------------------------------------
    // if(isProductDiscussion){   

    items.add('stars', _components_Stars__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      value: this.rating,
      onchange: function onchange(value) {
        _this.rating = value;
      },
      editable: true
    }));
    // }
  });

  // data
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'data', function (data) {
    data.maimmm_rating = this.rating;
  });

  // -------------------------------------------------------------------------
  // COMMENT
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'headerItems', function (items) {
    var rating = this.attrs.post.attribute('maimmm_rating');
    if (rating) {
      items.add('stars', _components_Stars__WEBPACK_IMPORTED_MODULE_4__["default"].component({
        value: rating,
        editable: false,
        size: 'small'
      }));
    }
  });

  // -------------------------------------------------------------------------
  // EDIT COMPOSER
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default().prototype), 'headerItems', function (items) {
    var _this2 = this;
    // let rating = this.attrs.post.data.attributes.maimmm_rating;

    items.add('stars', _components_Stars__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      // if this.rating exists set to this.rating, else set to rating to this.attrs.post.data.attributes.maimmm_rating
      value: this.rating ? this.rating : this.attrs.post.data.attributes.maimmm_rating,
      onchange: function onchange(value) {
        _this2.rating = value;
      },
      editable: true
    }));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default().prototype), 'data', function (data) {
    data.maimmm_rating = this.rating;
  });
});

// -------------------------------------------------------------------------
// HEADER
(0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7___default().prototype), 'items', function (items) {
  var _this3 = this;
  // console.log(this)
  var rating = 0;
  var posts = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.all('posts').filter(function (post) {
    return post.discussion() === _this3.attrs.discussion;
  });
  var numOfZeroStarPost = 0;
  // add each post's data.attributes.maimmm_rating to rating and then divide by the number of posts
  posts.forEach(function (post) {
    if (post.data.attributes.maimmm_rating === 0) {
      numOfZeroStarPost++;
    }
    rating += post.data.attributes.maimmm_rating;
  });
  rating = rating / (posts.length - numOfZeroStarPost);

  // console.log(rating)
  if (rating) {
    items.add('stars', _components_Stars__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      value: rating,
      hoverToViewValueTooltip: true
    }));
  }
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/DiscussionHero":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionHero']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionHero'];

/***/ }),

/***/ "flarum/forum/components/EditPostComposer":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/EditPostComposer']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/EditPostComposer'];

/***/ }),

/***/ "flarum/forum/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderPrimary']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/forum/components/ReplyComposer":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ReplyComposer']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ReplyComposer'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map