document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("village-map");

  if (map) {
    const panzoom = Panzoom(map, {
      maxScale: 5,
      minScale: 1,
      contain: "outside"
    });

    
    map.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);
  }
});