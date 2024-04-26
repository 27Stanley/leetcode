function medianSortedArr(numSet1, numSet2) {
  let totalLengthOfArray = numSet1.length + numSet2.length;
  console.log(totalLengthOfArray);

  let halfTotalLength = Math.floor(totalLengthOfArray / 2);

  if (numSet1.length > numSet2.length) {
    [numSet1, numSet2] = [numSet2, numSet1];
  }

  const x = numSet1.length;
  const y = numSet2.length;

  let low = 0;
  let high = x;
}

module.exports = medianSortedArr;

//median being the middle
