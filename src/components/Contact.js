import React from 'react';
import '../styles/Contact.css';
import useContactForm from '../hooks/useContactForm';

const Contact = () => {
  const { form, sendEmail } = useContactForm();

  return (
    <section className="contact">
      <h3>My form</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Name" required />
        <input type="email" name="from_email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
