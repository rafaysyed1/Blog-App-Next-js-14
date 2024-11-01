"use client"
import Image from "next/image"
import styles from "./writePage.module.css"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
const Write = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" />

            <div className={styles.editor}>
                <button className={styles.button}  onClick={() => setOpen(!open)}>
                    <Image alt="" src="/plus.png" width={16} height={16} />
                </button>

                {open && (
                    <div className={styles.add}>
                        <button className={styles.addbutton}>
                            <Image alt="" src="/image.png" width={16} height={16} />
                        </button>
                        <button className={styles.addbutton}>
                            <Image alt="" src="/external.png" width={16} height={16} />
                        </button>
                        <button className={styles.addbutton}>
                            <Image alt="" src="/video.png" width={16} height={16} />
                        </button>
                    </div>
                )}

                <ReactQuill className={styles.textArea} value={value} onChange={setValue} theme="bubble" placeholder="Apna Blog likhna shoru karo..." />
            </div>
        </div>
    )
}

export default Write