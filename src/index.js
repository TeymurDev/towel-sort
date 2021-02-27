
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (matrix) {

    const array = [];

    for (let i = 0; i < matrix.length; i++) {

      let arrays = matrix[i];

      if (i % 2 === 0) {

        for (let j = 0; j < arrays.length; j++) {
          array.push(arrays[j]);
        }

      } else {

        for (let j = arrays.length - 1; j >= 0; j--) {
          array.push(arrays[j]);
        }

      }

    }

    return array;

  } else {

    return [];

  }

}
