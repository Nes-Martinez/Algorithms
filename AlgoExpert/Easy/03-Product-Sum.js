// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// O(n) | o(d) space - where n is the total number of elements in the array, including
// sub-elments, and d is the greatest depth of "special" arrays in the array.
 
function productSum(array, multiplier = 1) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
        let current = array[i];
        
        if (Array.isArray(current)) {
            multiplier++;
            sum += multiplier * productSum(current, multiplier);
            multiplier--;
        } else {
            sum += current;
      }
    }
  return sum;
};
