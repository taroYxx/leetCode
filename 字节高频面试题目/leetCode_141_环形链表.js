var hasCycle = function(head) {
    if(head == null) return false;
    let fast = head;
    let slow = head;
    while(fast.next != null && fast != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) return true;
    }
    return false;

};