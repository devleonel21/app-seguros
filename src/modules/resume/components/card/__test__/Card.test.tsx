import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../Card';

describe('Card component', () => {

    it('should render the main title', () => {
        render(
          <MemoryRouter>
            <Card />
          </MemoryRouter>
        );
    
        const title = screen.getByText(/Precios calculados para:/i); 
        expect(title).toBeInTheDocument(); 
      });
});