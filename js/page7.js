(function($, Page) {

    var page = new Page('[data-page=journey]');

    var journeyName = page.elem.find('[data-identifier=journey-name]');

    var image1 = page.elem.find('[data-identifier=img-1]');
    var image2 = page.elem.find('[data-identifier=img-2]');
    var image3 = page.elem.find('[data-identifier=img-3]');
    var image4 = page.elem.find('[data-identifier=img-4]');

    journeyName.css({
        'left': '-70%',
        'top': '-200%'
    }).show();

    image1.css({
        'right': '-200%'
    }).hide();

    image2.css({
        'right': '-200%'
    }).show();

    image3.css({
        'right': '-200%'
    }).show();

    image4.css({
        'right': '-200%'
    }).show();

    page.on('60', function(direction) {
        if (direction == "left") {
            journeyName.animate({
                'top': '-200%'
            }, 'fast');
            hideImages('right');
        }
    });

    page.on('90', function(direction) {
        journeyName.animate({
            'top': '-70%'
        }, 'fast');

        showImages();
    });

    page.on('120', function(direction) {
        if (direction == "right") {
            journeyName.animate({
                'top': '200%'
            }, 'fast');
            hideImages('left');
        }
    });

    var showImages = function() {
        image1.animate({
            'left': '-20%',
            'right': '0'
        }, '300');

        image2.animate({
            'left': '-33.33%',
            'right': '0%'
        }, '600');

        image3.animate({
            'right': '-0%',
            'left': '0%'
        }, '900');

        image4.animate({
            'right': '-33.33%',
            'left': '0%'
        }, '1200');
    }

    var hideImages = function(direction) {

        var anim = {};

        if(direction == "left"){
          anim['right'] = '0%';
        }else{
          anim['left'] = '0%';
        }

        anim[direction] = '-200%';

        image1.animate(anim, 'slow');

        image2.animate(anim, 'slow');

        image3.animate(anim, 'slow');

        image4.animate(anim, 'slow');
    }

})($, Page);
