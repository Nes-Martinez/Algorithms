// 0(n) time | 0 (1) space

function isPalindrome(string) {
    let leftIndex = 0;
    let rightIndex = string.length - 1;

    while (leftIndex < rightIndex) {
        if (string[leftIndex] !== string[rightIndex]) 
        return false;
        leftIndex++;
        rightIndex--;
    }

    return true;
}