'use client';
import { ContactForm } from '@component/constants/contact-form';
import { FC, FormEvent, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    mobileNo: '',
    email: '',
    date: {
      startDate: '',
      endDate: '',
    },
    eventType: '',
    message: '',
  });

  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    setContactForm({ ...contactForm, ['date']: newDate });
  };

  const handleInputChange = (e: any) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    } as ContactForm);
  };

  const handleSubmitRequest = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(contactForm);
  };

  return (
    <section className="bg-white dark:bg-gray-900" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a clear plan? Want to call back from us about your plaining of
          events? Need details about our facilities & Business plan? Let us
          know.
        </p>
        <form onSubmit={handleSubmitRequest} className="space-y-8">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Full Name
            </label>
            <input
              value={contactForm.name}
              onChange={handleInputChange}
              type="text"
              id="fullName"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Please write your name here"
              required
            />
          </div>

          <div>
            <label
              htmlFor="mobileNo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Mobile Number
            </label>
            <input
              value={contactForm.mobileNo}
              type="number"
              id="mobileNo"
              name="mobileNo"
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Please write your phone number here"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email (Optional)
            </label>
            <input
              value={contactForm.email}
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Please write your email id here"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>

          <div>
            <label
              htmlFor="eventDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Event duration (optional)
            </label>
            <Datepicker
              inputId="eventDate"
              value={date}
              onChange={handleDateChange}
              inputClassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              displayFormat="DD-MM-YYYY"
            />
          </div>

          <div>
            <label
              htmlFor="eventType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Event Type (optional)
            </label>
            <input
              value={contactForm.eventType}
              type="text"
              id="eventType"
              name="eventType"
              onChange={handleInputChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Please write your event type like shadi, birthday, party etc..."
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message (optional)
            </label>
            <textarea
              value={contactForm.message}
              id="message"
              name="message"
              onChange={handleInputChange}
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="please write bit more details about you events"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-200"
            disabled={isLoading}
          >
            {isLoading ? 'Sending your request...' : 'Request a call back'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
