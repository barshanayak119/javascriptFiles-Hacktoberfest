function reverseString(str) {

    // empty string
    let str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str += str[i];
    }
    return str;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
