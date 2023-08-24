import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Tests en <TodoItem />', () => {


    const todo = {
        id:1,
        description: 'Piedra del Alma',
        done: false,

    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> jest.clearAllMocks());

     
    test('should show the pending to complete TODO ', () => { 

        render(
            <TodoItem 
            todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        );

        screen.debug();
        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('align-self-center badge bg-primary text-wrap width: 6rem');
        
       



    });


    test('should show the completed TODO ', () => { 


        todo.done = true;

        render(
            <TodoItem 
            todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        );

       

        const spanElement = screen.getByLabelText('span');
 
        expect(spanElement.className).toContain('align-self-center badge bg-primary text-wrap width: 6rem');

    });

    test('should call ToggleTodo, when its clicked', () => {

        render(
            <TodoItem 
            todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);


    });


    test('button should call deleteTodo', () => {

        render(
            <TodoItem 
            todo={todo} 
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
            />
        );

        screen.debug();
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);


    });

 })