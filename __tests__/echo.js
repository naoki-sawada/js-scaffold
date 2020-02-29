import echo from '../src/echo';

describe('echo', () => {
  test('should return with prefix words', () => {
    const word = 'world';
    const res = echo(word);
    expect(res).toBe('Hello, world.');
  });
});
