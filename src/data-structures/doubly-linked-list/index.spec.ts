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

      it('should initialize with an iterable', () => {
        const array = [1, 2, 3, 4];

        const list = new DoublyLinkedList(array);

        expect(list.first.value).toBe(array[0]);
        expect(list.last.value).toBe(array[array.length - 1]);
        expect(list.length).toBe(array.length);
      });
    });

    describe('append', () => {
      it('should add a node to the end of the list', () => {
        const array = [1, 2, 3, 4];
        const value = 5;
        const list = new DoublyLinkedList(array);
        const previousLast = list.last;
        const previousLength = list.length;

        list.append(value);

        expect(list.last.value).toBe(value);
        expect(list.last).toBe(previousLast.next);
        expect(list.length).toBe(previousLength + 1);
      });
    });

    describe('prepend', () => {
      it('should add a node to the beginning of the list', () => {
        const array = [1, 2, 3, 4];
        const value = 5;
        const list = new DoublyLinkedList(array);
        const previousFirst = list.first;
        const previousLength = list.length;

        list.prepend(value);

        expect(list.first.value).toBe(value);
        expect(list.first.next).toBe(previousFirst);
        expect(list.length).toBe(previousLength + 1);
      });

      it('should add a node as both first and last if empty', () => {
        const value = 5;
        const list = new DoublyLinkedList();

        list.prepend(value);

        expect(list.first.value).toBe(value);
        expect(list.last.value).toBe(value);
        expect(list.first).toBe(list.last);
        expect(list.length).toBe(1);
      });
    });

    describe('remove', () => {
      it('should remove a node from the list', () => {
        const array = [1, 2, 3];
        const list = new DoublyLinkedList(array);

        list.remove(list.first.next);

        expect(list.first.next).toBe(list.last);
        expect(list.last.previous).toBe(list.first);
        expect(list.length).toBe(array.length - 1);
      });

      it('should reassign first if removing the first node', () => {
        const array = [1, 2, 3];
        const list = new DoublyLinkedList(array);

        list.remove(list.first);

        expect(list.first.value).toBe(array[1]);
      });

      it('should reassign last if removing the last node', () => {
        const array = [1, 2, 3];
        const list = new DoublyLinkedList(array);

        list.remove(list.last);

        expect(list.last.value).toBe(array[1]);
      });
    });
  });
});
