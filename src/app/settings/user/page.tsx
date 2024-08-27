import BuggyButton from "@/app/components/BuggyButton";
import { getUserInfo } from "@/app/lib/settings";
import React from "react";

 async function User() {
    const {
        name, age, email
    }=  await getUserInfo()
    return(
        <div>
            <h1 className="text-2xl font-bold">User</h1>
            <div className="border border-dashed border-blue-700 p-4">
                <p>Nome:{name}</p>
                <p>Email:{email}</p>
                <p>Age:{age}</p>

            </div>
            <div className="mt-4">
                <BuggyButton/>

            </div>

        </div>
    )
}

export default User