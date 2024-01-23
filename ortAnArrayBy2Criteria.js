function sortArrayByCriteria(strings) {
    const compareFunction = (a, b) => {
        // Compare by length (primary criteria)
        const lengthComparison = a.length - b.length;

        if (lengthComparison !== 0) {
            return lengthComparison;
        }

        // If lengths are equal, compare alphabetically (secondary criteria)
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
    };

    const sortedArray = strings.sort(compareFunction);

    for (const string of sortedArray) {
        console.log(string);
    }
}

// Example usage:
const inputStrings = ['alpha', 'beta', 'gamma'];
sortArrayByCriteria(inputStrings);