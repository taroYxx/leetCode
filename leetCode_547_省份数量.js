var findCircleNum = function(isConnected) {
    const provinces = isConnected.length;
    const visited = new Set();
    let circles = 0;
    for (let i = 0; i < provinces; i++) {
        if (!visited.has(i)) {
            dfs(isConnected, visited, provinces, i);
            circles++;
        }
    }
    return circles;
};

const dfs = (isConnected, visited, provinces, i) => {
    for (let j = 0; j < provinces; j++) {
        if (isConnected[i][j] == 1 && !visited.has(j)) {
            visited.add(j);
            dfs(isConnected, visited, provinces, j);
        }
    }
};


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))