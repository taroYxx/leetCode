var orangesRotting = function(grid) {
    
    let count = 0;
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1){
                count++;
            }else if(grid[i][j] == 2){
                count++;
                queue.push([i, j]);
            }
        }
    }
    if(count == 0) return 0;
    let size = 0;
    let total = 0;
    while(queue.length > 0){
        let queueLength = queue.length;
        size += queue.length;
        if(size == count) return total;
        for (let i = 0; i < queueLength; i++) {
            console.log(queue);
            let [p, q] = queue.shift();
            if(p>0 && grid[p-1][q] == 1){
                grid[p-1][q] = 2;
                queue.push([p-1, q]);
            }
            if(q > 0 && grid[p][q-1] == 1){
                grid[p][q-1] = 2;
                queue.push([p, q-1]);
            }
            if(p + 1< grid.length && grid[p+1][q] == 1 ){
                grid[p+1][q] = 2;
                queue.push([p+1, q]);
            }
            if(q+1 < grid[0].length && grid[p][q+1] == 1){
                grid[p][q+1] = 2;
                queue.push([p, q+1]);
            }
        }
        total++;
    }

    return -1;

   

};

console.log(orangesRotting([[0,2]]))