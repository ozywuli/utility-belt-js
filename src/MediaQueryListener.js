import debounce from 'lodash/debounce';

var MQL = (function(parent, $) {
    let MediaQueryListener = function() {
        this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
        this.beforeElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':before') : false;
        this.currentBreakpoint = '';
        this.lastBreakpoint = '';
        this.init();
    }

    MediaQueryListener.prototype = {
        init: function() {
            if (!this.afterElement) {
                return;
            }

            this._resizeListener()
        },

        debounceHandler() {
            this.currentBreakpoint = this.afterElement.getPropertyValue('content').replace(/^["']|["']$/g, '');   this.currentBreakpointValue = this.beforeElement.getPropertyValue('content').replace(/^["']|["']$/g, '');


            if (this.currentBreakpoint !== this.lastBreakpoint) {
                $(window).trigger('breakpoint-change', [this.currentBreakpoint, this.currentBreakpointValue]);
                this.lastBreakpoint = this.currentBreakpoint;
            }
        },

        _resizeListener: function() {
            $(window).on('resize orientationchange load', debounce(this.debounceHandler.bind(this), 240));
        }
    };

    parent.mediaqueryListener = parent.mediaqueryListener || new MediaQueryListener();

    return parent;
})(MQL || {}, jQuery);

export default MQL;