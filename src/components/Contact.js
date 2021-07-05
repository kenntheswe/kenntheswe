import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Result = () => {
  return (
    <p>Your messsage has been sent successfully. Thanks for contacting!</p>
  )
}

const Contact = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_kennvungan', 'template_kenn', e.target, 'user_PFPswM0mIgqXIbWYQvOvh')
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
        showResult(true)
  };

  setTimeout(() => {
    showResult(false)
  }, 5000);

  return (
    <div className="m-8">
      <div className="flex justify-end space-x-3">
        <h1 className="text-2xl" id="contact">
          HIRE ME!
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <form
        className="flex flex-col justify-start contact mx-12 md:mx-24 lg:mx-36"
        onSubmit={sendEmail}
      >
        <div data-aos="fade-left" className="flex flex-col mt-3">
          <label htmlFor="name">Name:</label>
          <input
            className="focus:outline-none focus:ring-2 focus:ring-green-500 border-2 p-2 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Kenny Smith"
            required
          />
        </div>
        <div data-aos="fade-right" className="flex flex-col mt-3">
          <label htmlFor="email">Email:</label>
          <input
            className="focus:outline-none focus:ring-2 focus:ring-green-500 border-2 p-2 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="kennysmith@gmail.com"
            required
          />
        </div>
        <div data-aos="fade-down" className="flex flex-col mt-3">
          <label htmlFor="message">Message:</label>
          <textarea
            className="focus:outline-none focus:ring-2 focus:ring-green-500 border-2 p-2 rounded-md"
            id="message"
            name="message"
            rows="3"
            placeholder="I'd like to offer you a full stack developer position at our company."
            required
          />
        </div>
        <button
          data-aos="fade-up"
          className="focus:outline-none bg-green-400 hover:bg-green-300 transition-colors duration-500 px-6 py-2 mt-5 rounded-md self-center"
        >
          Submit
        </button>
        <div className="bg-green-100 row text-center mt-2 italic rounded">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
};

export default Contact;
