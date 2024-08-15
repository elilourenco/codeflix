'use client';
import Image from "next/image";
import React from "react";

export const Userprofile = () => (
    <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline"> Kids</p>
        <Image
            src='/profile.png'
            alt="user-profile"
            width={40}
            height={40}
            className="rounded cursor-pointer" />
    </div>
);
