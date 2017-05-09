$(document).ready(function(){
  $(".call_modal").click(function(){
	$(".modal").fadeIn();
	$(".modal_main").show();
	  });
});
$(document).ready(function(){
  $(".close").click(function(){
	$(".modal").fadeOut();
	$(".modal_main").fadeOut();
	  });
});

function formValidation() {
  // Make quick references to the input.
  var email = document.getElementById('email');

// verify each input in the order that it appears in the form.
  if (emailValidation(email, "This  isn't a valid email")) {
	   return true;
	}
	   return false;
}

	// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
	function emailValidation(inputtext, alertMsg) {
	   var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
			if (inputtext.value.match(emailExp)) {
				return true;
				} else {
				document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for email.
				inputtext.focus();
				return false;
				}
		}
