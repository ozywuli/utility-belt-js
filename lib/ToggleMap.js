'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ToggleMap;
function ToggleMap(userOptions) {
    var _this = this;

    /**
     * Default Options
     */
    var defaultOptions = {
        $mapSidebar: $('.map-sidebar'),
        mapSidebarMap: '.js-map-sidebar-map',
        mapSidebarContent: '.js-map-sidebar-content',
        mapSidebarControls: '.js-map-sidebar-controls'
    };

    /**
     * Merge user options with default options
     */
    var options = Object.assign(defaultOptions, userOptions);

    this.isToggled = false;

    this.initToggleEventBinder = function (map, cb) {
        $('.js-map-sidebar-toggle').on('click', _this.toggleEvent.bind(_this, map, cb));
    };
    this.toggleEvent = function (map, cb) {
        _this.toggle(map);
        if (cb) {
            cb();
        }
    };
    this.toggle = function (map, cb) {
        if (!_this.isToggled) {
            options.$mapSidebar.addClass('is-toggled');
            $(options.mapSidebarMap).css('height', '100%');
            $(options.mapSidebarContent).css('display', 'none');
            $(options.mapSidebarControls).css({
                'position': 'fixed',
                'top': 'auto',
                'bottom': 0
            });
            _this.isToggled = true;
        } else {
            options.$mapSidebar.removeClass('is-toggled');
            $(options.mapSidebarMap + ', ' + options.mapSidebarContent + ', ' + options.mapSidebarControls).removeAttr('style');
            _this.isToggled = false;
        }

        // // Resize the map
        map.resize();

        return _this.isToggled;
    };
}