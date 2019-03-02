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

  /**
   * Adds a value to the end of the list
   */
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

  /**
   * Adds a value to the beginning of the list
   */
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

  /**
   * Removes the first instance found of the speficied value
   */
  remove(value: T) {
    let current = this.first;
    let previous;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      return;
    }
    if (previous) {
      previous.next = current.next;

      if (this.last === current) {
        this.last = previous;
      }
    } else {
      this.first = current.next;
    }
    this.length--;
  }
}
