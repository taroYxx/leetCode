var removeKdigits = function(num, k) {
    

    let count = 0;
    let array = num.split("")

    for (let i = 0; i < array.length; i++) {
        if(count < k && i < array.length-1){
            if(Number(array[i]) > Number(array[i+1])){
                array[i] = "@"
                count = count + 1
            }
        }else{
            break;
        }
    }
    if(count < k){
        let remian  = k - count;
        for (let i = 0; i < remian; i++) {
            array[num.length - i - 1] = "@";
        }
    }

    console.log()
    let res =  parseInt(array.join("").replace(/\@/g,""));
    return isNaN(res)? "0" : String(res) ;

    

};


console.log(removeKdigits("1234567890", 10))