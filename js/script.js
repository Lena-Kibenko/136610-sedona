var link = document.querySelector(".ordering");
var popup = document.querySelector(".booking-form");
var close = popup.querySelector("[type=submit]");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var storage = localStorage.getItem("adults");
var storage = localStorage.getItem("children");

if (popup) {
  popup.classList.add("booking-form-close");
}

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("booking-form-show");
  arrival.focus();
  if (storage) {
    adults.value = storage;
    children.value = storage;
  }
});

form.addEventListener("submit", function(event) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    event.preventDefault();
    popup.classList.add("booking-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("booking-form-error");
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("booking-form-show")) {
      popup.classList.remove("booking-form-show");
      popup.classList.remove("booking-form-error");
    }
  }
});

function initMap() {
  var sedona = {lat: 34.869867, lng: -111.760978};
  var map = new google.maps.Map(document.querySelector(".map"), {
    center: sedona,
    scrollwheel: false,
    zoom: 9,
    disableDefaultUI: false
  });
  var marker = new google.maps.Marker({
    position: sedona,
    map: map
  });
}
