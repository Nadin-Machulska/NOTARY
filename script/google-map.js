let map;

function initMap() {
  map = new google.maps.Map(document.querySelector(".footer__map"), {
    center: { lat: 48.00860007434883, lng: 33.48527450431575 }, 
    zoom: 18,
  });

  new google.maps.Marker({
      position:  { lat: 48.00860007434883, lng: 33.48527450431575 },
      map,
    });

}  
window.initMap = initMap;