function rotateArray(arr, rotations) {
    rotations = rotations % arr.length; // Ensure rotations are within array length

    const rotatedArray = arr.slice(-rotations).concat(arr.slice(0, -rotations));
    console.log(rotatedArray.join(' '));
}

// Example usage:
rotateArray(['1', '2', '3', '4'], 2);