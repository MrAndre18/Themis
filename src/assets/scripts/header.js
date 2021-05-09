if ($(".header")) {
  const header = $(".header");

  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 50)
      header.addClass("scrolled");
    else
      header.removeClass("scrolled");
  });
}
