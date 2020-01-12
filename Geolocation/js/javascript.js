var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ubm9yMDAwMCIsImEiOiJjazJwYnM0eHQwMm8xM2VteXJ3ZXd0OXEwIn0.-CAXKsJFls6ZCfjqJNch9A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v10',
    tileSize: 512,
zoomOffset: -1,
}).addTo(map);
map.locate({setView: true, maxZoom: 16});
