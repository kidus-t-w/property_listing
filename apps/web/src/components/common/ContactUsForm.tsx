import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUsForm = () => {
  const form:any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rzfbk92', 'template_qmvy1jb', form.current, {
        publicKey: 'Z2jdTPo7WZkJLZpND',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div className="flex justify-center items-center min-h-full ">
      <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">We Like To Hear From You</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input 
            type="text" 
            name="user_name" 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            name="user_email" 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Your message</label>
          <textarea 
            name="message" 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter property description"
          />
        </div>
        
        <input 
          type="submit" 
          value="Submit" 
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        />
      </form>
    </div>
  );
};

export default ContactUsForm;