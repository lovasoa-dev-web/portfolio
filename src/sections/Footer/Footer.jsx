import styles from './FooterStyles.module.css';

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <section id="footer" className={styles.container}>
        <p data-aos="fade-up" data-aos-duration="800">
            &copy;  {year} Lovasoa William <br />
            Tous droit réservé.
        </p>
        </section>
    );
}

export default Footer;