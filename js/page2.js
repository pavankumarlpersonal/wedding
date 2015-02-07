(function($ , Page){

  var page = new Page('[data-page=2]');

  var weddingOn = page.elem.find('[data-identifier=wedding-on]');
  var doli = page.elem.find('[data-identifier=doli]');
  var bride = page.elem.find('[data-identifier=bride]');
  var groom = page.elem.find('[data-identifier=groom]');
  var map = page.elem.find('[data-identifier=wedding-at]');

  var theWedding = page.elem.find('[data-identifier=the-wedding]');
  var flower = page.elem.find('[data-identifier=flower]');
  var venue = page.elem.find('[data-identifier=venue]');

  weddingOn.css({
    'opacity' : 0,
    'width' : '0%',
    'height' : '0%',
    'left' : '-75%'
  }).show();

  map.find('img').on('click' , function(){
    window.open('https://www.google.co.in/maps/place/Vokkaligara+Samudaya+Bhavana/@13.9441538,75.5816373,15z/data=!4m2!3m1!1s0x3bbba9290da55897:0x562ddfc8c04869d1' , '_blank');
  });

  doli.css({
    'opacity' : 0,
    'top' : '-70%',
    'right' : '-200%'
  }).show();
  bride.css({
    'left' : '-70%',
    'top' : '-200%'
  }).show();
  groom.css({
    'right' : '-70%',
    'bottom' : '-200%'
  }).show();
  map.css({
    'opacity' : 0,
    'bottom' : '-20%',
    'left' : '-200%'
  }).show();

  theWedding.css({
      'opacity' : '0',
      'left' : '-200%',
      'top' : '-80%'
  }).show();

  flower.css({
    'left' : '-200%',
    'top' : '-70%'
  }).show();

  venue.css({
    'opacity' : '0',
    'right' : '-70%',
    'width' : '0',
    'height' : '0'
  }).show();

  page.on('120' , function(direction){
      if(direction == "left"){
        hideWedding(direction);
      }
  });

  page.on('150' , function(){
    showWedding();
  });

  page.on('180' , function(direction){
    if(direction == "right"){
      hideWedding(direction);
    }
  });

  var showWedding = function(){
    weddingOn.animate({
      'opacity' : 1,
      'width' : '10%',
      'height' : '40px',
    });

    doli.animate({
      'opacity' : '1',
      'left' : 0,
      'right' : 0
    });

    bride.animate({
        'top' : '0',
        'bottom' : '0'
    });

    groom.animate({
      'top' : '0',
      'bottom' : '0'
    });

    map.animate({
        'opacity' : '1',
        'right' : '0',
        'left' : '0'
    });

    theWedding.animate({
        'opacity' : '1',
        'left' : '0',
        'right' : '-60%'
    });

    flower.animate({
        'left' : '-70%',
        'right' : '0%'
    });

    venue.animate({
      'opacity' : '1',
      'width' : '15%',
      'height' : 'auto'
    });
  };

  var hideWedding = function(direction){
    weddingOn.animate({
      'opacity' : 0,
      'width' : '0%',
      'height' : '0%',
    });

    venue.animate({
      'opacity' : '0',
      'width' : '0%',
      'height' : '0%'
    });


    var doliAnim = {};
    doliAnim.opacity = '0';

    var brideAnim = {};

    var groomAnim = {};

    var mapAnim = {};
    mapAnim.opacity = '0';

    var flowerAnim = {};

    var theWeddingAnim = {};
    theWeddingAnim.opacity = '0';


    if(direction == "right"){
      doliAnim.left = '-200%';

      brideAnim.bottom = '-200%';

      groomAnim.top = '-200%';

      mapAnim.left = '-200%';

      flowerAnim.right = '-200%';
      flowerAnim.left = '0%';

      theWeddingAnim.right = '-200%';
      theWeddingAnim.left = '0%';

    }else{
      doliAnim.right = '-200%';

      brideAnim.top = '-200%';

      groomAnim.bottom = '-200%';

      mapAnim.right = '-200%';

      flowerAnim.left = '-200%';
      flowerAnim.right = '0';

      theWeddingAnim.left = '-200%';
      theWeddingAnim.right = '0';
    }



    doli.animate(doliAnim);

    bride.animate(brideAnim);

    groom.animate(groomAnim);

    map.animate(mapAnim);

    theWedding.animate(theWeddingAnim);
    flower.animate(flowerAnim);
  };

})($ , Page);
