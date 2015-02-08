(function($){

  var images = $('img');

  var resouceLength = images.length + 5; // 5 fonts
  var loaded = 0;

  for(var i=0; i<images.length; i++){
    var img = images.get(i);

    img.onload = function(){
      loadCallback();
    }
  }

  //pace.start();
  var loadCallback = function(){
    loaded = loaded + 1;
    console.log('callbacks');
    if(loaded === images.length){

      $('.pace').hide();
      $('.dynamic-heart').show();
      //pace.stop();
      //$('.loading').hide();
      $(document).trigger('start');
    }
  };



  window.WebFontConfig = {
    google: { families: [ 'Indie+Flower' , 'Dancing+Script' , 'Rock+Salt' , 'Chewy' , 'Frijole' ] },
    fontloading : function(){
      loadCallback();
    }
  };

  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();





})($);
