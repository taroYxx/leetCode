var merge = function(nums1, m, nums2, n) {

    // 倒序
    let target = nums2[n-1];

    for (let i = m+n-1; i >= 0; i--) {
   
        if(nums1[m-1] > nums2[n-1]){
            if(m == 0){
                n--;
                nums1[i] = nums2[n]
            }else{
                nums1[i] = nums1[m-1];
                m--;
            }
            
        }else{
            if(n == 0){
                m--
                nums1[i] = nums1[m];
            }else{
                nums1[i] = nums2[n-1];
                n--;
            }
            
        }       
    }

    return nums1;

};


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))