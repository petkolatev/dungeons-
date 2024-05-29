function calculateWalkingTime(steps, footprintLength, speedKmPerHour) {
    // Convert footprint length to meters
    const footprintMeters = footprintLength / 1000;

    // Calculate the total distance in meters
    const totalDistanceMeters = steps * footprintMeters;

    // Calculate the total walking time in hours
    const walkingTimeHours = totalDistanceMeters / (speedKmPerHour * 1000);

    // Calculate the rest time in minutes (1 minute per 500 meters)
    const restTimeMinutes = Math.floor(totalDistanceMeters / 500);

    // Calculate the total walking time including rest time
    const totalWalkingTimeHours = walkingTimeHours + restTimeMinutes / 60;

    // Convert total walking time to hours, minutes, and seconds
    const hours = Math.floor(totalWalkingTimeHours);
    const minutes = Math.floor((totalWalkingTimeHours - hours) * 60);
    const seconds = Math.floor(((totalWalkingTimeHours - hours) * 60 - minutes) * 60);

    // Format the result
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}

// Example usage:
const steps = 2000; // Number of steps
const footprintLength = 0.7; // Footprint length in meters
const speedKmPerHour = 5; // Walking speed in km/h

const walkingTime = calculateWalkingTime(steps, footprintLength, speedKmPerHour);
console.log(`Walking time: ${walkingTime}`);
