'use strict';

const LinkedList = require('./LinkedList');

module.exports = (list) => {
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
