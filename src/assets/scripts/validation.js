import Inputmask from "inputmask";

const buttons = $("button[type=submit]");

// Phone validation

const phoneMask = new Inputmask("+7 (999) 999-99-99", {
  showMaskOnHover: false,
});
phoneMask.mask("input[type=tel]");

$("input[type=tel]").on("input", (e) => {
  if (/\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g.test($(e.target).val()))
    $(e.target).removeClass("error");
});

// Text validation

$("input[type=text]").on("input", (e) => {
  $(e.target).removeClass("error");
});

// Submit event

$(buttons).on("click", (e) => {
  e.preventDefault();

  const form = $(`#${$(e.target).attr("form")}`),
    phone = form.find("input[type=tel]"),
    text = form.find("input[type=text]");

  $(phone).each(function (index, element) {
    if (!/\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g.test($(element).val()))
      $(element).addClass("error");
  });

  $(text).each(function (index, element) {
    if (!$(text).val())
      $(element).addClass("error");
  });
});
