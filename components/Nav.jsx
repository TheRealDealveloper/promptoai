"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  
useEffect(() => {
  const setProviders = async () => {
    const response = await getProviders();

    setProviders(response);
  }
  setProviders();
}, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image alt="Promptoai Logo" width={30} height={30} src="/assets/images/logo.svg"></Image>
        <p className="logo_text">Promptoai</p>
      </Link>
      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ?
          (<div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
              Create post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign out
              </button>
              <Link href="/profile">
                <Image src="assets/images/logo.svg" width={37} height={37} className="rounded-fill" alt="profile"></Image>
              </Link>
          </div>) : 
          (<>
            {providers && Object.values(providers).map((provider) => (
              <button type="button" key={provider.name} onClick={() => signIn(provider.Id)} className="black_btn">Sign In</button>
            ))}
          </>)}
      </div>
    </nav>
  )
}

export default Nav