"use client";

import { FiSend } from "react-icons/fi";

export function ContactForm() {
  return (
    <form
      className="surface-card p-7"
      onSubmit={(event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const message = String(data.get("message") || "");

        const whatsappMessage = `
Name: ${name}

Email: ${email}

Message:
${message}
        `;

        const whatsappUrl = `https://wa.me/919071271369?text=${encodeURIComponent(
          whatsappMessage,
        )}`;

        window.open(whatsappUrl, "_blank");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--text-strong)]">
          Name
          <input
            required
            name="name"
            className="rounded-md border border-[var(--line)] bg-[var(--soft)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-blue-500"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--text-strong)]">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-md border border-[var(--line)] bg-[var(--soft)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-blue-500"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--text-strong)]">
        Message
        <textarea
          required
          name="message"
          rows={7}
          className="resize-none rounded-md border border-[var(--line)] bg-[var(--soft)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-blue-500"
          placeholder="Tell me about the opportunity or message..."
        />
      </label>

      <button className="btn-primary mt-6" type="submit">
        <FiSend />
        Send Message on WhatsApp
      </button>
    </form>
  );
}