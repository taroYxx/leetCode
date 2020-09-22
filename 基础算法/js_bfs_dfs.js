var map = [[0, 1, 1, 0, 0],
           [0, 0, 1, 1, 0],
           [0, 1, 1, 1, 0],
           [1, 0, 0, 0, 0],
           [0, 0, 1, 1, 0]];

function bfs(arr, start, end){
    var row = arr.length;
    var quene = [];
    var i = start;
    var visited = {} //记录遍历顺序;
    var order = [] //记录顺序，给自己看
    quene.push(i) // 先把跟节点加入
    while(quene.length){ // 如果队列没有被清空，也就是还没有遍历完毕
        for (let j = 0; j < row; j++) {
            if(arr[i][j]){
                if(!visited[j]){
                    quene.push(j) //队列加入未访问的
                }
            }
        }
        quene.shift()// 取出队列第一个
        visited[i] = true; //记录已经访问
        while(visited[quene[0]]){
            quene.shift()
        }
        order.push(i) //记录顺序
        i = quene[0]
        console.log(visited:visited, visited:!!visited[end], order:order);
    }
}

bfs(map, 0, 4)
