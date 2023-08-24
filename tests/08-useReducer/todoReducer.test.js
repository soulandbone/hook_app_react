import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Tests in todoReducer', () => { 

    
    const initialState = [{
        id: 1, 
        description: 'Demo Todo',
        done: false,
    }];

    test('should return the initial state', () => { 

            const newState = todoReducer(initialState, {});
            expect(newState).toBe(initialState);

     });


     test('should add a todo', () => { 

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2, 
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
            expect(newState.length).toBe(2);
            expect(newState).toContain(action.payload);


 });

    test('should eliminate a TODO', () => { 

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1 
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

    });


    test('should perform a TODO Toggle', () => { 

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1 
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

    });

 




 })