import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Card from '../Card';
import { MemoryRouter } from 'react-router-dom';
import { useUserStore } from '../../../../../stores/useUserStore';

const mockUseUserStore = vi.fn();

// 👇 Sobrescribes el módulo y su exportación
vi.mock('../../../../stores/useUserStore', () => ({
  useUserStore: mockUseUserStore,
}));

describe('Card component', () => {

    beforeEach(() => {
        mockUseUserStore.mockReturnValue({
          userData: {
            name: 'Rocío',
            lastName: 'Pérez',
            document: '87654321',
            phone: '999999999',
            planName: 'Plan Avanzado',
            planPrice: 150,
          },
        });
      });

      it('correctly displays user and plan information', () => {
        render(<MemoryRouter><Card /></MemoryRouter>);
    
        // Verificamos texto en la tarjeta
        expect(screen.getByText('Precios calculados para:')).toBeInTheDocument(); 
        expect(screen.getByText('DNI: 87654321')).toBeInTheDocument();
        expect(screen.getByText('Celular: 999999999')).toBeInTheDocument();
        expect(screen.getByText('Plan Avanzado')).toBeInTheDocument();
        expect(screen.getByText('Costo del Plan: $150 al mes')).toBeInTheDocument();
      });
});