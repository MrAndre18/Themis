if ($("#map")) {
  ymaps.ready(init);

  function init () {
    const map = new ymaps.Map("map", {
      center: [51.66816434679807, 39.20840759508146],
      zoom: 17,
      controls: ["zoomControl"],
      behaviors: ["drag"],
    });

    const placemark = new ymaps.GeoObject(
      {
        geometry: {
          type: "Point",
          coordinates: [51.66816434679807, 39.20840759508146],
        },
      },
      {
        preset: "islands#redIcon",
      }
    );

    map.geoObjects.add(placemark);
  }
}