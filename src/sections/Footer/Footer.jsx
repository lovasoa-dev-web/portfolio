import styles from './FooterStyles.module.css';

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <section id="footer" className={styles.container}>
        <p>
            &copy;  {year} Lovasoa William <br />
            Tous droit réservé.
        </p>
        </section>
    );
}

export default Footer;