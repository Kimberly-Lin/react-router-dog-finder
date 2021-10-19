import DogDetails from './DogDetails';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

const dogData =
    [{
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    }];

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ name: "whiskey" }),
}))

test('renders without crashing', () => {
   render(
   <MemoryRouter>
        <DogDetails dogs={dogData} />
    </MemoryRouter>
   );
});
