'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MQL = function (parent, $) {
    var MediaQueryListener = function MediaQueryListener() {
        this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
        this.beforeElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':before') : false;
        this.currentBreakpoint = '';
        this.lastBreakpoint = '';
        this.init();
    };

    MediaQueryListener.prototype = {
        init: function init() {
            if (!this.afterElement) {
                return;
            }

            this._resizeListener();
        },

        debounceHandler: function debounceHandler() {
            this.currentBreakpoint = this.afterElement.getPropertyValue('content').replace(/^["']|["']$/g, '');this.currentBreakpointValue = this.beforeElement.getPropertyValue('content').replace(/^["']|["']$/g, '');

            if (this.currentBreakpoint !== this.lastBreakpoint) {
                $(window).trigger('breakpoint-change', [this.currentBreakpoint, this.currentBreakpointValue]);
                this.lastBreakpoint = this.currentBreakpoint;
            }
        },


        _resizeListener: function _resizeListener() {
            $(window).on('resize orientationchange load', (0, _debounce2.default)(this.debounceHandler.bind(this), 240));
        }
    };

    parent.mediaqueryListener = parent.mediaqueryListener || new MediaQueryListener();

    return parent;
}(MQL || {}, jQuery);

exports.default = MQL;