"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { treatments } from "@/data/treatments";

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  patientType: string;
  message: string;
  consent: boolean;
  website: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  treatment: "",
  patientType: "new",
  message: "",
  consent: false,
  website: "",
};

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setErrorMsg("Please provide consent to proceed.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-navy mb-2">Enquiry Submitted</h3>
        <p className="text-slate-600">
          Thank you for your appointment enquiry. Our team will contact you shortly to
          confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-accent font-semibold hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="appointment-form"
      onSubmit={handleSubmit}
      className="card p-6 md:p-8"
    >
      <h3 className="text-xl font-bold text-navy mb-6">
        {compact ? "Quick Enquiry" : "Book an Appointment"}
      </h3>

      {/* Honeypot spam protection */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="patientType" className="block text-sm font-medium text-slate-700 mb-1">
            Patient Type
          </label>
          <select
            id="patientType"
            name="patientType"
            value={form.patientType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent bg-white"
          >
            <option value="new">New Patient</option>
            <option value="existing">Existing Patient</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-1">
            Preferred Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-1">
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent bg-white"
          >
            <option value="">Select time</option>
            <option value="morning">Morning (10 AM – 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
            <option value="evening">Evening (3 PM – 6 PM)</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="treatment" className="block text-sm font-medium text-slate-700 mb-1">
            Treatment or Concern
          </label>
          <select
            id="treatment"
            name="treatment"
            value={form.treatment}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent bg-white"
          >
            <option value="">Select treatment or concern</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
            <option value="general">General Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:border-accent resize-none"
            placeholder="Describe your concern or questions..."
          />
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <label htmlFor="consent" className="text-sm text-slate-600">
          I consent to the collection and use of my personal information for appointment
          scheduling purposes, in accordance with the{" "}
          <a href="/privacy" className="text-accent underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      {status === "error" && (
        <p className="mt-3 text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-6 w-full md:w-auto"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
