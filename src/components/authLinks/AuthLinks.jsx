"use client"
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
    const [open,setOpen] = useState(false);
    const {status} = useSession();

    const handleLogout = async () => {
        await signOut({ redirect: false });
    };
    return (
        <>
            {status === "unauthenticated" ? (
                <Link href="/login" className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/write" className="styles.link">
                        Write
                    </Link>
                    <span className={styles.link} onClick={(e)=>{
                        console.log("Span clicked!",e); // Debug log
                        handleLogout();}}>Logout</span>
                </>
            )}
            <div className={styles.burger} onClick={()=>{
                setOpen(!open);
            }}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">HomePage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "unauthenticated" ? (
                <Link href="/login">
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/write">
                        Write
                    </Link>
                    <button className={styles.link} onClick={(e)=>{
                        console.log("Span clicked!",e); // Debug log
                        handleLogout();}}>
                        Logout
                    </button>
                </>
            )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;
