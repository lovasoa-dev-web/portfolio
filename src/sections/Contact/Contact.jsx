import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

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
      <h1 className="sectionTitle">Contact</h1>
      {submitted && (
        <div className={styles.successMessage}>
          ✓ Message envoyé avec succès! Je te répondrai bientôt.
        </div>
      )}
      <form
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
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
