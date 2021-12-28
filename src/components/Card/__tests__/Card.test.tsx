import { render, screen } from '@test/components';
import Card from '..';

const defaultProps = {
  data: {
    text: 'Card text',
    author: 'Card author',
    deck: 'Deck name',
    createdAt: new Date(),
    isQuestion: false,
  },
};

describe('Card component', () => {
  it('render component', () => {
    const { getByText } = render(<Card {...defaultProps} />);

    expect(getByText(defaultProps.data.text)).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.data.deck, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.data.author, { exact: false })
    ).toBeInTheDocument();
    expect(
      getByText('less than a minute', { exact: false })
    ).toBeInTheDocument();
  });
});
