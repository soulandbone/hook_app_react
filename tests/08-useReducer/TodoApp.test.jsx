import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/08-useReducer/useTodos';


jest.mock('../../src/08-useReducer/useTodos');

describe('Tests in <TodoApp/>', () => { 

    useTodos.mockReturnValue({
        todos: [
            {id:1, description: 'Todo #1', done:false},
            {id:2, description: 'Todo #2', done:true},
        ],
        todosCount:2,
        pendingTodosCount:1, 
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        });
   

    test('should show the component correctly', () => { 

        render(<TodoApp/>);
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

     });


  

    

 })