import { LinkedList } from '../linked-list';

export class Queue<T> {
  items = new LinkedList<T>();

  get length(): number {
    return this.items.length;
  }

  /**
   * Adds a new item to end of the queue
   */
  add(item: T) {
    this.items.append(item);
  }

  /**
   * Gets the next item in queue without removing it
   */
  peek(): T {
    return this.items.first && this.items.first.value;
  }

  /**
   * Gets the next item in and removes it from the queue
   */
  pop(): T {
    if (!this.length) {
      return undefined as any;
    }

    const first = this.items.first.value;
    this.items.remove(first);

    return first;
  }
}
