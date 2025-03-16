'use client'


import { Userprofile } from "./Userprofile";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import { useScroll } from "../hooks/useScroll";
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Header(){
    const isScrolled= useScroll() ;
    const [searchTerm,setSearchTerm] = React.useState('')



    const onSearchTermChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(event.target.value)
    }
   
    return(
        <header className={`${isScrolled && 'bg-black'} fixed top-0z-50 flex w-full items-center
         justify-between transition-all px-4 p-2 lg:px-16 lg:py-6`}>

            <div className="flex items-center space-x-2 md:space-x-8">
                <Logo/>
                <NavLinks/>

            </div>
            <div className="flex items-center space-x-2 md:space-x-8" >
                <form className="flex items-center space-x-2">
                    <button type="submit">
                    <MagnifyingGlassIcon className="h-6 w-6  text-gray-400" />
                    </button>
                    <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={onSearchTermChange}
                    />

                </form>
                <Userprofile/>

            </div>    
        </header>
    )
}
