function sortNumbers(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const result = [];

    while (sortedArr.length > 0) {
        result.push(sortedArr.shift()); // Take the smallest
        if (sortedArr.length > 0) {
            result.push(sortedArr.pop()); // Take the largest
        }
    }

    return result;
}

// Example usage:
const inputNumbers = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
const output = sortNumbers(inputNumbers);
console.log(output);