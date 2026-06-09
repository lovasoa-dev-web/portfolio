import React, { useState } from 'react';
import styles from './ContactStyles.module.css';
import Button from '../../common/Button.jsx';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify gère automatiquement la soumission
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(e.target)).toString(),
    })
      .then(() => {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(error => console.error('Erreur:', error));
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">Contact</h1>
      {submitted && (
        <div className={styles.successMessage} data-aos="fade-in" data-aos-duration="500">
          ✓ Message envoyé avec succès! Je te répondrai bientôt.
        </div>
      )}
      <form data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
        name="contact"
        method="POST"
        netlify
        onSubmit={handleSubmit}
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <Button type="submit" className={styles.submitButton}>Submit</Button>
      </form>
    </section>
  );
}

export default Contact;
