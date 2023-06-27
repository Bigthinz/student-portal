import { forwardRef } from 'react';
import { Toaster } from 'react-hot-toast';

import useLogin from '@/features/login/useLogin';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
}

export const CustomInput = forwardRef<HTMLInputElement, ICustomInput>(
  ({ label, error, name, ...props }, reference) => {
    return (
      <>
        {/* <label htmlFor={name}>{label}</label>
        <input ref={reference} name={name} {...props} /> */}

        <div>
          <label
            htmlFor={name}
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            {label}
          </label>
          <div className='mt-2'>
            <input
              ref={reference}
              name={name}
              {...props}
              id='id'
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
          {error && (
            <small className='b-0 absolute pt-1 text-red-500'> {error}</small>
          )}
        </div>
      </>
    );
  }
);

export default function Login() {
  const { register, onSubmit, errors, Fields } = useLogin();

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          {/* <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          /> */}
          <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Student portal
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
          <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
            <form onSubmit={onSubmit} className='space-y-6'>
              {Fields.map(({ type, name, label }, index) => (
                <CustomInput
                  {...register(name)}
                  key={index}
                  type={type}
                  label={label}
                  error={errors[name]?.message ?? ''}
                />
              ))}

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-3 block text-sm leading-6 text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm leading-6'>
                  <a
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
