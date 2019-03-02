import { LinkedList } from '../linked-list';
import { DoublyLinkedListNode } from './node';

export class DoublyLinkedList<T> extends LinkedList<T> {
  first: DoublyLinkedListNode<T>;
  last: DoublyLinkedListNode<T>;

  constructor(collection: Iterable<T> = []) {
    super();
    for (const value of collection) {
      this.append(value);
    }
  }

  /**
   * Adds a value to the end of the list
   */
  append(value: T) {
    const previous = this.last;
    super.append(value);
    this.last.previous = previous;
  }

  /**
   * Adds a value to the beginning of the list
   */
  prepend(value: T) {
    const next = this.first;
    super.prepend(value);

    if (next) {
      next.previous = this.first;
    }
  }

  /**
   * Removes the specified node from the list
   */
  removeNode(node: DoublyLinkedListNode<T>) {
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
}
