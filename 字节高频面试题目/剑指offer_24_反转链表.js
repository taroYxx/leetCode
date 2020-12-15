var reverseList = function(head) {
    if(!head || !head.next) return head;
    let cur = head;
    let pre = null;   // 哨兵节点
    while(cur){
        const next = cur.next;
        cur.next = pre; //  cur.next = null 目标节点指向哨兵节点
        pre = cur;     //   pre = 1         哨兵节点变成当前节点
        cur = next;    //   cur = 2         当前节点往后移动
        // null  1 - 2 - 3
        // 1-> null
        // pre 指向 1
        // cur 指向 2

        // 2-> 1-> null

    }

    return pre
};


