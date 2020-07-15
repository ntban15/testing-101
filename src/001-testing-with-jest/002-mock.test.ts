import { asyncSetTimeout } from './002-mock';

describe('asyncSetTimeout', () => {
  it ('should return the returned value from callback', async () => {
    expect.assertions(1);
    const expected = 1;
    const dummyCallback = () => expected;
    const returnedValue = await asyncSetTimeout(dummyCallback, 500);
    expect(returnedValue).toEqual(expected);
  })

  it('should execute function after timeout', async () => {
    expect.assertions(1);
    const trackedCallback = jest.fn();
    await asyncSetTimeout(trackedCallback, 500);
    expect(trackedCallback).toHaveBeenCalled();
  })
});
