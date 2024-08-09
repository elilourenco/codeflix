'use client'

import React, { useEffect } from "react";

export default function Header(){
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(()=>{
        const handleScroll =() =>{

            if(window.scrollY > 0){
                setIsScrolled(true)
            }
                else{
                    setIsScrolled
                }    
                
                
            window.addEventListener('scroll', handleScroll);
            return()=> {
                window.removeEventListener('scroll',handleScroll)}
        }
    },[])

   return isScrolled;

   const Logo= ()=> (
    <img src='http://rb.gy/ulxxee' alt="logo of the page" width={120} height={120}/>
   )

   const NavLinks =() => (
    <nav>
        <ul className="hidden md:flex md:space-x-4">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movie</li>
            <li>Latest</li>

        </ul>

    </nav>
   )

   const Userprofile =()=>(
    <div>

    </div>
   )
    return(
        <header className={`${isScrolled && 'bg-black'}  fixed top-0z-50 flex w-full items-center justify-between 
        transition-all px-4 py-4 lg:px-10 lg:py-6`}>

            <div className="flex items-center space-x-2 md:space-x-8">



                <ul className="hidden md:flex md:space-x-4">
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movie</li>
                    <li>Latest</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                 <p className="hidden cursor-not-allowed lg:inline">Kids</p>
                 <img src='https://rb.gy/g1pwyx' 
                 alt=""
                 className="cursor-pointer rounded" />
            </div>
        </header>
    )
}