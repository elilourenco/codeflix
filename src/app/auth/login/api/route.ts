import { NextRequest, NextResponse } from "next/server";
import { LoginFormSchema } from "@/app/lib/validations/LoginValidation";


export async function POST(request:NextRequest){
    try{
        const{email,password}= LoginFormSchema.parse(await request.json());
        console.log('email:'+ email, 'password:'+ password)

        return new NextResponse('It Works')

    } catch (error:any){

        console.log(error.message)

        return new  NextResponse(error.message,{status:400})
        
    }
}