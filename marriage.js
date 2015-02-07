$(document).ready(function() {
    initScroll();
    initPages();
});

var initScroll = function() {

    var mouseWheelTimer;
    var scroll = 0;
    var holdOn = false;

    $(document).on('enable', function() {

        $(document).on('keyup', function(event) {
            var keyCode = event.keyCode;

            if (keyCode == '37' || keyCode == '38') {
                //up or left
                scroll = '-1';

                scrollFunction();
            }

            if (keyCode == '39' || keyCode == '40') {
                //right or down
                scroll = '1';

                scrollFunction();
            }
        });

        $(document).on('mousewheel DOMMouseScroll', function(e) {
            if (holdOn) {
                return false;
            }
            if (mouseWheelTimer) {
                clearTimeout(mouseWheelTimer);
            }

            mouseWheelTimer = setTimeout(function() {
                scrollFunction();
            }, 50);

            var scrollTo = 0;
            e.preventDefault();
            if (e.type == 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);

            } else if (e.type == 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }

            scroll = scroll + scrollTo;

        });

    });

    var index = 0;

    var positions = [];

    positions[0] = 5;
    positions[1] = 30;
    positions[2] = 60;
    positions[3] = 90;
    positions[4] = 120;
    positions[5] = 150;
    positions[6] = 180;

    var scrollFunction = function() {
        var direction;
        if (scroll < 0) {
            if (index > 0) {
                index = index - 1;
                direction = "left";
            }
        } else {
            if (index < (positions.length - 1)) {
                index = index + 1;
                direction = "right";
            }
        }

        scroll = 0;

        if (direction) {
            console.log('triggering' + positions[index] + ":" + direction);
            holdOn = true;
            $(document).trigger('scroll', [positions[index], direction]);
            holdOnTimer();
        }

    };

    var holdOnTimer = function() {
        setTimeout(function() {
            holdOn = false;
        }, 1000);
    }

    /*var index = 0;
    var oldIndex = -1;

    var min = 0;
    var max = 160;

    $(document).on('mousewheel DOMMouseScroll' , function(e){
      var scrollTo = 0;
      e.preventDefault();
      if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);

      }
      else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;

      }
      //$(this).scrollLeft(scrollTo + $(this).scrollLeft());

      var direction;
      if(scrollTo < 0){
        direction = "left";

        if(index != min){
          index = index - 1;
        }

      }else{
        direction = "right";
        if(index != max){
          index = index + 1;
        }
      }

      if(oldIndex != index){
        $(document).trigger('scroll' , [index ,  direction]);
      }

      oldIndex = index;


    });*/
};

var initPages = function() {
    var height = $(window).height();
    var width = $(window).width();

    var pages = $('.page');
    pages.width(width);
    pages.height(height);

    $('body').width(width * pages.length);

};

var Page = function(selector) {
    this.elem = $(selector);
    this._events = {};

    var self = this;
    $(document).on('scroll', function(event, index, direction) {
        self.trigger(index, direction);
    });

};

Page.prototype.trigger = function(name) {
    var callbacks = this._events[name] || [];

    var callbackArguments = Array.prototype.slice.call(arguments).splice(1, 1);

    for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, callbackArguments);
    }
};

Page.prototype.on = function(name, callback) {
    var callbacks = this._events[name] || [];

    callbacks.push(callback);

    this._events[name] = callbacks;
};

Page.prototype.animate = function(config) {
    var elem = this.elem.find(config.selector);
    var page = this;
    var keys = _.keys(config.variables);

    for (var scale = 0, i = config.scrollFrom; i < config.scrollTo; i++, scale++) {

        (function() {

            var cssObj = {};
            for (var j = 0; j < keys.length; j++) {
                var unit = config.variables[keys[j]].unit ? config.variables[keys[j]].unit : (config.unit ? config.unit : "");
                cssObj[keys[j]] = config.variables[keys[j]].initial + (config.variables[keys[j]].step * scale) + unit;
            }

            page.on(i, function() {
                elem.css(cssObj);
            });


        })(i);
    }
};

Window.Page = Page;
