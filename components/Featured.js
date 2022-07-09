import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
    const images = [
        '/images/featured0.jpg',
        '/images/featured1.jpg',
        '/images/featured2.jpg'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}}>
                <Image src='/images/arrowl.png' alt='left pointing arrow' layout='fill' objectFit='contain'/>
            </div>
            <div className={styles.wrapper}>
                {images.map((image, i) => (
                    <div className={styles.imageContainer} key={i}>
                        <Image src={image} alt='' layout='fill' objectFit='contain'/>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right:0}}>
                <Image src='/images/arrowr.png' alt='right pointing arrow' layout='fill' objectFit='contain'/>
            </div>
        </div>
    );
}

export default Featured;