
// alert("This is a test")

// how_many_forms = $('form').length;

// console.log(how_many_forms);


$(document).ready(function() {  
  // adding a new dropdown menu when the user changes the 'select' div:
  $('form').
    on('change', 'select', function(){
      var newdropdown=$('form').find('div').first().html(); //grabbing all the <options> and <optgroup> from the first <select> tag. 
      $('form').append('<div>' + newdropdown + '</div>');

      //Updating the order qty: 
      var x=0;
      x+=1;
      $('dd#drinks').text(x);

      // Another way to update the order quantity (w/o setting a var):
      // $('dd#drinks').text($('select').length - 1);

      //Update the total cost:
      var totalcost=0;
      $('select').each(function(){
        price = $(this.options[this.selectedIndex]).data('price');
        if ($.isNumeric(price)){
          totalcost +=$(this.options[this.selectedIndex]).data('price')
        }
        $('#cost').text('$' + (totalcost/100).toFixed(2));
      });
      // Adding a 'Submit' button:
      cost = {cost: totalcost}
      $('.button').click(function(event){
        event.preventDefault();
        $.post('/shop', cost, function(responseText){
          $('.response').append(responseText);
        });
      }); 
    });
});
