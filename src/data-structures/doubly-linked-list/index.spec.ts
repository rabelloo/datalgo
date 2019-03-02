import { DoublyLinkedList } from './index';

describe('data-structures', () => {
  describe('DoublyLinkedList', () => {
    describe('constructor', () => {
      it('should accept empty', () => {
        const list = new DoublyLinkedList();

        expect(list.first).toBe(undefined);
        expect(list.last).toBe(undefined);
        expect(list.length).toBe(0);
      });
    });

    describe('append', () => {
      it('should LinkedList.append and define the previous node', () => {
        const array = [1, 2, 3, 4];
        const list = new DoublyLinkedList(array);

        list.append(5);

        expect(list.last.previous.value).toBe(array[array.length - 1]);
      });
    });

    describe('prepend', () => {
      it('should LinkedList.prepend and define the previous node', () => {
        const array = [1, 2, 3, 4];
        const value = 5;
        const list = new DoublyLinkedList(array);
        const second = list.first;

        list.prepend(value);

        expect(second.previous.value).toBe(value);
      });
    });

    describe('removeNode', () => {
      it('should remove a node from the list', () => {
        const array = [1, 2, 3];
        const list = new DoublyLinkedList(array);

        list.removeNode(list.first.next);

        expect(list.first.next).toBe(list.last);
        expect(list.last.previous).toBe(list.first);
        expect(list.length).toBe(array.length - 1);
      });

      it('should reassign first if removing the first node', () => {
        const array = [1, 2, 3];
        const list = new DoublyLinkedList(array);

        list.removeNode(list.first);

        expect(list.first.value).toBe(array[1]);
      });

      it('should reassign last if removing the last node', () => {
        const array = [1, 2, 3];
        const list = new DoublyLinkedList(array);

        list.removeNode(list.last);

        expect(list.last.value).toBe(array[1]);
      });
    });
  });
});
