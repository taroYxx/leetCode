var reverseWords = function(s) {
    let array = s.split(" ")
    let queue = [];
    let word = "";
    let res = [];

    for (let i = 0; i < s.length; i++) {
       if(s[i] == " "){
          while(queue.length > 0){
              word = word + queue.shift();
          }
          if(word.length > 0){
              res.push(word);
              word = ""
          }
       }else{
            queue.push(s[i])
       }
    }
    if(queue.length > 0){
        word = ""
        while(queue.length > 0){
            word = word + queue.shift();
        }
        res.push(word)
    }
    
    return res.reverse().join(" ");


};

console.log(reverseWords("the sky is blue"))