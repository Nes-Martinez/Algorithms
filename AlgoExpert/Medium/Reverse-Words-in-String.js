 // O(time) | O(n) space, where n is the length of the string

 function reverseWordsInString(string) {
     const words =[];
     let wordStart = 0
     for (let indx = 0; indx < string.length; indx++) {
         const individual = string[indx];

         if (individual === ' ') {
             words.push(string.slice(wordStart, indx));
             wordStart = indx;
         } else if (string[wordStart] === ' ' ) {
             words.push(' ');
             wordStart = indx;
         }
     }

     words.push(string.slice(wordStart));

    fullReverse(words);
    return words.join('');
}


function fullReverse(arr) {
    let start = 0;
    let end = arr.length -1;
    
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++
        end--
    }
}

console.log(reverseWordsInString("AlgoExpert is the best!"));
// best! the is Algoexpert
console.log(reverseWordsInString("Does this alrorithm work?"));
// work? algorithm this Does