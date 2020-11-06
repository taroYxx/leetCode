var coinChange = function(coins, amount) {

    let count = 0;
    let array = coins.sort((x,y)=> x-y)
    while(amount > 0){
        for (let i = array.length-1; i >= 0; i--) {
            if(amount >= array[i]){
                amount = amount - array[i];
                count = count + 1;
                break;
            }
            if(amount < array[i] && i == 0){
                return -1;
            }
        }
    }
    return count


};

console.log(coinChange([186,419,83,408],6249))