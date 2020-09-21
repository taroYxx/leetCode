var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";

    let reSort = strs.sort();
    let first = reSort[0];
    let last = reSort[reSort.length - 1];
    let index = Math.min(first.length, last.length);
    let result = "";
    for (let i = 0; i < index; i++) {
        if(first[i]==last[i]){
            result = result + first[i];
        }else{
            console.log(result);
            return result;
        }      
    }
    return result;

};

longestCommonPrefix(["flower","flow","flight"])