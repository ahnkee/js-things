# Linked List

## [Singly Linked List](./singly)
  |                    | Linked List   | Array |
  | ------------------ |:-------------:|:-----:|
  | Insert at head     | O(1)          | O(n)  |
  | Remove from head   | O(1)          | O(n)  |
  | Insert at end      | O(1), O(n) *  | O(1)  |
  | Remove from end    | O(1), O(n) *  | O(1)  |
  | Insert in middle   | O(1), O(n) ** | O(n)  |
  | Remove from middle | O(n)          | O(n)  |
  | Find item at index | O(n)          | O(1)  |
  | Wasted space       | O(n)          | O     |

  `*` Insert/removal at end is **O(1)** if tail pointer is implemented

  `**` Insert in middle is **O(1)** if we already have reference to that node. If we need to traverse to the location, it's **O(n)**

* Generally better than arrays at insertion and deletion, but slower at item retrieval & takes up more space

* Linked Lists preferred when:
  * You need constant time insertion/deletion; when predictability is crucial
  * Number of elements / size is unknown (not really an issue in JS)
  * Don't need random access to elements
  * Want to be able to isnert items in middle of list (such as priority queue)

* Arrays preferred when:
  * Need indexed/random access to elements
  * Memory/space is a concern
  * Need speed iterating through elements

## [Doubly Linked List](./doubly)
