import React from "react"
import styles from "./categoryList.module.css"
import Link from "next/link"
import Image from "next/image"

const getCategoriesData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed");

    }

    return res.json();
}
const CategoryList = async () => {
    const data = await getCategoriesData();
    return (
        <div className={styles.container}>
            <h1 className={styles.categoryTitle}>Popular Categories</h1>
            <div className={styles.categories}>
                {
                    data?.map((item) => (
                        <Link
                            href="/blog"
                            className={`${styles.category} ${styles[item.slug]}`}
                            key={item._id}
                        >
                            {
                                item.img &&
                                <Image
                                src={item.img}
                                alt=""
                                width={32}
                                height={32}
                                className={styles.categoryImage}
                            />
                            }
                            
                            {item.title}
                        </Link>
                    )
                )
                }

            </div>
        </div>
    )
}

export default CategoryList 