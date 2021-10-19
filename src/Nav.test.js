import Nav from './Nav';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// const dogData = 

test('renders without crashing', () => {
    render(
    <MemoryRouter>
        <Nav dogs={[]} />;
    </MemoryRouter>
    )
});
