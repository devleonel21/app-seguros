import { useState } from 'react';
import { useUserStore } from '../../../stores/useUserStore'; 
import { fetchPlans } from '../services/apiPlan';
import { calculateAge } from '../utils/calculateAge';

export const usePlans = () => {
  const { userData } = useUserStore();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [apiResult, setApiResult] = useState<any[]>([]);

  const filterPlansByAge = (age: number, plans: any[]) => {
    return plans.filter((plan) => plan.age <= age);
  };

  const handleCardSelect = async (plan: string) => {
    setSelectedPlan(plan);

    try {
      const data = await fetchPlans();
      const age = calculateAge(userData.birthDay || '');
      const filtered = plan === 'me' ? filterPlansByAge(age, data.list) : data.list;
      setApiResult(filtered);
    } catch (error) {
      console.error("Error fetching plans:", error);
      setApiResult([]);
    }
  };

  return {
    selectedPlan,
    apiResult,
    handleCardSelect,
    userData
  };
};
