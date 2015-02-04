(function($, Page) {

    var page = new Page('[data-page=tabassum]');

    var tabassumImage = page.elem.find('[data-identifier=tabassum-image]');
    var tabassumName = page.elem.find('[data-identifier=tabassum-name]');
    var tabassumIntro = page.elem.find('[data-identifier=tabassum-intro]');

    tabassumImage.css({
        'left': '-70%',
        'top': '-200%',
        'opacity': 0
    }).show();

    tabassumName.css({
        'right': '-70%',
        'bottom': '-200%',
        'opacity': 0
    }).show();

    tabassumIntro.css({
        'right': '-200%',
    }).show();


    page.on('30', function(direction) {
        if (direction == 'left') {
            tabassumImage.animate({
                'top': '-200',
                'opacity': 0
            }, 'fast');
        }
    });

    page.on('30', function(direction) {
        if (direction == 'left') {
            tabassumName.animate({
                bottom: '-200%',
                opacity: 0,
            }, 'slow');
        }
    });

    page.on('30', function(direction) {
        if (direction == 'left') {
            tabassumIntro.animate({
                right: '-200%',
            }, 'slow');
        }
    });

    page.on('60', function(direction) {
            tabassumImage.animate({
                'top': '0',
                'opacity': 1
            }, 'fast');
    });

    page.on('60', function(direction) {
            tabassumName.animate({
                bottom: '-70%',
                opacity: 1,
            }, 'slow');
    });

    page.on('60', function(direction) {
          tabassumIntro.animate({
                right: '0%',
            }, 'slow');
    });

    page.on('90', function(direction) {
        if (direction == 'right') {
            tabassumName.animate({
                'bottom': '-200%',
                'opacity': 0,
            }, 'slow');
        }
    });

    page.on('90', function(direction) {
      if (direction == 'right') {
        tabassumIntro.animate({
          'right' : '-200%'
        }, 'slow');
      }
    });

    page.on('90', function(direction) {
        if (direction == 'right') {
          tabassumImage.animate({
                top: '-200%',
            }, 'slow');
        }
    });



})($, Page);
