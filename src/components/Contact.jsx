import React from 'react';
import '../styles/Contact.css';
import useContactForm from '../hooks/useContactForm';

const Contact = () => {
  const { form, sendEmail } = useContactForm();

  return (
    <section className="contact">
      <h3 className="contact__title">CONTACT ME</h3>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <div className="contact__form__group">
          <input type="text" name="from_name" placeholder="Name" required />
        </div>
        <div className="contact__form__group">
          <input type="email" name="from_email" placeholder="Email" required />
        </div>
        <div className="contact__form__group">
          <input type="text" name="phone" placeholder="Phone" required />
        </div>
        <div className="contact__form__group">
          <textarea name="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;