import { render, screen, fireEvent } from '@testing-library/react';
import ListCards from '../List-card';
import { vi } from 'vitest';


const mockOnSelect = vi.fn();

describe('ListCards component', () => {

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  //renderizar los textos de los cards
  it('renders both cards with correct text', () => {
    render(<ListCards selectedPlan="" onSelect={mockOnSelect} />);

    expect(screen.getByText('Para mí')).toBeInTheDocument();
    expect(screen.getByText('Para alguien más')).toBeInTheDocument();
    expect(screen.getByText(/Cotiza tu seguro/)).toBeInTheDocument();
    expect(screen.getByText(/Asegura a un familiar/)).toBeInTheDocument();
  });

  //revisar al seleccionar un card
  it('marks the correct card as checked based on selectedPlan', () => {
    render(<ListCards selectedPlan="me" onSelect={mockOnSelect} />);

    const selectedCard = screen.getByTestId('card-me');
    const unselectedCard = screen.getByTestId('card-other');

    expect(selectedCard.classList.contains('card--selected')).toBe(true);
    expect(unselectedCard.classList.contains('card--selected')).toBe(false);
  });

  //revisar cuando se da click
  it('calls onSelect with correct value when a card is clicked', () => {
    render(<ListCards selectedPlan="" onSelect={mockOnSelect} />);

    const meCard = screen.getByTestId('card-me');
    fireEvent.click(meCard);
    expect(mockOnSelect).toHaveBeenCalledWith('me');

    const otherCard = screen.getByTestId('card-other');
    fireEvent.click(otherCard);
    expect(mockOnSelect).toHaveBeenCalledWith('other');
  });

 
});
