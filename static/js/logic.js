// Create Leaflet map
let map = L.map('map').setView([40, -100], 4);

// Add the OpenStreetMap tile layer as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to calculate marker size based on data value
function calculateMarkerSize(value) {
    // Adjust the multiplier and power factor for a more dramatic effect
    return Math.pow(value/3.1, 2.5);
}

// Function to calculate marker color based on sum of pollutants using Chroma.js
function calculateMarkerColor(sum) {
    // Use a logarithmic scale and adjust the domain to match the range of sum values
    return chroma.scale(['#00ff00', '#ff0000']).domain([1, 20]).mode('lab')(sum).hex();
}

// Function to create markers for a specific disease layer
function createMarkers(data, disease) {
    let markers = [];
    data.forEach(city => {
        // Create a marker for each city
        let marker = L.circleMarker([city.Latitude, city.Longitude], {
            radius: calculateMarkerSize(city.Data_Value),
            fillColor: calculateMarkerColor(city[`PM2.5`]), // Change to the desired pollutant for color
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });

        // Add a popup with city information
        marker.bindPopup(`<b>${city.CityName}</b><br>${city.MeasureId}: ${city.Data_Value}`);

        // Add the marker to the markers array
        markers.push(marker);
    });

    // Create a layer group for the disease layer
    let diseaseLayer = L.layerGroup(markers);

    // Add the disease layer to the map
    diseaseLayer.addTo(map);

    // Return the disease layer
    return diseaseLayer;
}

// Load data from each JSON file and create layers for each disease
// Cancer
fetch('static/data/json/cancer_air_pollution.json')
    .then(response => response.json())
    .then(cancerData => {
        let cancerLayer = createMarkers(cancerData, 'Cancer (except skin)');
        // Add cancer layer to the layer control
        layerControl.addOverlay(cancerLayer, 'Cancer (except skin)');
    })
    .catch(error => {
        console.error('Error loading cancer data:', error);
    });

// COPD
fetch('static/data/json/copd_air_pollution.json')
    .then(response => response.json())
    .then(copdData => {
        let copdLayer = createMarkers(copdData, 'COPD');
        // Add cancer layer to the layer control
        layerControl.addOverlay(copdLayer, 'COPD');
    })
    .catch(error => {
        console.error('Error loading COPD data:', error);
    });

// CHD
fetch('static/data/json/chd_air_pollution.json')
    .then(response => response.json())
    .then(chdData => {
        let chdLayer = createMarkers(chdData, 'Coronary Heart Disease');
        // Add cancer layer to the layer control
        layerControl.addOverlay(chdLayer, 'Coronary Heart Disease');
    })
    .catch(error => {
        console.error('Error loading Coronary Heart Disease data:', error);
    });

// Current Asthma
fetch('static/data/json/casthma_air_pollution.json')
    .then(response => response.json())
    .then(casthmaData => {
        let casthmaLayer = createMarkers(casthmaData, 'Current Asthma');
        // Add cancer layer to the layer control
        layerControl.addOverlay(casthmaLayer, 'Current Asthma');
    })
    .catch(error => {
        console.error('Error loading Current Asthma data:', error);
    });
// Create a layer control to toggle between disease layers
let layerControl = L.control.layers({}, null, { collapsed: false }).addTo(map);

// // Create a legend
// let legend = L.control({ position: 'bottomright' });

// legend.onAdd = function (map) {
//     let div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 100, 200, 300, 400, 500],
//         labels = [];

//     // Loop through the grades and generate a label with a colored square for each interval
//     for (let i = 0; i < grades.length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + calculateMarkerColor(grades[i] + 1) + '"></i> ' +
//             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//     }

//     return div;
// };

// legend.addTo(map);

