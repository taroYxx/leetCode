var findMinArrowShots = function(points) {

    let n = points.length;
    if(n == 0) return 0;
    points = points.sort(function(a, b){
        return a[1] > b[1] ? 1 : -1;
    });

    let x_start = points[0][1];
    let count = 1;  // 独立的， 没有集合的个数，所以说 < 没有=。
    for (let i = 0; i < points.length; i++) {
        if(x_start < points[i][0]){
            count = count + 1;
            x_start = points[i][1];
        }
    }
    return count 
};


console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));