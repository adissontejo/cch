import { render } from '@test/components';
import Card from '..';

const defaultProps = {
  data: {
    text: 'Card text',
    author: 'Card author',
    deck: 'Deck name',
    createdAt: new Date('2021-12-27'),
    isQuestion: false,
  },
};

describe('Card component', () => {
  it('render component', () => {
    const { getByText } = render(<Card {...defaultProps} />);

    expect(getByText(defaultProps.data.text)).toBeInTheDocument();
  });
});
