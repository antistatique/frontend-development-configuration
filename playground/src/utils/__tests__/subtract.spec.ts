import subtract from '../subtract';

describe('Utils testing : Subtract', () => {
  it('should produce the right result', () => {
    expect(subtract(1, 1)).toEqual(0);
    expect(subtract(1, 3)).toEqual(-2);
  });
});
