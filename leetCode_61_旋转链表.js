var rotateRight = function(head, k) {
    if (!head) return null
    let curr = head, n = 0
    while (++n && curr.next) curr = curr.next
    // 形成环链表
    curr.next = head
    k = k % n // 去重
    while (++k < n) head = head.next // 找到打断位置
    // 对环链表打断再拼接得到答案
    let tmp = head
    head = head.next
    tmp.next = null
    return head

};


