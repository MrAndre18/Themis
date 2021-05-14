console.log("header");
if ($(".header").width()) {
  const header = $(".header");
  let scrollPrev = 0;

  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 50) header.addClass("scrolled");
    else header.removeClass("scrolled");

    if (
      $(window).scrollTop() > $(window).height() / 3 &&
      $(window).scrollTop() > scrollPrev &&
      !header.hasClass("active")
    )
      header.addClass("out");
    else header.removeClass("out");

    scrollPrev = $(window).scrollTop();
  });
}
