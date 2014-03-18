$(document).ready(function(){

	$(".showing").click(function() {

	    $(".list_options").show();

	    $(".hiding").show();

	    $(".showing").hide();

	});


	$(".hiding").click(function(){

	    $(".list_options").hide();

	    $(".hiding").hide();

	    $(".showing").show();

	});
	

});