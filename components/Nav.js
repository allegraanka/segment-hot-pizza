import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.callButton}>
                    <svg fill="#FFFFFF" viewBox="0 0 50 50" width="50px" height="50px" className="logo">
                        <path d="M 5 4 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 14.292969 15.707031 A 1.0001 1.0001 0 0 0 15 16 L 34 16 L 34 35 A 1.0001 1.0001 0 0 0 34.292969 35.707031 L 44.292969 45.707031 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 7.4140625 6 L 44 6 L 44 42.585938 L 36 34.585938 L 36 15 A 1.0001 1.0001 0 0 0 35 14 L 15.414062 14 L 7.4140625 6 z M 14.970703 18 A 1.0001 1.0001 0 0 0 14.292969 18.292969 L 4.2929688 28.292969 A 1.0001 1.0001 0 0 0 4 29 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 21 46 A 1.0001 1.0001 0 0 0 21.707031 45.707031 L 31.707031 35.707031 A 1.0001 1.0001 0 0 0 31 34 L 16 34 L 16 19 A 1.0001 1.0001 0 0 0 14.970703 18 z M 14 21.414062 L 14 35 A 1.0001 1.0001 0 0 0 15 36 L 28.585938 36 L 20.585938 44 L 6 44 L 6 29.414062 L 14 21.414062 z"></path>
                    </svg>
                </div>
                <h2 className={styles.logoText}>Hot Pizza</h2>
            </div>

            <div className={styles.navTextContainer}>
                <Link href='/order'>
                    <a className={styles.navText}>Order now!</a>
                </Link>
                <p className={styles.navText}>013 946 8274</p>
            </div>

            <div className={styles.item}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>Home</li>
                    <li className={styles.navListItem}>Merch</li>
                    <li className={styles.navListItem}>Menu</li>
                    <li className={styles.navListItem}>Events</li>
                    <li className={styles.navListItem}>Blog</li>
                </ul>
            </div>
            <div className={styles.cartContainer}>
                <p className={styles.cartCounter}>2</p>
                <p className={styles.cartIcon}>Cart</p>
            </div>
        </div>
    );
}

export default Nav;