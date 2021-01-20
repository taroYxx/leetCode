var canFinish = function(numCourses, prerequisites) {
    // 拓扑排序
    let indegree = new Array(numCourses).fill(0);
    let map = {};
    for (let i = 0; i < prerequisites.length; i++) {
        indegree[prerequisites[i][0]]++;
        if(!map[prerequisites[i][1]]){
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
        map[prerequisites[i][1]].push(prerequisites[i][0])
            
    }

    const queue = [];
    for (let i = 0; i < inDegree.length; i++) { // 所有入度为0的课入列
        if (inDegree[i] == 0) queue.push(i);
    }
    while(queue.length){
        let selected = queue.shift()
    }



    console.log(map, indegree)


};


console.log(canFinish(6, [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]))