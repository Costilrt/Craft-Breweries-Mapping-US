// data
const dataTable = data;
  //console.log(data)
// loop through the data
myobject = {}
lat = [];
lon = [];
brewery_ids = [];
brewery_names = [];
cities = [];
states = [];
addresses = [];
zips = [];
countries = [];

let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1Ijoic291amk4OCIsImEiOiJja2NodWI2eHUwbDBkMnhsaThuMTR2OTY0In0.9h5D2hS0u5KoOKGW7kNpPg"
});

// Creating map object
var myMap = L.map("map", {
  center: [39.0119, -98.4842],
  zoom: 6,
  layers: street
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1Ijoic291amk4OCIsImEiOiJja2NodWI2eHUwbDBkMnhsaThuMTR2OTY0In0.9h5D2hS0u5KoOKGW7kNpPg"
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1Ijoic291amk4OCIsImEiOiJja2NodWI2eHUwbDBkMnhsaThuMTR2OTY0In0.9h5D2hS0u5KoOKGW7kNpPg"
});

let baseMaps = {
  "Streets": street,
  "Satellite": satelliteStreets,
  "Dark": dark
};

L.control.layers(baseMaps).addTo(myMap);

for (var i = 0; i < dataTable.length; i++) {
  if ((i % 100) == 0) {
  
    L.marker([dataTable[i].lat, dataTable[i].lon]).bindPopup("City:" + data[i].city + "<hr>" + "<br> Brewery Name:" + data[i].brewery_name + 
    "<br> Beer Name:" + data[i].beer_name + "<br> Beer Style:" + data[i].beer_style + "<br> Overall Review:" + data[i].review_overall).addTo(myMap);
  }  
} 