// Initialize Leaflet map
var myMap = L.map('map').setView([37.0902, -95.7129], 5); 

// Add base map layer (OpenStreetMap)
var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load GeoJSON data for state boundaries
d3.json('../static/data/us-state-boundaries.geojson').then(stateBoundaryData => {
    // Create the GeoJSON layer using the loaded data
    var stateBoundaryLayer = L.geoJSON(stateBoundaryData, {
        style: {
            color: 'black',
            weight: 0.5,
            fill: false,
        }
    }).addTo(myMap);
});

  // Fetch JSON data for first layer
  fetch('../static/data/acidrain.json')
    .then(response => response.json())
    .then(data => plotBubbles(data));

  function plotBubbles(data) {
    var svg = d3.select(map.getPanes().overlayPane).append("svg");

    var g = svg.append("g").attr("class", "leaflet-zoom-hide");

    data.forEach(function(d) {
      var circle = L.circle([d.lat, d.lng], {
        radius: d.r,
      }).addTo(map);

      var marker = g.append("circle")
        .attr("class", "bubble")
        .attr("cx", function() { return map.latLngToLayerPoint([d.lat, d.lng]).x; })
        .attr("cy", function() { return map.latLngToLayerPoint([d.lat, d.lng]).y; })
        .attr("r", d.r);

      var gradient = svg.append("defs")
        .append("radialGradient")
        .attr("id", "gradient")
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%")
        .attr("fx", "50%")
        .attr("fy", "50%");

      gradient.append("stop")
        .attr("offset", "0%")
        .style("stop-color", function() { return d.color1; });
      gradient.append("stop")
        .attr("offset", "100%")
        .style("stop-color", function() { return d.color2; });
    });
  }
