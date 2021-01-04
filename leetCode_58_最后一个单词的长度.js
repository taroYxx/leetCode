var lengthOfLastWord = function(s) {
    // let sList = s.split(" ");
    // if(sList.length < 2) return 0;
    // return sList[sList.length-1].length
    let count = 0;
    for (let i = s.length -1 ; i >= 0; i--) {
        if(s[i] == " "){
            if(count == 0){
                continue;
            }else{
                break;
            }
        }
        count ++ ;
    }
    return count;
};

// xxx xxx xxx xxx x /

console.log(lengthOfLastWord("Today is a nice day"))