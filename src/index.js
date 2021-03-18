
exports.min = function min (array) {
  if (typeof array === 'undefined' || !array.length) {
      return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (typeof array === 'undefined' || !array.length) {
        return 0;
    }
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (typeof array === 'undefined' || !array.length) {
        return 0;
    }
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    return avg;
}


// exports.min = function min (array) {
//   if (!array || array.length === 0) return 0;
//   array.sort((a, b) => a - b);
//   return array[0];
// }

// exports.max = function max (array) {
//   if (!array || array.length === 0) return 0;
//   array.sort((a, b) => b - a);
//   return array[0];
// }

// exports.avg = function avg (array) {
//   if (!array || array.length === 0) return 0;
//   let len = array.length;
//   let sum = array.reduce((a, b) => a + b);
//   return sum / len;
// }

