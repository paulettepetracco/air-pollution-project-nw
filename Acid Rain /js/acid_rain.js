const url = "acidrain.json";

// Fetch json and log it 
d3.json(url).then(function(data){
    console.log(data);
})

function init () {

    // Create dropdown menu and dataset list
    let dropdownMenu = d3.select("#selDataset");

    // Set variable and append names
    d3.json(url).then((data) => {
    let name = data.names;

    names.forEach((id) =>{
        console.log(id);
        dropdownMenu.append("option")
            .text(id)
            .property("value",id);
    })

    let sample_one = names[0];
    console.log(sample_one);
    });    

    // Setup charts for future use
    createScatter(sample_one);
    createBar(sample_one);
    createSummary(sample_one);
};