var merge = function(intervals) {

    let sortArray = intervals.sort(function(a, b){
        return a[0] > b[0] ? 1 : -1;
    })

    let res = [];
    let index = 0 ;
    for (let i = 0; i < intervals.length; i++) {
        if(i == 0){
            res.push(intervals[i]);
            continue;
        }
        if(intervals[i][0] <= intervals[i-1][1]){
            res[index] = mergeArray(intervals[i-1], intervals[i])
            intervals[i] = res[index];
        }else{
            res.push(intervals[i]);
            index = index+1;
        }
        
    }

    function mergeArray(a, b){
        let result = new Array(2);
        result[0] = a[0];
        result[1] = Math.max(a[1], b[b.length-1]) ;
        return result;
    }



    return res
    


};

console.log(merge([[1,4],[0,2],[3,5]]))