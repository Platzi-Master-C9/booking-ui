import { debounce } from "../src/scripts/debounce";

jest.useFakeTimers();
describe('Given the debounce function is used', () => {
    test('when is called sometimes in a short time period, then should just executed once', () => {
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

    test('when we do not pass a function, then should not execute', () => {
        const debouncedFunc = debounce(undefined, 500);

        expect(debouncedFunc).toEqual(undefined);
    });
});
