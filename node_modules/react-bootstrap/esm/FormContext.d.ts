import React from 'react';
interface FormContextType {
    controlId: any;
    custom?: boolean;
}
declare const FormContext: React.Context<FormContextType>;
export default FormContext;
