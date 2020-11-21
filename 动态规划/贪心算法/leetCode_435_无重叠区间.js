var eraseOverlapIntervals = function(intervals) {
    let n = intervals.length;
    if(n == 0) return 0;
    intervals = intervals.sort(function(a,b){
        return a[1]>b[1] ? 1 : -1;
    })
    let x_end = intervals[0][1];
    let count = 1;
    for (let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] >= x_end){
            count = count + 1;
            x_end = intervals[i][1]
        }
    }

    return n - count;

};


console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]));