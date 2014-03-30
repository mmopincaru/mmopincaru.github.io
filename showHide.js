$(document).ready(function(){

	$(".showing").click(function() {

			$(".dropdown-menu").show();

	    	$(".hiding").show();

	    	$(".showing").hide();

	});

	$(".hiding").click(function(){

	    $(".hiding").hide();

	    $(".showing").show();

	    $(".dropdown-menu").hide();

	});
	

});