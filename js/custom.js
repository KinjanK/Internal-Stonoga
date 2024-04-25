$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // Show Hide Header on Scroll
  // var lastScroll = 0;
  // var lastScrollTimeOut;
  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll + 50 < lastScroll) $("body").removeClass("page-scrolled");
  //   else if (scroll - 50 > lastScroll) $("body").addClass("page-scrolled");

  //   if ($(window).scrollTop() < 100) $("body").removeClass("page-scrolled");

  //   lastScroll = scroll;
  // });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Define the function that toggles the 'page-scrolled' class based on scroll position
  function togglePageScrolled() {
    if ($(window).scrollTop() > 50) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  }

  // Call togglePageScrolled when the window loads
  $(window).on("load", function () {
    togglePageScrolled(); // Check the scroll position when the page loads
  });

  // Call togglePageScrolled when the window is scrolled
  $(window).on("scroll", function () {
    togglePageScrolled(); // Check the scroll position on each scroll event
  });

  // Footer margin set for stick to bottom
  function footerAdj() {
    var footerH = $(".footer").innerHeight();
    $(".footer").css({ "margin-top": -footerH });
    $(".main-content").css({ "padding-bottom": footerH });
  }
  footerAdj();

  // Input Spinner
  $("input[type='number']").inputSpinner();

  // Select2
  $("select").select2({
    minimumResultsForSearch: -1,
  });

  // $(".counter").each(function () {
  //   // Get references to the elements within the counter
  //   var $counter = $(this);
  //   var $decrementButton = $counter.find("button").eq(0); // The first button is the "minus" button
  //   var $incrementButton = $counter.find("button").eq(1); // The second button is the "plus" button
  //   var $countDisplay = $counter.find("span"); // The span that displays the count

  //   // Handle click event for the decrement button
  //   $decrementButton.click(function () {
  //     var currentCount = parseInt($countDisplay.text(), 10); // Get the current count
  //     if (currentCount > 0) {
  //       $countDisplay.text(currentCount - 1); // Decrement the count
  //     }
  //   });

  //   // Handle click event for the increment button
  //   $incrementButton.click(function () {
  //     var currentCount = parseInt($countDisplay.text(), 10); // Get the current count
  //     $countDisplay.text(currentCount + 1); // Increment the count
  //   });
  // });

  // Window Resize
  $(window).resize(function () {
    footerAdj();
    $("body").removeClass("open");
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
