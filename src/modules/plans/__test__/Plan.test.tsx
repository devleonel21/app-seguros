import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Plans from '../Plans';
import * as apiPlan from '../services/apiPlan'; 

 
 
  vi.mock('../services/apiPlan', () => ({
    fetchPlans: vi.fn(() =>
      Promise.resolve({
        list: [
          {
            name: 'Plan en Casa',
            price: 39,
            description: [
              'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
              'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
              'Indemnización de S/300 en caso de hospitalización por más de un día.',
            ],
            age: 60,
          },
          {
            name: 'Plan en Casa y Clínica',
            price: 99,
            description: [
              'Consultas en clínica para cualquier especialidad.',
              'Medicinas y exámenes derivados cubiertos al 80%.',
              'Atención médica en más de 200 clínicas del país.',
            ],
            age: 70,
          },
          {
            name: 'Plan en Casa + Bienestar',
            price: 70,
            description: [
              'Videoconsulta con especialistas de psicología y nutrición.',
              'Acceso a videos y recursos sobre bienestar.',
              'Incluye todos los beneficios del Plan en Casa.',
            ],
            age: 25,
          },
          {
            name: 'Plan en Casa + Chequeo ',
            price: 49,
            description: [
              'Un Chequeo preventivo general de manera presencial o virtual.',
              'Acceso a Vacunas en el Programa del MINSA en centros privados.',
              'Incluye todos los beneficios del Plan en Casa.',
            ],
            age: 90,
          },
          {
            name: 'Plan en Casa + Fitness',
            price: 45,
            description: [
              'Descuentos en más de 50 locales de gimnasio.',
              'Beneficios exclusivos en alimentos nutricionales y complementos.',
              'Incluye todos los beneficios del Plan en Casa.',
            ],
            age: 30,
          },
        ],
      })
    ),
  }));


  
afterEach(() => {
    vi.clearAllMocks();
  });


describe('Plan component', () => {

    //verificar que se renderiza el componente visualizarndo el texto de selecciona la opción
  it('should render the main subtitle', () => {
    render(<MemoryRouter><Plans /></MemoryRouter>);

    const title = screen.getByText(/Selecciona la opción que se ajuste más a tus necesidades./i); 
    expect(title).toBeInTheDocument(); 
  });

  //verificar que se muestren los planes
  it('should filter plans for "me" based on user age', async () => {
    render(<MemoryRouter><Plans /></MemoryRouter>);
  
    const planA = await screen.findByText(/Para mí/i);
    const planB = await screen.findByText(/Para alguien más/i);

    expect(planA).toBeInTheDocument();
    expect(planB).toBeInTheDocument();
    
});

//visualizar los planes cuando se selecciona "Para mí" y edad menor a 35
it('should render only plans with age <= 35 when "Para mí" is selected', async () => {
  
    render(<MemoryRouter><Plans /></MemoryRouter>);
  
    const cardParaMi = screen.getByText(/Para mí/i).closest('.card');
    fireEvent.click(cardParaMi!);
    await waitFor(() => {
        expect(apiPlan.fetchPlans).toHaveBeenCalled();
    });
  
    screen.queryByText((content, element) => {
        return content.includes('Plan en Casa + Bienestar') && element?.tagName.toLowerCase() === 'h5';
    });

    screen.queryByText((content, element) => {
        return content.includes('Plan en Casa + Chequeo') && element?.tagName.toLowerCase() === 'h5';
    });

    expect(screen.queryByText(/Plan en Casa y Clínica/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Plan en Casa/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Plan en Casa \+ Chequeo/i)).not.toBeInTheDocument();
  
     
  });

  //visualizar todos los planes cuando se selecciona "Para alguien más"
  it('should render all plans when "Para alguien más" is selected', async () => {
    render(<MemoryRouter><Plans /></MemoryRouter>);

    const cardParaOther = screen.getByText(/Para alguien más/i).closest('.card');
    fireEvent.click(cardParaOther!);
  
    await waitFor(() => {
      expect(apiPlan.fetchPlans).toHaveBeenCalled();
    }); 
      
    expect(screen.getAllByText(/Plan en Casa/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Plan en Casa y Clínica/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Plan en Casa + Bienestar', { exact: true }).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Plan en Casa + Chequeo', { exact: true }).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Plan en Casa + Fitness', { exact: true }).length).toBeGreaterThan(0);
  
     
  });
  
});