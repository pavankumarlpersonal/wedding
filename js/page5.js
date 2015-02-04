(function($ , Page){

  var page = new Page('[data-page=nadim]');

  var nadimImage = page.elem.find('[data-identifier=nadim-image]');
  var nadimName = page.elem.find('[data-identifier=nadim-name]');
  var nadimIntro = page.elem.find('[data-identifier=nadim-intro]');

  nadimImage.css({
    'right' : '-70%',
    'top'   : '-200%',
    'opacity' : 0
  }).show();

  nadimName.css({
    'left' : '-70%',
    'bottom'   : '-200%',
    'opacity' : 0
  }).show();

  nadimIntro.css({
    'left' : '-200%',
  }).show();

  page.on('30' , function(direction){
    nadimImage.animate({
      'top' : '0',
      'opacity' : 1
    } , 'fast');
  });

  page.on('30' , function(direction){

    nadimName.animate({
      bottom : '-70%',
      opacity : 1,
    } , 'slow');

  });

  page.on('30' , function(direction){
    nadimIntro.animate({
      left : '0%',
    } , 'slow');
  });

  page.on('5' , function(direction){
    if(direction == "left"){
      nadimImage.animate({
        'top' : '-200%',
        'opacity' : 0
      } , 'fast');
    }
  });

  page.on('5' , function(direction){
    if(direction == "left"){
      nadimName.animate({
        bottom : '-200%',
        opacity : 0,
      } , 'slow');
    }
  });

  page.on('5' , function(direction){
    if(direction == "left"){
      nadimIntro.animate({
        left : '-200%',
      } , 'slow');
    }
  });

  page.on('60' , function(direction){
    nadimImage.animate({
      'top' : '-200',
      'opacity' : 0
    } , 'fast');
  });

  page.on('60' , function(direction){
    nadimName.animate({
      bottom : '-200%',
      opacity : 0,
    } , 'slow');

  });

  page.on('60' , function(direction){
    nadimIntro.animate({
      left : '-200%',
    } , 'slow');
  });



})($ , Page)
