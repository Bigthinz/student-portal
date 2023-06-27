import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";

import { LoginSchema, loginSchema } from "@/lib/validation/login-validation";

interface FormValues {
  studentId: string;
  password: string;
}

interface Field {
  type: string;
  name: keyof LoginSchema;
  label: string;
}

const Fields: Field[] = [
  {
    type: 'text',
    name: 'studentId',
    label: 'Student ID',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
  },
];



const useLogin = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const loginWithAuth: SubmitHandler<FormValues> = async (data) => {

    try {
      setLoadingState(true);

      const payload ={
        studentId:data.studentId,
        password:data.password,
      }
      const user = await axios.post(`/api/login`, payload)


        //change response
        if (user) {
          if (user.status === 200 || user.status === 201) {
            toast.success('User logged in successfully');

            // console.log(loginAuth);
            localStorage.setItem('auth-token', JSON.stringify(user));
            // setUserData(userDataObject.data);
            setLoadingState(false);
            router.push('/dashboard');
          }
        }

     
    } catch (error) {
      toast.error('sorry incorrect student ID or password');      
      setErrorState(true);
      setLoadingState(false);

      console.log(error);
    }
  };



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  // const handleFormSubmit = (data: FormValues, event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // Prevent default form submission behavior
  //   handleSubmit((data) => loginWithAuth(data))(event);
  // };
  const onSubmit: SubmitHandler<FormValues> = (data) => {loginWithAuth(data)};

  return {
    loginSchema,
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    Fields,
    
  
  };
};

export default useLogin;