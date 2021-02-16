 // 0(nlog(n) +  m(log(m)) time | 0(1) space
 
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
    let indexOne = 0;
    let indexTwo = 0;

    while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
      let first= arrayOne[indexOne];
      let second = arrayTwo[indexTwo];

      if (first < second) {
        current = second - first;
        indexOne++;
      } else if (second < first) {
        current = first - second;
        indexTwo++;
      } else {
        return [first, second];
      }

      if (smallest > current) {
        smallest = current;
        smallestPair = [first, second];
      }
    }

    return smallestPair;
  }