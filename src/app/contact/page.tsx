"use client";

import { useState } from "react";
import Image from "next/image";
import Copy from "@/components/Copy1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <>
      {/* Hero Section */}
      <section className="font-NHD hero relative flex h-[100svh] w-full items-end p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src="/grid-images/optimized-image-2.webp"
            alt="Contact hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold gsap-fouc">
            Let's Build Something Amazing Together
          </h1>
        </Copy>
      </section>

      {/* Contact Section */}
      <section className="font-NHD secondsection overflow-visible px-4 py-10 md:px-10 md:pb-30">
        <Copy>
          <h4 className="text-orange-400">Contact us</h4>
        </Copy>
        <Copy>
          <h1 className="mt-4 w-full md:w-3/4">
            Get in <span className="text-orange-400">touch.</span>
          </h1>
          <p className="mt-22 w-full text-lg md:w-1/2 md:text-xl">
            Ready to start your next project? We'd love to hear from you. Get in
            touch with our team to discuss your construction and engineering
            needs.
          </p>
        </Copy>

        {/* Contact Form */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-orange-400 text-white font-medium rounded-md hover:bg-orange-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Ready to discuss your next construction project? Our team is
                here to help you bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">
                    123 Construction Street
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@coanwestafrica.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+234 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="px-4 py-10 md:px-10">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjcuOSJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="COAN West Africa Location"
          />
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="px-4 py-10 md:px-10 md:pb-30">
        <div className="max-w-4xl mx-auto text-center">
          <Copy>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-orange-400">COAN West Africa</span>
            </h2>
          </Copy>
          <p className="text-lg text-gray-600 leading-relaxed">
            With over 18 years of experience in construction and engineering,
            we've built a reputation for delivering exceptional results across
            West Africa. Our commitment to quality, innovation, and sustainable
            practices sets us apart in the industry. From initial consultation
            to project completion, we work closely with our clients to ensure
            their vision becomes reality. Our team of experienced professionals
            brings expertise in civil, electrical, and mechanical engineering,
            making us your trusted partner for all construction needs.
          </p>
        </div>
      </section>

      {/* Final Hero Section */}
      <section className="font-NHD relative h-[100svh] w-full overflow-hidden">
        <div className="relative flex h-full items-center justify-center">
          <Image
            src="/grid-images/optimized-image-7.webp"
            alt="Construction site"
            fill
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your construction vision to
              life
            </p>
            <button className="px-8 py-4 bg-orange-400 text-white font-medium rounded-md hover:bg-orange-500 transition-colors duration-200 text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
