// Initialize Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13); // Set the initial view coordinates and zoom level

// Add base map layer (you can choose other map providers like OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load GeoJSON data from file
fetch('acidrain.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer to map
        L.geoJSON(data).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });