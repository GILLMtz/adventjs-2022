function checkPart(part) {
    if (part == "") { return false; }
    const isPalindrome = p => p == p.split('').reverse().join('');
    if (isPalindrome(part)) {
        return true;
    }
    let i = 0, j = part.length - 1;
    while (j > 0 && (part[i] == part[j])) {
        i++; j--;
    }
    return (isPalindrome(part.slice(0, i) + part.slice(i + 1))
        || isPalindrome(part.slice(0, j) + part.slice(j + 1))) ? true : false;
}
module.exports = checkPart;


