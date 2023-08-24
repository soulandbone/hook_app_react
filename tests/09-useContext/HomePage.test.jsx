import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Tests in <HomePage/>', () => { 

    const user = {
        id:1,
        name:'Fernando'
    }

    test('should show the component without the user', () => { 

        render(
        <UserContext.Provider value={{user: null}}>
        <HomePage/>
        </UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');// aria-label
        expect(preTag.innerHTML).toBe('null');
        
        
    });


    test('should show the component with the user', () => { 

        render(
        <UserContext.Provider value={{user}}>
        <HomePage/>
        </UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');// aria-label
        screen.debug();
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
        
        
    });

 });