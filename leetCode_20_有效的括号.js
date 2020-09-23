var isValid = function(s) {
    let array = s.split("");
    if (array.length == 1) return false;

    console.log(array);
    let stack = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element == "(" || element == "[" || element == "{"){
            stack.push(element);
        }
        if(element == ")" ){
            let b = stack.pop();
            if(b != "("){
                console.log(0);
                return false;
            }
        }
        if(element == "]" ){
            let b = stack.pop();
            if(b != "["){
                console.log(0);
                return false;
            }
        }
        if(element == "}" ){
            let b = stack.pop();
            if(b != "{"){
                console.log(0);
                return false;
            }
        }
    }
    console.log(1);
    if(stack.length>0){
        return false;
    }else{
        return true;
    }
    

};

isValid("[")