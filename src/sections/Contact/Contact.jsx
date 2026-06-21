import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';
import Button from '../../common/Button.jsx';

function Contact() {
  const [state, handleSubmit] = useForm('xwvdeare');

  return (
    <section id="contact" className={styles.container}>
      <h1
        className="sectionTitle"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Contact
      </h1>

      {state.succeeded && (
        <div
          className={styles.successMessage}
          data-aos="fade-in"
          data-aos-duration="500"
        >
          ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="subject" hidden>
            Sujet
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Sujet"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Votre message"
            required
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <Button
          type="submit"
          className={styles.submitButton}
          disabled={state.submitting}
        >
          {state.submitting ? 'Envoi...' : 'Envoyer'}
        </Button>
      </form>
    </section>
  );
}

export default Contact;