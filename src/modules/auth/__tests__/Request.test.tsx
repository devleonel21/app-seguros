import { render, screen } from '@testing-library/react';
import Request from '../Request';
import { MemoryRouter } from 'react-router-dom';

describe('Request component', () => {
  it('should render the main title', () => {
    render(<MemoryRouter><Request /></MemoryRouter>);

    const title = screen.getByText(/Creado para ti y tu familia/i); 
    expect(title).toBeInTheDocument(); 
  });

  it('should render the main subtitle', () => {
    render(<MemoryRouter><Request /></MemoryRouter>);

    const title = screen.getByText(/Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online./i); 
    expect(title).toBeInTheDocument(); 
  });

  it('should render the banner image', () => {
    render(<MemoryRouter><Request /></MemoryRouter>);

    const image = screen.getByAltText(/Banner promocional seguro Rimac/i); 
    expect(image).toBeInTheDocument(); 
  });

  it('should render the banner mobile image', () => {
    render(<MemoryRouter><Request /></MemoryRouter>);

    const image = screen.getByAltText(/Banner Mobile promocional seguro Rimac/i); 
    expect(image).toBeInTheDocument(); 
  });

});