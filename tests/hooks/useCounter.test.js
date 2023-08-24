import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react-dom/test-utils';

describe('Tests in useCounter', () => { 
    
        test('should return the values by default', () => { 

             const {result}  = renderHook(() => useCounter());
             const {counter, increment, decrement, reset} = result.current;


             expect(counter).toBe(10);
             expect(decrement).toEqual(expect.any(Function));
             expect(increment).toEqual(expect.any(Function));
             expect(reset).toEqual( expect.any(Function) );


         });


         test('should generate counter  with the value of 100', () => { 

            const {result}  = renderHook(() => useCounter(100));
            const {counter} = result.current;

         

            expect(counter).toBe(100);


        });


        test('should increment the counter', () => { 

            const {result}  = renderHook(() => useCounter(100));
            const {increment} = result.current;

            act( () => {
                increment();
            });

            expect(result.current.counter).toBe(101);

         });

        
         test('should decrement the counter', () => { 

            const {result}  = renderHook(() => useCounter(100));
            const {decrement} = result.current;

            act( () => {
                decrement();
            });

            expect(result.current.counter).toBe(99);

         });


         test('should reset the counter', () => { 

            const {result}  = renderHook(() => useCounter(100));
            const {reset,decrement} = result.current;

            act( () => {
                decrement();
                reset();
            });

            expect(result.current.counter).toBe(100);

         });



 })