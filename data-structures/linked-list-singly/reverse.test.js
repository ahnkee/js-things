'use strict';

const test = require('ava');
const LinkedList = require('./LinkedList');
const reverse = require('./reverse');

test('returns same list', t => {
  const list = new LinkedList();
  list.push(1);

  const reversed = reverse(list);
  t.true(list === reversed);
});

test('returns 3 -> 2 -> 1', t => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);

  const reversed = reverse(list);

  let current = reversed.head;
  t.is(current.value, 3);

  current = current.next;
  t.is(current.value, 2);

  current = current.next;
  t.is(current.value, 1);

  t.is(current.next, null);
});

test('returns 4 - > 2', t => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.remove(3);
  list.remove(5);
  list.remove(1);

  const reversed = reverse(list);

  let current = reversed.head;
  t.is(current.value, 4);

  current = current.next;
  t.is(current.value, 2);

  t.is(current.next, null);
});
