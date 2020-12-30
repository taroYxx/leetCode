var canCompleteCircuit = function(gas, cost) {
    
    let count = 0;
    let min = Infinity;
    let index = 0;
    for (let i = 0; i < gas.length; i++) {
        count = count + gas[i] - cost[i];
        if(min > count){
            min = count;
            index = i
        }        
    }
    if(count < 0) return -1;
    if(index+1 == gas.length) return 0;
    return index+1;

};

console.log(canCompleteCircuit([3,1,1], [1,2,2]))