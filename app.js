var mymap = L.map('mapid').setView([33.518589, -86.810356], 13);

L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmVnYW5jbG9wZXIiLCJhIjoiY2toNWEzMjRtMGU4MTJ1b3k1MW9kMmhibCJ9.Slt398-1CygNlV0fD--N8Q',
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'your.mapbox.access.token',
	}
).addTo(mymap);

var marker = L.marker([33.518589, -86.810356]).addTo(mymap);

marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

var circle = L.circle([33.52, -86.825], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500,
}).addTo(mymap);

circle.bindPopup('I am a circle.');

var polygon = L.polygon([
	[33.52, -86.81],
	[33.55, -86.83],
	[33.54, -86.84],
]).addTo(mymap);
