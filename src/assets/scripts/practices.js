if ($(".practices__services").width()) {
  const services = $(".practices__services-item");

  $(services).each(function (index, service) {
    const trigger = $(service).find(".practices__services-item-trigger"),
      content = $(service).find(".practices__services-item-content");
    
    $(service).removeClass("active");
    $(content).slideUp(0);

    $(trigger).on("click", () => {
      $(service).toggleClass("active");
      $(content).slideToggle(600);
    })
  });
}
