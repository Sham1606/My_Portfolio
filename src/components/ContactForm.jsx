import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsSending(false);
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen "
      id="contacts"
    >
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="text-center mb-12 pt">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-300">
            Have a question or want to work together?
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={inputVariants} whileFocus="focus">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition duration-200"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </motion.div>
            <motion.div variants={inputVariants} whileFocus="focus">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition duration-200"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </motion.div>
            <motion.div variants={inputVariants} whileFocus="focus">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition duration-200"
                rows="5"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`w-full rounded-lg bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 ${
                isSending ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSending}
            >
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane className="inline-block ml-2" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
