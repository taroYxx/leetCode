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
            newHead.next = tempNode;
            tempNode.next = null;
        }else{
            let a = newHead.next;
            newHead.next = tempNode;
            tempNode.next = a;
        }
    }
    newHead = newHead.next;
    return newHead;

};


var reverseList = function(head) {

    // 直接删一个节点 加一个节点
    let newHead = new ListNode();
    let node  = head;
    let preNode = new ListNode();
    while(node != null){
        let nextNode = node.next;
        if(nextNode == null){
            newHead = node;
        }
        node.next = preNode;
        preNode = node;
        node = nextNode;
    }
    return newHead;

};


