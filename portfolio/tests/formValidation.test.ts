import { validatePassInput } from "../utils/formValidation";


describe('Password input validation', () => {
    it('Should be least 8 characters long', () => {
        const mockInvalid: FormMessage = {
            isValid: false,
            message: 'Password must be at least 8 characters'
        }

        const status: FormMessage = validatePassInput("pas123");

        expect(status).toEqual<FormMessage>(mockInvalid);
    });

    it('Should be least 8 characters long', () => {
        const status: FormMessage = validatePassInput("islongenough12");
        expect(status.isValid).toBe(true);
    });

    it('Should should return false and a message with less than 2 number ', () => {
        const mockInvalid: FormMessage = {
            isValid: false,
            message: 'The password must contain at least 2 numbers'
        }

        const status: FormMessage = validatePassInput("islongenoughNoNumber1");

        expect(status).toEqual<FormMessage>(mockInvalid);
    });
    
    it('Should should return true with at least 2 number', () => {
        const status: FormMessage = validatePassInput("islongenoughWithNumber12");

        expect(status.isValid).toBe(true);
    });
    
    it('Should should return false and a message with less than 2 number and less than 8 character', () => {
        const mockInvalid: FormMessage = {
            isValid: false,
            message: 'Password must be at least 8 characters\nThe password must contain at least 2 numbers'
        }
        
        const status: FormMessage = validatePassInput("somepassword");

        expect(status).toEqual(mockInvalid);
    });

    
});