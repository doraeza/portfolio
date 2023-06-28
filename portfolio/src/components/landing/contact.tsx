import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'serviceID', 
        'templateID', 
        {
          from_name: form.name,
          to_name: 'name', 
          from_email: form.email,
          to_email: 'email@gmail.com',
          message: form.message,
        },
        'publickey'
      )
      .then(
        () => {
          setLoading(false);
          alert('감사합니다.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error:any) => {
          setLoading(false);
          console.log(error);
          alert('다시 시도해주세요.');
        }
      );
  };

  return (
    <div>
        <p>Get in touch</p>
        <h3 >Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="name"
             
            />
          </label>
          <label>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              
            />
          </label>
          <label>
            <span>
              Your Message
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="message"
            />
          </label>

          <button
            type="submit"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              className='contact-btn'
              src={send}
              alt="send"
            />
          </button>
        </form>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
