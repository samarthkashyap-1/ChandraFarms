import React from "react";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function ContactUs() {
  const contactref = collection(db, "ContactUs");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");
  const getdata = async (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Date: date,
    };
    // console.log(data)
    try {
      // console.log("try");
      await addDoc(contactref, data);
      console.log("Document written with ID: ");

      toast.success("We'll get back to you soon!");
      setdate("");
      setemail("");
      setname("");
      setphone("");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" />
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
      <Fade triggerOnce delay={100}>
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
            <form action="" onSubmit={getdata}>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  required
                  className="w-full border rounded py-2 px-3"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Your Name"
                  value={name}
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
                  onChange={(e) => setdate(e.target.value)}
                  placeholder="Booking Date"
                  value={date}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="phone">
                  Phone No:
                </label>
                <input
                  required
                  className="w-full border rounded py-2 px-3"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  required
                  className="w-full border rounded py-2 px-3"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300 ease-in-out"
                />
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ContactUs;
