var sortList = function(head) {
    let curhead = new ListNode(-Infinity)
    curhead.next = head;
    let cur = head;
    let pre = curhead;
    let tail = null;;
    while(tail != curhead.next){
        // 做一次冒泡
        while(cur.next != tail){
            let node = cur.next ;
            if(node.val < cur.val){
                cur.next = node.next;
                node.next = cur;
                pre.next = node;
            }else{
                cur = cur.next;
            }
            pre = pre.next;
        }
        tail = cur;
        cur = curhead.next;
        pre = curhead
    }
    return curhead.next;
};

// [4,2,1,3]    p -> 4   2   1   3
//             pre  cur next


