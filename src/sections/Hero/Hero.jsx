import { useEffect, useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/william.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('FrontEnd');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    const words = ['FrontEnd', 'BackEnd'];
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 80 : 140;
    const pauseDelay = 1200;

    let timer = null;

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.slice(0, typedText.length - 1)
          : currentWord.slice(0, typedText.length + 1);
        setTypedText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section id="hero" className={styles.container}>
      <div>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Photo de profil de william"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Lovasoa William
          <br />
          RANDRIANANTENAINA
        </h1>
        <h2>
          Dévéloppeur{' '}
          <span className={styles.typewriter}>
            {typedText}
            <span className={styles.cursor} />
          </span>
        </h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/lovasoa-dev-web" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/lovasoa-randrianantenaina-690b01403/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
            Je suis un développeur Full Stack passionné.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
