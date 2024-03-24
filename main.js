
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-45.00089572533451, 168.79121176867542], 12);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/cltyydmci01x001raftqa5iwo/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 15,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-45.04252649449391, 168.67000064948405]).addTo(map)
	.bindPopup('Queenstown Golf Club');

const marker2 = L.marker([-44.95530065137883, 168.82497050366945]).addTo(map)
	.bindPopup('The Hills Golf Club');

const marker3 = L.marker([-44.95622347652524, 168.8441928035524]).addTo(map)
	.bindPopup('Arrowtown Golf Club');

const marker4 = L.marker([-44.96755011337178, 168.8717886260097]).addTo(map)
	.bindPopup('Barley Station Golf Course').openPopup();

const marker5 = L.marker([-44.94787489009986, 168.81448566934608]).addTo(map)
	.bindPopup('Millbrook Golf Club').openPopup();

const marker6 = L.marker([-45.01811152878339, 168.76182887540622]).addTo(map)
	.bindPopup('Proposed Shotover Public Golf Facility').openPopup();

const marker7 = L.marker([-45.01626739632814, 168.73290280957818]).addTo(map)
	.bindPopup('Frankton Golf Centre').openPopup();





// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.0,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-45.01961465628541, 168.73393600901136],
		[-45.01821921364148, 168.74024456409595],
		[-45.01694508413493, 168.74050205614026],
		[-45.01809786919567, 168.74264782317582],
		[-45.01573160110378, 168.75912731400908],
		[-45.022253770039924, 168.75492161061936],
		[-45.02474109922661, 168.7451798282778],
		[-45.02574206706105, 168.73801296637896],
		[-45.01961465628541, 168.73393600901136],				
	],{
		color: 'Orange',
		fillColor: '#FF7F50',
	}).addTo(map).bindPopup('Queenstown Airport').openPopup();




// END OF DOCUMENT