import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const useContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target; // Referencia directa al formulario
    emailjs.sendForm('service_5yb6xn7', 'template_w71nkz9', form, 'CakjfZap6HcKSBL5-').then(
      (result) => {
        Swal.fire({
          title: '¡Éxito!',
          text: 'Mensaje enviado con éxito!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        form.reset(); // Resetea el formulario
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
        Swal.fire({
          title: 'Error',
          text: 'Error al enviar el mensaje, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      },
    );
  };

  return { form, sendEmail };
};

export default useContactForm;
