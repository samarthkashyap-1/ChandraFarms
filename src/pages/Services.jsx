import React from "react";
import wed from "../assets/wed2.png";

import coop from "../assets/co op.png";

import sang from "../assets/sang.png";

import bday from "../assets/bday.png";

function Services() {
  return (
    <div className="my-20">
      <div className="bg-gray-100 ">
        {/* Header Section */}
        <header className=" py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">
              Discover Our{" "}
              <span className="text-5xl text-[#ffcc7b] font-bold">
                Services
              </span>
            </h1>
            <p className="mt-4 text-xl">
              Create Unforgettable Memories on Our Picturesque Farm
            </p>
          </div>
        </header>
      </div>
      {/* Services Section */}
      <section className="container mx-auto mt-20 md:w-full w-3/4 ">
        <div className="flex flex-col gap-20 md:mx-10 ">
          {/* Service 1 */}

          <div className="flex sm:flex-col mx-0 gap-5 ">
            <div className="w-1/2 sm:w-full">
              <div>
                <img src={wed} className="rounded-lg shadow-lg " alt="" />
              </div>
            </div>
            <div className="w-1/2 sm:w-full">
              {" "}
              <h1 className="text-3xl font-semibold text-[#ffcc7b] text-center mt-4">
                Unforgettable Wedding Celebrations
              </h1>
              <p className=" mt-4 lg:text-xl text-justify px-7 py-5 ">
                Your dream wedding becomes a reality on our picturesque farm. We
                offer a charming backdrop, whether you envision a rustic barn
                ceremony or an elegant outdoor affair. Our dedicated team is
                committed to making your special day truly unforgettable.
                Explore our wedding packages and let us turn your love story
                into a fairytale wedding.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex sm:flex-col mx-0 gap-5 ">
            <div className="flex flex-row-reverse sm:flex-col gap-5">
              <div className="w-1/2 sm:w-full">
                <img src={coop} className="rounded-lg shadow-lg" alt="" />
              </div>
              <div className="w-1/2 sm:w-full">
                <h1 className="text-2xl font-semibold text-center text-[#ffcc7b] mt-4">
                  Corporate Excellence, Natural Beauty
                </h1>
                <p className="text-justify px-7 py-5  mt-4 lg:text-lg">
                  Elevate your corporate events in a serene and productive
                  environment. Our farm provides the perfect setting for
                  conferences, team-building retreats, and corporate gatherings.
                  With state-of-the-art facilities and a tranquil atmosphere, we
                  help you achieve your business objectives while connecting
                  with nature. Discover how we can tailor our venue to meet your
                  corporate needs.
                </p>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="flex sm:flex-col mx-0 gap-5 ">
            <div className="w-1/2 sm:w-full">
              <div>
                <img src={sang} className="rounded-lg shadow-lg" alt="" />
              </div>
            </div>
            <div className="w-1/2 sm:w-full">
              <h1 className="text-2xl font-semibold text-center text-[#ffcc7b] mt-4">
                Vibrant Sangeet and Mehndi Celebrations
              </h1>

              <p className="text-justify px-7 py-5  mt-4 lg:text-lg">
                Embrace the rich cultural traditions of India with vibrant
                sangeet and mehndi ceremonies at our farm. Our versatile spaces
                offer the ideal canvas for these joyful pre-wedding
                celebrations. Whether you're planning a colorful dance-filled
                sangeet night or an intimate mehndi gathering, we ensure a blend
                of tradition and modernity in every detail. Let's create
                memories filled with music, dance, and henna art.
              </p>
            </div>
          </div>
          {/* Service 4 */}
          <div className="flex sm:flex-col mx-0 gap-5 ">
            <div className="flex flex-row-reverse sm:flex-col gap-5">
              <div className="w-1/2 sm:w-full">
                <img src={bday} className="rounded-lg shadow-lg" alt="" />
              </div>
              <div className="w-1/2 sm:w-full">
                <h1 className="text-2xl font-bold mt-4 text-[#ffcc7b] text-center">
                  Memorable Birthday Bash on the Farm
                </h1>

                <p className="text-justify px-7 py-5 mt-4 lg:text-lg">
                  Make your birthday celebration one to remember amidst the
                  beauty of nature. Our farm is the perfect venue for birthday
                  parties of all sizes and themes. Whether you're hosting a
                  child's whimsical birthday adventure or a sophisticated adult
                  soirée, we have the space and amenities to create lasting
                  memories. Let us help you plan the perfect birthday bash that
                  suits your style and vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
