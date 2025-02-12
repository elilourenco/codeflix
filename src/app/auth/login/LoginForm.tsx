'use client'

import React, { FormEvent, useState } from "react";
import { InputField } from "../../components/InputField";
import { AuthForm } from "@/app/components/AuthForm";
import { useRouter } from "next/navigation";

type ServerError ={
    message:string
}

export function LoginForm() {
    const router= useRouter();
    const [errors,SetErrors]= useState<string[]>([])

        const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
            
            e.preventDefault();
            const formData= new FormData(e.currentTarget)
            const email= formData.get('email')
            const password= formData.get('password')
            

            try{
                const response= await fetch('/api/auth/login',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({email,password}),
                });


                if (response.ok) {
                    router.push('/');
                    return;
                    
                }

                const playload:ServerError[]= await response.json();
                SetErrors(playload.map((error)=>error.message))

            } catch(err){
                console.log(err)

                SetErrors(['An unknow error occured'])
            }
        };
        return (

            <AuthForm formType="login" onSubmit={handleSubmit}>

            </AuthForm>
        




        );
}
