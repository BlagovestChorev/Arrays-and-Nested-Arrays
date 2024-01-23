function extractIncreasingSubset(numbers) {
    let result = [numbers[0]]; // Initialize the result with the first element as the starting point
    let currentMax = numbers[0]; // Initialize the current maximum as the first element

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= currentMax) {
            result.push(numbers[i]);
            currentMax = numbers[i];
        }
    }

    return result;
}

// Example usage:
const inputNumbers = [1, 3, 8, 4, 10, 12, 3, 2, 24];
const output = extractIncreasingSubset(inputNumbers);
console.log(output);