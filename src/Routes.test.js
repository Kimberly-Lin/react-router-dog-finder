import Routes from './Routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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

test('renders without crashing', () => {
    render(
        <MemoryRouter>
            <Routes dogs={[]} />;
    </MemoryRouter>
    )
});

it('renders the doglist page', function () {
    const { debug, container } = render(
        <MemoryRouter initialEntries={["/dogs"]}>
            <Routes dogs={dogData}/>
        </MemoryRouter>
    );

    const divClass = container.getElementsByClassName("DogList");
    expect(divClass[0]).toBeInTheDocument();
});

it('renders the dog details page', function () {
    const { debug, container } = render(
        <MemoryRouter initialEntries={["/dogs/whiskey"]}>
            <Routes dogs={dogData}/>
        </MemoryRouter>
    );

    const divClass = container.getElementsByClassName("DogDetails")
    expect(divClass[0]).toBeInTheDocument();
});
