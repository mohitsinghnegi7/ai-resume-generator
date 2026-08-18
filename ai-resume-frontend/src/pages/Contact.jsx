import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-base-200 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Have a question, suggestion, or need help with your
            resume? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Contact Information */}
          <div className="rounded-2xl bg-base-100 p-7 shadow-xl">

            <h2 className="mb-6 text-2xl font-semibold">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <FaEnvelope className="text-primary" />
                </div>

                <div>
                  <h3 className="font-medium">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-base-content/60">
                    support@airesume.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <FaPhone className="text-primary" />
                </div>

                <div>
                  <h3 className="font-medium">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-base-content/60">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <FaMapMarkerAlt className="text-primary" />
                </div>

                <div>
                  <h3 className="font-medium">
                    Location
                  </h3>

                  <p className="mt-1 text-sm text-base-content/60">
                    India
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-xl bg-base-200 p-5">
              <h3 className="font-semibold">
                Need help?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-base-content/60">
                If you're facing an issue with resume generation,
                ATS analysis, or any other feature, send us a
                message and we'll get back to you.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-base-100 p-7 shadow-xl md:col-span-2">

            <h2 className="mb-6 text-2xl font-semibold">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="alert alert-success mb-6">
                <span>
                  Your message has been submitted successfully!
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="textarea textarea-bordered h-40 w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn btn-primary px-7"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;