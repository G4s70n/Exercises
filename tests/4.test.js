const reverseWords = require('../exercises/4.js');

describe('Reverse Words Function', () => {
  it('Reverses each word in a string while retaining spaces', () => {
    expect(reverseWords("This is an example!")).toBe("sihT si na !elpmaxe");
    expect(reverseWords("double  spaces")).toBe("elbuod  secaps");
  });

  it('Works with a single word', () => {
    expect(reverseWords("Hello")).toBe("olleH");
  });

  it('Handles empty strings', () => {
    expect(reverseWords("")).toBe("");
  });

  it('Works with strings having only spaces', () => {
    expect(reverseWords("   ")).toBe("   ");
  });

  it('Works with strings having spaces at the beginning and end', () => {
    expect(reverseWords("   Hello world   ")).toBe("   olleH dlrow   ");
  });
});
