'use strict';

const test = require('ava');
const LinkedList = require('./LinkedList');

test('list should be empty', ({is}) => {
  const list = new LinkedList();
  is(list.head, null);
});

test('add elements to list', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  is(list.head.value, 1);
  is(list.head.next.value, 2);
});

test('.size() should return correct count', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  is(list.size(), 2);
});

test('.unshift() first element', ({is}) => {
  const list = new LinkedList();
  list.unshift(1);

  is(list.size(), 1);
});

test('.unshift() to existing list', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.unshift(2);

  is(list.size(), 2);
  is(list.head.value, 2);
  is(list.head.next.value, 1);
});

test('.find() first element', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push('Bob');
  list.push(4);

  const node = list.find(1);
  is(node.value, 1);
  is(node.next.value, 2);
});

test('.find() middle element', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push('Bob');
  list.push(4);

  const node = list.find('Bob');
  is(node.value, 'Bob');
  is(node.next.value, 4);
});

test('.find() last element', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push('Bob');
  list.push(4);

  const node = list.find(4);
  is(node.value, 4);
  is(node.next, null);
});

test('.find() should return null', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push('Bob');
  list.push(4);

  is(list.find('Charlie'), null);
});

test('.remove() first element', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.remove(1);
  is(list.size(), 0);
  is(list.head, null);
});

test('.remove() middle element', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.remove(2);
  is(list.size(), 2);
  is(list.head.next.value, 3);
});

test('.remove() last element', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.remove(3);
  is(list.size(), 2);
  is(list.head.next.value, 2);
  is(list.head.next.next, null);
});

test('.remove() non-existent value does nothing', ({is}) => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.remove(4);
  is(list.size(), 3);
  is(list.head.next.next.value, 3);
  is(list.head.next.next.next, null);
});
