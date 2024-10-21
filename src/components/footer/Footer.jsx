import React from "react"
import styles from "./footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="" width={50} height={50} />
                    <h1 className={styles.logoText}>Rafay ka Blog</h1>
                </div>
            </div>
            <div className={styles.links}>

            </div>
        </div>
    )
}

export default Footer 