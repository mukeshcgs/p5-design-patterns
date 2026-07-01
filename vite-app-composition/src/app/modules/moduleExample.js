
function AnimateBlocks(elem) {
    //Methods
    var init, bindResize, addStepClasses, resizeElements, debounce;

    // HTML Elems
    var $window = $(window);

    // Vars
    var xyz;

    init = function () {
        // Initialization
        bindResize();
        resizeElements();
        addStepClasses();
    }
    func1 = function () {
        $window.on('resize', func2(resizeElements, 250));
    }

    func2 = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    func3 = function () { }

    func4 = function () { }
    // Initialize
    init();
};