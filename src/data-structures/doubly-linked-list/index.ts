import { DoublyLinkedListNode } from './node';

export class DoublyLinkedList<T> {
  first: DoublyLinkedListNode<T>;
  last: DoublyLinkedListNode<T>;
  length = 0;

  constructor(collection: Iterable<T> = []) {
    for (const value of collection) {
      this.append(value);
    }
  }

  append(value: T) {
    const last = { value } as DoublyLinkedListNode<T>;
    if (!this.first) {
      this.first = last;
    }
    if (this.last) {
      last.previous = this.last;
      this.last.next = last;
    }
    this.last = last;
    this.length++;
  }

  remove(node: DoublyLinkedListNode<T>) {
    if (node.previous) {
      node.previous.next = node.next;
    } else {
      this.first = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    } else {
      this.last = node.previous;
    }
    this.length--;
  }

  prepend(value: T) {
    const first = { value } as DoublyLinkedListNode<T>;
    if (this.first) {
      first.next = this.first;
      this.first.previous = first;
    }
    if (!this.last) {
      this.last = first;
    }
    this.first = first;
    this.length++;
  }
}
