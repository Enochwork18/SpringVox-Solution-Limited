"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { IconMail, IconMapPin } from "@/lib/icons";
import { COMPANY } from "@/lib/constants";
import { trackCTAClick, trackFormSubmission } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "contact" }),
      });
      const data = await res.json();
      if (res.ok) {
        trackFormSubmission("contact");
        setStatus({
          type: "success",
          message:
            "Thank you! We have received your message and will get back to you within 24 hours.",
        });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Unable to reach our servers. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? We would love to hear from you. Send us a
            message and we will respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-dark-card border border-white/5">
              <h3 className="text-sm font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconMail className="w-5 h-5 text-[#0299b1] mt-0.5" />
                  <div>
                    <p className="text-xs text-muted">Email</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm text-white hover:text-[#0299b1] transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconMapPin className="w-5 h-5 text-[#0299b1] mt-0.5" />
                  <div>
                    <p className="text-xs text-muted">Location</p>
                    <p className="text-sm text-white">{COMPANY.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-card border border-white/5">
              <h3 className="text-sm font-semibold text-white mb-2">
                Response Time
              </h3>
              <p className="text-sm text-muted">
                We typically respond within 24 hours during business days. For
                urgent inquiries, please indicate in your subject line.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/5 space-y-5"
            >
              {status && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-bg border border-white/10 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-[#0299b1] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-bg border border-white/10 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-[#0299b1] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-bg border border-white/10 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-[#0299b1] transition-colors"
                    placeholder="+234 801 234 5678"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-bg border border-white/10 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-[#0299b1] transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-dark-bg border border-white/10 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-[#0299b1] transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and budget..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={submitting}
                onClick={() => trackCTAClick("Send Message", "contact_page")}
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
