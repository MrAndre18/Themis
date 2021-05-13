// /* src/app.js */
import "jquery";
require("Scripts/loader");

// Styles
import "Styles/_app.scss";

$(() => {
  require("Scripts/convert-svg");
  require("Scripts/sliders");
  require("Scripts/validation");
  require("Scripts/modals");
  require("Scripts/select");
  require("Scripts/calendar");
  require("Scripts/ymap");
  require("Scripts/header");
  require("Scripts/practices");
});
