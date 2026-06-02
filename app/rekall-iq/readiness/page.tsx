"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { trackFormSubmission } from "@/lib/analytics";

const questions = [
  // Infrastructure
  {
    id: "infra1",
    pillar: "Infrastructure",
    text: "Do you have a centralized document or knowledge management system?",
  },
  {
    id: "infra2",
    pillar: "Infrastructure",
    text: "Are your critical documents digitized and stored in accessible formats (PDF, DOCX, etc.)?",
  },
  {
    id: "infra3",
    pillar: "Infrastructure",
    text: "Do you have a reliable internet connection across your key locations?",
  },
  {
    id: "infra4",
    pillar: "Infrastructure",
    text: "Do you have IT staff who can manage a new software deployment?",
  },
  // Data Readiness
  {
    id: "data1",
    pillar: "Data Readiness",
    text: "Do your documents follow consistent formatting and naming conventions?",
  },
  {
    id: "data2",
    pillar: "Data Readiness",
    text: "Are your documents organized by department, function, or topic?",
  },
  {
    id: "data3",
    pillar: "Data Readiness",
    text: "Do you have a process for keeping documents up to date?",
  },
  {
    id: "data4",
    pillar: "Data Readiness",
    text: "Do you manage sensitive data that requires restricted access?",
  },
  // Compliance
  {
    id: "comp1",
    pillar: "Compliance",
    text: "Is your organisation subject to NDPR or other data protection regulations?",
  },
  {
    id: "comp2",
    pillar: "Compliance",
    text: "Does your compliance team currently restrict the use of public AI tools like ChatGPT?",
  },
  {
    id: "comp3",
    pillar: "Compliance",
    text: "Do you have data retention or archiving policies?",
  },
  {
    id: "comp4",
    pillar: "Compliance",
    text: "Is maintaining an audit trail of information access important to your operations?",
  },
  // Use Case
  {
    id: "use1",
    pillar: "Use Case",
    text: "Do staff members frequently search for information across multiple systems?",
  },
  {
    id: "use2",
    pillar: "Use Case",
    text: "Do employees spend more than 2 hours per week looking for information?",
  },
  {
    id: "use3",
    pillar: "Use Case",
    text: "Do field or remote staff need access to knowledge without a computer?",
  },
  {
    id: "use4",
    pillar: "Use Case",
    text: "Is onboarding new employees slowed by the time it takes to learn your systems?",
  },
  // Scale
  {
    id: "scale1",
    pillar: "Scale",
    text: "Do you have between 20 and 5,000 employees who would use the system?",
  },
  {
    id: "scale2",
    pillar: "Scale",
    text: "Is your organisation growing and expecting to add more staff?",
  },
  {
    id: "scale3",
    pillar: "Scale",
    text: "Do you have multiple departments that could benefit from shared knowledge?",
  },
  {
    id: "scale4",
    pillar: "Scale",
    text: "Would you need the system to support multiple languages?",
  },
  // Budget
  {
    id: "budget1",
    pillar: "Budget",
    text: "Do you have a budget allocated for AI or knowledge management tools this year?",
  },
  {
    id: "budget2",
    pillar: "Budget",
    text: "Would a pilot program with free access help you evaluate before committing budget?",
  },
  {
    id: "budget3",
    pillar: "Budget",
    text: "Is cost a primary factor in your decision-making for AI tools?",
  },
  {
    id: "budget4",
    pillar: "Budget",
    text: "Would you prefer a per-organisation pricing model over per-seat licensing?",
  },
  // Timeline
  {
    id: "time1",
    pillar: "Timeline",
    text: "Do you need a solution deployed within the next 30 days?",
  },
  {
    id: "time2",
    pillar: "Timeline",
    text: "Is there a specific project or initiative driving this need?",
  },
  {
    id: "time3",
    pillar: "Timeline",
    text: "Do you have executive sponsorship for an AI knowledge initiative?",
  },
  {
    id: "time4",
    pillar: "Timeline",
    text: "Would you be willing to participate in a limited pilot program in exchange for early access?",
  },
];

const pillars = [
  "Infrastructure",
  "Data Readiness",
  "Compliance",
  "Use Case",
  "Scale",
  "Budget",
  "Timeline",
];

function getScoreInterpretation(score: number, total: number) {
  const pct = (score / total) * 100;
  if (pct >= 80)
    return {
      level: "Highly Ready",
      color: "text-green-400",
      message:
        "Your organisation is well-positioned to deploy Rekall-IQ. You have the infrastructure, data practices, and need in place. Contact us to start your pilot this week.",
    };
  if (pct >= 60)
    return {
      level: "Moderately Ready",
      color: "text-yellow-400",
      message:
        "You have solid foundations but a few areas need attention. Our team can help you address gaps and be pilot-ready quickly.",
    };
  if (pct >= 40)
    return {
      level: "Developing",
      color: "text-orange-400",
      message:
        "Some foundational elements are in place. We recommend starting with a consultation to build your AI readiness roadmap.",
    };
  return {
    level: "Early Stage",
    color: "text-red-400",
    message:
      "Your organisation is in the early stages of AI readiness. Let us help you build a foundation with a free consultation.",
  };
}

export default function ReadinessPage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const score = Object.values(answers).filter(Boolean).length;
  const allAnswered = answeredCount === totalQuestions;

  const toggle = useCallback((id: string) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message: `AI Readiness Checklist submission - Score: ${score}/${totalQuestions}`,
          subject: "AI Readiness Checklist Results",
          type: "readiness",
        }),
      });
    } catch {}
    trackFormSubmission("readiness_checklist");
    setSubmitted(true);
  };

  const interpretation = allAnswered
    ? getScoreInterpretation(score, totalQuestions)
    : null;

  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20">
            Assessment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Readiness <span className="gradient-text">Checklist</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Assess your organisation&apos;s preparedness for enterprise AI
            deployment. 28 questions across 7 key pillars. Takes about 5
            minutes.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 p-4 sm:p-6 rounded-xl bg-dark-card border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted">
              Progress: {answeredCount}/{totalQuestions} answered
            </span>
            {allAnswered && (
              <span
                className={`text-sm font-semibold ${interpretation?.color}`}
              >
                Score: {score}/{totalQuestions}
              </span>
            )}
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0299b1] rounded-full transition-all duration-500"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Pillar filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {pillars.map((p) => {
            const pillarQ = questions.filter((q) => q.pillar === p);
            const pillarAnswered = pillarQ.filter(
              (q) => answers[q.id] !== undefined,
            ).length;
            const pillarDone = pillarAnswered === pillarQ.length;
            return (
              <button
                key={p}
                onClick={() =>
                  document
                    .getElementById(`pillar-${p}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  pillarDone
                    ? "bg-[#0299b1]/10 border-[#0299b1]/30 text-[#0299b1]"
                    : "bg-dark-card border-white/10 text-muted hover:border-white/20"
                }`}
              >
                {p} {pillarAnswered}/{pillarQ.length}
              </button>
            );
          })}
        </div>

        {/* Questions by pillar */}
        <div className="space-y-8 mb-10">
          {pillars.map((pillar) => {
            const pillarQs = questions.filter((q) => q.pillar === pillar);
            return (
              <div key={pillar} id={`pillar-${pillar}`}>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {pillar}
                </h3>
                <div className="space-y-2">
                  {pillarQs.map((q, qi) => (
                    <motion.button
                      key={q.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: qi * 0.03 }}
                      onClick={() => toggle(q.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                        answers[q.id] === true
                          ? "bg-green-500/10 border-green-500/30"
                          : answers[q.id] === false
                            ? "bg-red-500/5 border-red-500/20"
                            : "bg-dark-card border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center transition-colors ${
                            answers[q.id] === true
                              ? "bg-green-500 border-green-500"
                              : answers[q.id] === false
                                ? "bg-red-500/30 border-red-500"
                                : "border-white/30"
                          }`}
                        >
                          {answers[q.id] !== undefined && (
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-white">{q.text}</span>
                      </div>
                      <div className="flex gap-2 mt-2 ml-8">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setAnswers((prev) => ({ ...prev, [q.id]: true }));
                          }}
                          className={`text-xs px-2 py-0.5 rounded-full cursor-pointer transition-colors ${answers[q.id] === true ? "bg-green-500/20 text-green-400" : "bg-white/5 text-muted hover:bg-green-500/10"}`}
                        >
                          Yes
                        </span>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setAnswers((prev) => ({ ...prev, [q.id]: false }));
                          }}
                          className={`text-xs px-2 py-0.5 rounded-full cursor-pointer transition-colors ${answers[q.id] === false ? "bg-red-500/20 text-red-400" : "bg-white/5 text-muted hover:bg-red-500/10"}`}
                        >
                          No
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Results */}
        {allAnswered && interpretation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/5 mb-8"
          >
            <div className="text-center mb-6">
              <span className={`text-lg font-bold ${interpretation.color}`}>
                {interpretation.level}
              </span>
              <div className="text-5xl font-bold text-white mt-2">
                {score}
                <span className="text-2xl text-muted">/{totalQuestions}</span>
              </div>
              <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
                {interpretation.message}
              </p>
            </div>

            {!submitted && !showForm && (
              <div className="text-center">
                <Button variant="primary" onClick={() => setShowForm(true)}>
                  Get Personalized Recommendations
                </Button>
              </div>
            )}

            {showForm && !submitted && (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
                <label className="block text-sm font-medium text-white mb-2">
                  Enter your email to receive your results and recommendations:
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-dark-bg border border-white/10 text-white text-sm focus:outline-none focus:border-[#0299b1]"
                    placeholder="your@email.com"
                  />
                  <Button type="submit" variant="primary">
                    Send
                  </Button>
                </div>
              </form>
            )}

            {submitted && (
              <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <p className="text-green-400 text-sm font-medium">
                  Thank you! Check your email for personalized recommendations.
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                href="mailto:contact@springvox.com?subject=RekallIQ%20Pilot%20Program"
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </motion.div>
        )}

        {!allAnswered && (
          <div className="text-center p-6 rounded-xl bg-dark-card border border-white/5">
            <p className="text-muted text-sm">
              Answer all 28 questions to see your AI readiness score and get
              personalized recommendations.
            </p>
          </div>
        )}

        {/* Download */}
        <div className="mt-10 text-center p-6 rounded-xl bg-gradient-to-r from-[#0299b1]/10 to-secondary/10 border border-[#0299b1]/20">
          <p className="text-sm text-muted mb-3">
            Want a PDF version of this checklist?
          </p>
          <Button
            variant="outline"
            href="mailto:contact@springvox.com?subject=AI%20Readiness%20Checklist%20PDF"
          >
            Email Me the PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
