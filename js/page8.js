(function($ , Page){

  var page = new Page('[data-page=engagement]');

  var engagementName = page.elem.find('[data-identifier=engagement-name]');
  var engagementImage = page.elem.find('[data-identifier=engagement-image]');

  engagementName.css({
    'top' : '-200%',
    'right' : '-70%'
  }).show();

  engagementImage.css({
    'right' : '-200%'
  }).show();

  page.on('90' , function(direction){
    if(direction == "left"){
      engagementName.animate({
        'top' : '-200%'
      } , 'fast');

      engagementImage.animate({
        'right' : '-200%',
        'left' : '0'
      } , 'fast');
    }
  });

  page.on('120' , function(){
    engagementName.animate({
      'top' : '-70%'
    } , 'fast');
    engagementImage.animate({
      'right' : '0%',
      'left' : '0%'
    } , 'fast');
  });

  page.on('150' , function(direction){
    if(direction == "right"){
      engagementName.animate({
        'top' : '200%'
      } , 'fast');

      engagementImage.animate({
        'left' : '-200%',
        'right' : '0'
      } , 'fast');
    }
  });


})($ , Page);
