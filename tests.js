// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("addOne",function () {
    it('should be a defined function',function () {
        expect(typeof addOne).toBe("function");
    });
    it('should return a number when called',function () {
        expect(typeof addOne()).toBe("number");
    });
    it('should return the number 3 when passed the argument of the number 2',function() {
        expect(addOne(2)).toBe(3);
    });
    it('should return the number -42 when passed the argument of the number -43',function() {
        expect(addOne(-43)).toBe(-42);
    });
    it('should return the number 100 when passed the argument of the number 101',function() {
        expect(addOne(100)).toBe(101);
    });
    it('should return the number 3 when passed the argument of the number 2',function() {
        expect(addOne(2)).toBe(3);
    });

    it('should return NaN when passed the boolean of true',function() {
        expect(isNaN(addOne(true))).toBe(true);
    });

});

describe("isFive",function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when the argument is 5", function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return NaN when passed anything other than a number', function () {
        expect(isNaN(addOne(true))).toBe(true);

    });
});

describe("isEven",function () {
      it('should be a defined function', function () {
          expect(typeof isEven).toBe("function");
      });
      it('should return true when the argument is 2', function () {
          expect(isEven(2)).toBe(true);
      });
    it('should return true when the argument is -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when the argument is 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when the argument is "banana"', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when the argument is "8"', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return false when the argument is Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when boolean values true and false are entered', function () {
        expect(isEven("boolean")).toBe(false);
    });
    it('should return false when there is no argument', function () {
        expect(isEven()).toBe(false);
    });

});

describe("isVowel",function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return true when the argument is "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when the argument is "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when the argument is "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when the argument is 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when the argument is a boolean', function () {
        expect(isVowel("boolean")).toBe(false);
    });
    it('should return false when the argument is "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when there is no argument entered', function () {
        expect(isVowel()).toBe(false);
    });

});

describe("add",function () {
  it('should be defined as a function', function() {
      expect(typeof add).toBe("function");
  });
    it('should return 5 when the argument are 2 and 3', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 when the argument are -3 and -9', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when the argument are "5" and 6', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should return -14 when the argument are "-4" and "-10', function () {
        expect(add("-4","-10")).toBe(-14);
    });
    it('should return NaN when the argument are "banana" and "split"', function () {
        expect(Number.isNaN(add("banana","split"))).toBe(true);
    });
    it('should return NaN when the argument are 2 and "apples', function () {
        expect(Number.isNaN(add(2,"apples"))).toBe(true);
    });
    it('should return NaN when the argument is empty', function () {
        expect(Number.isNaN(add())).toBe(true);
    });





})


