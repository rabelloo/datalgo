import { LinkedList } from './index';

describe('data-structures', () => {
  describe('LinkedList', () => {
    describe('constructor', () => {
      it('should accept empty', () => {
        const list = new LinkedList();

        expect(list.first).toBe(undefined);
        expect(list.last).toBe(undefined);
        expect(list.length).toBe(0);
      });

      it('should initialize with an iterable', () => {
        const array = [1, 2, 3, 4];

        const list = new LinkedList(array);

        expect(list.first.value).toBe(array[0]);
        expect(list.last.value).toBe(array[array.length - 1]);
        expect(list.length).toBe(array.length);
      });
    });

    describe('append', () => {
      it('should add a node to the end of the list', () => {
        const value = 5;
        const array = [1, 2, 3, 4];
        const list = new LinkedList(array);
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
        const value = 5;
        const array = [1, 2, 3, 4];
        const list = new LinkedList(array);
        const previousFirst = list.first;
        const previousLength = list.length;

        list.prepend(value);

        expect(list.first.value).toBe(value);
        expect(list.first.next).toBe(previousFirst);
        expect(list.length).toBe(previousLength + 1);
      });

      it('should add a node as both first and last if empty', () => {
        const value = 5;
        const list = new LinkedList();

        list.prepend(value);

        expect(list.first.value).toBe(value);
        expect(list.last.value).toBe(value);
        expect(list.first).toBe(list.last);
        expect(list.length).toBe(1);
      });
    });

    describe('remove', () => {
      it('should remove the first found instance of the specified value', () => {
        const value = 2;
        const array = [1, 2, 2, 3];
        const list = new LinkedList(array);

        list.remove(value);

        expect(list.length).toBe(array.length - 1);
        expect(list.first.next.value).toBe(value);
      });

      it('should do nothing if contained within the list', () => {
        const value = 5;
        const array = [1, 2, 3];
        const list = new LinkedList(array);

        list.remove(value);

        expect(list.length).toBe(array.length);
      });

      it('should reassign first if removing the first', () => {
        const value = 1;
        const array = [1, 2, 3];
        const list = new LinkedList(array);

        list.remove(value);

        expect(list.first.value).toBe(array[1]);
      });

      it('should reassign last if removing the last', () => {
        const value = 3;
        const array = [1, 2, 3];
        const list = new LinkedList(array);

        list.remove(value);

        expect(list.last.value).toBe(array[1]);
      });
    });
  });
});
