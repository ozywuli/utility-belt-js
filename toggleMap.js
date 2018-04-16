let toggleMap = {
    isToggled: false,
    selectors: {
        $mapSidebar: $('.map-sidebar'),
        mapSidebarMap: '.js-map-sidebar-map'.
        mapSidebarContent: '.js-map-sidebar-content',
        mapSidebarControls: '.js-map-sidebar-controls'
    },
    initToggleEventBinder(map, cb) {
        $('.js-map-sidebar-toggle').on('click', toggleMap.toggleEvent.bind(this, map, cb));
    },
    toggleEvent(map, cb) {
        toggleMap.toggle(map);
        cb();
    },
    toggle(map, cb) {
        if (!toggleMap.isToggled) {
            toggleMap.selectors.$mapSidebar.addClass('is-toggled');
            $(toggleMap.selectors.mapSidebarMap).css('height', '100%');
            $(toggleMap.selectors.mapSidebarContent).css('display', 'none');
            $(toggleMap.selectors.mapSidebarControls).css({
                'position': 'fixed',
                'top': 'auto',
                'bottom': 0
            });
            toggleMap.isToggled = true;
        } else {
            toggleMap.selectors.$mapSidebar.removeClass('is-toggled');
            $(`${toggleMap.selectors.mapSidebarMap}, ${toggleMap.selectors.mapSidebarContent}, ${toggleMap.selectors.mapSidebarControls}`).removeAttr('style');
            toggleMap.isToggled = false;
        }

        // // Resize the map
        map.resize();

        return toggleMap.isToggled;
    }
}

export default toggleMap;
