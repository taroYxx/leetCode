/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    // 直接删一个节点 加一个节点
    if(head == null) return null;
    let tempNode = new ListNode();
    let newHead = new ListNode();
    while(head!= null){
        tempNode = head;
        head = head.next;
        if(newHead.next == null){
            // 头结点
            newHead.next = tempNode;
            tempNode.next = null;
        }else{
            // 链接新节点
            let a = newHead.next;
            newHead.next = tempNode;
            tempNode.next = a;
        }
    }
    newHead = newHead.next;
    return newHead;

};


var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr != null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;

};


