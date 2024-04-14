$(document).ready(function() {
	//Prevent Page Reload on all # links
	$("body").on("click","a[href='#']", function(e){
		e.preventDefault();
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);
		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});
	
	// Show Hide Header on Scroll
	var lastScroll = 0;
	var lastScrollTimeOut;
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ((scroll + 50) < lastScroll)
			$("body").removeClass("page-scrolled");
		else if ((scroll - 50) > lastScroll)
			$("body").addClass("page-scrolled");

		if($(window).scrollTop() < 100)
			$("body").removeClass('page-scrolled');

		lastScroll = scroll;
	});

	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function(e) {
		if(!$("body").hasClass("window-resizing")){
			$("body").addClass("window-resizing");
		}
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function() {    
			$("body").removeClass("window-resizing");
		}, 250);
	});	

	// Add new js functions here -----------------------------------------------------------------





	// Don't add anything below this --------------------------------------------------------------
	// Add Class on Window Load
	$("body").addClass("page-loaded");
});