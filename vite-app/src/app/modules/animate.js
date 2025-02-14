
function AnimateBlocks(elem) {
    //Methods
    var init, bindResize, addStepClasses, resizeElements, debounce;

    // Elems
    var $window = $(window);

    init = function () {
        // Initialization
        bindResize();
        resizeElements();
        addStepClasses();
    }
    bindResize = function () {
        $window.on('resize', debounce(resizeElements, 250));
    }

    debounce = function (func, wait, immediate) {
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
    resizeElements = function () {
        var heighest = 0;
        $('.block', '.block-wrap--vertical').each(function (item) {
            $(this).css('height', '');
            if ($(this).outerHeight() > heighest) {
                heighest = $(this).outerHeight();
            }
        });
        $('.block', '.block-wrap--vertical').css({ height: heighest });
    }

    addStepClasses = function () {
        if ($('.block-wrap--vertical').length) {
            var i = 1;
            $('.block-wrap--vertical').each(function () {
                if ((i % 2) != 1) {
                    $(this).addClass('stepped-block');
                }
                i++;
            });
        }
    }
    // Initialize
    init();
};