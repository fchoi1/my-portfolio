exports.id = "component---src-pages-contact-index-js";
exports.ids = ["component---src-pages-contact-index-js"];
exports.modules = {

/***/ "./src/components/ContactForm/index.js":
/*!*********************************************!*\
  !*** ./src/components/ContactForm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contactform_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactform.css */ "./src/components/ContactForm/contactform.css");
/* harmony import */ var _contactform_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contactform_css__WEBPACK_IMPORTED_MODULE_1__);



function ContactForm(props) {
  const {
    0: formState,
    1: setFormState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    message: ''
  });
  console.log(formState);

  const onNameChange = event => {
    setFormState({
      name: event.target.value
    });
  };

  const onEmailChange = event => {
    setFormState({
      email: event.target.value
    });
  };

  const onMessageChange = event => {
    setFormState({
      message: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    id: "contact-form",
    onSubmit: handleSubmit,
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    onChange: onNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    className: "form-control",
    "aria-describedby": "emailHelp",
    onChange: onEmailChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message"
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "form-control",
    rows: "5",
    onChange: onMessageChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./src/pages/Contact/index.js":
/*!************************************!*\
  !*** ./src/pages/Contact/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ContactForm */ "./src/components/ContactForm/index.js");
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.css */ "./src/pages/Contact/contact.css");
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_css__WEBPACK_IMPORTED_MODULE_2__);




function Contact(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "Contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-wrapper contact-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-container container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-title-wrapper section-name-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "contact-title section-name"
  }, "Contact Me!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-info-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "contact-title"
  }, "I am currently on the job market. Feel free to reach out to me about anything! If you have any questions or improvements I can make with this site!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ContactForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/ContactForm/contactform.css":
/*!****************************************************!*\
  !*** ./src/components/ContactForm/contactform.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Contact/contact.css":
/*!***************************************!*\
  !*** ./src/pages/Contact/contact.css ***!
  \***************************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-index-js.js.map