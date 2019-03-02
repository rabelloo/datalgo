import { Queue } from './index';

describe('data-structures', () => {
  describe('Queue', () => {
    describe('add', () => {
      it('should enqueue a new item', () => {
        const value = 1;
        const queue = new Queue();

        queue.add(value);

        expect(queue.length).toBe(1);
      });
    });

    describe('peek', () => {
      it('should get the next in the queue without removing it', () => {
        const value = 1;
        const queue = new Queue();
        queue.add(value);

        const next = queue.peek();

        expect(next).toBe(value);
        expect(queue.length).toBe(1);
      });
    });

    describe('pop', () => {
      it('should get the next in and remove it from the queue', () => {
        const value = 1;
        const queue = new Queue();
        queue.add(value);

        const next = queue.pop();

        expect(next).toBe(value);
        expect(queue.length).toBe(0);
      });

      it('should get undefined if the queue is empty', () => {
        const queue = new Queue();

        const next = queue.pop();

        expect(next).toBe(undefined);
      });
    });
  });
});
