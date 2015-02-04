(function($ , Page){

  var page = new Page('[data-page=2]');

  var weddingOn = page.elem.find('[data-identifier=wedding-on]');
  var doli = page.elem.find('[data-identifier=doli]');
  var bride = page.elem.find('[data-identifier=bride]');
  var groom = page.elem.find('[data-identifier=groom]');
  var map = page.elem.find('[data-identifier=wedding-at]');

  weddingOn.css({
    'opacity' : 0,
    'width' : '0%',
    'height' : '0%',
    'top' : '-25%'
  }).show();
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
      'width' : '30%',
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
  };

  var hideWedding = function(direction){
    weddingOn.animate({
      'opacity' : 0,
      'width' : '0%',
      'height' : '0%',
    });

    var doliAnim = {};
    doliAnim.opacity = '0';

    var brideAnim = {};

    var groomAnim = {};

    var mapAnim = {};
    mapAnim.opacity = '0';

    if(direction == "right"){
      doliAnim.left = '-200%';

      brideAnim.bottom = '-200%';

      groomAnim.top = '-200%';

      mapAnim.left = '-200%';

    }else{
      doliAnim.right = '-200%';

      brideAnim.top = '-200%';

      groomAnim.bottom = '-200%';

      mapAnim.right = '-200%';
    }

    doli.animate(doliAnim);

    bride.animate(brideAnim);

    groom.animate(groomAnim);

    map.animate(mapAnim);
  };

  /*var weddingOnShow = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : weddingOn,
    unit : '%',

    variables : {
      opacity : {
        step : 0.05,
        initial : 0,
        unit : ' ',
      },
      fontSize : {
        step : 10,
        initial : 0,
      },
    }
  };

  var doliShow = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : doli,
    unit : '%',

    variables : {
      opacity : {
        step : 0.05,
        initial : 0,
        unit : ' ',
      },

      top : {
        step : 5,
        initial : -160
      }
    }
  };

  var brideShow = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : bride,
    unit : '%',

    variables : {
      opacity : {
        step : 0.05,
        initial : 0,
        unit : ' ',
      },

      left : {
        step : 5,
        initial : -170
      }
    }
  };

  var groomShow = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : groom,
    unit : '%',

    variables : {
      opacity : {
        step : 0.05,
        initial : 0,
        unit : ' ',
      },

      right : {
        step : 5,
        initial : -170
      }
    }
  };

  var mapShow = {
    scrollFrom : 35,
    scrollTo : 56,
    selector : map,
    unit : '%',

    variables : {
      opacity : {
        step : 0.05,
        initial : 0,
        unit : ' ',
      },
    }
  };

  var weddingOnHide = {
    scrollFrom : 35,
    scrollTo : 56,
    selector : weddingOn,
    unit : '%',

    variables : {
      opacity : {
        step : -0.05,
        initial : 1,
        unit : ' ',
      },
      fontSize : {
        step : -10,
        initial : 100,
      },
    }
  };

  page.on('35' , function(direction){

      if(direction == 'left'){
        map.hide();
      }else{
        map.show();
      }
  });

  page.animate(weddingOnShow);
  page.animate(doliShow);
  page.animate(brideShow);
  page.animate(groomShow);
  page.animate(mapShow);
  page.animate(weddingOnHide);
  */

})($ , Page);

/*var page1 = new Page('[data-page=2]');

//var onceUponATime = page1.elem.find('[data-identifier=once-upon-a-time]');
//var someMessage = page1.elem.find('[data-identifier=some-message]').css("opacity" , "0");



var onceUponATime = {
  scrollFrom : 0,
  scrollTo : 20,
  selector : '[data-identifier=once-upon-a-time]',
  unit : '%',

  variables : {
    top : {
      step : -3,
      initial : 0
    },
    left : {
      step : -3,
      initial : 0,
    },
    fontSize : {
      step : -2.5,
      initial : 200
    }
  }
};

var someMessage = {
  scrollFrom : 5,
  scrollTo : 25,
  unit : '%',

  selector : '[data-identifier=some-message]',

  variables : {
    opacity : {
      step : 0.05,
      initial : 0,
      unit : ' '
    },
    width : {
      step : 2.5,
      initial : 20
    }
  }
};

page1.animate(onceUponATime);
page1.animate(someMessage);

var onceUponATimeSlideLeft = {
  scrollFrom : 25,
  scrollTo : 45,
  selector : '[data-identifier=once-upon-a-time]',
  unit : '%',

  variables : {

    left : {
      step : -5,
      initial : -60,
    },

  }
};

page1.animate(onceUponATimeSlideLeft);*/
