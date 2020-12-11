var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let cur = head;
    var reverse = null;
    var reverseLastNode = null;
    var index = 1;

    while(index <= n){
        if(index < m){
            prev = prev.next;
            cur = cur.next;
        }else{
            if(reverseLastNode == null){
                reverseLastNode =cur;
            }
            var temp = reverse;
            reverse = cur;
            cur = cur.next;
            reverse.next = temp;
        }
        index ++ ;
    }

    prev.next = reverse;
    reverseLastNode.next = cur;

    return dummy.next;






};