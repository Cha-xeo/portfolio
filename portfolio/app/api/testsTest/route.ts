import { NextResponse } from "next/server";

export function FizzBuzz(num: number, fizz: number, buzz: number,): string {
    let fizzBuzz: string = '';

    if (num % fizz == 0) {
        fizzBuzz += 'Fizz';
    } 
    if (num % buzz == 0) {
        fizzBuzz += 'Buzz';
    }
    return fizzBuzz || num.toString();;
}

export function Add(calculus: string): number{
    if (calculus.length == 0) {
        return 0;
    }
    let res:number = 0;
    let nums: string[];
    const match = calculus.match(/\/\/(.*?)\n/);
    if (match){
        const substr = calculus.substring(match[0].length)
        nums = substr.split(match[1]);
    }else{
        const reg: RegExp = /[,\n]+/;
        nums = calculus.split(reg);

    }
    if (nums[nums.length-1].length == 0){
        throw new Error('Too many delimiter');
    }
    nums.forEach( (num) => {
        res += +num;
    })
    return res;
}

export async function GET() {
    return NextResponse.json({ message: 'Hello, API with TypeScript!' });
}