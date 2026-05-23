"use client";

import { useState } from "react";
import { Arrow } from "@/components/Icons";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(EMPTY);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <span className="form-success__icon">&#10003;</span>
        <h3>Message Sent</h3>
        <p>
          Thank you for reaching out. We will get back to you as soon as
          possible.
        </p>
        <button
          className="btn"
          style={{ marginTop: "24px" }}
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            disabled={status === "sending"}
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
            disabled={status === "sending"}
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
          disabled={status === "sending"}
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
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && (
        <p className="form-error">{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn btn--solid"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Arrow width={16} height={16} />
          </>
        )}
      </button>
    </form>
  );
}
