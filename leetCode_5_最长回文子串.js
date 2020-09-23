// 马拉车 
var longestPalindrome = function(s) {
    let len = s.length;
    if(len < 2){
        return s
    }

    var reg=new RegExp("","g")
    let newStr = s.replace(reg,"#")
    let res = 1;
    let start = 0;
    for (let i = 0; i < newStr.length; i++) {
        let len = centerSpread(newStr, i, i)
        if(len > res){
            res = len;
            start = (i-len) >> 1;
        }
    }
    
    console.log(s.slice(start+1, start+res))
};

function centerSpread(s, left, right){
    let len = s.length;
    let a = 0;
    while(left >= 0 && right < len){
        if(s[left] == s[right]){
            left = left - 1;
            right = right + 1;
            a = a + 1;
        }else{
            break
        }
    }
    return a;   
}





// 中心扩散法
// var longestPalindrome = function(s) {
//     let len = s.length;
//     if(len < 2){
//         return s
//     }

//     let res = 1;
//     let maxStr = s[0];
    
//     for (let i = 0; i < s.length; i++) {
//         let jishu = centerSpread(s, i, i);
//         let oushu = centerSpread(s, i, i+1);
//         let jishuL = jishu.length;
//         let oushuL = oushu.length;
//         let maxL = jishuL >= oushuL ? jishu : oushu;        
//         maxStr = maxL.length > maxStr.length ? maxL : maxStr;
//     }
//     console.log(maxStr);
// };

// function centerSpread(s, left, right){
//     let len = s.length;
//     while(left >= 0 && right < len){
//         if(s[left] == s[right]){
//             left = left - 1;
//             right = right + 1;
//         }else{
//             break
//         }
//     }
//     return s.slice(left + 1, right);

// }

longestPalindrome('ababba')