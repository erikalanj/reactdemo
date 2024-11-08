import React, {ReactNode} from "react";
import Link from "next/link";

interface BaseLayoutTypes {
    children: ReactNode;
}

export default function BaseLayout({children}: BaseLayoutTypes) {
    return(
        
    <div>
        <div className="bg-blue-600 p-4">
            <Link href="/" className = "text-white mx-2">Home</Link>
            <Link href="/about" className = "text-white mx-2">About  </Link>


        </div>
        <div>{children}</div>
    </div>         




    )



}