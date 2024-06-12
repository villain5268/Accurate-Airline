

	$(document).ready(function() {
		$(".nav li").on("click", function() {
			$(".nav li").removeClass("active");
			$(this).addClass("active");
		});
	
	function navbarMovement(event) {
			$(event.data.param1).slideToggle("fast");
			
		};
	
		$(".nav li").on("click", { param1: "#navbarContent" }, navbarMovement);
	});
	