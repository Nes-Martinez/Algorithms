// O(1) time | O(1) space

const validIPAddresses = (str) => {
    const allAddresses = [];
  
    for (let i = 0; i < Math.min(str.length, 4); i++) {
      const threeDigitSegments = ['', '', '', ''];
  
      threeDigitSegments[0] = str.slice(0, i);
  
      if (!validNumber(threeDigitSegments[0])) continue;
  
      for (let j = i + 1; j < i + Math.min(str.length - i, 4); j++) {
        threeDigitSegments[1] = str.slice(i, j);
        if (!validNumber(threeDigitSegments[1])) continue;
  
        for (let k = j + 1; k < j + Math.min(str.length - j, 4); k++) {
          threeDigitSegments[2] = str.slice(j, k);
          threeDigitSegments[3] = str.slice(k);
  
          if (validNumber(threeDigitSegments[2]) && validNumber(threeDigitSegments[3])) {
            allAddresses.push(threeDigitSegments.join('.'));
          }
        }
      }
    }
    return allAddresses;
  };

const validNumber = (str) => {
    const num = Number(str);
        if (num > 255) return false;
    return str.length === num.toString().length;
};
  
console.log(validIPAddresses("1921680"))