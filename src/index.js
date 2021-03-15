
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
