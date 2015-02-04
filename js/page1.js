(function($ , Page){

  var page = new Page('[data-page=1]');

  var tabassum = page.elem.find('[data-identifier=tabassum]');
  var nadim = page.elem.find('[data-identifier=nadim]');
  var weds = page.elem.find('[data-identifier=weds]');
  var brideNGroom = page.elem.find('[data-identifier=brider-n-groom]');
  var scroll = page.elem.find('[data-identifier=scroll]');

  tabassum.css('top' , '-200%').show();
  nadim.css('top' , '200%').show();
  weds.css('left' , '200%').show()
  brideNGroom.css('left' , '-200%').show();
  scroll.css('bottom' , '-200%').show();

  tabassum.animate({
    top : '-7.5%',
  },
  500);

  nadim.animate({
    top : '7.5%'
  } , 500);

  var shiverRight = function(){
    tabassum.css({
      '-ms-transform': 'rotate(1deg)',
      '-webkit-transform' : 'rotate(1deg)',
      'transform': 'rotate(1deg)'
    });

    nadim.css({
      '-ms-transform': 'rotate(-1deg)',
      '-webkit-transform' : 'rotate(-1deg)',
      'transform': 'rotate(-1deg)'
    });
  };

  var shiverLeft = function(){
    nadim.css({
      '-ms-transform': 'rotate(1deg)',
      '-webkit-transform' : 'rotate(1deg)',
      'transform': 'rotate(1deg)'
    });

    tabassum.css({
      '-ms-transform': 'rotate(-1deg)',
      '-webkit-transform' : 'rotate(-1deg)',
      'transform': 'rotate(-1deg)'
    });
  };

  setTimeout(function(){
      shiverInterval(100);
  },1000);

  var shiverIntervalId;
  var times = 0;
  var shiverInterval = function(interval){ // 50, 40, 20
    var last = shiverRight;
    shiverIntervalId = setInterval(function(){

      last();

      if(last === shiverRight){
        last = shiverLeft;
      }else{
        last = shiverRight;
      }

    }, interval);

    setTimeout(function(){
      if(shiverIntervalId){
        clearInterval(shiverIntervalId);

        if(times == 8){
            wedding();
        }else{
          shiverInterval(interval/2);
          times = times + 1;
        }
      }
    } , 200);

  };


  var wedding = function(){

    tabassum.animate({
      top : '-10%',
    },
    100);

    nadim.animate({
      top : '10%'
    } , 100);

    weds.animate({
      left : '0%',
    } , 'slow');

    brideNGroom.animate({
      left : '-70%'
    } , 'slow');

    scroll.animate({
      bottom : '-80%'
    } , 'fast');

    setTimeout(function(){
      scroll.css({
        '-ms-transform': 'rotate(5deg)',
        '-webkit-transform' : 'rotate(5deg)',
        'transform': 'rotate(5deg)'
      });
    }, 1000);

  };

  var brideNGroomLeft = {
    scrollFrom : 5,
    scrollTo : 30,
    selector : brideNGroom,
    unit : '%',

    variables : {
      left : {
        step : -3,
        initial : -70,
      },
    }
  };

  var scrollDown = {
    scrollFrom : 5,
    scrollTo : 25,
    selector : scroll,
    unit : '%',

    variables : {
      bottom : {
        step : -2,
        initial : -80
      },

      opacity : {
        step : -0.05,
        inital : 1,
      }
    }
  };

  var tabassumLeftTop = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : tabassum,
    unit : '%',

    variables : {
      top : {
        step : -3,
        initial : -10
      },
      left : {
        step : -1,
        initial : 0,
      },
      opacity : {
        step : -0.05,
        initial : 1,
        unit : ' '
      }
    },


  };

  var nadimTopRight = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : nadim,
    unit : '%',

    variables : {
      top : {
        step : -3,
        initial : -10
      },
      right : {
        step : -1,
        initial : 0,
      },
      opacity : {
        step : -0.05,
        initial : 1,
        unit : ' '
      }
    }
  };

  page.on('4' , function(direction){
    if(direction === "right")
      return;

    nadim.css({
      top : '10%'
    } , 100);
  });

  var wedsTop = {
    scrollFrom : 5,
    scrollTo : 26,
    selector : weds,
    unit : '%',

    variables : {
      top : {
        step : -4,
        initial : 0
      },
      opacity : {
        step : -0.05,
        initial : 1,
        unit : ' '
      }
    }
  };

  /*page.animate(brideNGroomLeft);
  page.animate(scrollDown);
  page.animate(tabassumLeftTop);
  page.animate(nadimTopRight);
  page.animate(wedsTop);*/

  page.on('30' , function(direction){
      if(direction == "right"){
          tabassum.animate({
              'top' : '-200%',
          } , 'slow');
      }
  });

  page.on('30' , function(direction){
    if(direction == "right"){
      nadim.animate({
        'bottom' : '-200%',
      } , 'slow');
    }
  });

  page.on('30' , function(direction){
    if(direction == "right"){
      weds.animate({
          'left' : '-200%',
      } , 'slow');
    }
  });

  page.on('30' , function(direction){
    if(direction == "right"){
      brideNGroom.animate({
        'left' : '-200%',
      } , 'slow');
    }
  });

  page.on('30' , function(direction){
    if(direction == "right"){
      scroll.animate({
        'bottom' : '-200%',
      } , 'slow');
    }
  });


  page.on('5' , function(direction){
    if(direction == "left"){
      wedding();
    }
  });

  page.on('5' , function(direction){
    if(direction == "left"){
      nadim.animate({
        'bottom' : '0%',
      } , 'slow');
    }
  });

  page.on('5' , function(direction){
    if(direction == "left"){

    }
  });

})($ , Page);
