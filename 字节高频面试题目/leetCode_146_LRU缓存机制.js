class DoubleLinkedListNode{
     // 双向哈希链表
     constructor(key , value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
     }
 }

 class LRUCache{
     constructor(capacity){
         this.capacity = capacity;
         this.hashmap = {};
         // 头结点
         this.dummyHead = new DoubleLinkedListNode(null, null);
         // 尾结点
         this.dummyTail = new DoubleLinkedListNode(null, null);
         // 连起来
         this.dummyHead.next = this.dummyTail;
         this.dummyTail.prev = this.dummyHead;
     }

     _isFull(){
         return Object.keys(this.hashmap).length === this.capacity;
     }

     _removeNode(node){
         // 1 node的前驱 = node的下一个结点
         node.prev.next = node.next;
         // 2 node的下一个结点的头 = node的头结点
         node.next.prev = node.prev;
         // 数据清空
         node.prev = null;
         node.next = null;
         return node;
     }

     _addTohead(node){
         // 在头部插入数据
         const head = this.dummyHead.next; 
         // 将node插在head后面
         // 先出head的下一个结点。
         node.next = head;
         head.prev = node;
         //  再处理node
         node.prev = this.dummyHead;
         this.dummyHead.next = node;
     }

     get(key){
         // 如果key已经存在
         if(key in this.hashmap){
             const node = this.hashmap[key];
             this._addTohead(this._removeNode(node));
             return node.value;
         }else{
             return -1;
         }
     }

     put(key, value){
         if(key in this.hashmap){
             const node = this.hashmap[key];
             node.value = value;
             this._addTohead(this._removeNode(node));
         }else{
             if(this._isFull()){
                 const node = this.dummyTail.prev;
                 delete this.hashmap[node.key];
                 this._removeNode(node);
             }
             const node = new DoubleLinkedListNode(key, value);
             this.hashmap[key] = node;
             this._addTohead(node)
         }
     }



 }