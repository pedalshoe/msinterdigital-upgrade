'use client';

import {useState} from 'react';

export default function NewsletterForm() {
  const [message, setMessage] = useState('We respect your privacy. Unsubscribe any time.');

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage('Thank you! Check your inbox to confirm your subscription.');
  };

  return (
    <>
      <form className="nl-form" onSubmit={handleSubmit}>
        <input type="email" id="nl-email" placeholder="Enter your email address" required autoComplete="email" />
        <button type="submit" className="btn-gold">Subscribe →</button>
      </form>
      <p className="nl-note" id="nl-msg">{message}</p>
    </>
  );
}
