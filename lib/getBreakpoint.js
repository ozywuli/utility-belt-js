"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getBreakpoint(type) {
    return window.getComputedStyle(document.body).getPropertyValue("--" + type).replace(/["' ]/g, "");
}

exports.default = getBreakpoint;