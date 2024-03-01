"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [toogleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image alt="Promptoai Logo" width={30} height={30} src="/assets/images/logo.svg"></Image>
        <p className="logo_text">Promptoai</p>
      </Link>
      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {session?.user ?
          (<div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign out
            </button>
            <Link href="/profile">
              <Image onClick={() => { }} src={session?.user.image ?? "assets/images/logo.svg"} width={37} height={37} className="rounded-fill" alt="profile"></Image>
            </Link>
          </div>) :
          (<>
            <button type="button" onClick={() => router.push("/login")} className="black_btn">Sign In</button>
          </>)}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image onClick={() => setToggleDropdown((prev) => !prev)} src={session?.user.image ?? "assets/images/logo.svg"} width={37} height={37} className="rounded-fill" alt="profile"></Image>
            {toogleDropdown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button className="mt-5 w-full black_btn" type="button" onClick={() => { setToggleDropdown(false); signOut(); }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>) : (
          <>
            <button type="button" onClick={() => router.push("/login")} className="black_btn">Sign In</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav