// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(location){
    return Math.abs(hq - location);
}
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}
function distanceTravelledInFeet(a, b){
    return Math.abs((a - b) * 264);
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far";
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25;
    }
}