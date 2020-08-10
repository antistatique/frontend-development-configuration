import add from './add';

describe('Utils testing : Add', () => {
  it('should produce the right result', () => {
    expect(add(1, 1)).toEqual(2);
    expect(add(1, 3)).toEqual(4);
  });
});
