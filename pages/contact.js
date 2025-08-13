import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Github from '../components/icons/Github';
import LinkedIn from '../components/icons/LinkedIn';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate name
    if (!form.current.user_name.value.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !form.current.user_email.value.trim() ||
      !emailRegex.test(form.current.user_email.value)
    ) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate message
    if (!form.current.message.value.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      emailjs
        .sendForm('service_i9xyjrr', 'template_jmd3b0i', form.current, {
          publicKey: 'dcFsyWMEj1bpaV__F',
        })
        .then(
          () => {
            setIsMessageSent(true);
            setIsSubmitting(false);
            clearForm();
            setTimeout(() => {
              setIsMessageSent(false); // Reset message after 3 seconds (adjust as needed)
            }, 3000); // 3000 milliseconds = 3 seconds
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsSubmitting(false);
          }
        );
    }
  };

  const clearForm = () => {
    form.current.user_name.value = '';
    form.current.user_email.value = '';
    form.current.message.value = '';
    setErrors({});
  };

  return (
    <>
      <PageHead>
        <title>Stephen Muñez | Contact Me</title>
      </PageHead>
      <Layout>
        <main className="flex w-full flex-col items-center gap-8 overflow-hidden md:gap-12">
          <h1 className="invisible absolute">Contact Me</h1>
          <section className="flex w-[82.93%] flex-col gap-1 border-y border-solid border-aquamarine pt-6 pb-8 md:w-[89.71%] md:gap-4 md:pt-8 md:pb-5 xl:w-[77.08%] xl:flex-row xl:gap-[7.813rem] xl:py-12">
            <h2 className="font-h2 text-aquamarine xl:w-[31.53%]">
              Get in Touch
            </h2>
            <div className="flex w-full flex-col gap-[0.875rem] md:gap-4 xl:w-[57.21%] xl:gap-6">
              <p className="font-body-1 text-light-slate">
                I’d love to chat about what you’re working on and how I could
                contribute. I’m open to exploring various opportunities,
                preferably remote. I bring a strong work ethic and a positive
                attitude to everything I do, ensuring each project is approached
                with purpose and attention to detail. Feel free to reach out
                through the contact form below or check out my online profiles
                for more information.
              </p>
              <ul className="flex items-center justify-start gap-4">
                <li>
                  <Link href="https://github.com/stephmunez">
                    <a className="group" target="_blank">
                      <Github />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/stephen-munez">
                    <a className="group" target="_blank">
                      <LinkedIn />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-20 flex w-[82.93%] flex-col gap-6 md:mb-24 md:w-[89.71%] md:gap-8 xl:mb-[6.875rem] xl:w-[77.08%] xl:flex-row xl:gap-[7.813rem]">
            <h2 className="font-h2 text-aquamarine xl:w-[31.53%]">
              Contact Me
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex w-full flex-col gap-6 xl:w-[57.21%]"
            >
              <div className="flex flex-col gap-2">
                <label
                  className="font-body-1 w-max text-light-slate"
                  htmlFor="user_name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className={`placeholder:font-body-1 font-body-1 bg-light-slate/10 px-4 py-2 text-light-slate caret-aquamarine placeholder:text-light-slate/40 focus:outline-none ${
                    errors.name && 'border border-red-500'
                  }`}
                  placeholder="Jane Appleseed"
                />
                {errors.name && (
                  <span className="font-body-1 w-max text-xs text-red-500">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-body-1 w-max text-light-slate"
                  htmlFor="user_email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className={`placeholder:font-body-1 font-body-1 bg-light-slate/10 px-4 py-2 text-light-slate caret-aquamarine placeholder:text-light-slate/40 focus:outline-none ${
                    errors.email && 'border border-red-500'
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <span className="font-body-1 w-max text-xs text-red-500">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-body-1 w-max text-light-slate"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  cols="32"
                  className={`placeholder:font-body-1 font-body-1 bg-light-slate/10 px-4 py-2 text-light-slate caret-aquamarine placeholder:text-light-slate/40 focus:outline-none ${
                    errors.message && 'border border-red-500'
                  }`}
                  placeholder="How can I help?"
                />
                {errors.message && (
                  <span className="font-body-1 w-max text-xs text-red-500">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`${isMessageSent && 'bg-aquamarine/10'} btn`}
                disabled={isSubmitting}
              >
                {isMessageSent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
