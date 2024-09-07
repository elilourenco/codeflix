'use client'

import React from "react";
import { InputField } from "../../components/InputField";
import { AuthForm } from "@/app/components/AuthForm";

export function RegisterForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('submit from registrar');
        e.preventDefault();
    };
    return (


        <AuthForm formType="register" onSubmit={handleSubmit}>

        </AuthForm>




    );
}