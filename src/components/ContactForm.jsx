'use client';

import {useState} from 'react';

import {company} from '@/data/siteData';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get('first_name') || '').trim();
    const lastName = String(formData.get('last_name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const serviceSelections = formData.getAll('services');
    const ageGroup = String(formData.get('age_group') || '').trim();
    const lifeEvent = String(formData.get('life_event') || '').trim();
    const source = String(formData.get('source') || '').trim();
    const note = String(formData.get('message') || '').trim();

    const lines = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Services: ${serviceSelections.length ? serviceSelections.join(', ') : 'Not specified'}`,
      `Age Group: ${ageGroup || 'Not specified'}`,
      `Recent Life-Changing Event: ${lifeEvent || 'Not specified'}`,
      `Referral Source: ${source || 'Not specified'}`,
      '',
      'Message:',
      note || 'No additional details provided.'
    ];

    const subject = encodeURIComponent(
      `Consultation Request from ${firstName} ${lastName}`.trim()
    );
    const body = encodeURIComponent(lines.join('\n'));

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setMessage(
      `Your email app is opening with your consultation request. If it does not, email ${company.email} directly.`
    );
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="first_name"
            placeholder="Your first name"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="last_name"
            placeholder="Your last name"
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="form-group">
        <label>What are you looking for?</label>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input type="checkbox" name="services" value="Counseling / Therapy" />
            Counseling / Therapy
          </label>
          <label className="checkbox-item">
            <input type="checkbox" name="services" value="Coaching / Mentoring" />
            Coaching / Mentoring
          </label>
          <label className="checkbox-item">
            <input type="checkbox" name="services" value="General Inquiry" />
            General Inquiry
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Age Group</label>
        <div className="checkbox-group" style={{flexDirection: 'row', flexWrap: 'wrap', gap: '1rem'}}>
          <label className="checkbox-item"><input type="radio" name="age_group" value="5-12" /> 5-12</label>
          <label className="checkbox-item"><input type="radio" name="age_group" value="13-20" /> 13-20</label>
          <label className="checkbox-item"><input type="radio" name="age_group" value="21+" /> 21+</label>
        </div>
      </div>

      <div className="form-group">
        <label>Life-Changing Event?</label>
        <div className="checkbox-group" style={{flexDirection: 'row', gap: '2rem'}}>
          <label className="checkbox-item"><input type="radio" name="life_event" value="Yes" /> Yes</label>
          <label className="checkbox-item"><input type="radio" name="life_event" value="No" /> No</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="source">How did you hear about us?</label>
        <select id="source" name="source">
          <option value="">Please select...</option>
          <option value="YouTube">YouTube</option>
          <option value="Referral">Referral</option>
          <option value="Social Media">Social Media</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Anything you&apos;d like us to know?</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Share what support you're looking for, your goals, or any scheduling preferences."
        />
      </div>

      <button type="submit" className="btn-gold" style={{width: '100%', textAlign: 'center', fontSize: '1rem', padding: '.9rem'}}>
        Submit →
      </button>
      <p id="form-msg" style={{fontSize: '.85rem', marginTop: '.75rem', minHeight: '1.2em'}}>
        {message}
      </p>
    </form>
  );
}
