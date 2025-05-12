import { render, screen } from '@testing-library/react';
import ListResult from '../List-result';
import { vi } from 'vitest';

vi.mock('../../card-plan/Card-plan', () => ({
  default: ({ data }: any) => <div data-testid="card-plan">{data.name}</div>,
}));

vi.mock('../../carousel/Carousel', () => ({
  default: ({ data }: any) => <div data-testid="carousel">{data.length} items</div>,
}));

describe('ListResult component', () => {
  const mockData = [
    { name: "Plan en Casa" },
    { name: "Plan en Casa y Clínica" },
  ];

  //cantidad de items para el carousel
  it('renders the Carousel with correct number of items', () => {
    render(<ListResult data={mockData} selectedPlan="me" />);

    expect(screen.getByTestId('carousel')).toHaveTextContent('2 items');
  });

  //verifica que se renderice y se muestre el nombre
  it('renders CardPlan components for each data item', () => {
    render(<ListResult data={mockData} selectedPlan="me" />);

    const cards = screen.getAllByTestId('card-plan');
    expect(cards.length).toBe(2);
    expect(cards[0]).toHaveTextContent('Plan en Casa');
    expect(cards[1]).toHaveTextContent('Plan en Casa y Clínica');
  });
});
