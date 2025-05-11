import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import RequestForm from '../requestForm';

import * as api from '../../../services/apiUser';

import { useUserStore } from '../../../../../stores/useUserStore';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

vi.mock('../../../services/apiUser', () => ({
  fetchUserData: vi.fn()
}));

describe('Request Form component', () => {

  let setUserDataMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    setUserDataMock = vi.fn();
    useUserStore.setState({ userData: {}, setUserData: setUserDataMock });
  });
 
  //Renderizar los inputs del formulario
  it('renders form fields', () => {
    render(<MemoryRouter><RequestForm /></MemoryRouter>);
    expect(screen.getByLabelText(/Nro. de Documento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Celular/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Acepto la Política de Privacidad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Acepto la Política de Comunicaciones Comerciales/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cotiza Aquí/i })).toBeInTheDocument();
  });

  //verificar que el campo de documento funcione
  it('allows input in document field', () => {
    render(<MemoryRouter><RequestForm /></MemoryRouter>);
    const input = screen.getByLabelText(/Nro. de Documento/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: '11111111' } });
    expect(input.value).toBe('11111111');
  });

  //verificar que el campo de celular funcione
  it('allows input in celular field', () => {
    render(<MemoryRouter><RequestForm /></MemoryRouter>);
    const input = screen.getByLabelText(/Celular/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: '999999999' } });
    expect(input.value).toBe('999999999');
  });

  //mostrar error si los campos no tienes informacion
  it('shows errors if form is empty and submitted', async () => {
    render(<MemoryRouter><RequestForm /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /cotiza/i }));
    await waitFor(() => {
      expect(screen.getByLabelText(/Nro. de Documento/i)).toHaveClass('error');
      expect(screen.getByLabelText(/Celular/i)).toHaveClass('error');

      expect(screen.getByLabelText(/Acepto la Política de Privacidad/i)).toHaveClass('error');
      expect(screen.getByLabelText(/Acepto la Política de Comunicaciones Comerciales/i)).toHaveClass('error');
    });
  });  

  //Envio de los datos del formulario
  it('submit the form correctly if it is complete', async () => {
    render(<MemoryRouter><RequestForm /></MemoryRouter>);
  
    fireEvent.change(screen.getByLabelText(/Nro. de Documento/i), { target: { value: '12345678' } });
    fireEvent.change(screen.getByLabelText(/Celular/i), { target: { value: '987654321' } });
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Privacidad/i));
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Comunicaciones Comerciales/i));
  
    fireEvent.click(screen.getByRole('button', { name: /Cotiza Aquí/i }));
  
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/plans');
    });
  });

  //alerta en caso del api falle
  it('displays an alert if the API fails', async () => {
    
    (api.fetchUserData as any).mockRejectedValue(new Error('API caída'));
  
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
  
    render(<MemoryRouter><RequestForm /></MemoryRouter>);
  
    fireEvent.change(screen.getByLabelText(/Nro. de Documento/i), { target: { value: '12345678' } });
    fireEvent.change(screen.getByLabelText(/Celular/i), { target: { value: '987654321' } });
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Privacidad/i));
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Comunicaciones Comerciales/i));
  
    fireEvent.click(screen.getByRole('button', { name: /Cotiza Aquí/i }));
  
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Ocurrió un error');
    });
  
    alertMock.mockRestore();
  });


  // test de combinacion de datos para estado global
  it('Combining form and API data and updating global state', async () => {
    const apiData = {
      name: 'Rocío',
      lastName: 'Miranda Díaz',
      birthDay: '02-04-1990',
    };
    (api.fetchUserData as any).mockResolvedValue(apiData); 
    
    render(<MemoryRouter><RequestForm /></MemoryRouter>);

    fireEvent.change(screen.getByLabelText(/Nro. de Documento/i), { target: { value: '12345678' } });
    fireEvent.change(screen.getByLabelText(/Celular/i), { target: { value: '987654321' } });
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Privacidad/i));
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Comunicaciones Comerciales/i));

    fireEvent.click(screen.getByRole('button', { name: /Cotiza Aquí/i }));

    await waitFor(() => expect(api.fetchUserData).toHaveBeenCalled());

    const expectedUserData = {
      name: 'Rocío',
      lastName: 'Miranda Díaz',
      birthDay: '02-04-1990',
      documentType: 'dni',
      document: '12345678',
      phone: '987654321',
      privacy: true,
      comms: true,
    };

    expect(setUserDataMock).toHaveBeenCalledWith(expectedUserData);
  });

});