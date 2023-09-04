import React from 'react'

function ContactUs() {

  return (
    <div>
      <div className="bg-gray-100">
        {/* Header Section */}
        <header className=" py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">
              Get in{" "}
              <span className="text-5xl text-[#ffcc7b] font-bold">Touch</span>
            </h1>
            <p className="mt-4 text-xl">
              Reach Out to Us for Inquiries and Bookings
            </p>
          </div>
        </header>
      </div>

      <div className="flex md:flex-col my-10">
        <div className="w-1/2 p-6 md:w-full">
          <h1 className="text-3xl font-bold mb-4">Visit Us</h1>
          <iframe
            title="Embedded Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.1950061457037!2d81.0681389!3d26.897305600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUzJzUwLjMiTiA4McKwMDQnMDUuMyJF!5e0!3m2!1sen!2sin!4v1693830456265!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-lg border-4  shadow-xl"
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>


        </div>

        <div className="flex items-center flex-col md:flex-row md:w-3/4 mx-auto py-4">
          <div className="flex-grow h-px w-0.5 bg-gray-400"></div>

          <span className="flex-shrink text-2xl px-4 font-light">OR</span>

          <div className="flex-grow h-px w-0.5 bg-gray-400"></div>
        </div>

        {/* Right side with contact information */}
        <div className="w-1/2 p-6 md:w-full">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form action="">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="bookingDate">
              Booking Date:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="date"
              id="bookingDate"
              name="bookingDate"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="phone">
              Phone No:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs
