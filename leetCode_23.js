var mergeKLists = function(lists) {
    if(!lists.length) return null;
    return lists.reduce(mergeTwo);
 
     function mergeTwo(l1,l2){
       let dummy=new ListNode(0);
       let cur=dummy;
       while(l1 && l2){
         if(l1.val<l2.val){
           cur.next=l1;
           l1=l1.next;
         }else{
           cur.next=l2;
           l2=l2.next;
         }
         cur=cur.next;
       }
       cur.next=l1===null?l2:l1;
       return dummy.next;
     }
 
 };