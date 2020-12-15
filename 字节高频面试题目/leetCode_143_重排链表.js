var reorderList = function(head) {
    if(head == null || head.next == null || head.next.next == null) return null;
    let fast = head;
    let slow = head;
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }

    let newHead = slow.next; // 后一半
    slow.next = null; // 形成前一半

    newHead = reverseList(newHead);

    while(newHead != null){
        let temp = newHead.next;
        newHead.next = head.next;
        head.next = newHead;
        head = newHead.next;
        newHead = temp;   
    }
};


function reverseList(head){
    if(head == null || head.next == null) return head;
    let cur = head;
    let pre = null;
    while(cur){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre
}