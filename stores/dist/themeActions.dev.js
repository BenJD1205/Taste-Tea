"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTheme = toggleTheme;
exports.toggleThemeFailure = exports.toggleThemeSuccess = exports.toggleThemeBegin = exports.TOGGLE_THEME_FAILURE = exports.TOGGLE_THEME_SUCCESS = exports.TOGGLE_THEME_BEGIN = void 0;

var _constants = require("../constants");

var TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN';
exports.TOGGLE_THEME_BEGIN = TOGGLE_THEME_BEGIN;
var TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS';
exports.TOGGLE_THEME_SUCCESS = TOGGLE_THEME_SUCCESS;
var TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE';
exports.TOGGLE_THEME_FAILURE = TOGGLE_THEME_FAILURE;

var toggleThemeBegin = function toggleThemeBegin() {
  return {
    type: TOGGLE_THEME_BEGIN
  };
};

exports.toggleThemeBegin = toggleThemeBegin;

var toggleThemeSuccess = function toggleThemeSuccess(selectedTheme) {
  return {
    type: TOGGLE_THEME_SUCCESS,
    payload: {
      selectedTheme: selectedTheme
    }
  };
};

exports.toggleThemeSuccess = toggleThemeSuccess;

var toggleThemeFailure = function toggleThemeFailure(error) {
  return {
    type: TOGGLE_THEME_FAILURE,
    payload: {
      error: error
    }
  };
};

exports.toggleThemeFailure = toggleThemeFailure;

function toggleTheme(themeType) {
  return function (dispatch) {
    dispatch(toggleThemeBegin());

    switch (themeType) {
      case 'dark':
        dispatch(toggleThemeSuccess(_constants.darkTheme));
        break;

      case 'light':
        dispatch(toggleThemeSuccess(_constants.lightTheme));
        break;

      default:
        dispatch(toggleThemeFailure({
          error: "Invalid theme type"
        }));
        break;
    }
  };
}