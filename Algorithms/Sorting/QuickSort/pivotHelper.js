/**
 * Write a function that would
 * return the index of the pivot
 * and would arrange the elements
 * on it's left and right side
 */

 /**
  * 
  * @param {*} arr 
  * @param {*} start 
  * @param {*} end 
  * @returns {Number}
  */
export const pivotHelper = (arr, start, end) => {
    // use pivot as the first element
    let pivot = arr[start],
      swapIndex = start;
  
    // 1. loop through array
    for (var i = start + 1; i <= end; i++) {
      // 2. compare the values
      if (arr[i] < pivot) {
        // swap the element with the element that is greater
        // than pivot so that we have an
        // arranged data around pivot
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
    // 3. swap with the last element for placing the pivot
    // at perfect index
    swap(arr, start, swapIndex);
    // 4. Return the index
    return swapIndex;
  };

  const swap = (arr, start, end) => {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  };
  console.log(pivotHelper([123, 213, 12, 1, 2, 3, 2]));
  