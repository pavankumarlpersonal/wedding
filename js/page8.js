(function($ , Page){

  var page = new Page('[data-page=engagement]');

  var engagementName = page.elem.find('[data-identifier=engagement-name]');
  var engagementImage1 = page.elem.find('[data-identifier=engagement-image1]');
  var engagementImage2 = page.elem.find('[data-identifier=engagement-image2]');

  engagementName.css({
    'top' : '-200%',
    'right' : '-60%'
  }).show();

  engagementImage1.css({
    'right' : '-200%'
  }).show();

  engagementImage2.css({
    'left' : '-200%'
  }).show();

  page.on('90' , function(direction){
    if(direction == "left"){
      engagementName.animate({
        'top' : '-200%'
      } , 'fast');

      engagementImage1.animate({
        'right' : '-200%',
        'left' : '0%'
      } , 'fast');

      engagementImage2.animate({
        'left' : '-200%',
        'right' : '0%'
      } , 'fast');
    }
  });

  page.on('120' , function(){
    engagementName.animate({
      'top' : '-70%'
    } , 'fast');
    engagementImage1.animate({
      'right' : '-25%',
      'left' : '0%'
    } , 'fast');

    engagementImage2.animate({
      'right' : '0%',
      'left' : '-25%'
    } , 'fast');
  });

  page.on('150' , function(direction){
    if(direction == "right"){
      engagementName.animate({
        'top' : '200%'
      } , 'fast');

      engagementImage1.animate({
        'left' : '-200%',
        'right' : '0'
      } , 'fast');

      engagementImage2.animate({
        'right' : '-200%',
        'left' : '0'
      } , 'fast');
    }
  });


})($ , Page);
