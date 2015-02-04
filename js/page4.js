(function($, Page) {

    var page = new Page('[data-page=4]');

    var storySoFar = page.elem.find('[data-identifier=story-so-far]');

    storySoFar.css({
        'left': '-65%',
        'top': '-200%'
    }).show();


    // front move

    /*
      30 - to top left
      60 - to top right
      90 - to bottom right
      120 - to bottom left
      150 - to move left top
    */

    /*
      120 - to bottom left
      90 - to bottom right
      60 - to top right
      30 - to top left
      5 - to left top
    */

    page.on('5', function() {
      storySoFar.animate({
        'top': '-200%',
        'left' : '-65%',
        'right' : '0%',
        'bottom' : '0%'
      }, 'slow');
    });


    page.on('30', function(direction) {
        storySoFar.animate({
          'top': '-75%',
          'left' : '-65%',
          'right' : '0%',
          'bottom' : '0%'
        }, 'slow');
    });


    page.on('60', function(direction) {
      storySoFar.animate({
        'top': '-75%',
        'left' : '0%',
        'right' : '-75%',
        'bottom' : '0%'
      }, 'slow');
    });

    page.on('90' , function(direction){
      storySoFar.animate({
        'top': '0%',
        'left' : '0%',
        'right' : '-75%',
        'bottom' : '-75%'
      }, 'slow');
    });

    page.on('120' , function(direction){
      storySoFar.animate({
        'top': '0%',
        'left' : '-65%',
        'right' : '0%',
        'bottom' : '-75%'
      }, 'slow');
    });

    page.on('150', function() {
      storySoFar.animate({
        'top': '-200%',
        'left' : '-65%',
        'right' : '0%',
        'bottom' : '0%'
      }, 'slow');
    });

})($, Page);
