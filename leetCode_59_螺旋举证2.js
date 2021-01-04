var generateMatrix = function(n) {

    let res = new Array(n);
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(n).fill(0);
        
    }
    let vector = 0;
    let count = 1;
    let i = 0;
    let j = 0;
    while(count <= n * n){
        if(i >= n || j >= n || i < 0 || j < 0 || res[i][j] != 0){
            vector = (vector + 1) % 4
            if(vector == 0){
                j = j + 1;
                i = i + 1;
            }else if(vector == 1){
                j = j - 1;
                i = i + 1;
            }else if(vector == 2){
                i = i - 1;
                j = j - 1;
            }else{
                i = i - 1;
                j = j + 1;
            }
        }
        
        res[i][j] = count;
        count ++;
        if(vector == 0){
            j++;
        }else if(vector == 1){
            i++;
        }else if(vector == 2){
            j--;
        }else if(vector == 3){
            i--;
        }
      
    }
    return res;
};

console.log(generateMatrix(3))