function getIt() {
  $( 'p' ).on( 'click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $( 'img' ).on( 'load', function() {
    $( 'img' ).addClass( 'tasty' )
  })
}

function submitIt() {
  $( 'form' ).on( 'submit', function() {
    alert( 'Your form is going to be submitted now.')
  })
}

function pressIt() {
  $( 'form input' ).on( 'keydown', function( key ) {
    if( key.key == 'g' )
      alert( 'G pressed' )
  })
}

$(document).ready(function(){



});
