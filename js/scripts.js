$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    var input = $("input#sentence").val(); //take the string

    var results = ""; //string to store results
    // iterate over string
    for(var i=0; i<input.length; i++ ) {
	     if( input[i] === 'a' || input[i] === 'i' || input[i] === 'u' || input[i] === 'e' || input[i] === 'o' ) {
		       results += "-";
        } else {
		        results += input[i]; //concante the string
        }
    }

    $("#output").text(results);
    $("#output").show();
  });
});
