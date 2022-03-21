import { debounce } from "../src/scripts/debounce";

jest.useFakeTimers();
describe('Debounce function', () => {
    test('execute just once', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 500);
    
        // Execute for the first time
        debouncedFunc();
    
        // Move on the timer
        jest.advanceTimersByTime(250);
        // try to execute a 2nd time
        debouncedFunc();
    
        // Fast-forward time
        jest.runAllTimers();
    
        expect(func).toBeCalledTimes(1);
    });

    test('should not execute the function when is undefined', () => {
        const debouncedFunc = debounce(undefined, 500);

        expect(debouncedFunc).toEqual(undefined);
    });
});