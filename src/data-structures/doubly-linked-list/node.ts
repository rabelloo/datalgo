import { LinkedListNode } from '../linked-list/node';

export interface DoublyLinkedListNode<T> extends LinkedListNode<T> {
  previous: DoublyLinkedListNode<T>;
  next: DoublyLinkedListNode<T>;
}
