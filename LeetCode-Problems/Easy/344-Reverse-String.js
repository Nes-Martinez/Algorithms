 const reverseString = function (str) {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      [str[left++], str[right--]] = [str[right], str[left]];
    }
  
    return str;
  };