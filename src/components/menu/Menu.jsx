import React from "react"
import styles from "./menu.module.css"
import Link from "next/link"
import Image from "next/image"

const Menu = () => {
    return (
        <div className={styles.container}>
            {/* First Trending Section */}
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            culture
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            food
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            fashion
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
            </div>

            {/* Categories Section  */}
            <h2 className={styles.subtitle}>Discover by Topics</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link href="/blog?cat=style" className={styles.categoryItem}>
                Style   
                </Link>
            </div>




            {/* Editors Choice Section */}
            <h2 className={styles.subtitle}>Chosen by Rafay</h2>
            <h1 className={styles.title}>Editor Pick</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image alt="" src="/p1.jpeg" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image alt="" src="/p1.jpeg" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            culture
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image alt="" src="/p1.jpeg" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            food
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image alt="" src="/p1.jpeg" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            fashion
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe - </span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu 