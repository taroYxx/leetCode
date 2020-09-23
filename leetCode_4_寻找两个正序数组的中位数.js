var findMedianSortedArrays = (nums1, nums2) => {
    let len1 = nums1.length, len2 = nums2.length
    if (len1 > len2) return findMedianSortedArrays(nums2, nums1)
    let len = len1 + len2
    let start = 0, end = len1 
    let partLen1, partLen2 
  
    while (start <= end) {
      partLen1 = (start + end) >> 1
      partLen2 = ((len + 1) >> 1) - partLen1
  
      let L1 = partLen1 === 0 ? -Infinity : nums1[partLen1 - 1]
      let L2 = partLen2 === 0 ? -Infinity : nums2[partLen2 - 1]
      let R1 = partLen1 === len1 ? Infinity : nums1[partLen1]
      let R2 = partLen2 === len2 ? Infinity : nums2[partLen2]
  
      if (L1 > R2) {
        end = partLen1 - 1
      } else if (L2 > R1) {
        start = partLen1 + 1
      } else { // L1 <= R2 && L2 <= R1
        return len % 2 === 0 ?
          (Math.max(L1, L2) + Math.min(R1, R2)) / 2 :
          Math.max(L1, L2)
      }
    }
  }
  
// var findMedianSortedArrays = function(nums1, nums2) {
//     if (nums1.length > nums2.length) {
//         [nums1, nums2] = [nums2, nums1]
//       }
//       const m = nums1.length;
//       const n = nums2.length;
//       let jishu = 0
//       let localIndex = 0;
//       if ((m+n)%2 == 1){
//         localIndex = Math.ceil((m+n)/2);
//         jishu = 1;
//       }else{
//         localIndex = (m+n)/2 + 1;
//         jishu = 0;
//       }

    
//       let i = 0;
//       let j = 0;
//       let result = [];

//       for (let index = 0; index < localIndex; index++) {
//         if(i < m && j < n){
//             if(nums1[i] < nums2[j]){
//                 result.push(nums1[i]);
//                 i = i + 1;
//             }else{
//                 result.push(nums2[j]);
//                 j = j + 1;
//             }
//         }else if(i == m){
//             result.push(nums2[j]);
//             j = j + 1;
//         }else{
//             result.push(nums1[i]);
//             i = i + 1;
//         }
//       }
//       console.log(result);
//       if(jishu == 1){
//           console.log(result.pop())
//       }else{
//           let p = result.pop();
//           let q = result.pop();
//           console.log((q+p)/2);
//       }
// };

findMedianSortedArrays([1,2,3,4,4], [2,2,2,3,4,5])