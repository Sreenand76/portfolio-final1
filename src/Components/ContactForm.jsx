import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'YOUR_USER_ID',
      template_params: templateParams,
    })
    .then(() => {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      setError('Failed to send message. Please try again.');
      console.error(err);
    });
  };

  return (
    <div className='w-full lg:w-3/5 mx-auto p-4'>
      <h2 className='text-3xl mb-5 text-gray-200 mt-10'>Contact:</h2>
      <form onSubmit={sendEmail} className='flex flex-col w-full md:w-[400px] lg:w-[55vw] justify-left gap-3'>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='mb-2 p-2 border text-white font-extralight border-gray-300 rounded bg-transparent'
          required
        />
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-2 p-2 border text-white font-extralight border-gray-300 rounded bg-transparent'
          required
        />
        <textarea
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='mb-2 p-2 border text-white font-extralight border-gray-300 rounded bg-transparent'
          required
        />
        <button type='submit' className='bg-purple-950 text-white p-2 rounded hover:brightness-110'>
          Submit
        </button>
      </form>
      {success && <p className='mt-4 text-green-500'>Message sent successfully!</p>}
      {error && <p className='mt-4 text-red-500'>{error}</p>}
    </div>
  );
};

export default ContactForm;

