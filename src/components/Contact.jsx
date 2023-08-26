import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_a1878nb',
      'template_ighkvcp',
      {
        from_name: form.name,
        to_name: 'Evan Holster',
        from_email: form.email,
        to_email: 'ehols001@odu.edu',
        message: form.message
      },
      'xN9bgvo-4-2G9g8y6'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
  }

  return (
    <div className='xl:mt-12 pb-14 xl:w-2/3 w-full mx-auto'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.4] bg-tertiary p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="absolute flex xl:flex-row flex-col top-0 right-0 gap-6 sm:p-12 px-6 py-7 text-white">
          <a href="https://www.linkedin.com/in/evan-holster-b1b909239/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in fa-2xl"></i>
          </a>
          <a href="https://github.com/ehols001" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-primary py-4 px-6 placeholder:text-gray text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-primary py-4 px-6 placeholder:text-gray text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-primary py-4 px-6 placeholder:text-gray text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-primary hover:bg-stone-800 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');