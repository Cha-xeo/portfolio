
export function validatePassInput(input: string): FormMessage{
    const length:number = input.length;
    let isvalid:boolean = true;
    let errorMessages:string[] = [];
    let specialCount:number = 0;
    let numberCount:number = 0;

    if (length < 8) {
        isvalid = false;
        errorMessages.push('Password must be at least 8 characters');
    }
    for (let index = 0; index < length; index++) {
        const element = input[index];
        if (element in ['0','1','2','3','4','5','6','7','8','9']) {
            numberCount +=1;
        }
    }

    if (numberCount < 2) {
        isvalid = false;
        errorMessages.push('The password must contain at least 2 numbers');
    }

    return {
        isValid: isvalid,
        message: (errorMessages.length > 0 ? errorMessages.join('\n'): '')
    }
}