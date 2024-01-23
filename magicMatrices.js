function isMagicalMatrix(matrix) {
    // Calculate the sum of the first row to use as a reference
    const referenceSum = matrix[0].reduce((acc, current) => acc + current, 0);

    // Check rows
    for (const row of matrix) {
        if (row.reduce((acc, current) => acc + current, 0) !== referenceSum) {
            return false;
        }
    }

    // Check columns
    for (let col = 0; col < matrix[0].length; col++) {
        let columnSum = 0;
        for (const row of matrix) {
            columnSum += row[col];
        }

        if (columnSum !== referenceSum) {
            return false;
        }
    }

    return true;
}

// Example usage:
const inputMatrix = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
];
const output = isMagicalMatrix(inputMatrix);
console.log(output);