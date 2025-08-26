"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import contactInfo from "../data/contactInfo";
import contactForm from "../data/contactForm";

const Contact = () => {
  // Dynamic icon renderer
  const getIcon = (icon: string, color: string) => {
    switch (icon) {
      case "phone":
        return <Phone className={`w-10 h-10 mb-4 ${color}`} />;
      case "email":
        return <Mail className={`w-10 h-10 mb-4 ${color}`} />;
      case "location":
        return <MapPin className={`w-10 h-10 mb-4 ${color}`} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-[#212121]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-200">
            CONTACT
          </h2>
          <p className="text-gray-300 mt-2 text-3xl font-bold">GET IN TOUCH</p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mx-auto justify-center">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="bg-[#2b2b2b] p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              {getIcon(item.icon, item.color)}
              <h3 className="text-lg font-semibold text-[#D8BFD8]">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Form */}
        <form className=" mx-auto bg-[#2b2b2b] p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {contactForm.map((field) => (
              <input
                key={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full p-3 rounded-lg border border-gray-600 bg-[#212121] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-3 rounded-lg border border-gray-600 bg-[#212121] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#212121] text-white py-3 rounded-lg hover:bg-gray-500 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
