// 0(n^2) time | 0(n^2) space or
// 0(n^3) time | 0 (n^2) space

function fourNumberSum(arr, targetSum) {
    // your code goes here
    let allSums = {};
    let quadruples = [];
    

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let currentSum = arr[i] + arr[j];
        let variable = targetSum - currentSum;

        if (allSums[variable]) {
          for (const pair of allSums[variable]) {
            quadruples.push(pair.concat([arr[i], arr[j]]));
          }
        }
      }

      for (let k = 0; k < i; k++) {
        let currentSum = arr[i] + arr[k];

        if (!allSums[currentSum]) {
          allSums[currentSum] = [[arr[k], arr[i]]];
        } else {
          allSums[currentSum].push([arr[k], arr[i]]);
        }
      }

    }

    return quadruples;
  }