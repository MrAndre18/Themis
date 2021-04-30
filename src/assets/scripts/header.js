if ($(".header")) {
  const header = $(".header");

  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 100)
      header.addClass("scrolled");
    else
      header.removeClass("scrolled");
  });
}
