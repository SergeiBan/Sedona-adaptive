var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search__form");
var arrival = popup.querySelector(".search__arrival-input input");
var leaving = popup.querySelector(".search__leaving-input input");
var adults = popup.querySelector(".search__adults input");
var children = popup.querySelector(".search__children input");
var isStorageSupport = true;
var storage = "";
var submitButton = popup.querySelector(".find-btn");

try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
} 

if (!popup.classList.contains("modal-show")) {
  popup.classList.add("modal-show");
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-error")) {
    popup.classList.remove("modal-error");
  }
  popup.classList.toggle("modal-show");
  if (storage) {
    arrival.value = storage;
    leaving.value = localStorage.getItem("leaving");
    adults.value = localStorage.getItem("adults");
    children.value = localStorage.getItem("children");
    submitButton.focus();
  } else {
    arrival.focus();
  }
});

popup.addEventListener("submit", function (evt) {
  if ((adults.value == 0) || !arrival.value || !leaving.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("arrival", arrival.value);
    localStorage.setItem("leaving", leaving.value);
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
    }
  }
});

function initMap() {
  var map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 10,
    center: {lat: 34.925382, lng: -111.758469},
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: {lat: 34.925382, lng: -111.758469},
    map: map
  });
}