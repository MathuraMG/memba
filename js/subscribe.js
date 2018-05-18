var submitted=false;
console.log($('#gform'));
$( document ).ready(function() {
  $('#gform').on('submit', function(e) {
    console.log("hi hi hello hoomin");
    // $('.contact__form-input').val("")
    $('.contact__text').html("Thank you for subscribing to Memba!")
  });
});
