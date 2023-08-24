import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('tests in <MainApp/>', () => { 

    test('should show the HomePage', () => { 

        render(
        <MemoryRouter>
            <MainApp/>;
        </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();

     });

     test('should show the LoginPage', () => { 

        render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>;
        </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
        screen.debug();

     });

})