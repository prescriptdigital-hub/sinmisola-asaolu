"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "@/components/Icons";

// A no-backend contact form. On submit it composes a pre-filled email to the
// site address. To wire this to a real service (Formspree, Resend, an API
// route, etc.) replace the handleSubmit body with your own request.
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Message from ${form.name || "the website"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid cols-2" style={{ gap: "0 24px" }}>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update}
            placeholder="Your name"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={update}
          placeholder="How can we help?"
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={update}
          placeholder="Write your message here"
        />
      </div>
      <button type="submit" className="btn btn--solid">
        Send Message <Arrow width={16} height={16} />
      </button>
    </form>
  );
}
