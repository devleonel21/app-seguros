export const filterPlansByAge = (age: number, plans: any[]) => {
    return plans.filter((plan) => plan.age <= age);
  };