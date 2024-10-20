import { Add } from "../app/api/testsTest/route";

describe('String calculator', () => {
    
    it('Should return 0 on empty string', () => {
        expect(Add('')).toBe(0);
    });
    it('1,1 should return 2', () => {
        expect(Add('1,1')).toBe(2);
    });
    it('-2,1 should return -1', () => {
        expect(Add('-2,1')).toBe(-1);
    });
    it('1,2\\n3 should return 6', () => {
        expect(Add('1,2\n3')).toBe(6);
    });
    it('Too many delimiter should throw an exception', () => {
        expect(() => Add('2,3,')).toThrow(Error);
    });
    it('//;\\n1;3 should return 4', () => {
        expect(Add('//;\n1;3')).toBe(4);
    });
    it('//|\\n1|2|3 should return 6', () => {
        expect(Add('//|\n1|2|3')).toBe(6);
    });
    it('//sep\\n2sep5 should return 7', () => {
        expect(Add('//sep\n2sep5')).toBe(7);
    });
    it('//|\\n1|2,3” should throw', () => {
        expect(() => Add('//|\n1|2,3')).toThrow('|’ expected but ‘,’ found at position 3.');
    });

});