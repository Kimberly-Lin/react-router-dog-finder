import DogList from './DogList';
import { render } from '@testing-library/react';

// const dogData = 

test('renders without crashing', () => {
  render(<DogList dogs={[]}/>);
});
