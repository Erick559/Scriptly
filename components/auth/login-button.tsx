"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps { 
    children:React.ReactNode;
    mode?:'login' | 'register';
    asChild?:boolean;
    className?:string;
}

const LoginButton = ({children,mode='register',asChild,className}:LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`${mode}`)
    }

    return (
        <span onClick={onClick} className={`cursor-pointer ${className}`}>
            {children}
        </span>
    )
}

export default LoginButton
