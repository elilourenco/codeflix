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
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email" 
            />

            {formType === 'register' && (
                <InputField
                id="confirmpassword"
                name="password"
                type="password"
                label="Confirm Password"
                placeholder="Enter your email" />

            )}

        </div>

        </form>
    )
}