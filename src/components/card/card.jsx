import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'
const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" fill alt=" " className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>سید محمد رافع حسنی</h1>
                </Link>

                <p className={styles.desc}>پنی تصاویر کو موصول ہوتے ہی میرا ارادہ تو اس بات کا تھا کہ بھائی کو کھڑے ہو کر سیلوٹ تو لازمی کروں  کہ  نہ صرف عکس بندی کی بلکہ ایڈیٹنگ کا فریضہ بھی سر انجام دیا
                سیلوٹ کی پریکٹس شروع کرنے ہی والا تھا کہ  مجھے غداری کا بھالا اس خبر کو سن کر لگا کہ موصوف بیچ راستے میں انہیں چھوڑ کر رکشہ کروانے کا مشورہ دینے کے جُرم میں میری تصاویر اور ویڈیوز اپنے موبائل فون سے  ڈیلیٹ کر چکے تھے ۔</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card