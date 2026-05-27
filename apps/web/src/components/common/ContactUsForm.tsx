import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUsForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm('service_rzfbk92', 'template_qmvy1jb', formRef.current, {
        publicKey: 'Z2jdTPo7WZkJLZpND',
      })
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
      <div>
        <h2 className="text-2xl font-light tracking-[-0.26px] text-[#0d253d]">
          We Like To Hear From You
        </h2>
        <p className="mt-1 text-[13px] font-light text-[#64748d]">
          Send us a message and we’ll respond within 24 hours.
        </p>
      </div>

      <div className="space-y-1">
        <label className="block text-[13px] font-normal text-[#0d253d]">
          Full Name
        </label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full rounded-md border border-[#a8c3de] bg-white px-3 py-2 text-[15px] font-light text-[#0d253d] placeholder:text-[#64748d]/50 focus:border-[#533afd] focus:outline-none focus:ring-1 focus:ring-[#533afd] transition-colors"
          placeholder="Enter your name"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-[13px] font-normal text-[#0d253d]">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full rounded-md border border-[#a8c3de] bg-white px-3 py-2 text-[15px] font-light text-[#0d253d] placeholder:text-[#64748d]/50 focus:border-[#533afd] focus:outline-none focus:ring-1 focus:ring-[#533afd] transition-colors"
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-[13px] font-normal text-[#0d253d]">
          Your Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-md border border-[#a8c3de] bg-white px-3 py-2 text-[15px] font-light text-[#0d253d] placeholder:text-[#64748d]/50 focus:border-[#533afd] focus:outline-none focus:ring-1 focus:ring-[#533afd] transition-colors resize-vertical"
          placeholder="Tell us about your property needs or questions..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Submit'}
      </button>

      {status === 'success' && (
        <div className="mt-3 rounded-md bg-[#f6f9fc] border border-[#e3e8ee] p-2 text-center text-[13px] font-light text-[#0d253d]">
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 rounded-md bg-[#f6f9fc] border border-[#ea2261]/30 p-2 text-center text-[13px] font-light text-[#ea2261]">
          ✗ Failed to send. Please try again or contact us directly.
        </div>
      )}
    </form>
  );
};

export default ContactUsForm;