function getBreakpoint(type) {
    return window.getComputedStyle(document.body)
    .getPropertyValue(`--${type}`)
    .replace(/["' ]/g, "");
}

export default getBreakpoint;