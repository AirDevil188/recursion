function promptWindow() {
  let input = prompt(
    "Type multiple array values that are separated with commas"
  ).split(",");
  let inputArray = input.map(Number);
  console.log(mergeSort(inputArray));
}

function mergeSort(arr) {
  let start = 0;
  let end = arr.length;
  let mergedArray = [];

  if (end < 2) {
    return arr;
  } else {
    let mid = end / 2;
    let leftSideOfArray = arr.slice(start, mid);
    let rightSideOfArray = arr.slice(mid, end);
    mergeSort(leftSideOfArray);
    mergeSort(rightSideOfArray);
    merge(leftSideOfArray, rightSideOfArray, arr);
  }

  return mergedArray.concat(arr);
}

function merge(leftSideOfArray, rightSideOfArray, mergedArray) {
  let leftSideOfArrayLength = leftSideOfArray.length;
  let rightSideOfArrayLength = rightSideOfArray.length;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftSideOfArrayLength && j < rightSideOfArrayLength) {
    if (leftSideOfArray[i] <= rightSideOfArray[j]) {
      mergedArray[k++] = leftSideOfArray[i++];
    } else {
      mergedArray[k++] = rightSideOfArray[j++];
    }
  }
  while (i < leftSideOfArrayLength) {
    mergedArray[k++] = leftSideOfArray[i++];
  }
  while (j < rightSideOfArrayLength) {
    mergedArray[k++] = rightSideOfArray[j++];
  }
}

promptWindow();
