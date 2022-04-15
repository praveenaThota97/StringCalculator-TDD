const addNumbers = require('./app');

describe('addNumbers',()=>{
    //Test-1 - If the value is empty, then output should be zero
    it('empty string returm sum as Zero',()=>{
        expect(addNumbers("")).toBe(0);
    })
    //Test-2 - Should return sum of two numbers
    it('return sum of entered nmbers',()=>{
        expect(addNumbers("1,2")).toBe(3);
    })
    //Test-3 - Should return solo output, if only one value is given
    it('Should return solo output',()=>{
        expect(addNumbers("5")).toBe(5);
    })
    //Test-4 - Should return sum of 3 numbers
    it('Should return sum of entered numbers',()=>{
        expect(addNumbers("5,5,5")).toBe(15);
    })
    //Test-5 - Should add any number of arguments
    it('Should add any number of inputs',()=>{
        expect(addNumbers("5,5,5,5,5,5")).toBe(30);
    })
     //Test-6 - Should allow \n between input numbers
     it('Should allow \\n between input numbers',()=>{
        expect(addNumbers("5\n5")).toBe(10);
    })
    //Test-7 - Should not allow negative numbers to add
    it('Should not allow negative numbers to add',()=>{
        expect(addNumbers("-1,-2,5")).toThrow("Negatives are not allowed");
    })
})