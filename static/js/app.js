// from data.js
var tableData = data;
console.log(tableData);



// YOUR CODE HERE!
// Write code that appends a table to your web 
// page and then adds new rows of data for each UFO sighting.
var tbody = d3.select(#tbody);

// For each loop to log sighting in table body
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row =tbody.append("tr")

    // Use Key Value to pull from data source and place into table
    Object.defineProperties(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value)
    })


})


// ----------------------------------------------------

var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#filter-btn");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(datetime === inputValue);
  
    console.log(filteredData);
  
    // BONUS: Calculate summary statistics for the age field of the filtered data
  
    // First, create an array with just the age values
    var ages = filteredData.map(person => person.age);
  
    // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    var mean = math.mean(ages);
    var median = math.median(ages);
    var mode = math.mode(ages);
    var variance = math.var(ages);
    var standardDeviation = math.std(ages);
  
    // Then, select the unordered list element by class name
    var list = d3.select(".summary");
  
    // remove any children from the list to
    list.html("");
  
    // append stats to the list
    list.append("li").text(`Mean: ${mean}`);
    list.append("li").text(`Median: ${median}`);
    list.append("li").text(`Mode: ${mode}`);
    list.append("li").text(`Variance: ${variance}`);
    list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  };