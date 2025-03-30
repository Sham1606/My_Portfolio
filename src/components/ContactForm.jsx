import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaPaperPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is Required";
    if (!formData.email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is Invalid";
    }
    if (!formData.subject) errors.subject = "Subject is Required";
    if (!formData.message) errors.message = "Message is Required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);
      try {
        await emailjs.send(
          "service_0jpmwkm",
          "template_0zo0uhs",
          formData,
          "LqfI2_LBFvvXSMyP7"
        );
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-12"
      id="contact"
    >
      <Toaster position="top-right" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 sm:p-8 lg:p-12 flex flex-col justify-between text-white lg:w-2/5">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Contact Information</h2>
              <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
                Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-xl sm:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">shamganesh806@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="text-xl sm:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base">+91 9003927447</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-xl sm:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base">Puducherry, India</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-8 sm:mt-12">
              <a 
                href="https://github.com/Sham1606" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition-colors duration-300"
              >
                <FaGithub className="text-2xl sm:text-3xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sham-ganesh-s-922061302/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-6 sm:p-8 lg:p-12 lg:w-3/5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition duration-300 text-sm sm:text-base"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition duration-300 text-sm sm:text-base"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition duration-300 text-sm sm:text-base"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition duration-300 text-sm sm:text-base"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSending}
                className={`
                  w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                  py-2 sm:py-3 rounded-lg font-medium sm:font-semibold text-sm sm:text-base
                  hover:from-indigo-700 hover:to-purple-700 
                  transition duration-300
                  ${isSending ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isSending ? 'Sending...' : (
                  <span className="flex items-center justify-center">
                    Send Message <FaPaperPlane className="ml-2 sm:ml-3" />
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;