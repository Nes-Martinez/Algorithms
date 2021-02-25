
function runLengthEncoding(string) {
    // Write your code here.
    const finalAnswer = [];
    let runLength = 1;
  
    for (let i = 1; i < string.length; i++) {
      let current = string[i];  
      let previous = string[i - 1];
   
      if (current !== previous || runLength === 9) {
        finalAnswer.push(runLength.toString());
        finalAnswer.push(previous);
        runLength = 0;
      }
      runLength++;
    }
  
    finalAnswer.push(runLength.toString());
    finalAnswer.push(string[string.length - 1]);
    return finalAnswer.join('');
  }