import React from "react"
import styles from "./featured.module.css"
import Image from "next/image"

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Rafay here!</b> Discover my humorous stories and creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.postImage} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Title Here</h1>
                    <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque doloribus nemo officiis eligendi veritatis. 
                        Voluptate iure error voluptatum dolor, beatae unde laboriosam facilis doloribus inventore
                         quaerat quisquam voluptatibus quidem culpa.</p>
                    <button className={styles.postActionButton}>Read More</button>
                </div>

            </div>
        </div>
    )
}

export default Featured 