'use client'


import React from "react"
import { InputField } from "./InputField";
type AuthFormProps ={
    formType :'login' | 'register';
    onSubmit:(e: React.FormEvent<HTMLFormElement>) =>void
}


export const AuthForm:React.FC<AuthFormProps>=({formType,onSubmit}) =>{
    return(
        <form 
        onSubmit={onSubmit}   
        className="flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414]
          bg-opacity-90 px-4 py-8 shadow-lg">     
        
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold">
                {formType === 'login' ? 'login': 'register'}

            </h1>
            <p className="text-sm text-gray-500">
                {formType === 'login' ? 'New to the app?' : 'Already hace an account?'} {''}

                <a href={formType === 'login' ? '/register' :'/login'} 
                className="text-red-500 hover:underline">
                    {formType === 'login' ?  'register': 'Login'}
                </a>

            </p>

        </div>

        <div className="mt-8 flex flex-col space-y-4">
            <InputField
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
            />

            <InputField
                id="password"
                    name="password"
                    type="password"
                    label="password"
                    placeholder="Enter your password" 
            />

            {formType === 'register' && (
                <InputField
                id="confirmPassword"
                name="password"
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"/>

            )}

        </div>

        <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <button
                className="flex w-full items-center justify-center rounded-lg bg-red-500
                     hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto"
                type="submit">

                {formType === 'login' ? 'Login' :'Register'}
            </button>
        </div>

        </form>
    )
}