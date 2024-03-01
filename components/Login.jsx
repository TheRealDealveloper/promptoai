'use client';

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import classes from "./Login.module.css";

const Login = () => {
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setUpProviders();
    }, []);

    return (
        <div className={classes.wrapper}>
            <h1>
                Login
            </h1>
            <input className="" placeholder="Email"></input>
            <input className="" placeholder="Password"></input>
            <br className="bg-slate-900 h-1"></br>
            {providers && Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.Id)} className="black_btn">Sign In</button>
            ))}
            <div className="mt-2">
                <span className="text-center border-b-2 border-blue-50">OR WITH</span>
                {providers && Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} onClick={() => signIn(provider.Id)} className="black_btn">Sign In with {provider.name}</button>
                ))}
            </div>
        </div>
    )
}

export default Login