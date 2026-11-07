const marker = document.querySelector("#hiroMarker");
const banner = document.querySelector("#statusBanner");

if (marker && banner) {

    marker.addEventListener("markerFound", function () {
        banner.textContent = "Space Museum Detected!";

        banner.classList.remove("lost");
        banner.classList.add("found");
    });

    marker.addEventListener("markerLost", function () {
        banner.textContent =
            "Marker Lost! Point your camera at the Hiro marker.";

        banner.classList.remove("found");
        banner.classList.add("lost");
    });

}
