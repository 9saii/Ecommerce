import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/mail', { email, message, name, phone });
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    }
  };

  return (
    <ContactWrapper>
      <ContactForm onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your phone number"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
        />
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;