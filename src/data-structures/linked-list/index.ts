import { LinkedListNode } from './node';

export class LinkedList<T> {
  first: LinkedListNode<T>;
  last: LinkedListNode<T>;
  length = 0;

  constructor(collection: Iterable<T> = []) {
    for (const value of collection) {
      this.append(value);
    }
  }

  append(value: T) {
    const last = { value } as LinkedListNode<T>;
    if (!this.first) {
      this.first = last;
    }
    if (this.last) {
      this.last.next = last;
    }
    this.last = last;
    this.length++;
  }

  prepend(value: T) {
    const first = { value } as LinkedListNode<T>;
    if (this.first) {
      first.next = this.first;
    }
    if (!this.last) {
      this.last = first;
    }
    this.first = first;
    this.length++;
  }
}
