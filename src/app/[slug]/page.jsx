import Menu from "@/components/menu/Menu"
import styles from "./singlePage.module.css"
import Image from "next/image"
import Comments from "@/components/comments/Comments"
const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>I discovered the humorous Writer!</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" fill alt="" className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Syed Muhammad Rafay Hassni</span>
                            <span className={styles.date}>10.10.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc}>
                        <h2>Posts</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis provident aperiam suscipit officiis voluptatibus recusandae possimus consectetur nulla natus eum.
                            In commodi dolorem voluptas molestias iste. Rem saepe facilis vel
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis provident aperiam suscipit officiis voluptatibus recusandae possimus consectetur nulla natus eum.
                            In commodi dolorem voluptas molestias iste. Rem saepe facilis vel
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis provident aperiam suscipit officiis voluptatibus recusandae possimus consectetur nulla natus eum.
                            In commodi dolorem voluptas molestias iste. Rem saepe facilis vel
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis provident aperiam suscipit officiis voluptatibus recusandae possimus consectetur nulla natus eum.
                            In commodi dolorem voluptas molestias iste. Rem saepe facilis vel
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage