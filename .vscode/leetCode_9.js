// var isPalindrome = function(x) {
//     let index = String(x).length >> 1;
//     let s = String(x);
//     for (let i = 0; i < index; i++) {
//         if(s[i] == s[s.length-i-1]){

//         }else{
//             console.log('0000')
//             return false;
//         }
//     }
//     console.log('111')
//     return true;
// };

var isPalindrome = function(x) {
    let s = String(x);
    let reS = s.split('').reverse().join('');

    console.log(s == reS)
    return s == reS ? true : false
};


isPalindrome(11123211)