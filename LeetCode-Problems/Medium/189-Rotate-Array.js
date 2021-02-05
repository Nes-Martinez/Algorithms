function rotate (numbers, x) {
    let count = 0
    let newNumber;
    while (count < x) {
        newNumber = numbers.pop();
        numbers.unshift(newNumber)
        count++
    }
   // console.log(numbers)
   return numbers; 
}

//Tests 
rotate([1,2,3,4,5,6,7], 3)
// Output: [5,6,7,1,2,3,4]