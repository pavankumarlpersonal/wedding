(function($ , Page){

  var page = new Page('[data-page=thank]');

  var thankYou = page.elem.find('[data-identifier=thank-you]');

  thankYou.css({
    'opacity' : '0',
    'width' : '0'
  }).show();

  page.on('150' , function(direction){
      if(direction == "left"){
        thankYou.animate({
          'width' : '0',
          'opacity' : 0
        } , 1000);
      }
  });

  page.on('180' , function(){
    thankYou.animate({
        'width' : '100%',
        'opacity' : 1
    } , 'slow');
  });


})($ , Page);
