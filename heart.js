var positions = [];

positions.push({left : '3%' , top : '25%'});
positions.push({left : '20%' , top : '7%'});
positions.push({left : '43%' , top : '18%'});
positions.push({left : '78%' , top : '8%'});
positions.push({left : '96%' , top : '23%'});

positions.push({left : '6%' , top : '58%'});
positions.push({left : '71%' , top : '33%'});
positions.push({left : '36%' , top : '50%'});
positions.push({left : '39%' , top : '87%'});
positions.push({left : '73%' , top : '81%'});

positions.push({left : '12%' , top : '82%'});
positions.push({left : '22%' , top : '44%'});
positions.push({left : '52%' , top : '48%'});
positions.push({left : '65%' , top : '71%'});
positions.push({left : '81%' , top : '57%'});

var sizes = ['tiny' , 'normal' , 'big' , 'huge' , 'massive'];

var colors = ['red' , 'pink' , 'chocolate' , 'coral' , 'bisque'];

var getRandom = function(){
  return Math.floor((Math.random() * 5));
};

var heart = $('.heart');

for(var i=0; i<positions.length; i++){
  var clone = heart.clone();

  var size = sizes[getRandom()];
  var color = colors[getRandom()];

  clone.addClass(size).addClass(size + " " + color).css(positions[i]).appendTo('body').show();
}
