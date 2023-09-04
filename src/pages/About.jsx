import React from 'react'
import img3 from "../assets/chan2.png";

function About() {
  return (
    <div>
      <div className="bg-gray-100 ">
        {/* Header Section */}
        <header className=" py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">
              About Our{" "}
              <span className="text-5xl text-[#ffcc7b] font-bold">Farm</span>
            </h1>
            <p className="mt-4 text-xl">
              Discover the Heart and Soul Behind Our Picturesque Farm
            </p>
          </div>
        </header>
      </div>

      <div className="my-20 min-h-screen w-3/4 mx-auto">
        <div className="container mx-auto">
          {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Chandra Farms: A Time-Honored Legacy in Lucknow
          </h1> */}

          <div className="mt-6 grid grid-cols-2 md:grid-cols-1 gap-8">
            <div className="relative rounded-xl shadow-2xl overflow-hidden">
              <img src={img3} alt="Chandra Farms" className=" h-full " />
              <p className="absolute inset-0 flex items-center  justify-center text-white text-xl font-bold bg-black bg-opacity-40">
                Our Beautiful Farm
              </p>
            </div>

            <div className=" text-gray-700 leading-relaxed text-base">
              <p className="text-xl font-semibold text-gray-700 leading-relaxed">
                Where Tradition Meets Tranquility
              </p>
              <br />
              <p>
                Nestled in the heart of Lucknow, Chandra Farms is not just a
                place; it's a testament to a legacy that spans generations. The
                Chandra name in Lucknow is synonymous with trust, quality, and a
                commitment to excellence.
              </p>
              <p className="mt-4">
                Our story begins with a deep-rooted passion for nature and a
                desire to share its beauty with the world. For decades, the
                Chandra family has been devoted to preserving the charm of this
                land, transforming it into a sanctuary of serenity and
                sophistication.
              </p>
              <div className="mt-8 text-base text-gray-700 leading-relaxed ">
                <p>
                  With meticulous attention to detail and an unwavering
                  dedication to preserving the essence of Lucknow's rich
                  culture, Chandra Farms has become a haven for those seeking to
                  escape the hustle and bustle of urban life. Our picturesque
                  setting offers the perfect backdrop for weddings,
                  celebrations, and special gatherings, where every moment
                  becomes a cherished memory.
                </p>
                <p className="mt-4">
                  As you explore our About page, you'll discover the values that
                  have guided us throughout our journey, the people who make
                  Chandra Farms what it is today, and the traditions we hold
                  dear. We invite you to become a part of our story, where the
                  Chandra legacy continues to bloom, and timeless memories are
                  created.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default About
