/**
 * Created by zach on 12/16/15.
 */
    $.fn.PCWrapper = function(opts) {

        var $frame  = $(this);
        var $slidee = $frame.children('ul').eq(0);
        var $wrap   = $frame.parent();

        //let's use the default:
        if (opts == null){
            var defaultOpts = {
                horizontal: 1,
                itemNav: 'basic',
                //slidee: $slidee,
                smart: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 0.2,
                startAt: 0,
                //scrollBar: $wrap.find('.scrollbar'),
                //scrollBy: 1,
                pagesBar: $wrap.find('.pages'),
                activatePageOn: 'click',
                speed: 1000,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                // Buttons
                prevPage: $wrap.find('.prevPage'),
                nextPage: $wrap.find('.nextPage'),

                //added options from original docs
                maxItemWidth: 200,
                mobileScreenSize: 320,
                maxMobileItemWidth: 100,
                arrowClass: "",
                displayArrows: true,
                displayScrollbar: false,
                displayDots: false,
                dotsClass: "",
                rtl: false
            }

            //Here we go!
            $frame.pc(defaultOpts);
        }
        else{

            var settings = {

                // Default settings
                item: '.product-item',
                maxItems: 'auto',
                maxItemWidth: 200,
                mobileScreenSize: 320,
                maxMobileItemWidth: 100,
                arrowClass: "",
                displayScrollbar: false,
                animateTransition: true,
                scrollBlockOrItem: 'item',
                rtl: false,
                dots: false,
                numberedDots: false,
                displayArrows: true,
                arrowPrevText: '',
                arrowNextText: '',
                animationSpeed: 500,
                mouseDrag: true,

                // Methods and callbacks
                onStart: function onStart() {},
                onEnd: function onEnd() {},
                onSlideStart: function onSlideStart() {},
                onSlideEnd: function onSlideEnd() {},
                onDragStart: function onDragStart() {},
                onDragEnd: function onDragEnd() {}
            };
        }
        return this;
    };