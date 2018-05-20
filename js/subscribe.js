var submitted=false;
console.log($('#gform'));
$( document ).ready(function() {
  $('#gform').on('submit', function(e) {
    console.log("hi hi hello hoomin");
    // $('.contact__form-input').val("")
    $('.contact__text').html("<span style='color:#ddd; font-size: 0.85rem;'>Thank you for subscribing to Memba!<span>")
  });
});
