import { FizzBuzz } from "../app/api/testsTest/route";

const testArr = [3, 5, 15, 2];

describe('Fizz Buzz Test', () => {
    it('Should return Fizz', () => {
        expect(FizzBuzz(testArr[0], 3, 5)).toBe('Fizz');
    });
    
    it('Sould return Buzz', () => {
        expect(FizzBuzz(testArr[1], 3, 5)).toBe('Buzz');
    });

    it('Sould return FizzBuzz', () => {
        expect(FizzBuzz(testArr[2], 3, 5)).toBe('FizzBuzz');
    });
    
    it(`Sould return given number ${testArr[3]}`, () => {
        expect(FizzBuzz(testArr[3], 3, 5)).toBe(testArr[3].toString());
    });
});