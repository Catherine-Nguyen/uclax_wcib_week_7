jQuery(function() {
	//will run after the page load

	$(document).ready(function(){
	  $("#p1").hover(function(){
	    alert("HOW DARE YOU SAY NO TO ADOPTION?");
	  },
	  function(){
	    alert("Bye! Don't come back. Thanks..");
	  });

  	$("#show").click(function(){
			$("p").show();
  	});
	});

	let my_switch = false;

	$('#my_button').click(function () {

	if (my_switch == false) {
		my_switch = true;

			$(this).html('Click for Kitten').removeClass('btn-primary').addClass('btn-info');

			$('#my_image').attr('src', 'images/samoyed.jpg');
		} else {
			my_switch = false;

			$(this).html('Click for Puppy').removeClass('btn-info').addClass('btn-primary');
			$('#my_image').attr('src', 'images/forest.jpg');

		}
	}
