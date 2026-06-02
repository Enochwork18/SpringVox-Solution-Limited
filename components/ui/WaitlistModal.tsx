"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  organisationName: string;
  contactName: string;
  email: string;
  industry: string;
  teamSize: string;
  useCase: string;
  website: string;
}

interface FormErrors {
  organisationName?: string;
  contactName?: string;
  email?: string;
  general?: string;
}

const industries = [
  "Finance & Banking",
  "Healthcare",
  "Telecommunications",
  "Education",
  "Legal",
  "Government",
  "Manufacturing & Energy",
  "Logistics",
  "Startups & SMBs",
  "Other",
];

const teamSizes = ["1\u201310", "11\u201350", "51\u2013200", "201\u2013500", "500+"];

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>({
    organisationName: "",
    contactName: "",
    email: "",
    industry: "",
    teamSize: "",
    useCase: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const validate = useCallback((): boolean => {
    const errs: FormErrors = {};
    if (!form.organisationName.trim()) errs.organisationName = "Organisation name is required";
    if (!form.contactName.trim()) errs.contactName = "Your name is required";
    if (!form.email.trim()) errs.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setGeneralError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setGeneralError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClass = "w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted/50 focus:outline-none focus:border-[#0299b1]/50 focus:ring-1 focus:ring-[#0299b1]/20 transition-colors";
  const labelClass = "block text-sm font-medium text-muted mb-1.5";
  const errorClass = "text-xs text-red-400 mt-1";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-title"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#0a1a2e] border border-[#0299b1]/20 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <h2 id="waitlist-title" className="text-xl font-bold text-white mb-2">
                  Join the ReKallIQ Pilot Programme
                </h2>
                <p className="text-sm text-muted mb-6">
                  Be among the first organisations to experience enterprise AI knowledge management. Free access during pilot in exchange for your feedback.
                </p>

                {generalError && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                    {generalError}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div aria-hidden="true" className="absolute opacity-0 pointer-events-none" style={{ height: 0 }}>
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => update("website", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Organisation Name *</label>
                    <input
                      type="text"
                      value={form.organisationName}
                      onChange={(e) => update("organisationName", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Acme Corp"
                    />
                    {errors.organisationName && <p className={errorClass}>{errors.organisationName}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input
                      type="text"
                      value={form.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Jane Doe"
                    />
                    {errors.contactName && <p className={errorClass}>{errors.contactName}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Work Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. jane@acme.com"
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Industry</label>
                    <select
                      value={form.industry}
                      onChange={(e) => update("industry", e.target.value)}
                      className={inputClass}
                    >
                      <option value="" className="bg-[#0a1a2e]">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#0a1a2e]">{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Team Size</label>
                    <select
                      value={form.teamSize}
                      onChange={(e) => update("teamSize", e.target.value)}
                      className={inputClass}
                    >
                      <option value="" className="bg-[#0a1a2e]">Select team size</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size} className="bg-[#0a1a2e]">{size}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Primary Use Case <span className="text-muted/50">(optional)</span></label>
                    <textarea
                      value={form.useCase}
                      onChange={(e) => update("useCase", e.target.value)}
                      maxLength={300}
                      rows={3}
                      className={inputClass + " resize-none"}
                      placeholder="e.g. onboarding knowledge, policy Q&A, HR handbook access..."
                    />
                    <p className="text-xs text-muted/50 mt-1 text-right">{form.useCase.length}/300</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 text-sm font-medium text-white bg-[#0299b1] rounded-lg hover:bg-[#017a8f] transition-colors disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Join the Pilot Programme"}
                  </button>
                </form>

                <p className="mt-4 text-xs text-muted/60 flex items-start gap-1.5">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#0299b1]/20 flex items-center justify-center"><svg className="w-2.5 h-2.5 text-[#0299b1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
                  <span>Your information is never shared or used to train public AI models. We&apos;re selecting a limited number of pilot organisations.</span>
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                  You&apos;re on the list!
                </h2>
                <p className="text-sm text-muted mb-6">
                  Thank you, {form.contactName}. We&apos;ll review your application and reach out to {form.email} with next steps. In the meantime, explore ReKallIQ on our product site.
                </p>
                <a
                  href="https://springvox-knowledge-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-colors"
                >
                  Explore ReKallIQ
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
