let data; // Declare data variable globally

// Fetch JSON data and populate dropdown menu
fetch('data/json/cancer_air_pollution.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData; // Assign fetched data to the global variable
        // Extract city names from the data
        let cities = data.map(city => city.CityName);
        
        // Populate the dropdown menu with city names
        let dropdownMenu = d3.select("#selDataset");
        cities.forEach(city => {
            dropdownMenu.append('option').text(city).property('value', city);
        });
        
        // Initialize the dashboard with the first city
        init(data[0]);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to initialize the dashboard with metadata and bar plot
function init(cityData) {
    buildMetadata(cityData);
    buildBarPlot(cityData);
}

// Function to build metadata
function buildMetadata(cityData) {
    // Select panel from HTML and set to variable
    let panel = d3.select("#sample-metadata");
    panel.html("");

    // Loop through each key-value pair in city data and append to panel
    for (let [key, value] of Object.entries(cityData)) {
        // Filter keys to include only specific ones
        if (["Year", "StateAbbr", "StateDesc", "CityName", "DataSource", "UniqueID", "PopulationCount", "Latitude", "Longitude"].includes(key)) {
            panel.append("h6").text(key.toUpperCase() + ": " + value);
        }
    }
}

// Function to build bar plot
function buildBarPlot(cityData) {
    // Extract only the pollutant names and values from city data
    let pollutants = Object.keys(cityData).filter(key => ["CO", "NO", "NO2", "O3", "SO2", "PM2.5", "PM10", "NH3"].includes(key));
    let values = pollutants.map(pollutant => cityData[pollutant]);

    // Create trace for bar plot
    let trace1 = {
        x: values,
        y: pollutants,
        type: "bar",
        orientation: "h",
        marker: {
            color: 'rgba(50,171,96,0.6)',
            width: 1
        }
    };

    // Define layout
    let layout = {
        title: "Pollutant Levels in " + cityData.CityName,
        xaxis: { title: "Pollutant Level" },
        yaxis: { title: "Pollutant" }
    };

    // Plot the bar plot
    Plotly.newPlot("bar", [trace1], layout);
}

// Function to update plots when city is changed
function optionChanged(cityName) {
    // Find the selected city data from the fetched data
    let selectedCity = data.find(city => city.CityName === cityName);
    
    // Update metadata and bar plot with selected city data
    buildMetadata(selectedCity);
    buildBarPlot(selectedCity);
}
