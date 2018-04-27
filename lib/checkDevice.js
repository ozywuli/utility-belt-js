'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    isIOS: function isIOS() {
        return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    },
    isAndroid: function isAndroid() {},
    isTouch: function isTouch() {
        return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
};