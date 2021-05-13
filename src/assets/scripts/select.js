if ($(".select").width()) {
  const selects = $(".select");

  $(selects).each(function (index, select) {
    const header = $(select).find(".select__header");

    $(header).on("click", () => {
      const body = $(select).find(".select__body");

      $(select).toggleClass("active");

      if ($(select).hasClass("active")) {
        const items = $(select).find(".select__item"),
          current = $(select).find(".select__current");

        $(items).on("click", (e) => {
          $(items).each(function (index, item) {
            $(item).removeClass("active");
          });

          $(e.target).addClass("active");
          $(current).text($(e.target).text());
        });
      }
    });
  });
}
