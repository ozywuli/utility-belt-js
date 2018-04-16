export default function ToggleMap(userOptions) {
    /**
     * Default Options
     */
    let defaultOptions = {
        $mapSidebar: $('.map-sidebar'),
        mapSidebarMap: '.js-map-sidebar-map',
        mapSidebarContent: '.js-map-sidebar-content',
        mapSidebarControls: '.js-map-sidebar-controls'
    };

    /**
     * Merge user options with default options
     */
    let options = Object.assign(defaultOptions, userOptions);

    this.isToggled = false;

    this.initToggleEventBinder = (map, cb) => {
        $('.js-map-sidebar-toggle').on('click', this.toggleEvent.bind(this, map, cb));
    };
    this.toggleEvent = (map, cb) => {
        this.toggle(map);
        cb();
    };
    this.toggle = (map, cb) => {
        if (!this.isToggled) {
            options.$mapSidebar.addClass('is-toggled');
            $(options.mapSidebarMap).css('height', '100%');
            $(options.mapSidebarContent).css('display', 'none');
            $(options.mapSidebarControls).css({
                'position': 'fixed',
                'top': 'auto',
                'bottom': 0
            });
            this.isToggled = true;
        } else {
            options.$mapSidebar.removeClass('is-toggled');
            $(`${options.mapSidebarMap}, ${options.mapSidebarContent}, ${options.mapSidebarControls}`).removeAttr('style');
            this.isToggled = false;
        }

        // // Resize the map
        map.resize();

        return this.isToggled;
    };
}
