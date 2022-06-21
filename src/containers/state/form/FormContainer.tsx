import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';


const FormContainer = () => {
    const [state, setState] = useState<string>('');
    

    return {
    
    };
};

const useFormContainer = createContainer(FormContainer);
export const useForm = useFormContainer.useContainer;
export const FormProvider = useFormContainer.Provider;
