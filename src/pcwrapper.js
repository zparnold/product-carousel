/**
 * Created by zach on 12/16/15.
 */
    $.fn.PCWrapper = function(opts) {

        var $frame  = $(this);
        var $slidee = $(".slidee");
        var $item = $slidee.children();
        var $wrap   = $frame.parent();

        //let's use the default:
        if (opts == null){

            var defaultOpts = {
                horizontal: 1,
                itemNav: 'basic',
                slidee: $slidee,
                smart: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 0.2,
                startAt: 0,
                scrollBar: $wrap.find('.scrollbar'),
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
                displayScrollbar: true,
                animateTransition: true,
                animationSpeed: 500,
                displayDots: true,
                dotsClass: "",
                rtl: false,
                scrollBlockOrItem: 'block'
            }

            //Here we go!
            $frame.pc(defaultOpts);


        }
        //they've manually set some settings
        else{

            var settings = {
                //defaults
                horizontal: 1,
                itemNav: 'basic',
                slidee: $slidee,
                smart: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 0.2,
                startAt: 0,
                scrollBar: $wrap.find('.scrollbar'),
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
                displayScrollbar: true,
                animateTransition: true,
                animationSpeed: 500,
                displayDots: true,
                dotsClass: "",
                rtl: false,
                scrollBlockOrItem: 'block'
            };

            //set all non standard options first:
            //item width
            if (opts['maxItemWidth']){
                $item.css("max-width", opts["maxItemWidth"]);
            }
            //We want to handle the case if the item width exists and mobile screen size doesn't exist
            if (opts['mobileScreenSize']){
                if (opts['maxMobileItemWidth']){
                    if ($(window).width() < parseInt(opts['mobileScreenSize'])) {
                        $item.css("max-width",opts["maxMobileItemWidth"]);
                    }
                    else{
                        $item.css("max-width", "initial");
                    }
                }
            }
            //ARROW DISPLAY
            if(opts['arrowClass']){
                $wrap.find('.prevPage').addClass(opts['arrowClass']);
                $wrap.find('.nextPage').addClass(opts['arrowClass']);
            }
            //REMOVE ARROWS
            if(opts['displayArrows'] == false){
                delete settings['nextPage'];
                delete settings['prevPage'];
                $wrap.find('.prevPage').css("display","none");
                $wrap.find('.nextPage').css("display","none");
            }
            //REMOVE SCROLLBAR
            if(opts['displayScrollbar'] == false){
                delete settings['scrollBar'];
                $wrap.find('.scrollbar').css("display","none");
            }
            //TRANSITION ANIMATION
            if(opts['animateTransition'] == false){
                delete settings['animateTransition'];
                settings['speed'] = 0;
            }
            //TRANSITION SPEED
            if(opts['animateSpeed']){
                settings['speed'] = opts['animateSpeed'];
            }
            //DOTS
            if(opts['displayDots'] == false){
                delete settings['pagesBar'];
            }
            //DOTS CLASS
            if(opts['dotsClass']){
                $wrap.find('.pages').addClass(opts['dotsClass']);
            }
            //RIGHT TO LEFT
            if(opts['rtl'] == true){
                settings['startAt'] = $frame.width();
            }
            //SCROLL ITEMS OR BLOCK
            if(opts['scrollBlockOrItem'] == 'item'){
                delete settings['prevPage'];
                delete settings['nextPage'];
                settings['prev'] = $wrap.find('.prevPage');
                settings['next'] = $wrap.find('.nextPage')
            }


            $frame.pc(settings);
        }
        return this;
    };