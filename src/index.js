
exports.min = function min (array) {
    if (!array || array.length === 0) {
        return 0
    }
    let count = array[0]
    for (let i of array) {
        console.log(count)
        if (i < count) {
            count = i
        }
    }
    return count

}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0
    }
    let count = array[0]
    for (let i of array) {
        if (i > count) {
            count = i
        }
    }
    return count
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0
    }
    const sum = array.reduce((i,j) => i + j)
    return sum / array.length 
}
