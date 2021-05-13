if ($(".calendar").width()) {
  const date = new Date(),
    calendar = $(".calendar"),
    btnPrev = $(calendar).find(".calendar__month-prev"),
    btnNext = $(calendar).find(".calendar__month-next"),
    dateInput = $(calendar).find("[data-type=js-choosed-date]");

  const setNewDate = (day, month, year) => {
    day = +day;
    month = +month;
    year = +year;

    let choosedDay = day < 10 ? "0" + day : day,
      choosedMonth = month < 10 ? "0" + month : month,
      choosedYear = year,
      choosedDate = `${choosedDay}.${choosedMonth}.${choosedYear}`;
    $(dateInput).data("date", choosedDate);
  };

  setNewDate(date.getDate(), date.getMonth() + 1, date.getFullYear());

  const parseDate = (dateString) => {
    const dateArray = dateString.split(".");

    return {
      day: +dateArray[0],
      month: +dateArray[1],
      year: +dateArray[2],
    };
  };

  const renderCalendar = () => {
    date.setDate(1);

    const month = $(calendar).find(".month"),
      year = $(calendar).find(".year"),
      days = $(calendar).find(".calendar__days"),
      lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
      firstDayIndex = date.getDay(),
      lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay(),
      nextDays = 7 - lastDayIndex;

    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    $(month).text(months[date.getMonth()]);
    $(year).text(date.getFullYear());
    $(days).html("");

    // Даты предыдущего месяца
    for (let x = (firstDayIndex === 0 ? 7 : firstDayIndex) - 1; x > 0; x--) {
      $(days).append(
        $(
          "<div class='calendar__day calendar__day-prev'>" +
            "<span>" +
            (prevLastDay - x + 1) +
            "</span>" +
            "</div >"
        )
      );
    }

    // Даты текущего месяца
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === parseDate($(dateInput).data("date")).day &&
        parseDate($(dateInput).data("date")).month == date.getMonth() + 1
      ) {
        $(days).append(
          $(
            "<div class='calendar__day calendar__day-current'>" +
              "<span>" +
              i +
              "</span>" +
              "</div >"
          )
        );
      } else if (
        i < new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        $(days).append(
          $(
            "<div class='calendar__day calendar__day_disabled'>" +
              "<span>" +
              i +
              "</span>" +
              "</div >"
          )
        );
      } else {
        $(days).append(
          $(
            "<div class='calendar__day'>" + "<span>" + i + "</span>" + "</div >"
          )
        );
      }
    }

    //Даты следующего месяца
    for (let j = 1; j <= nextDays; j++) {
      $(days).append(
        $(
          "<div class='calendar__day calendar__day-next'>" +
            "<span>" +
            j +
            "</span>" +
            "</div >"
        )
      );
    }

    const daysItems = $(calendar).find(".calendar__day");

    $(daysItems).each(function (index, day) {
      if (
        !$(day).hasClass("calendar__day-next") &&
        !$(day).hasClass("calendar__day-prev")
      ) {
        if (
          $(day).text() == new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        )
          $(day).addClass("calendar__day-today");
      }
    });

    $(daysItems).on("click", (e) => {
      if (
        !$(e.delegateTarget).hasClass("calendar__day-next") &&
        !$(e.delegateTarget).hasClass("calendar__day-prev") &&
        !$(e.delegateTarget).hasClass("calendar__day_disabled")
      ) {
        $(daysItems).each(function (index, day) {
          $(day).removeClass("calendar__day-current");
        });

        $(e.delegateTarget).addClass("calendar__day-current");
        setNewDate(
          $(e.delegateTarget).text(),
          date.getMonth() + 1,
          date.getFullYear()
        );
      }
    });
  };

  $(btnPrev).on("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  $(btnNext).on("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
}
