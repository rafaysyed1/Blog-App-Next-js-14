import React from "react"
import styles from "./menu.module.css"
import MenuPosts from "../menuPosts/MenuPosts"
import MenuCategories from "../menuCategories/MenuCategories"

const Menu = () => {
    return (
        <div className={styles.container}>
            {/* First Trending Section */}
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false} />

            {/* Categories Section  */}
            <h2 className={styles.subtitle}>Discover by Topics</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories/>




            {/* Editors Choice Section */}
            <h2 className={styles.subtitle}>Chosen by Rafay</h2>
            <h1 className={styles.title}>Editor Pick</h1>
            <MenuPosts withImage={true} />
        </div>
    )
}

export default Menu 