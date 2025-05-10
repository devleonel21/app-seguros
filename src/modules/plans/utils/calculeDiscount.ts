export const calculateDiscountedPrice = (price : any,type : string) => {
    if (type == 'me') {
        return Number(price);
    }
    return Number(price) * 0.95; 
    
  };