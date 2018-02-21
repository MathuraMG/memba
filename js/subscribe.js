var submitted=false;
console.log("hi there");
console.log($('#gform'));
$( document ).ready(function() {
  $('#gform').on('submit', function(e) {
    console.log("hi hi");
    e.preventDefault();
    $('.contact__form-input').val("")
    // $('#gform').html = '';
    // $('#gform').prepend('Thank you!');
  });
});
