import { ThunkDispatch } from "@reduxjs/toolkit";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterSelector, registerUser ,clearState} from "../redux/slices/register.slices";
import ButtonComp from "../components/buttons";
export default function SignupPage() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { isFetching,errorMessage} = useSelector(
    RegisterSelector
  );
  const [FormsInputValues, setFormsInputValues] = useState({
    email:"",
    password:""
  });
 
   /**Input OnChange event handle */
   const onChangeEventHandle = (event:ChangeEvent<HTMLInputElement>) =>{
    dispatch(clearState())
    setFormsInputValues(prev=>({...prev, [event.target.name] :event.target.value}))
  };

  /** Form submit event handle */
  const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    dispatch(registerUser(FormsInputValues));
  };

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address *
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={e=>onChangeEventHandle(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password *
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={e=>onChangeEventHandle(e)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-1">
                  <span className="text-red-500">{errorMessage}</span>
              </div>
              <div>
              <ButtonComp
                type="submit"
                isFetching={isFetching}
                label="Register"
              />
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have account?{' '}
              <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  