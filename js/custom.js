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
    const scrollTop = $(window).scrollTop();
    const $wrapper = $(".wrapper");

    if (scrollTop > 30) {
      if (!$wrapper.hasClass("page-scrolled")) {
        $wrapper.addClass("page-scrolled");
      }
    } else {
      if ($wrapper.hasClass("page-scrolled")) {
        $wrapper.removeClass("page-scrolled");
      }
    }
  }

  // Call togglePageScrolled when the window loads
  $(window).on("load", function () {
    window.scrollTo(0, 0);
    togglePageScrolled();
  });

  // Call togglePageScrolled when the window is scrolled
  $(window).on("scroll", togglePageScrolled);

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

  $(".have-child").each(function () {
    if ($(this).find(".profile-nav-item.active").length > 0) {
      $(this).addClass("open");
      $(this).find(".nested-menu").css("display", "block"); // Ensure the submenu is visible
    } else {
      $(this).removeClass("open");
      $(this).find(".nested-menu").css("display", "none"); // Ensure the submenu is hidden
    }
  });

  // Window Resize
  $(window).resize(function () {
    $("body").removeClass("open show-profile");
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
