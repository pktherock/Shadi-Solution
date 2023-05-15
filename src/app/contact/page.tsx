'use client';
import { ContactForm } from '@component/constants/contact-form';
import { sendMail } from '@component/services/email.service';
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

  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

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

  const isFormValid = (): boolean => {
    const phoneRegX = /^(\+91|\+91\-|0)?[789]\d{9}$/;

    const { name, mobileNo } = contactForm;
    console.log(phoneRegX.test(mobileNo));
    if (!name || !phoneRegX.test(mobileNo)) {
      return false;
    } else {
      return true;
    }
  };

  const handleOnInitiateAnotherRequest = () => {
    setSuccess(false);
    setIsLoading(false);
    setDate({ startDate: null, endDate: null });
    setContactForm({
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
  };

  const handleSubmitRequest = async (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      setSuccess(true);
      setError(false);
      setIsLoading(true);

      const res = await sendMail();
      console.log(res);
      //  todo write function for sending mail to us and to user?
    } else {
      setError(true);
      setSuccess(false);
      console.log(contactForm);
    }
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
              separator=" to "
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

          {error && (
            <div
              className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium"> Error alert!</span> Please fill
                correct details
              </div>
            </div>
          )}
          {success && (
            <div
              className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Success!</span>
                <ul className="mt-1.5 ml-4 list-disc list-inside">
                  <li>We have received your request successfully</li>
                  <li>We wil get back to you soon</li>
                  <li>
                    Mean while if you want contact on this no :-{' '}
                    <strong>9155657918</strong>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {!success && (
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-200 disabled:text-green-400"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting your request...' : 'Request a call back'}
            </button>
          )}
        </form>
        {success && (
          <button
            className="mt-3 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-200 disabled:text-green-400"
            onClick={handleOnInitiateAnotherRequest}
          >
            Initiate another request
          </button>
        )}
      </div>
    </section>
  );
};

export default Contact;
