var lengthOfLongestSubstring = function(s) {
    if(s == ""){
        return 0;
    }

    let a = s.split("")
    let window = []
    let size = []
    a.forEach(element => {
        if(window.indexOf(element) == -1){
            window.push(element);
        }else{
            let index = window.indexOf(element);
            window = window.slice(index+1);
            window.push(element);
        }
        // console.log(window);
        size.push(window.length);
    });
    // return Math.max(...size);
    
    console.log();
};


lengthOfLongestSubstring("abcabcbb")