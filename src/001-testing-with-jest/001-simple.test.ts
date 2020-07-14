import { countBananas } from './001-simple';

describe('countBananas', () => {
  it('count the right number of bananas', () => {
    const expected = 5;
    const testStr = 'Lorem 🍌 ipsum dolor 🍌 sit amet, 🍌 consectetur 🍌 adipiscing 🍌 elit.';
    
    expect(countBananas(testStr)).toEqual(expected);
  })

  it ('count 0 if string has no banana', () => {
    const expected = 0;
    const testStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    expect(countBananas(testStr)).toEqual(expected);
  })
})
