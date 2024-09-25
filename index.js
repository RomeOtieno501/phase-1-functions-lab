function distanceFromHqInBlocks(someValue) {
    const hpLocation = 42;
    return Math.abs(someValue - hpLocation);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
  return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
}

// Code your solution in this file!
