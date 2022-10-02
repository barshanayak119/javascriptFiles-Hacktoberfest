function check_palindrome(string) {
    let length = string.length - 1;
    for(let i = 0; i<j/2; i++){
        if(str[i] !== str[length-i]){
           return false;
        }
    }
    return true;
}

let test_case_1 = "abcdef";
let test_case_2 = "cabdbac";

if(check_palindrome(test_case_1)){
    console.log("test_case_1 is palindrome");
}else{
    console.log("test_case_1 is not palindrome");
}

if(check_palindrome(test_case_2)){
    console.log("test_case_2 is palindrome");
}else{
    console.log("test_case_2 is not palindrome");
}