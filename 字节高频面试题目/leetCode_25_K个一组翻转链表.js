/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let p = head;
    let q = head;
    let i = 1;
    let newHead = new ListNode();
    while(head != null){
        q = q.next;
        i = i + 1;
        if(i % k == 0){
            
        }

    }

};
