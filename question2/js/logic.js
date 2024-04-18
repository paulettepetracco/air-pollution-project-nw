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

// Function to calculate marker color based on sum of pollutants using chroma.js
function calculateMarkerColor(sum) {
    // Use a logarithmic scale and adjust the domain to match the range of sum values
    return chroma.scale(['#00ff00', '#ff0000']).domain([0, 1.6]).mode('lab')(sum).hex();
}

// Function to calculate sum of each pollutant's value's ratio to its maximum value for a city
function calculatePollutantSum(city) {
    // Define maximum values for each pollutant
    const maxValues = {
        "CO": 15400,
        "NO": 100,
        "NO2": 200,
        "O3": 180,
        "SO2": 350,
        "PM2.5": 75,
        "PM10": 200,
        "NH3": 200
    };

    // Set sum initially at zero
    let sum = 0;

    // Calculate sum of each pollutant's value's ratio to its maximum value
    Object.keys(maxValues).forEach(pollutant => {
        sum += city[pollutant] / maxValues[pollutant];
    });

    return sum;
}

// Function to create markers for a specific disease layer
function createMarkers(data, disease) {
    let markers = [];
    data.forEach(city => {
        // Create a marker for each city
        let marker = L.circleMarker([city.Latitude, city.Longitude], {
            radius: calculateMarkerSize(city.Data_Value),
            fillColor: calculateMarkerColor(calculatePollutantSum(city)), // Change to the desired pollutant for color
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });

        // Construct popup content with city information and pollutant concentrations
        let popupContent = `<b>${city.CityName}</b><br>${city.MeasureId}: ${city.Data_Value}<br>`;
        popupContent += "<b>Pollutant Concentrations:</b><br>";
        Object.keys(city).forEach(key => {
            if (["CO", "NO", "NO2", "O3", "SO2", "PM2.5", "PM10", "NH3"].includes(key)) {
                popupContent += `${key}: ${city[key]}<br>`;
            }
        });

        // Add popup with city information and pollutant concentrations
        marker.bindPopup(popupContent);

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
fetch('data/json/cancer_air_pollution.json')
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
fetch('data/json/copd_air_pollution.json')
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
fetch('data/json/chd_air_pollution.json')
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
fetch('data/json/casthma_air_pollution.json')
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

// Create a legend
let legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    let div = L.DomUtil.create('div', 'info legend legend-control'),
        labels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'],
        colors = chroma.scale(['#00ff00', '#ff0000']).colors(labels.length); // Generate colors in a gradient from green to red

    // Loop through the colors and labels to generate legend entries
    for (let i = 0; i < labels.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            labels[i] + (labels[i + 1] ? '&ndash;' + labels[i + 1] + '<br>' : '+');
    }

    return div;
};

// Add legend to map
legend.addTo(map);


