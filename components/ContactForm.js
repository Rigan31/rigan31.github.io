"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuSend } from "react-icons/lu";

// EmailJS (https://www.emailjs.com): these are public, client-side identifiers.
const EMAILJS = {
  service: "service_vu54c0b",
  template: "template_lrt8j9g",
  publicKey: "pf3e9S2Z3U2VoTi5-",
};

const EMPTY = { user_name: "", user_email: "", message: "" };

export default function ContactForm() {
  const form = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (status !== "sending") setStatus("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form.current, { publicKey: EMAILJS.publicKey });
      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const ready = values.user_name.trim() && values.user_email.trim() && values.message.trim();

  return (
    <form ref={form} onSubmit={onSubmit} className="card p-6 sm:p-8">
      <h2 className="font-serif text-[1.5rem] font-medium text-ink">Send a message</h2>
      <p className="mt-1 text-sm text-faint">It lands straight in my inbox; I usually reply within a few days.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="user_name">
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            autoComplete="name"
            value={values.user_name}
            onChange={onChange}
            placeholder="What should I call you?"
            className="input"
          />
        </Field>
        <Field label="Email" htmlFor="user_email">
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            autoComplete="email"
            value={values.user_email}
            onChange={onChange}
            placeholder="you@example.com"
            className="input"
          />
        </Field>
      </div>
      <Field label="Message" htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={onChange}
          placeholder="Research questions, collaboration ideas, or just hello."
          className="input resize-y"
        />
      </Field>

      <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="min-h-[1.25rem] text-sm">
          {status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-emerald-700">
              <LuCircleCheck /> Thanks! Your message has been sent.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-red-700">
              <LuCircleAlert /> Something went wrong. Please email me directly.
            </span>
          )}
        </p>
        <button
          type="submit"
          disabled={!ready || status === "sending"}
          className="btn-primary px-6 py-3 disabled:pointer-events-none disabled:opacity-40"
        >
          {status === "sending" ? <LuLoaderCircle className="animate-spin" /> : <LuSend />}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
