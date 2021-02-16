// O(1) time | O(1) space

const deleteNode = (node) => {
    node.val = node.next.val;
    node.next = node.next.next
}