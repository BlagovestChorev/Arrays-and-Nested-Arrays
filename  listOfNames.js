function printSortedNames(arr) {
    arr.sort((a, b)=> a. localeCompare (b))
    .forEach ((value, i)=> { 
    console. log(`${i + 1}.${value}`)
})
}
printSortedNames(["John", "Bob", "Christina", "Ema"]);