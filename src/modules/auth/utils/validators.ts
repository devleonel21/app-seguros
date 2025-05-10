/*export const validateRequestForm = (formData: any) => ({
    document: !/^\d+$/.test(formData.document),
    phone: !/^\d{9}$/.test(formData.phone),
    privacy: !formData.privacy,
    comms: !formData.comms,

    
  });*/

import type { FormDataType } from "../../../types/formData";
import type { FormErrors } from "../../../types/FormErrors ";

  export function validateRequestForm(values: FormDataType): FormErrors {
    const errors: FormErrors = {
      document: false,
      phone: false,
      privacy: false,
      comms: false,
      documentType: false
    };
  
    const isNumeric = /^\d+$/;
    const isDni = values.documentType === 'dni';
    const docLength = isDni ? 8 : 9;
  
    if (!isNumeric.test(values.document) || values.document.length !== docLength) {
      errors.document = true;
    }
  
    if (!/^\d{9}$/.test(values.phone)) {
      errors.phone = true;
    }
  
    if (!values.privacy) errors.privacy = true;
    if (!values.comms) errors.comms = true;
  
    return errors;
  }