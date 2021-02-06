class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
    while (current !==null ) {
      let upNext = current.next;
      while (upNext && upNext.value === current.value) {
        upNext = upNext.next;
      }
      current.next = upNext;
      current = upNext;
    }
    return linkedList;
}
