import emailjs from '@emailjs/browser';
import Link from 'next/link';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Github from '../components/icons/Github';
import LinkedIn from '../components/icons/LinkedIn';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i9xyjrr', 'template_jmd3b0i', form.current, {
        publicKey: 'dcFsyWMEj1bpaV__F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <>
      <PageHead>
        <title>Stephen Muñez | Contact Me</title>
      </PageHead>
      <Layout>
        <main className='flex w-full flex-col items-center gap-8 overflow-hidden'>
          <h1 className='invisible absolute'>Contact Me</h1>
          <section className='flex w-[82.93%] flex-col gap-1 border-y border-solid border-aquamarine py-6'>
            <h2 className='font-h2 text-aquamarine'>Get in Touch</h2>
            <div className='flex w-full flex-col gap-[0.875rem]'>
              <p className='font-body-1 text-light-slate'>
                I’d love to hear about what you’re working on and how I could
                help. I’m currently looking for a new role and am open to a wide
                range of opportunities. My preference would be to find a
                position in a company in London. But I’m also happy to hear
                about opportunites that don’t fit that description. I’m a
                hard-working and positive person who will always approach each
                task with a sense of purpose and attention to detail. Please do
                feel free to check out my online profiles below and get in touch
                using the form.
              </p>
              <ul className='flex items-center justify-start gap-4'>
                <li>
                  <Link href='https://github.com/stephmunez'>
                    <a className='group' target='_blank'>
                      <Github />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/in/stephen-munez'>
                    <a className='group' target='_blank'>
                      <LinkedIn />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className='mb-20 flex w-[82.93%] flex-col gap-6'>
            <h2 className='font-h2 text-aquamarine'>Contact Me</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex w-full flex-col gap-6'
            >
              <div className='flex flex-col gap-2'>
                <label className='font-body-1 text-light-slate'>Name</label>
                <input
                  type='text'
                  name='user_name'
                  className='placeholder:font-body-1 font-body-1 bg-light-slate/10 px-4 py-2 text-light-slate caret-aquamarine placeholder:text-light-slate/40 focus:outline-none'
                  placeholder='Jane Appleseed'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='font-body-1 text-light-slate'>Email</label>
                <input
                  type='email'
                  name='user_email'
                  className='placeholder:font-body-1 font-body-1 bg-light-slate/10 px-4 py-2 text-light-slate caret-aquamarine placeholder:text-light-slate/40 focus:outline-none'
                  placeholder='email@example.com'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='font-body-1 text-light-slate'>Message</label>
                <textarea
                  name='message'
                  rows='5'
                  cols='32'
                  className='placeholder:font-body-1 font-body-1 bg-light-slate/10 px-4 py-2 text-light-slate caret-aquamarine placeholder:text-light-slate/40 focus:outline-none'
                  placeholder='How can I help?'
                />
              </div>

              <button type='submit' className='btn'>
                Send Message
              </button>
            </form>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
