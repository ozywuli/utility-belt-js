"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};