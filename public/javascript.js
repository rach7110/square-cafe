
// alert("This is a test")

// how_many_forms = $('form').length;

// console.log(how_many_forms);


$(document).ready(function() {  
  $('form').
    on('change', 'select', function(){
      var newdropdown=$('form').find('div').first().html(); //grabbing all the <options> and <optgroup> from the first <select> tag. 
      $('form').append('<div>' + newdropdown + '</div>');

      var x=0;
      x+=1;
      $('dd#drinks').text(x);
      // $('dd#drinks').text($('select').length - 1); <-another way to code lines 17-19.

      //Left off here...trying to update the total cost
      var total_cost=0;
      $('#cost').text(total_cost);
  
  });
});