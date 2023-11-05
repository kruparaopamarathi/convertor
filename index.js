function convertHeight() {
    // Get height in centimeters from input
    var heightInCm = document.getElementById("height").value;

    // Convert to other units
    var heightInMeters = heightInCm / 100;
    var heightInInches = heightInCm / 2.54;
    var heightInKilometers = heightInCm / 100000;

    // Display converted heights
    document.getElementById("meters").innerHTML = "Height in meters: " + heightInMeters.toFixed(2) + " m";
    document.getElementById("inches").innerHTML = "Height in inches: " + heightInInches.toFixed(2) + " inches";
    document.getElementById("kilometers").innerHTML = "Height in kilometers: " + heightInKilometers.toFixed(5) + " km";
}
