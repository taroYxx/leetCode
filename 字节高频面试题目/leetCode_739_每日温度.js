var dailyTemperatures = function(T) {
    
    // temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
    // 你的输出应该是    [1,  1,  4,  2,  1,  1,  0,  0]。
                    //      [1,  1, -4, -2, 3, 4,   -3]
                    //    [1,1,]
    let res = new Array(T.length).fill(0);
    let stack = [];
    for (let i = 0; i < T.length; i++) {
        while(stack.length != 0 && T[stack[stack.length - 1]] < T[i]){
            res[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i)
        
    }
    return res;
    


};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30,30,30,30,30,31]))