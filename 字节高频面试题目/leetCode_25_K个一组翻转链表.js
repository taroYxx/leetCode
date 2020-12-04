var reverseKGroup = function(head, k) {
    let listIter = head;
    


}




// var reverseKGroup = function(head, k) {
//     const hair = new ListNode(0) // 第一个辅助节点  // 新节点
//     hair.next = head;       // 辅助节点指向头节点
//     let pre = hair;         // 滑动窗口的头

//     while(head != null){
//         let tail = pre;    // 滑动窗口的尾
//         // 查看剩余部分长度是否大于等于K
//         for(let i = 0 ; i < k; ++i){
//             tail = tail.next;
//             // 长度不满足K 直接结束返回
//             if(tail == null){
//                 return hair.next;
//             }
//         }
//         let next = tail.next; // 暂时存一下 后面没有处理的头节点
//         [head, tail] = reverseList(head, tail);
//         // 把后面的链接重新连上
//         pre.next = head;
//         tail.next = next;
//         pre = tail;
//         head = tail.next
//     }
//     return hair.next

// };

// var reverseList = (head, tail) => {
//     let pre = tail.next;
//     let cur = head;
//     while(pre !== tail){
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return [tail, head];
// }