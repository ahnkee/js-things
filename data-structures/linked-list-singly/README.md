# Singly Linked List

## Implementation
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  /**
   * @return {number} number of nodes in list
   */
  size() {
    return Number(this._length);
  }

  /**
   * Add a new Node to the end of the list
   * @param {*} value - value to be stored in Node
   * @return {Node} instance of created Node
   */
  push(value) {
    const node = new Node(value);
    let current = this.head;

    // if list is empty
    if (!current) {
      this.head = node;
      this._length++;

      return node;
    }

    // if list contains at least one node
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this._length++;

    return node;
  }

  /**
   * Find node in list matching value.
   * @param {*} value - value to search for
   * @return {Node|null} return Node instance if found, otherwise null
   */
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }

    return null;
  }

  /**
   * Remove a node from list
   * @param {*} value
   */
  remove(value) {
    if (!this.head) return;

    let current = this.head;
    let prev;

    // if head node being removed
    if (current.value === value) {
      this.head = current.next;
      current.next = null;
      this._length--;
      return ;
    }

    while (current) {
      if (current.value === value) {
        // handles both cases where element is in middle of
        // list and if element is the tail
        prev.next = current.next;
        current.next = null;
        this._length--;
        return;
      }

      prev = current;
      current = current.next;
    }
  }
}
```

## Reverse list
```javascript
const reverse = (list) => {
  // if list is empty or has one element, nothing to do
  if (!list.head || !list.head.next) return list;

  let current = list.head;
  const nodes = [];

  while (current) {
    nodes.push(current);
    current = current.next;
  }

  const reversed = new LinkedList();
  reversed.head = nodes.pop();
  current = reversed.head;
  let node;

  while (node = nodes.pop()) {
    current.next = node;
    node.next = null; // ensure last node's next is null
    current = current.next;
  }

  return reversed;
};
```
