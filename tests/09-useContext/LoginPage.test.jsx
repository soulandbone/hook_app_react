import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Tests in <LoginPage>', () => { 

    test('should show the component without the user', () => { 

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>  
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

     })


     test('should call setUser when its clicked on the button', () => {

        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>  
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});

     });

 });

 

