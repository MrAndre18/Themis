if ($(".preloader").width()) {
  const preloader = $(".preloader"),
    preloaderContent = $(preloader).find(".preloader__content"),
    loadedContent = $(".loaded-content");
  
  setTimeout(() => {
    $(preloaderContent).css("display", "block");
    $(preloader).addClass("ready");
  }, 200);

  $(() => {
    setTimeout(() => {
      $(loadedContent).css("opacity", 1);
      $(preloader).addClass("loaded");
    }, 2500);
  });

}