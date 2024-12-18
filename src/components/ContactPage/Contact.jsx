import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
  
    // Immediately reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  
    // EmailJS Configuration
    emailjs
      .send(
        "service_8hzk62f",     // Replace with your EmailJS Service ID
        "template_iqbyxjy",    // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "jYn0Fr7aRTrBLSIm6" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          console.error("Failed to send message:", error);
        }
      );
  };
  

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-[2rem]">
      <h2 className="text-green-600 uppercase font-semibold mb-2">Contact Us</h2>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Write a Message</h1>

      <form
        onSubmit={sendMessage} // Ensure the form submits correctly
        className="w-[60vw] max-w-2xl flex flex-col gap-[2rem]"
      >
        <div className="flex flex-row gap-[3rem]">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-[0.5rem] bg-[#1C66EE1F] w-[25vw]"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-[0.5rem] w-[25vw] bg-[#1C66EE1F]"
            required
          />
        </div>
        <div className="flex flex-row gap-[3rem]">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-[0.5rem] w-[25vw] bg-[#1C66EE1F]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-[0.5rem] w-[25vw] bg-[#1C66EE1F]"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 md:col-span-2 bg-[#1C66EE1F]"
          rows="6"
          required
        ></textarea>
        <button
          type="submit" // This will trigger the form submission
          className="bg-[#F59431] hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-md transition md:col-span-2"
        >
          SEND MESSAGE
        </button>
      </form>

      {isSent && (
        <p className="mt-4 text-green-600">Your message has been sent successfully!</p>
      )}
    </div>
  );
}

export default ContactForm;