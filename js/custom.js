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

  // Input Spinner
  $("input[type='number']").inputSpinner();

  // Select2
  $("select").select2({
    minimumResultsForSearch: -1,
  });

  // Profile Sidebar toggle
  $(".btn-profile-drawer-handle").on("click", function () {
    $("body").toggleClass("show-profile");
  });

  // Overlayer Click
  $(".overlayer").on("click", function () {
    $("body").removeClass("show-profile");
  });

  // Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // Nested Menu
  $(".have-child > .profile-nav-item").on("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    var $nestedMenu = $(this).next(".nested-menu");
    $nestedMenu.slideToggle("fast"); // Toggle the nested menu

    // Toggle the 'open' class on the parent <li> element
    $(this).parent(".have-child").toggleClass("open");
  });

  // Window Resize
  $(window).resize(function () {
    $("body").removeClass("open show-profile");
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
